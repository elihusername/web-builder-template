/**
 * Utility functions for working with localStorage and sessionStorage
 */

/**
 * Get an item from localStorage with automatic JSON parsing
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} The stored value or defaultValue
 */
export function getLocalStorageItem(key, defaultValue = null) {
    if (typeof window === 'undefined') return defaultValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
      return defaultValue;
    }
  }
  
  /**
   * Set an item in localStorage with automatic JSON stringification
   * @param {string} key - Storage key
   * @param {*} value - Value to store
   * @returns {boolean} Success status
   */
  export function setLocalStorageItem(key, value) {
    if (typeof window === 'undefined') return false;
    
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
      return false;
    }
  }
  
  /**
   * Remove an item from localStorage
   * @param {string} key - Storage key to remove
   */
  export function removeLocalStorageItem(key) {
    if (typeof window === 'undefined') return;
    
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error);
    }
  }
  
  /**
   * Get an item from sessionStorage with automatic JSON parsing
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default value if key doesn't exist
   * @returns {*} The stored value or defaultValue
   */
  export function getSessionStorageItem(key, defaultValue = null) {
    if (typeof window === 'undefined') return defaultValue;
    
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading ${key} from sessionStorage:`, error);
      return defaultValue;
    }
  }
  
  /**
   * Set an item in sessionStorage with automatic JSON stringification
   * @param {string} key - Storage key
   * @param {*} value - Value to store
   * @returns {boolean} Success status
   */
  export function setSessionStorageItem(key, value) {
    if (typeof window === 'undefined') return false;
    
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error saving ${key} to sessionStorage:`, error);
      return false;
    }
  }
  
  /**
   * Remove an item from sessionStorage
   * @param {string} key - Storage key to remove
   */
  export function removeSessionStorageItem(key) {
    if (typeof window === 'undefined') return;
    
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from sessionStorage:`, error);
    }
  }
  
  /**
   * Create a storage object with expiration 
   * @param {*} value - Value to store
   * @param {number} expiresInMinutes - Minutes until expiration
   * @returns {Object} Storage object with value and expiration
   */
  export function createExpiringStorage(value, expiresInMinutes = 60) {
    return {
      value,
      expires: new Date().getTime() + expiresInMinutes * 60 * 1000
    };
  }
  
  /**
   * Get an item with expiration check from localStorage
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default value if expired or not found
   * @returns {*} The stored value if valid, or defaultValue
   */
  export function getExpiringLocalStorageItem(key, defaultValue = null) {
    const storedItem = getLocalStorageItem(key);
    
    if (!storedItem || !storedItem.expires) return defaultValue;
    
    if (new Date().getTime() > storedItem.expires) {
      removeLocalStorageItem(key);
      return defaultValue;
    }
    
    return storedItem.value;
  }