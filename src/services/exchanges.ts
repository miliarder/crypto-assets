import ApiService from './api';
import { API_CONFIG } from '../constants/config';
import { ASSET_PAIRS, BINANCE_PAIRS } from '../constants/assets';
import type { BinanceTickerResponse, IndodaxSummaryResponse, PortfolioSummary, ServiceResponse } from '../types';

const apiService = new ApiService();

/**
 * Service for fetching data from Binance exchange
 */
export class BinanceService {
  /**
   * Get ticker price for a specific symbol
   */
  static async getTickerPrice(symbol: string): Promise<BinanceTickerResponse> {
    const endpoint = `${API_CONFIG.ENDPOINTS.BINANCE_TICKER}?symbol=${symbol}`;
    return await apiService.get<BinanceTickerResponse>(endpoint);
  }

  /**
   * Get prices for all Binance pairs
   */
  static async getAllPrices(): Promise<Array<BinanceTickerResponse | ServiceResponse>> {
    const requests = Object.keys(BINANCE_PAIRS).map(symbol => ({
      endpoint: `${API_CONFIG.ENDPOINTS.BINANCE_TICKER}?symbol=${symbol}`
    }));

    return await apiService.getMultiple<BinanceTickerResponse>(requests);
  }

  /**
   * Get USDT to IDR price
   */
  static async getUSDTPrice(): Promise<BinanceTickerResponse> {
    return await this.getTickerPrice('USDTBIDR');
  }
}

/**
 * Service for fetching data from Indodax exchange
 */
export class IndodaxService {
  /**
   * Get all ticker summaries from Indodax
   */
  static async getSummaries(): Promise<IndodaxSummaryResponse> {
    return await apiService.get<IndodaxSummaryResponse>(API_CONFIG.ENDPOINTS.INDODAX_SUMMARIES);
  }

  /**
   * Process Indodax data to calculate portfolio values
   */
  static async getProcessedData(): Promise<{ summaryData: PortfolioSummary; total: number }> {
    const data = await this.getSummaries();
    const { tickers } = data;
    
    let total = 0;
    const summaryData: PortfolioSummary = {};

    const keys = Object.keys(ASSET_PAIRS);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const coin = ASSET_PAIRS[key].asset;
      const name = ASSET_PAIRS[key].name;
      const color = ASSET_PAIRS[key].color;
      const { last: price } = tickers[key] || { last: '0' };
      const value = coin * Number(price);

      summaryData[key] = {
        pair: key.replace('_', '').toUpperCase(),
        color,
        name,
        coin,
        price: Number(price),
        total: value
      };
      
      total += value;
    }

    return { summaryData, total };
  }
}
