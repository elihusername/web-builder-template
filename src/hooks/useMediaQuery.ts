import { useState, useEffect } from 'react';

/**
 * Custom hook that returns true if the specified media query matches
 * 
 * @param {string} query - CSS media query string
 * @returns {boolean} True if the media query matches
 */
function useMediaQuery(query) {
  // For SSR, default to not matching on first render
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Bail early if window is undefined (SSR)
    if (typeof window === 'undefined') return;

    // Create media query list
    const mediaQueryList = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQueryList.matches);

    // Define the change handler
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Add event listener with modern API
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
      return () => {
        mediaQueryList.removeEventListener('change', handleChange);
      };
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(handleChange);
      return () => {
        mediaQueryList.removeListener(handleChange);
      };
    }
  }, [query]);

  return matches;
}

/**
 * Predefined media query hooks for common breakpoints
 * based on Tailwind CSS default breakpoints
 */
export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)'); // lg
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)'); // md
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)'); // sm
}

export function useIsDarkMode() {
  return useMediaQuery('(prefers-color-scheme: dark)');
}

export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

export default useMediaQuery;