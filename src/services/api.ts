import { API_CONFIG } from '../constants/config';
import type { RequestConfig, ServiceResponse } from '../types';

/**
 * Base API service class for making HTTP requests
 */
class ApiService {
  private baseUrl: string;
  private defaultOptions: RequestInit;

  constructor(baseUrl: string = API_CONFIG.BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultOptions = API_CONFIG.FETCH_OPTIONS;
  }

  /**
   * Make a GET request
   */
  async get<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = endpoint.startsWith('http') ? endpoint : `${this.baseUrl}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...this.defaultOptions,
        ...options,
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error for ${url}:`, error);
      throw error;
    }
  }

  /**
   * Make multiple parallel API requests
   */
  async getMultiple<T = any>(requests: RequestConfig[]): Promise<Array<T | ServiceResponse>> {
    const promises = requests.map(({ endpoint, options = {} }) => 
      this.get<T>(endpoint, options).catch((error: Error) => ({ error, endpoint }))
    );

    return await Promise.all(promises);
  }
}

export default ApiService;
