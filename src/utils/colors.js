import { FNG_COLOR_THRESHOLDS } from '../constants/config';

/**
 * Get color code based on Fear & Greed Index value
 * @param {number} indexValue - The F&G index value (0-100)
 * @returns {string} - Hex color code without '#'
 */
export function getFearGreedColor(indexValue) {
  const threshold = FNG_COLOR_THRESHOLDS.find(
    threshold => indexValue >= threshold.min
  );
  
  return threshold ? threshold.color : FNG_COLOR_THRESHOLDS[FNG_COLOR_THRESHOLDS.length - 1].color;
}
