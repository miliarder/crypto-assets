// Asset and trading pair types
export interface AssetPair {
  asset: number;
  name: string;
  color: string;
}

export interface BinancePair extends AssetPair {
  inUSD: boolean;
}

// API response types
export interface BinanceTickerResponse {
  price: string;
  symbol: string;
}

export interface IndodaxTickerData {
  last: string;
  [key: string]: string;
}

export interface IndodaxSummaryResponse {
  tickers: Record<string, IndodaxTickerData>;
}

export interface FearGreedIndexData {
  value: string;
  value_classification: string;
  timestamp: string;
  time_until_update: string;
}

export interface FearGreedResponse {
  data: FearGreedIndexData[];
}

export interface RSIResponse {
  value?: number;
}

// Portfolio data types
export interface PortfolioItem {
  pair: string;
  color: string;
  name: string;
  coin: number;
  price: number;
  total: number;
}

export interface PortfolioSummary {
  [key: string]: PortfolioItem;
}

// Configuration types
export interface APIEndpoints {
  BINANCE_TICKER: string;
  INDODAX_SUMMARIES: string;
  FEAR_GREED_INDEX: string;
  RSI: string;
}

export interface APIConfig {
  BASE_URL: string;
  ENDPOINTS: APIEndpoints;
  FETCH_OPTIONS: RequestInit;
}

export interface ChartConfig {
  width: string;
  height: string;
  backgroundColor: string;
  legend: {
    textStyle: {
      color: string;
    };
  };
}

export interface UIConfig {
  FETCH_INTERVAL: number;
  ANIMATION_DURATION: number;
  CHART_CONFIG: ChartConfig;
}

export interface FearGreedThreshold {
  min: number;
  color: string;
}

// Component props types
export interface ItemProps {
  coin?: number;
  price?: number | string;
  total: number;
  name?: string;
  isBold?: boolean;
  TP?: string;
  TPwtBTC?: string;
  pair?: string;
  isLoss?: boolean;
}

export interface NoteProps {
  total: number;
  losses: number;
}

export interface PortfolioTableProps {
  summary: PortfolioSummary;
  grandTotal: number;
  isLoss: boolean;
  takeProfit: string;
  takeProfitWithoutBTC: string;
}

export interface PortfolioSummaryProps {
  grandTotal: number;
  gain: number;
  percent: string;
  isLoss: boolean;
}

export interface PortfolioChartProps {
  summary: PortfolioSummary;
}

export interface FearGreedIndicatorProps {
  fearIndex?: FearGreedIndexData;
}

export interface RSIIndicatorProps {
  rsi: number;
}

// API Service types
export interface RequestConfig {
  endpoint: string;
  options?: RequestInit;
}

export interface ServiceResponse<T = any> {
  error?: Error;
  endpoint?: string;
  data?: T;
}
