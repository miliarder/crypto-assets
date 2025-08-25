import { useEffect } from 'react';

/**
 * Custom hook for managing favicon updates based on portfolio status
 * @param {boolean} isLoss - Whether portfolio is in loss
 * @param {string} redIcon - Path to red icon
 * @param {string} greenIcon - Path to green icon
 */
export function useFavicon(isLoss, redIcon, greenIcon) {
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = isLoss ? redIcon : greenIcon;
    }
  }, [isLoss, redIcon, greenIcon]);
}
