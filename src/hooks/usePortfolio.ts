import { useState, useEffect } from 'react';
import { useInterval } from './useInterval';
import { BinanceService, IndodaxService } from '../services/exchanges';
import { BINANCE_PAIRS } from '../constants/assets';
import { UI_CONFIG } from '../constants/config';
import {
  calculateGrowthPercent,
  calculateGain,
  isPortfolioInLoss,
  calculateTakeProfit,
  calculateTakeProfitWithoutBTC
} from '../utils/calculations';
import { currencyFormatter } from '../utils/formatters';
import type { PortfolioSummary, BinanceTickerResponse, ServiceResponse } from '../types';

interface UsePortfolioReturn {
  grandTotal: number;
  summary: PortfolioSummary;
  percent: string;
  btcTotal: number;
  isLoading: boolean;
  error: string | null;
  isLoss: boolean;
  gain: number;
  takeProfit: string;
  takeProfitWithoutBTC: string;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for managing portfolio data and calculations
 */
export function usePortfolio(): UsePortfolioReturn {
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [summary, setSummary] = useState<PortfolioSummary>({});
  const [percent, setPercent] = useState<string>('0');
  const [btcTotal, setBTCTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPortfolioData = async (): Promise<void> => {
    try {
      setError(null);
      
      // Get USDT price first
      const usdtData = await BinanceService.getUSDTPrice();
      const { price: idrPrice } = usdtData;

      // Get Indodax data
      const { summaryData, total: indodaxTotal } = await IndodaxService.getProcessedData();

      // Get Binance data
      const binanceResponses = await BinanceService.getAllPrices();
      
      let total = indodaxTotal;
      const finalSummary: PortfolioSummary = { ...summaryData };

      // Process Binance responses
      for (let i = 0; i < binanceResponses.length; i++) {
        const response = binanceResponses[i];
        
        if ('error' in response) {
          console.warn(`Error fetching Binance data:`, response.error);
          continue;
        }

        const binanceResponse = response as BinanceTickerResponse;
        const { price, symbol } = binanceResponse;
        
        if (symbol in BINANCE_PAIRS) {
          const { asset, name, color, inUSD } = BINANCE_PAIRS[symbol];
          const adjustedPrice = inUSD ? Number(idrPrice) * Number(price) : Number(price);
          const value = asset * adjustedPrice;

          finalSummary[symbol] = {
            pair: symbol,
            color,
            name,
            coin: asset,
            price: adjustedPrice,
            total: value,
          };

          total += value;
        }
      }

      // Calculate BTC total for additional metrics
      const btcValue = Object.values(finalSummary).find(item => item.name === 'BTC')?.total || 0;
      setBTCTotal(btcValue);

      // Calculate percentage
      const growthPercent = calculateGrowthPercent(total);
      
      // Update state
      setGrandTotal(total);
      setSummary(finalSummary);
      setPercent(growthPercent);
      setIsLoading(false);

      // Update document title
      const gain = calculateGain(total);
      document.title = `My Gain: ${currencyFormatter.format(gain)} (${growthPercent}%)`;

    } catch (err: any) {
      console.error('Error fetching portfolio data:', err);
      setError(err?.message || 'Unknown error occurred');
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchPortfolioData();
  }, []);

  // Setup interval for continuous updates
  useInterval(fetchPortfolioData, UI_CONFIG.FETCH_INTERVAL);

  // Calculated values
  const isLoss = isPortfolioInLoss(grandTotal);
  const gain = calculateGain(grandTotal);
  const takeProfit = calculateTakeProfit(gain, grandTotal);
  const takeProfitWithoutBTC = calculateTakeProfitWithoutBTC(gain, grandTotal, btcTotal);

  return {
    grandTotal,
    summary,
    percent,
    btcTotal,
    isLoading,
    error,
    isLoss,
    gain,
    takeProfit,
    takeProfitWithoutBTC,
    refetch: fetchPortfolioData
  };
}
