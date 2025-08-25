import { useState, useEffect } from 'react';
import { FearGreedService, RSIService } from '../services/indicators';

/**
 * Custom hook for managing market indicators (Fear & Greed Index, RSI)
 */
export function useIndicators() {
  const [fearIndex, setFearIndex] = useState([]);
  const [rsi, setRSI] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIndicators = async () => {
    setIsLoading(true);

    // Fetch Fear & Greed Index
    try {
      const fearData = await FearGreedService.getFearGreedIndex(2);
      setFearIndex(fearData.data || []);
    } catch (error) {
      console.error('Error fetching Fear & Greed Index:', error);
    }

    // Fetch RSI
    try {
      const rsiData = await RSIService.getBTCRSI();
      if (rsiData.value) {
        setRSI(rsiData.value);
      }
    } catch (error) {
      console.error('Error fetching RSI:', error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchIndicators();
  }, []);

  const todayFearIndex = fearIndex?.[0];

  return {
    fearIndex,
    rsi,
    todayFearIndex,
    isLoading,
    refetch: fetchIndicators
  };
}
