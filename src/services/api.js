import { API_CONFIG } from '../constants/config';

/**
 * Base API service class for making HTTP requests
 */
class ApiService {
  constructor(baseUrl = API_CONFIG.BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultOptions = API_CONFIG.FETCH_OPTIONS;
  }

  /**
   * Make a GET request
   * @param {string} endpoint - API endpoint
   * @param {object} options - Additional fetch options
   * @returns {Promise} - Fetch promise
   */
  async get(endpoint, options = {}) {
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
   * @param {Array} requests - Array of request configs {endpoint, options}
   * @returns {Promise<Array>} - Array of responses
   */
  async getMultiple(requests) {
    const promises = requests.map(({ endpoint, options }) => 
      this.get(endpoint, options).catch(error => ({ error, endpoint }))
    );

    return await Promise.all(promises);
  }
}

export default ApiService;
