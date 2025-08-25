import ApiService from './api';
import { API_CONFIG } from '../constants/config';
import { ASSET_PAIRS, BINANCE_PAIRS } from '../constants/assets';

const apiService = new ApiService();

/**
 * Service for fetching data from Binance exchange
 */
export class BinanceService {
  /**
   * Get ticker price for a specific symbol
   * @param {string} symbol - Trading pair symbol (e.g., 'BTCUSDT')
   * @returns {Promise<object>} - Price data
   */
  static async getTickerPrice(symbol) {
    const endpoint = `${API_CONFIG.ENDPOINTS.BINANCE_TICKER}?symbol=${symbol}`;
    return await apiService.get(endpoint);
  }

  /**
   * Get prices for all Binance pairs
   * @returns {Promise<Array>} - Array of price data
   */
  static async getAllPrices() {
    const requests = Object.keys(BINANCE_PAIRS).map(symbol => ({
      endpoint: `${API_CONFIG.ENDPOINTS.BINANCE_TICKER}?symbol=${symbol}`
    }));

    return await apiService.getMultiple(requests);
  }

  /**
   * Get USDT to IDR price
   * @returns {Promise<object>} - USDT price in IDR
   */
  static async getUSDTPrice() {
    return await this.getTickerPrice('USDTBIDR');
  }
}

/**
 * Service for fetching data from Indodax exchange
 */
export class IndodaxService {
  /**
   * Get all ticker summaries from Indodax
   * @returns {Promise<object>} - Ticker summaries
   */
  static async getSummaries() {
    return await apiService.get(API_CONFIG.ENDPOINTS.INDODAX_SUMMARIES);
  }

  /**
   * Process Indodax data to calculate portfolio values
   * @returns {Promise<object>} - Processed portfolio data
   */
  static async getProcessedData() {
    const data = await this.getSummaries();
    const { tickers } = data;
    
    let total = 0;
    const summaryData = {};

    const keys = Object.keys(ASSET_PAIRS);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const coin = ASSET_PAIRS[key].asset;
      const name = ASSET_PAIRS[key].name;
      const color = ASSET_PAIRS[key].color;
      const { last: price } = tickers[key] || { last: 0 };
      const value = coin * Number(price);

      summaryData[key] = {
        pair: key.replace('_', '').toUpperCase(),
        color,
        name,
        coin,
        price: price,
        total: value
      };
      
      total += value;
    }

    return { summaryData, total };
  }
}
