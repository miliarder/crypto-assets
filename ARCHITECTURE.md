# Crypto Assets Portfolio Tracker - Architecture

## Project Structure

```
src/
├── components/              # React components
│   ├── FearGreedIndicator/  # Fear & Greed Index display
│   ├── Item/                # Portfolio item row
│   ├── LoadingSpinner/      # Loading state component
│   ├── Note/                # Loss calculation note
│   ├── PortfolioChart/      # Pie chart visualization
│   ├── PortfolioSummary/    # Portfolio summary display
│   ├── PortfolioTable/      # Main portfolio table
│   └── RSIIndicator/        # RSI indicator display
├── constants/               # Configuration and data
│   ├── assets.js           # Crypto asset holdings and pairs
│   ├── config.js           # API endpoints, UI config, modal calculation
│   └── index.js            # Export barrel
├── hooks/                   # Custom React hooks
│   ├── useFavicon.js       # Favicon management
│   ├── useIndicators.js    # Fear & Greed Index and RSI data
│   ├── useInterval.js      # Interval management hook
│   ├── usePortfolio.js     # Portfolio data management
│   └── index.js            # Export barrel
├── services/                # API and data services
│   ├── api.js              # Base API service class
│   ├── exchanges.js        # Exchange-specific services (Binance, Indodax)
│   ├── indicators.js       # Market indicator services
│   └── index.js            # Export barrel
├── styles/                  # SCSS stylesheets
│   ├── components/         # Component-specific styles
│   │   └── _item.scss      # Item component styles
│   ├── _global.scss        # Global styles
│   ├── _variables.scss     # SCSS variables
│   └── main.scss           # Main stylesheet import
├── utils/                   # Utility functions
│   ├── calculations.js     # Portfolio calculations
│   ├── colors.js           # Color utility functions
│   ├── formatters.js       # Number/currency formatters
│   └── index.js            # Export barrel
└── App.js                   # Main application component
```

## Architecture Principles

### Separation of Concerns
- **Components**: Pure UI components with minimal business logic
- **Hooks**: Encapsulate stateful logic and side effects
- **Services**: Handle external API calls and data fetching
- **Utils**: Pure utility functions for calculations and formatting
- **Constants**: Configuration data and constants

### Data Flow
1. **Custom Hooks** manage state and fetch data using services
2. **Services** handle API calls and data transformation
3. **Components** receive data via props and render UI
4. **Utils** provide calculations and formatting

### Key Features

#### Custom Hooks
- `usePortfolio`: Manages portfolio data, calculations, and real-time updates
- `useIndicators`: Handles Fear & Greed Index and RSI data
- `useFavicon`: Updates browser favicon based on portfolio status
- `useInterval`: Manages interval timers with cleanup

#### Service Classes
- `BinanceService`: Handles Binance API calls
- `IndodaxService`: Manages Indodax exchange data
- `FearGreedService`: Fetches Fear & Greed Index
- `RSIService`: Retrieves RSI data

#### Component Architecture
- Modular components with single responsibilities
- Props-based data flow
- Reusable UI components
- Loading and error states

### Performance Optimizations
- Parallel API calls for faster data fetching
- Efficient re-rendering with proper dependency arrays
- Modular CSS for better loading performance
- Error boundaries and graceful error handling

### Scalability Features
- Export barrels for clean imports
- Configurable API endpoints
- Modular SCSS architecture
- Type-safe prop interfaces (ready for TypeScript migration)
- Easily extensible service pattern for new exchanges

## Future Enhancements
- TypeScript migration for better type safety
- Unit and integration tests
- State persistence with localStorage
- WebSocket connections for real-time updates
- Additional exchange integrations
- Mobile responsive improvements
- PWA capabilities
