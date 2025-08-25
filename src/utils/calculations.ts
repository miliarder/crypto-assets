import { PORTFOLIO_MODAL } from '../constants/config';

/**
 * Calculate portfolio growth percentage
 */
export function calculateGrowthPercent(currentTotal: number): string {
  return ((currentTotal - PORTFOLIO_MODAL) / (PORTFOLIO_MODAL / 100)).toFixed(1);
}

/**
 * Calculate gain/loss amount
 */
export function calculateGain(currentTotal: number): number {
  return currentTotal - PORTFOLIO_MODAL;
}

/**
 * Check if portfolio is in loss
 */
export function isPortfolioInLoss(currentTotal: number): boolean {
  return currentTotal < PORTFOLIO_MODAL;
}

/**
 * Calculate take profit percentage
 */
export function calculateTakeProfit(gain: number, grandTotal: number): string {
  return (gain / (grandTotal / 100)).toFixed(1);
}

/**
 * Calculate take profit percentage without BTC
 */
export function calculateTakeProfitWithoutBTC(gain: number, grandTotal: number, btcTotal: number): string {
  return (gain / ((grandTotal - btcTotal) / 100)).toFixed(1);
}
