import React from 'react';
import { formatNumber } from '../../utils/formatters';

function RSIIndicator({ rsi }) {
  if (rsi <= 0) return null;

  return (
    <div style={{ padding: 20, paddingTop: 0, marginTop: -15, color: 'white' }}>
      Daily RSI: <strong>{formatNumber(rsi, 2)}</strong>
    </div>
  );
}

export default RSIIndicator;
