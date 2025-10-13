import React, { useState } from 'react';
import { Info, Settings } from 'lucide-react';
import { Card, CardContent, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui';

interface BuilderFeeInfoProps {
  feeInfo: {
    feeAmount: string;
    feeBps: string;
    feePercentage: string;
    formattedFee: string;
  } | null;
  canUseBuilderCodes: boolean;
  isOnboardingComplete: boolean;
  useSwift: boolean;
  orderType: string;
}

export function BuilderFeeInfo({
  feeInfo,
  canUseBuilderCodes,
  isOnboardingComplete,
  useSwift,
  orderType,
}: BuilderFeeInfoProps) {
  const [showDetails, setShowDetails] = useState(false);

  const shouldShowBuilderInfo = useSwift && (orderType === "market" || orderType === "limit");

  if (!shouldShowBuilderInfo) {
    return null;
  }

  return (
    <div className="space-y-2">
      {/* Builder Fee Display */}
      {feeInfo && canUseBuilderCodes && (
        <Card className="border-yellow-500/20 bg-yellow-900/5">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-yellow-400">Builder Fee:</span>
                <span className="text-sm font-medium text-white">
                  {feeInfo.formattedFee}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Info className="h-3 w-3" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Builder fees help optimize your order routing and execution</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span className="text-xs text-gray-400">
                {feeInfo.feePercentage}%
              </span>
            </div>
            
            {showDetails && (
              <div className="mt-2 pt-2 border-t border-yellow-500/20">
                <div className="text-xs text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Fee Rate:</span>
                    <span>{feeInfo.feeBps} bps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fee Amount:</span>
                    <span>${feeInfo.feeAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Percentage:</span>
                    <span>{feeInfo.feePercentage}%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  This fee enables premium order routing through our builder network,
                  potentially improving fill rates and reducing slippage.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Onboarding Notice */}
      {!isOnboardingComplete && (
        <Card className="border-orange-500/20 bg-orange-900/5">
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-orange-400" />
              <div className="flex-1">
                <p className="text-sm text-orange-400 font-medium">
                  Setup Required for Optimized Routing
                </p>
                <p className="text-xs text-gray-400">
                  Complete builder onboarding to enable premium order routing features
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Swift Info */}
      {useSwift && isOnboardingComplete && (
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>Swift routing enabled with builder optimization</span>
        </div>
      )}
    </div>
  );
}

/**
 * Compact inline builder fee display for order previews
 */
interface InlineBuilderFeeProps {
  feeInfo: {
    formattedFee: string;
  } | null;
  canUseBuilderCodes: boolean;
}

export function InlineBuilderFee({ feeInfo, canUseBuilderCodes }: InlineBuilderFeeProps) {
  if (!feeInfo || !canUseBuilderCodes) {
    return null;
  }

  return (
    <div className="mt-2 pt-2 border-t border-gray-600">
      <p className="text-yellow-400 text-sm">
        • Builder Fee: {feeInfo.formattedFee}
      </p>
      <p className="text-gray-500 text-xs">
        Fee helps optimize your order routing
      </p>
    </div>
  );
}