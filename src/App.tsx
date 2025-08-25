import React from 'react';
import { usePortfolio, useIndicators, useFavicon } from './hooks';
import PortfolioTable from './components/PortfolioTable';
import PortfolioSummary from './components/PortfolioSummary';
import PortfolioChart from './components/PortfolioChart';
import FearGreedIndicator from './components/FearGreedIndicator';
import RSIIndicator from './components/RSIIndicator';
import LoadingSpinner from './components/LoadingSpinner';
import redDot from './img/red-dot.png';
import greenDot from './img/green-dot.png';
import './styles/main.scss';

export default function App(): React.JSX.Element {
  // Custom hooks for data management
  const {
    grandTotal,
    summary,
    percent,
    btcTotal,
    isLoading: portfolioLoading,
    error: portfolioError,
    isLoss,
    gain,
    takeProfit,
    takeProfitWithoutBTC
  } = usePortfolio();

  const {
    rsi,
    todayFearIndex,
    isLoading: indicatorsLoading
  } = useIndicators();

  // Manage favicon based on portfolio status
  useFavicon(isLoss, redDot, greenDot);

  // Show loading spinner while data is being fetched
  if (portfolioLoading) {
    return (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%' }}>
        <LoadingSpinner />
      </div>
    );
  }

  // Show error message if portfolio data failed to load
  if (portfolioError) {
    return (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%', color: 'white', padding: 20 }}>
        <div className="alert alert-danger">
          Error loading portfolio data: {portfolioError}
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%' }}>
      <PortfolioTable
        summary={summary}
        grandTotal={grandTotal}
        isLoss={isLoss}
        takeProfit={takeProfit}
        takeProfitWithoutBTC={takeProfitWithoutBTC}
      />

      <PortfolioSummary
        grandTotal={grandTotal}
        gain={gain}
        percent={percent}
        isLoss={isLoss}
      />

      <PortfolioChart summary={summary} />

      <FearGreedIndicator fearIndex={todayFearIndex} />

      <RSIIndicator rsi={rsi} />

      {/* Hidden images for favicon */}
      <div style={{ display: 'none' }}>
        <img src={redDot} alt="Red dot" />
        <img src={greenDot} alt="Green dot" />
      </div>
    </div>
  );
}
