# Drift UI Template

A modern, responsive UI template for integrating with the Drift protocol. This template provides a foundation for building trading applications with spot and perpetual markets using the AuthorityDrift wrapper for simplified integrations.

## 🚀 Features

- **Drift Integration**: Pre-configured AuthorityDrift setup with real-time price feeds
- **Multi-Asset Support**: Perpetual trading functionality
- **Wallet Integration**: Solana wallet adapter with multiple wallet support
- **Real-time Data**: Live oracle prices, mark prices, and user account data
- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript

## 🏗️ Architecture

### Core Components

- **User Management** (`/user`): Account creation, deposits, and user management
- **Spot Trading** (`/spot`): Deposit and withdraw supported tokens
- **Perpetuals** (`/perps`): Trade perpetual futures with leverage
- **Market Data** (`/data`): Real-time market information

### Key Integrations

- **AuthorityDrift**: Simplified wrapper around the Drift SDK for easy integration
- **Real-time Stores**: Zustand-based state management for prices and user data
- **Wallet Adapter**: Seamless integration with Solana wallets

## 📦 Prerequisites

- Node.js 18+ or Bun
- Solana wallet (Phantom, Solflare, etc.)
- Basic knowledge of React and Solana development

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd drift-ui-template
```

### 2. Initialize and update submodules

```bash
git submodule init
git submodule update
```

### 3. Install dependencies

Navigate to the UI directory and install dependencies:

```bash
cd ui
npm install
# or
bun install
```

### 4. Set up drift-common (if needed)

```bash
cd ../drift-common
yarn
cd protocol
yarn
yarn build
cd sdk
yarn
yarn build
npm link
cd ../..
npm link @drift-labs/sdk
```

### 5. Configure environment variables

Create a `.env.local` file in the `ui` directory:

```env
NEXT_PUBLIC_SOLANA_MAINNET_RPC_ENDPOINT=your_mainnet_rpc_url
NEXT_PUBLIC_SOLANA_DEVNET_RPC_ENDPOINT=your_devnet_rpc_url
```

### 6. Start the development server

```bash
cd ui
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:3000`.

## 🔧 Configuration

### Network Configuration

The template is configured for mainnet by default. To switch to devnet, modify the configuration in `src/hooks/globalSyncs/useSetupDrift.ts`:

```typescript
// Change this line
const driftConfig = MAINNET_DRIFT_CONFIG;
// To
const driftConfig = _DEVNET_DRIFT_CONFIG;
```

### Market Configuration

You can specify which markets to trade by uncommenting and configuring the `tradableMarkets` array in the drift config:

```typescript
tradableMarkets: [
  new MarketId(0, MarketType.SPOT), // USDC
  new MarketId(1, MarketType.SPOT), // SOL
  new MarketId(0, MarketType.PERP), // SOL-PERP
  new MarketId(1, MarketType.PERP), // BTC-PERP
],
```

Find available markets:

- [Perpetual Markets](https://github.com/drift-labs/protocol-v2/blob/master/sdk/src/constants/perpMarkets.ts)
- [Spot Markets](https://github.com/drift-labs/protocol-v2/blob/master/sdk/src/constants/spotMarkets.ts)

## 🏃‍♂️ Usage

### Basic Integration

The template uses AuthorityDrift for simplified integration with the Drift protocol:

```typescript
const authorityDrift = new AuthorityDrift({
  solanaRpcEndpoint: rpcEndpoint,
  driftEnv: "mainnet-beta",
  wallet: walletAdapter,
});

await authorityDrift.subscribe();
```

### Real-time Data

The template includes pre-configured stores for real-time data:

- **Oracle Prices**: Live price feeds from Pyth and Switchboard
- **Mark Prices**: Drift's calculated mark prices
- **User Account Data**: Real-time user positions and balances

### State Management

The template uses Zustand for state management with the following stores:

- `DriftStore`: Main Drift client and configuration
- `OraclePriceStore`: Real-time oracle price data
- `MarkPriceStore`: Mark price data for perpetuals
- `UserAccountDataStore`: User account information and positions

## 🎨 Customization

### Styling

The template uses Tailwind CSS for styling. You can customize the theme by editing:

- `ui/src/app/globals.css`: Global styles and CSS variables
- `ui/tailwind.config.js`: Tailwind configuration

### Components

UI components are located in `ui/src/components/ui/` and built with Radix UI primitives:

- Cards, buttons, forms, tooltips
- Dropdown menus and selects
- Customizable and accessible

### Adding New Features

1. Create new pages in `ui/src/app/`
2. Add corresponding components in `ui/src/components/`
3. Use the existing stores for state management
4. Follow the established patterns for AuthorityDrift integration

## 🧪 Development

### Available Scripts

```bash
npm run dev       # Start development server with Turbopack
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Project Structure

```
ui/
├── src/
│   ├── app/          # Next.js pages and layouts
│   ├── components/   # Reusable UI components
│   ├── stores/       # Zustand state management
│   ├── hooks/        # Custom React hooks
│   ├── providers/    # React context providers
│   ├── utils/        # Utility functions
│   └── constants/    # Application constants
├── public/           # Static assets
└── package.json      # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [Drift Protocol Documentation](https://docs.drift.trade/)
- [Drift SDK GitHub](https://github.com/drift-labs/protocol-v2)
- [Solana Documentation](https://docs.solana.com/)
- [Next.js Documentation](https://nextjs.org/docs)

## ⚡ Performance

The template is optimized for performance with:

- Next.js 15 with Turbopack for fast development
- React 19 with modern concurrent features
- Efficient state management with Zustand
- Real-time subscriptions with minimal re-renders
- Code splitting and lazy loading

## 🔐 Security

- Environment variables for sensitive configuration
- Wallet adapter security best practices
- No private keys stored in the application
- RPC endpoint configuration for reliable connections

## 🆘 Support

For questions and support:

- [Drift Discord](https://discord.gg/drift-trade)
- [GitHub Issues](https://github.com/drift-labs/protocol-v2/issues)
- [Drift Documentation](https://docs.drift.trade/)
