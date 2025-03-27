/**
 * Utility functions for formatting dates, numbers, currency and text
 */

/**
 * Format a date to a human-readable string
 * @param {Date|string|number} date - The date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}) {
    const defaultOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...options
    };
    
    const dateObj = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat('en-US', defaultOptions).format(dateObj);
  }
  
  /**
   * Format a number with thousands separators and decimal places
   * @param {number} num - The number to format
   * @param {number} decimals - Number of decimal places (default: 0)
   * @returns {string} Formatted number
   */
  export function formatNumber(num, decimals = 0) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  }
  
  /**
   * Format a number as currency
   * @param {number} amount - The amount to format
   * @param {string} currency - Currency code (default: USD)
   * @returns {string} Formatted currency string
   */
  export function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(amount);
  }
  
  /**
   * Truncate text to a specific length and add ellipsis
   * @param {string} text - The text to truncate
   * @param {number} length - Maximum length (default: 100)
   * @returns {string} Truncated text
   */
  export function truncateText(text, length = 100) {
    if (!text || text.length <= length) return text;
    return text.slice(0, length).trim() + '...';
  }
  
  /**
   * Convert a string to title case
   * @param {string} str - String to convert
   * @returns {string} Title cased string
   */
  export function toTitleCase(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  /**
   * Convert camelCase to Title Case
   * @param {string} camelCase - camelCase string
   * @returns {string} Title Case string
   */
  export function camelToTitleCase(camelCase) {
    if (!camelCase) return '';
    const withSpaces = camelCase.replace(/([A-Z])/g, ' $1');
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
  }