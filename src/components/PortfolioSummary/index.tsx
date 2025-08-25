import React from 'react';
import { currencyFormatter } from '../../utils/formatters';
import Note from '../Note';
import type { PortfolioSummaryProps } from '../../types';

function PortfolioSummary({ grandTotal, gain, percent, isLoss }: PortfolioSummaryProps): React.JSX.Element | null {
  if (grandTotal <= 0) return null;

  return (
    <div style={{ padding: 20 }}>
      <div className={`alert ${isLoss ? 'alert-danger' : 'alert-success'}`}>
        Gain{' '}
        <strong>
          {currencyFormatter.format(gain)} ({percent}%)
        </strong>
        {isLoss && <Note total={grandTotal} losses={Math.abs(gain)} />}
      </div>
    </div>
  );
}

export default PortfolioSummary;
