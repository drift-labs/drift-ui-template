"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  createChart,
  ColorType,
  Time,
  IChartApi,
  CandlestickData,
  CandlestickSeries,
  HistogramSeries,
  HistogramData,
} from "lightweight-charts";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { FormSelect } from "../../ui/form-select";
import { Button } from "../../ui/button";
import { BarChart3, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { CandleClient } from "@drift/common";
import { MarketId, JsonCandle } from "@drift/common";
import { UIEnv } from "@drift/common";
import { CandleResolution } from "@drift-labs/sdk";

interface CandleChartProps {
  selectedMarketId: MarketId;
  className?: string;
}

interface TradingViewCandle extends CandlestickData {
  time: Time;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface VolumeData extends HistogramData {
  time: Time;
  value: number;
  color?: string;
}

// Available timeframes for the chart
const TIMEFRAME_OPTIONS = [
  { value: "1", label: "1m", resolution: "1" as CandleResolution },
  { value: "5", label: "5m", resolution: "5" as CandleResolution },
  { value: "15", label: "15m", resolution: "15" as CandleResolution },
  { value: "60", label: "1h", resolution: "60" as CandleResolution },
  { value: "240", label: "4h", resolution: "240" as CandleResolution },
  { value: "1440", label: "1d", resolution: "1440" as CandleResolution },
];

const DEFAULT_RESOLUTION: CandleResolution = "15";
const DEFAULT_CANDLE_COUNT = 500;

export const CandleChart: React.FC<CandleChartProps> = ({
  selectedMarketId,
  className = "",
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  // Using the actual return type from chart.addSeries
  const candleSeriesRef = useRef<ReturnType<IChartApi["addSeries"]> | null>(
    null,
  );
  const volumeSeriesRef = useRef<ReturnType<IChartApi["addSeries"]> | null>(
    null,
  );
  const candleClientRef = useRef<CandleClient | null>(null);
  const subscriptionKeyRef = useRef<string | null>(null);

  const [resolution, setResolution] =
    useState<CandleResolution>(DEFAULT_RESOLUTION);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [candleData, setCandleData] = useState<JsonCandle[]>([]);
  const [hoveredCandle, setHoveredCandle] = useState<TradingViewCandle | null>(
    null,
  );
  const [hoveredVolume, setHoveredVolume] = useState<VolumeData | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Create UIEnv - using mainnet as configured in useSetupDrift
  const env = useMemo(() => UIEnv.createMainnet(), []);

  // Helper function to format numbers for display
  const formatPrice = useCallback((price: number) => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  }, []);

  const formatVolume = useCallback((volume: number) => {
    if (volume >= 1000000) {
      return (volume / 1000000).toFixed(2) + "M";
    } else if (volume >= 1000) {
      return (volume / 1000).toFixed(2) + "K";
    }
    return volume.toFixed(2);
  }, []);

  const formatTime = useCallback((timestamp: Time) => {
    const date = new Date((timestamp as number) * 1000);
    return date.toLocaleString();
  }, []);

  // Initialize CandleClient
  const candleClient = useMemo(() => {
    if (!candleClientRef.current) {
      candleClientRef.current = new CandleClient();
    }
    return candleClientRef.current;
  }, []);

  // Transform JsonCandle to TradingView OHLC format
  const transformCandleData = useCallback(
    (candles: JsonCandle[]): TradingViewCandle[] => {
      return candles.map((candle) => ({
        time: candle.ts as Time,
        open: candle.fillOpen,
        high: candle.fillHigh,
        low: candle.fillLow,
        close: candle.fillClose,
      }));
    },
    [],
  );

  // Transform volume data
  const transformVolumeData = useCallback(
    (candles: JsonCandle[]): VolumeData[] => {
      return candles.map((candle) => ({
        time: candle.ts as Time,
        value: candle.baseVolume,
        color:
          candle.fillClose >= candle.fillOpen
            ? "rgba(34, 197, 94, 0.3)"
            : "rgba(239, 68, 68, 0.3)",
      }));
    },
    [],
  );

  // Initialize chart
  const initializeChart = useCallback(() => {
    if (!chartContainerRef.current) return;

    // Chart configuration
    const chartOptions = {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#d1d5db",
      },
      grid: {
        vertLines: { color: "rgba(107, 114, 128, 0.2)" },
        horzLines: { color: "rgba(107, 114, 128, 0.2)" },
      },
      rightPriceScale: {
        borderColor: "rgba(107, 114, 128, 0.3)",
      },
      timeScale: {
        borderColor: "rgba(107, 114, 128, 0.3)",
        timeVisible: true,
        secondsVisible: false,
      },
    };

    // Create chart
    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart;

    // Add candlestick series
    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderVisible: false,
      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    });
    candleSeriesRef.current = candleSeries;

    // Add volume histogram series
    const volumeSeries = chart.addSeries(HistogramSeries, {
      color: "#26a69a",
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
    });
    volumeSeriesRef.current = volumeSeries;

    // Subscribe to crosshair move for tooltip
    chart.subscribeCrosshairMove((param) => {
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.y < 0
      ) {
        setHoveredCandle(null);
        setHoveredVolume(null);
        return;
      }

      // Get data at the crosshair time
      const candleData = param.seriesData.get(candleSeries) as
        | TradingViewCandle
        | undefined;
      const volumeData = param.seriesData.get(volumeSeries) as
        | VolumeData
        | undefined;

      setHoveredCandle(candleData || null);
      setHoveredVolume(volumeData || null);
    });

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        const { width, height } =
          chartContainerRef.current.getBoundingClientRect();
        chart.applyOptions({ width, height });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
        candleSeriesRef.current = null;
        volumeSeriesRef.current = null;
      }
    };
  }, []);

  // Fetch historical candles (initial load)
  const fetchCandles = useCallback(async () => {
    if (!candleClient) return;

    setIsLoading(true);
    setError(null);

    try {
      const nowSeconds = Math.floor(Date.now() / 1000);
      const fromTs =
        nowSeconds - DEFAULT_CANDLE_COUNT * parseInt(resolution) * 60;
      const toTs = nowSeconds;

      const fetchConfig = {
        env,
        marketId: selectedMarketId,
        resolution,
        fromTs,
        toTs,
      };

      const candles = await candleClient.fetch(fetchConfig);
      setCandleData(candles);

      // Update chart with new data
      if (
        candleSeriesRef.current &&
        volumeSeriesRef.current &&
        candles.length > 0
      ) {
        const transformedCandles = transformCandleData(candles);
        const transformedVolume = transformVolumeData(candles);

        candleSeriesRef.current.setData(transformedCandles);
        volumeSeriesRef.current.setData(transformedVolume);
      }
    } catch (err) {
      console.error("Failed to fetch candles:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch candle data",
      );
    } finally {
      setIsLoading(false);
    }
  }, [
    candleClient,
    env,
    selectedMarketId,
    resolution,
    transformCandleData,
    transformVolumeData,
  ]);

  // Fetch more historical candles when scrolling left
  const fetchMoreHistoricalCandles = useCallback(
    async (earliestTimestamp: number) => {
      if (!candleClient || isLoadingMore) return;

      setIsLoadingMore(true);

      try {
        const toTs = earliestTimestamp;
        const fromTs = toTs - DEFAULT_CANDLE_COUNT * parseInt(resolution) * 60;

        const fetchConfig = {
          env,
          marketId: selectedMarketId,
          resolution,
          fromTs,
          toTs,
        };

        const newCandles = await candleClient.fetch(fetchConfig);

        if (newCandles.length > 0) {
          setCandleData((prevCandles) => {
            // Merge new candles with existing ones, avoiding duplicates
            const existingTimestamps = new Set(prevCandles.map((c) => c.ts));
            const uniqueNewCandles = newCandles.filter(
              (c) => !existingTimestamps.has(c.ts),
            );

            // Sort all candles by timestamp
            const mergedCandles = [...uniqueNewCandles, ...prevCandles].sort(
              (a, b) => a.ts - b.ts,
            );

            return mergedCandles;
          });

          // Update chart with merged data
          if (candleSeriesRef.current && volumeSeriesRef.current) {
            setCandleData((currentCandles) => {
              const transformedCandles = transformCandleData(currentCandles);
              const transformedVolume = transformVolumeData(currentCandles);

              if (candleSeriesRef.current && volumeSeriesRef.current) {
                candleSeriesRef.current.setData(transformedCandles);
                volumeSeriesRef.current.setData(transformedVolume);
              }

              return currentCandles;
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch more historical candles:", err);
      } finally {
        setIsLoadingMore(false);
      }
    },
    [
      candleClient,
      env,
      selectedMarketId,
      resolution,
      transformCandleData,
      transformVolumeData,
      isLoadingMore,
    ],
  );

  // Subscribe to real-time updates
  const subscribeToUpdates = useCallback(() => {
    if (!candleClient) return;

    // Unsubscribe from previous subscription
    if (subscriptionKeyRef.current) {
      candleClient.unsubscribe(subscriptionKeyRef.current);
    }

    const subscriptionKey = `${selectedMarketId.key}-${resolution}`;
    subscriptionKeyRef.current = subscriptionKey;

    const subscriptionConfig = {
      env,
      marketId: selectedMarketId,
      resolution,
    };

    candleClient
      .subscribe(subscriptionConfig, subscriptionKey)
      .then(() => {
        candleClient.on(
          subscriptionKey,
          "candle-update",
          (newCandle: JsonCandle) => {
            setCandleData((prevCandles) => {
              const updatedCandles = [...prevCandles];
              const existingIndex = updatedCandles.findIndex(
                (c) => c.ts === newCandle.ts,
              );

              if (existingIndex >= 0) {
                // Update existing candle
                updatedCandles[existingIndex] = newCandle;
              } else {
                // Add new candle
                updatedCandles.push(newCandle);
                updatedCandles.sort((a, b) => a.ts - b.ts);
              }

              // Update chart with live data - use update for real-time updates
              if (candleSeriesRef.current && volumeSeriesRef.current) {
                const transformedCandle = transformCandleData([newCandle])[0];
                const transformedVolume = transformVolumeData([newCandle])[0];

                candleSeriesRef.current.update(transformedCandle);
                volumeSeriesRef.current.update(transformedVolume);
              }

              return updatedCandles;
            });
          },
        );
      })
      .catch((err) => {
        console.error("Failed to subscribe to candle updates:", err);
      });
  }, [
    candleClient,
    env,
    selectedMarketId,
    resolution,
    transformCandleData,
    transformVolumeData,
  ]);

  // Handle resolution change
  const handleResolutionChange = useCallback((newResolution: string) => {
    const resolutionOption = TIMEFRAME_OPTIONS.find(
      (opt) => opt.value === newResolution,
    );
    if (resolutionOption) {
      setResolution(resolutionOption.resolution);
    }
  }, []);

  // Refresh data
  const handleRefresh = useCallback(() => {
    fetchCandles();
  }, [fetchCandles]);

  // Initialize chart on mount
  useEffect(() => {
    const cleanup = initializeChart();
    return cleanup;
  }, [initializeChart]);

  // Fetch data when market or resolution changes
  useEffect(() => {
    fetchCandles();
  }, [fetchCandles]);

  // Subscribe to real-time updates
  useEffect(() => {
    subscribeToUpdates();
    return () => {
      if (subscriptionKeyRef.current && candleClient) {
        candleClient.unsubscribe(subscriptionKeyRef.current);
      }
    };
  }, [subscribeToUpdates, candleClient]);

  // Subscribe to visible time range changes for scroll-based loading
  useEffect(() => {
    if (!chartRef.current || candleData.length === 0) return;

    const chart = chartRef.current;

    const handleVisibleTimeRangeChange = () => {
      const visibleLogicalRange = chart.timeScale().getVisibleLogicalRange();

      // Check if user scrolled to the very left (near the beginning of data)
      if (visibleLogicalRange && visibleLogicalRange.from <= 5) {
        // Get the earliest timestamp from current data
        const earliestTimestamp = Math.min(...candleData.map((c) => c.ts));
        fetchMoreHistoricalCandles(earliestTimestamp);
      }
    };

    // Subscribe to visible time range changes
    chart
      .timeScale()
      .subscribeVisibleTimeRangeChange(handleVisibleTimeRangeChange);

    return () => {
      // Clean up subscription
      if (chartRef.current) {
        try {
          chartRef.current
            .timeScale()
            .unsubscribeVisibleTimeRangeChange(handleVisibleTimeRangeChange);
        } catch (error) {
          // Handle case where chart is already destroyed
          console.warn(
            "Failed to unsubscribe from visible time range changes:",
            error,
          );
        }
      }
    };
  }, [candleData, fetchMoreHistoricalCandles]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (candleClientRef.current) {
        candleClientRef.current.unsubscribeAll();
      }
    };
  }, [candleClient]);

  return (
    <Card className={`h-full ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BarChart3 className="h-5 w-5 text-purple-400" />
            Price Chart
          </CardTitle>
          <div className="flex items-center gap-3">
            {/* Resolution Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Timeframe:</span>
              <FormSelect
                value={resolution}
                onValueChange={handleResolutionChange}
                options={TIMEFRAME_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                className="w-20"
              />
            </div>
            {/* Refresh Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
              className="h-8 w-8 p-0"
            >
              <RefreshCw
                className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
              />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-96">
          {/* OHLC Tooltip */}
          {hoveredCandle && (
            <div className="absolute top-4 left-4 z-20 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-sm">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <div className="text-gray-400">Time:</div>
                <div className="text-gray-200 font-mono">
                  {formatTime(hoveredCandle.time)}
                </div>

                <div className="text-gray-400">Open:</div>
                <div className="text-gray-200 font-mono">
                  ${formatPrice(hoveredCandle.open)}
                </div>

                <div className="text-gray-400">High:</div>
                <div className="text-green-400 font-mono">
                  ${formatPrice(hoveredCandle.high)}
                </div>

                <div className="text-gray-400">Low:</div>
                <div className="text-red-400 font-mono">
                  ${formatPrice(hoveredCandle.low)}
                </div>

                <div className="text-gray-400">Close:</div>
                <div
                  className={`font-mono ${
                    hoveredCandle.close >= hoveredCandle.open
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  ${formatPrice(hoveredCandle.close)}
                </div>

                {hoveredVolume && (
                  <>
                    <div className="text-gray-400">Volume:</div>
                    <div className="text-blue-400 font-mono">
                      {formatVolume(hoveredVolume.value)}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading chart data...
              </div>
            </div>
          )}

          {/* Loading More Data State */}
          {isLoadingMore && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 z-20">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading more data...
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            </div>
          )}

          {/* Chart Container */}
          <div
            ref={chartContainerRef}
            className="w-full h-full"
            style={{ minHeight: "384px" }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
