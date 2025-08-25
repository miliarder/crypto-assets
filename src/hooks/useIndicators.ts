import { useState, useEffect } from 'react';
import { FearGreedService, RSIService } from '../services/indicators';
import type { FearGreedIndexData } from '../types';

interface UseIndicatorsReturn {
  fearIndex: FearGreedIndexData[];
  rsi: number;
  todayFearIndex?: FearGreedIndexData;
  isLoading: boolean;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for managing market indicators (Fear & Greed Index, RSI)
 */
export function useIndicators(): UseIndicatorsReturn {
  const [fearIndex, setFearIndex] = useState<FearGreedIndexData[]>([]);
  const [rsi, setRSI] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchIndicators = async (): Promise<void> => {
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
