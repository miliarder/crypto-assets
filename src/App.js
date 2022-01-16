import React, { useEffect, useState, useMemo } from 'react';
import ImageMasonry from 'react-image-masonry';
import { Chart } from 'react-google-charts';
import Item from './components/Item';
import Note from './components/Note';
import redDot from './img/red-dot.png';
import greenDot from './img/green-dot.png';
import './style.scss';

const formatter = new Intl.NumberFormat('id', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

const pairs = {
  btc_idr: {
    asset: 0.03399115, // 0.01750036 + 0.01649079
    name: 'BTC',
    color: '#EBAC1C'
  },
  eth_idr: {
    asset: 0.56478735,
    name: 'ETH',
    color: '#000000',
  },
  ada_idr: {
    asset: 836.181224, // 553.115524 + 283.0657
    name: 'ADA',
    color: '#1365EA'
  },
  theta_idr: {
    asset: 177.9221,
    name: 'THETA',
    color: '#5C50DD'
  },
  bnb_idr: {
    asset: 0.6151854,
    name: 'BNB',
    color: '#FC5731'
  },
  cake_idr: {
    asset: 5.7943806,
    name: 'CAKE',
    color: '#5CACDD'
  },
  uni_idr: {
    asset: 5.81466346,
    name: 'UNI',
    color: '#fcc19b',
  },
/*  xrp_idr: {
    asset: 0,
    name: 'XRP',
    color: '#5CACDD'
  },
  tfuel_idr: {
    asset: 0,
    name: 'TFUEL',
    color: '#CFE542'
  },
  link_idr: {
    asset: 0,
    name: 'LINK',
    color: '#fcc19b',
  },
  doge_idr: {
    asset: 0,
    name: 'DOGE',
    color: '#fce51c',
  },*/
  usdt_idr: {
    asset: 1129 * 0,
    name: 'USDT',
    color: '#8c8c8c'
  },
};

const modal = 61419031 - 4971934 - 2200714 - 3367336 + 10000000 + 5000000 + 5000000 + 1000000 + 1500000;

let timer;

export default function App() {
  const [grandTotal, setTotal] = useState(0);
  const [summary, setSummary] = useState({});
  const [precent, setPercent] = useState(0);
  const [BTCTotal, setBTCTotal] = useState(0);

  useEffect(() => {
    clearInterval(timer);
    const fetchData = async () => {
      try {
        const res = await fetch(`https://indodax.com/api/summaries`, {
          cache: 'no-cache'
        });
        const data = await res.json();

        const { tickers } = data;
        let total = 0;

        const summaryData = {};

        let keys = Object.keys(pairs);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          const coin = pairs[key].asset;
          const name = pairs[key].name;
          const color = pairs[key].color;
          const { last: price } = tickers[key];
          const v = coin * Number(price);

          if(name === 'BTC') {
            setBTCTotal(v);
          }

          summaryData[key] = {
            pair: key.replace('_','').toUpperCase(),
            color,
            name,
            coin,
            price: price,
            total: v
          };
          total += v;
        }

        const growthPercent = ((total - modal) / (modal / 100)).toFixed(1);

        setTotal(total);
        setSummary(summaryData);
        setPercent(growthPercent);
        document.title = `My Gain:  ${formatter.format(
          total - modal
        )} (${growthPercent}%)`;

        timer = setTimeout(() => {
          fetchData();
        }, 3000);
      } catch (e) {
        console.log('error', e);
        fetchData();
      }
    };

    fetchData();
  }, []);

  const isLoss = grandTotal < modal;
  const gain = grandTotal - modal;

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.href = isLoss ? redDot : greenDot;
  }, [isLoss]);

  const TP = (gain / (grandTotal / 100)).toFixed(1);
  const TPwtBTC = (gain / ((grandTotal - BTCTotal) / 100)).toFixed(1);

  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
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
                  TPwtBTC={TPwtBTC}
                  TP={TP}
                />
              );
            })}
            <Item price="Total:" total={grandTotal} isBold />
          </tbody>
        </table>
      </div>
      <div style={{ padding: 20 }}>
        {grandTotal > 0 && (
          <div className={`alert ${isLoss ? 'alert-danger' : 'alert-success'}`}>
            Gain{' '}
            <strong>
              {formatter.format(gain)} ({precent}%)
            </strong>

            {/* !isLoss && ` | TP ${TP}%
            or ${TPwtBTC}% ALTs` */}

            {isLoss && <Note total={grandTotal} losses={Math.abs(gain)}/>}
          </div>
        )}
      </div>
      <div style={{ width: 500, maxWidth: '100%' }} className="cart">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="PieChart"
          loader={<div />}
          data={[
            ['Asset', 'Value'],
            ...Object.keys(summary).map(key => {
              const { coin, price, total, name, color } = summary[key];
              return [name, total];
            })
          ]}
          rootProps={{ 'data-testid': '1' }}
          options={{
            backgroundColor: '333333',
            legend: {
              textStyle: {
                color: 'white'
              }
            }
          }}
        />
      </div>
      <ImageMasonry
        imageUrls={[
          'https://media.giphy.com/media/XUojAIMYIIOQ9tpx2s/giphy.gif',
          'https://media.giphy.com/media/mz7iww9tCUnJJeZvGN/giphy.gif',
          'https://media.giphy.com/media/sTgTWEcVGK7CW3BQa7/giphy.gif',
          'https://media.giphy.com/media/DxbAro4C39Qi5kJmPb/giphy.gif',
          'https://media.giphy.com/media/qjSxTWJxqH4YDuIrOs/giphy.gif',
          'https://media.giphy.com/media/KI9oNS4JBemyI/giphy.gif',
          'https://media.giphy.com/media/7FBY7h5Psqd20/giphy.gif',
          'https://media.giphy.com/media/Ogak8XuKHLs6PYcqlp/giphy.gif',
          'https://media.giphy.com/media/FknIfejNbViSs/giphy.gif'
        ]}
        numCols={3}
        containerWidth={'100%'}
      />

      <div style={{ display: 'none' }}>
        <img src={redDot} />
        <img src={greenDot} />
      </div>
    </div>
  );
}
