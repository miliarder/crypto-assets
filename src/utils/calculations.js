import { PORTFOLIO_MODAL } from '../constants/config';

/**
 * Calculate portfolio growth percentage
 * @param {number} currentTotal - Current portfolio total value
 * @returns {string} - Growth percentage as string with 1 decimal place
 */
export function calculateGrowthPercent(currentTotal) {
  return ((currentTotal - PORTFOLIO_MODAL) / (PORTFOLIO_MODAL / 100)).toFixed(1);
}

/**
 * Calculate gain/loss amount
 * @param {number} currentTotal - Current portfolio total value
 * @returns {number} - Gain (positive) or loss (negative) amount
 */
export function calculateGain(currentTotal) {
  return currentTotal - PORTFOLIO_MODAL;
}

/**
 * Check if portfolio is in loss
 * @param {number} currentTotal - Current portfolio total value
 * @returns {boolean} - True if in loss, false otherwise
 */
export function isPortfolioInLoss(currentTotal) {
  return currentTotal < PORTFOLIO_MODAL;
}

/**
 * Calculate take profit percentage
 * @param {number} gain - Portfolio gain amount
 * @param {number} grandTotal - Total portfolio value
 * @returns {string} - Take profit percentage as string with 1 decimal place
 */
export function calculateTakeProfit(gain, grandTotal) {
  return (gain / (grandTotal / 100)).toFixed(1);
}

/**
 * Calculate take profit percentage without BTC
 * @param {number} gain - Portfolio gain amount
 * @param {number} grandTotal - Total portfolio value
 * @param {number} btcTotal - BTC total value
 * @returns {string} - Take profit percentage as string with 1 decimal place
 */
export function calculateTakeProfitWithoutBTC(gain, grandTotal, btcTotal) {
  return (gain / ((grandTotal - btcTotal) / 100)).toFixed(1);
}
