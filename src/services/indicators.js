import ApiService from './api';
import { API_CONFIG } from '../constants/config';

const apiService = new ApiService('');

/**
 * Service for fetching Fear & Greed Index data
 */
export class FearGreedService {
  /**
   * Get Fear & Greed Index data
   * @param {number} limit - Number of records to fetch
   * @returns {Promise<object>} - Fear & Greed data
   */
  static async getFearGreedIndex(limit = 2) {
    const endpoint = `${API_CONFIG.ENDPOINTS.FEAR_GREED_INDEX}&limit=${limit}`;
    return await apiService.get(endpoint);
  }
}

/**
 * Service for fetching RSI (Relative Strength Index) data
 */
export class RSIService {
  /**
   * Get RSI data for BTC/USDT
   * @returns {Promise<object>} - RSI data
   */
  static async getBTCRSI() {
    return await apiService.get(API_CONFIG.ENDPOINTS.RSI);
  }
}
