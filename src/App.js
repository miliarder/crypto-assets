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
    asset: 0.10091006 //cold
      + 0.0353102, //tokocrypto
    name: 'BTC',
    color: '#EBAC1C'
  },
  eth_idr: {
    asset: 0.56278735 //cold
      + 0.06709137, //tokocrypto
    name: 'ETH',
    color: '#000000',
  },
  ada_idr: {
    asset: 2497.666734 // 553.115524 + 283.0657 + 169.829 + 924.22351 + 567.433
      + 305.15864, //tokocrypto
    name: 'ADA',
    color: '#1365EA'
  },
  theta_idr: {
    asset: 177.9221,
    name: 'THETA',
    color: '#5C50DD'
  },
  bnb_idr: {
    asset: 0.61486509,
    name: 'BNB',
    color: '#FC5731'
  },
  cake_idr: {
    asset: 5.7543806
      + 21.6, //indodax
    name: 'CAKE',
    color: '#5CACDD'
  },
  uni_idr: {
    asset: 5.81466346,
    name: 'UNI',
    color: '#fcc19b',
  },
  link_idr: {
    asset: 5.37634408,
    name: 'LINK',
    color: '#fcc19b',
  },
  sol_idr: {
    asset: 3.76353346,
    name: 'SOL',
    color: '#5CACDD'
  },
  xrp_idr: {
    asset: 46.95399,
    name: 'XRP',
    color: '#CFE542'
  },
  doge_idr: {
    asset: 1023.80390000,
    name: 'DOGE',
    color: '#fce51c',
  },
  enj_idr: {
    asset: 185.29151978,
    name: 'ENJ',
    color: '#fce51c',
  },
  zil_idr: {
    asset: 2898.00745595,
    name: 'ENJ',
    color: '#fce51c',
  },
  usdt_idr: {
    asset: 0,
    name: 'USDT',
    color: '#8c8c8c'
  },
};

const BINACE_pairs = {
  ONEUSDT: {
    asset: 3749.04183,
    name: 'ONE',
    color: '#8c8c8c',
    inUSD: true,
  },
  USDTBIDR: {
    asset: 0,
    name: 'USDT (Binance)',
    color: '#8c8c8c',
    inUSD: false,
  }
  // ADAUSDT: {
  //   asset: 0,
  //   name: 'ADA',
  //   color: '#8c8c8c',
  //   inUSD: true,
  // },
  // BNBUSDT: {
  //   asset: 0,
  //   name: 'BNB',
  //   color: '#8c8c8c',
  //   inUSD: true,
  // },
  // UNIUSDT: {
  //   asset: 0,
  //   name: 'UNI',
  //   color: '#8c8c8c',
  //   inUSD: true,
  // }
}

function fngColouring(indexValue) {
  let colorCode = ''
  if (indexValue >= 90) { colorCode = '65c64c' }
  if (indexValue < 90) { colorCode = '79d23c' }
  if (indexValue <= 75) { colorCode = '9bbe44' }
  if (indexValue <= 63) { colorCode = 'c6bf22' }
  if (indexValue <= 54) { colorCode = 'dfce60' }
  if (indexValue <= 46) { colorCode = 'd8bc59' }
  if (indexValue <= 35) { colorCode = 'e39d64' }
  if (indexValue <= 25) { colorCode = 'd17339' }
  if (indexValue <= 10) { colorCode = 'b74d34' }

  return colorCode
}

const modal = 61419031 - 4971934 - 2200714 - 3367336 + 10000000 + 5000000 +
  5000000 + 1000000 + 1500000 + 1500000 + 1500000 + 2000000 + 2500000 + 3000000 +
  3000000 + 2000000 + 1500000 + 1500000 + 1500000 + 3000000 + 3000000 +
  2483889 + 3500000 + 3000000 + 3000000 + 1000000 + 1000000 + 381600 + 619504 + 5000000 +
  2504010 + 4000000 + 4000000 + 1500000 + 750000 + 500000 + 250000 + 3000000 + 5000000 + 800000 + 400000 + 400000 + 1003000 +
  1000000;

let timer;

export default function App() {
  const [grandTotal, setTotal] = useState(0);
  const [summary, setSummary] = useState({});
  const [precent, setPercent] = useState(0);
  const [BTCTotal, setBTCTotal] = useState(0);

  const [fearIndex, setFearIndex] = useState([]);
  const [rsi, setRsi] = useState(0);

  useEffect(() => {

    clearInterval(timer);
    const fetchData = async () => {
      try {

        const requestArr = [];

        requestArr.push(fetch(`https://api.binance.com/api/v3/ticker/price?symbol=USDTBIDR`, {
          cache: 'no-cache'
        }));


        requestArr.push(fetch(`https://indodax.com/api/summaries`, {
          cache: 'no-cache'
        }))

        for (let key in BINACE_pairs) {
          const pair = BINACE_pairs[key];
          const { name } = pair;

          requestArr.push(fetch(`https://api.binance.com/api/v3/ticker/price?symbol=` + key, {
            cache: 'no-cache'
          }));

        }

        const [BIDRRes, idxRes, ...tkoRes] = await Promise.all(requestArr);

        const {price: IDRPrice, symbol} = await BIDRRes.json();


        const idxData = await idxRes.json();
        const { tickers } = idxData;
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

          if (name === 'BTC') {
            setBTCTotal(v);
          }

          summaryData[key] = {
            pair: key.replace('_', '').toUpperCase(),
            color,
            name,
            coin,
            price: price,
            total: v
          };
          total += v;
        }

        for (let i in tkoRes) {
          const res = await tkoRes[i].json();
          let { price, symbol } = res;
          if(symbol in BINACE_pairs){
            const {asset, name, color, inUSD} = BINACE_pairs[symbol];
            if(inUSD){
              price = IDRPrice * price;
            }

            const v = asset * Number(price);
            summaryData[symbol] = {
              pair: symbol,
              color,
              name,
              coin: asset,
              price,
              total: v,
            }

            total += v;
          }
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

      try {
        const res = await fetch(`https://api.alternative.me/fng/?limit=2`, {
          cache: 'no-cache'
        });

        const data = await res.json();
        setFearIndex(data.data);
      } catch (e) {
        console.log('error', e);
      }

      try {
        const res = await fetch(`https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmRyb2JyYXllbkBnbWFpbC5jb20iLCJpYXQiOjE2NDI4ODQyNTksImV4cCI6Nzk1MDA4NDI1OX0.ZYR1fjAYGGkUgW1DpcUxYbB4cQ9ff9jHSJCWg5YShAc&exchange=binance&symbol=BTC/USDT&interval=1d`);
        const data = await res.json();
        if (data.value) {
          setRsi(data.value);
        }
      } catch (e) {
        console.log('error', e);
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
  const todayFearIndex = fearIndex?.[0];

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', height: '100%' }}>
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

            {isLoss && <Note total={grandTotal} losses={Math.abs(gain)} />}
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

      {todayFearIndex && <div style={{ padding: 20 }}>
        <div className={`alert`} style={{ backgroundColor: `#${fngColouring(+todayFearIndex?.value)}` }}>
          <strong>Fear Index</strong>: {todayFearIndex?.value_classification} <strong>{+todayFearIndex?.value}</strong>
        </div>
      </div>}

      {rsi > 0 && (<div style={{ padding: 20, paddingTop: 0, marginTop: -15, color: 'white' }}>
        Daily RSI : <strong>{rsi.toFixed(2)}</strong>
      </div>)}
      {/*
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

   */}
      <div style={{ display: 'none' }}>
        <img src={redDot} />
        <img src={greenDot} />
      </div>
    </div>
  );
}
