import { useEffect } from 'react';

/**
 * Custom hook for managing favicon updates based on portfolio status
 */
export function useFavicon(isLoss: boolean, redIcon: string, greenIcon: string): void {
  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = isLoss ? redIcon : greenIcon;
    }
  }, [isLoss, redIcon, greenIcon]);
}
