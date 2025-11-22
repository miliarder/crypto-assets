import type { APIConfig, UIConfig, FearGreedThreshold } from '../types';

// Portfolio modal calculation
export const PORTFOLIO_MODAL: number = 61419031 - 4971934 - 2200714 - 3367336 + 10000000 + 5000000 +
  5000000 + 1000000 + 1500000 + 1500000 + 1500000 + 2000000 + 2500000 + 3000000 +
  3000000 + 2000000 + 1500000 + 1500000 + 1500000 + 3000000 + 3000000 +
  2483889 + 3500000 + 3000000 + 3000000 + 1000000 + 1000000 + 381600 + 619504 + 5000000 +
  2504010 + 4000000 + 4000000 + 1500000 + 750000 + 500000 + 250000 + 3000000 + 5000000 + 800000 + 400000 + 400000 + 1003000 +
  1000000 + 10000000 + 10000000 + 5000000 + 2000000 + 2000000 + 2000000 + 4304534 + 5000000 + 4000000 + 6000000 + 5000000 +
  13000000 + 5000000 + 10000000 + 25000000;

// API Configuration
export const API_CONFIG: APIConfig = {
  BASE_URL: 'https://www.sandro.id',
  ENDPOINTS: {
    BINANCE_TICKER: '/binance-ticker-price',
    INDODAX_SUMMARIES: '/indodax-summaries',
    FEAR_GREED_INDEX: 'https://api.alternative.me/fng/?limit=2',
    RSI: 'https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmRyb2JyYXllbkBnbWFpbC5jb20iLCJpYXQiOjE2NDI4ODQyNTksImV4cCI6Nzk1MDA4NDI1OX0.ZYR1fjAYGGkUgW1DpcUxYbB4cQ9ff9jHSJCWg5YShAc&exchange=binance&symbol=BTC/USDT&interval=1d'
  },
  FETCH_OPTIONS: {
    cache: 'no-cache' as RequestCache
  }
};

// UI Configuration
export const UI_CONFIG: UIConfig = {
  FETCH_INTERVAL: 3000, // milliseconds
  ANIMATION_DURATION: 1000, // milliseconds
  CHART_CONFIG: {
    width: '100%',
    height: '300px',
    backgroundColor: '333333',
    legend: {
      textStyle: {
        color: 'white'
      }
    }
  }
};

// Fear & Greed Index color thresholds
export const FNG_COLOR_THRESHOLDS: FearGreedThreshold[] = [
  { min: 90, color: '65c64c' },
  { min: 75, color: '79d23c' },
  { min: 63, color: '9bbe44' },
  { min: 54, color: 'c6bf22' },
  { min: 46, color: 'dfce60' },
  { min: 35, color: 'd8bc59' },
  { min: 25, color: 'e39d64' },
  { min: 10, color: 'd17339' },
  { min: 0, color: 'b74d34' }
];
