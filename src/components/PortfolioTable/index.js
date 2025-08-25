import React from 'react';
import Item from '../Item';

function PortfolioTable({ summary, grandTotal, isLoss, takeProfit, takeProfitWithoutBTC }) {
  return (
    <div className="table-responsive table-striped">
      <table className="table table table-dark table-striped">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>Total</th>
            {/* <th>TP</th>*/}
          </tr>
        </thead>
        <tbody>
          {Object.keys(summary).map(key => {
            const { coin, price, total, name, pair } = summary[key];
            return (
              <Item
                pair={pair}
                key={key}
                coin={coin}
                price={price}
                name={name}
                total={total}
                isLoss={isLoss}
                TPwtBTC={takeProfitWithoutBTC}
                TP={takeProfit}
              />
            );
          })}
          <Item price="Total:" total={grandTotal} isBold />
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioTable;
