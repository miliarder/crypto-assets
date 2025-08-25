import React from 'react';
import { currencyFormatter } from '../../utils/formatters';
import Note from '../Note';

function PortfolioSummary({ grandTotal, gain, percent, isLoss }) {
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
