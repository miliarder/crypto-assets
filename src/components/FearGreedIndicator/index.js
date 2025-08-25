import React from 'react';
import { getFearGreedColor } from '../../utils/colors';

function FearGreedIndicator({ fearIndex }) {
  if (!fearIndex) return null;

  const colorCode = getFearGreedColor(+fearIndex.value);

  return (
    <div style={{ padding: 20 }}>
      <div 
        className="alert" 
        style={{ backgroundColor: `#${colorCode}` }}
      >
        <strong>Fear Index</strong>: {fearIndex.value_classification}{' '}
        <strong>{+fearIndex.value}</strong>
      </div>
    </div>
  );
}

export default FearGreedIndicator;
