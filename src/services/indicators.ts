import ApiService from './api';
import { API_CONFIG } from '../constants/config';
import type { FearGreedResponse, RSIResponse } from '../types';

const apiService = new ApiService('');

/**
 * Service for fetching Fear & Greed Index data
 */
export class FearGreedService {
  /**
   * Get Fear & Greed Index data
   */
  static async getFearGreedIndex(limit: number = 2): Promise<FearGreedResponse> {
    const endpoint = `${API_CONFIG.ENDPOINTS.FEAR_GREED_INDEX}&limit=${limit}`;
    return await apiService.get<FearGreedResponse>(endpoint);
  }
}

/**
 * Service for fetching RSI (Relative Strength Index) data
 */
export class RSIService {
  /**
   * Get RSI data for BTC/USDT
   */
  static async getBTCRSI(): Promise<RSIResponse> {
    return await apiService.get<RSIResponse>(API_CONFIG.ENDPOINTS.RSI);
  }
}
