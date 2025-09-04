import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        tls: false,
        net: false, // Disables the polyfill for 'net' module
        dgram: false, // Disables the polyfill for 'dgram' module
        dns: false, // Disables the polyfill for 'dgram' module
      };
    }
    return config;
  },
  turbopack: {
    resolveAlias: {
      "@drift/common": "../drift-common/common-ts/lib/index.js",
      "@drift-labs/sdk": "../drift-common/protocol/sdk",
      fs: { browser: "./node-browser-compatibility.js" },
      net: { browser: "./node-browser-compatibility.js" },
      dns: { browser: "./node-browser-compatibility.js" },
      tls: { browser: "./node-browser-compatibility.js" },
      crypto: { browser: "crypto-browserify" },
    },
    root: path.resolve(__dirname, ".."),
  },
};

export default nextConfig;
