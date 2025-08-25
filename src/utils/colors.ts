import { FNG_COLOR_THRESHOLDS } from '../constants/config';

import type { FearGreedThreshold } from '../types';

/**
 * Get color code based on Fear & Greed Index value
 */
export function getFearGreedColor(indexValue: number): string {
  const threshold: FearGreedThreshold | undefined = FNG_COLOR_THRESHOLDS.find(
    (threshold: FearGreedThreshold) => indexValue >= threshold.min
  );
  
  return threshold ? threshold.color : FNG_COLOR_THRESHOLDS[FNG_COLOR_THRESHOLDS.length - 1].color;
}
