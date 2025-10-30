// Base API configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.russellmorbey.co.uk';

// Consolidated API Service Class
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.apiKeys = {
      activity: process.env.REACT_APP_ACTIVITY_API_KEY,
      fundraising: process.env.REACT_APP_FUNDRAISING_API_KEY
    };
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers
      }
    };

    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${response.statusText} - ${errorText}`);
    }
    
    return await response.json();
  }

  // Activity Integration API calls
  async getActivityFeed(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/api/activity-integration/feed${queryString ? `?${queryString}` : ''}`;
    
    return this.makeRequest(endpoint, {
      headers: {
        'X-API-Key': this.apiKeys.activity
      }
    });
  }

  async getActivityHealth() {
    return this.makeRequest('/api/activity-integration/health');
  }

  async getActivityMetrics() {
    return this.makeRequest('/api/activity-integration/metrics', {
      headers: {
        'X-API-Key': this.apiKeys.activity
      }
    });
  }

  async getActivityCacheStatus() {
    return this.makeRequest('/api/activity-integration/cache-status', {
      headers: {
        'X-API-Key': this.apiKeys.activity
      }
    });
  }

  // Legacy method names for backward compatibility
  async getStravaFeed(params = {}) {
    return this.getActivityFeed(params);
  }

  async getStravaHealth() {
    return this.getActivityHealth();
  }

  async getStravaMetrics() {
    return this.getActivityMetrics();
  }

  async getStravaCacheStatus() {
    return this.getActivityCacheStatus();
  }

  // Fundraising API calls
  async getFundraisingData() {
    return this.makeRequest('/api/fundraising/data', {
      headers: {
        'X-API-Key': this.apiKeys.fundraising
      }
    });
  }

  async getFundraisingDonations(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/api/fundraising/donations${queryString ? `?${queryString}` : ''}`;
    
    return this.makeRequest(endpoint, {
      headers: {
        'X-API-Key': this.apiKeys.fundraising
      }
    });
  }

  async getFundraisingHealth() {
    return this.makeRequest('/api/fundraising/health');
  }

  // General API calls
  async getHealth() {
    return this.makeRequest('/health');
  }

  async getApiInfo() {
    return this.makeRequest('/');
  }
}

// Legacy API classes for backward compatibility
// Note: These maintain old naming but use new activity-integration endpoints
class StravaAPI {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async getFeed(limit = null) {
    try {
      const params = limit ? { limit } : {};
      const data = await this.apiService.getActivityFeed(params);
      // console.log('API response - Activities count:', data.activities?.length || 0);
      return data;
    } catch (error) {
      console.error('Error fetching activities:', error);
      throw error;
    }
  }

  async getActivity(activityId) {
    try {
      return await this.apiService.makeRequest(`/api/activity-integration/activity/${activityId}`, {
        headers: {
          'X-API-Key': this.apiService.apiKeys.activity
        }
      });
    } catch (error) {
      console.error('Error fetching activity:', error);
      throw error;
    }
  }

  async healthCheck() {
    try {
      return await this.apiService.getActivityHealth();
    } catch (error) {
      console.error('Error checking activity service health:', error);
      throw error;
    }
  }
}

class FundraisingAPI {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async getData() {
    try {
      return await this.apiService.getFundraisingData();
    } catch (error) {
      console.error('Error fetching fundraising data:', error);
      throw error;
    }
  }

  async getDonations() {
    try {
      return await this.apiService.getFundraisingDonations();
    } catch (error) {
      console.error('Error fetching donations:', error);
      throw error;
    }
  }
}

// API utilities
export const apiUtils = {
  formatError: (error) => {
    if (error.message) {
      return error.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    return 'An unexpected error occurred';
  }
};

// Create API service instance
const apiService = new ApiService();

// Export API instances for backward compatibility
export const stravaAPI = new StravaAPI(apiService);
export const fundraisingAPI = new FundraisingAPI(apiService);
export { apiService };