import React, { useState, useEffect } from 'react';
import { currencyFormatter } from '../../utils/formatters';
import { UI_CONFIG } from '../../constants/config';
import '../../styles/components/_item.scss';

function Item(props) {
  const { coin, price, total, name, isBold, TP, TPwtBTC, pair } = props;

  const [currentTotal, setCurrentTotal] = useState(total);
  const [className, setClassName] = useState('');

  useEffect(() => {
    if (total < currentTotal) {
      setClassName('loss');
    } else if (total === currentTotal) {
      setClassName('');
    } else {
      setClassName('gain');
    }

    setTimeout(() => {
      setClassName('');
    }, UI_CONFIG.ANIMATION_DURATION);

    setCurrentTotal(total);
  }, [total]);

  return (
    <tr className={`portfolio-item ${className}`}>
      <td>
        {pair && <a className='asset-name' target='_blank' href={`https://indodax.com/market/${pair}`}>{coin} {name}</a>}
      </td>
      <td>{price > 0 ? <a className='asset-name' target='_blank' href={`https://indodax.com/chart/${pair}`}>{currencyFormatter.format(price)}</a> : price}</td>
      <td className={isBold ? 'bold' : ''}>{currencyFormatter.format(total)}</td>
      {/*<td style={{ color: '#155724' }}>
        { price > 0 && name === 'BTC' && `${(coin * TP / 100).toFixed(8)} BTC` }
        { price > 0 && name !== 'BTC' &&  `${(coin * TP / 100).toFixed(4)} ${name} | ${(coin * TPwtBTC / 100).toFixed(4)} ${name}` }
      </td>*/}
    </tr>
  );
}

export default Item;
