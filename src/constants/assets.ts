import type { AssetPair, BinancePair } from '../types';

export const ASSET_PAIRS: Record<string, AssetPair> = {
  btc_idr: {
    asset: 0.10091006 // cold
      + 0.05115856 // tokocrypto
      + 0.04848258, // indodax
    name: 'BTC',
    color: '#EBAC1C'
  },
  eth_idr: {
    asset: 0.56278735 // cold
      + 0.06709137 // tokocrypto
      + 0.24344732, // indodax
    name: 'ETH',
    color: '#000000',
  },
  ada_idr: {
    asset: 2497.666734 // 553.115524 + 283.0657 + 169.829 + 924.22351 + 567.433
      + 593.4686554 // tokocrypto
      + 622.03074488, // Indodax
    name: 'ADA',
    color: '#1365EA'
  },
  theta_idr: {
    asset: 177.9221
        + 39.87638321, // Indodax
    name: 'THETA',
    color: '#5C50DD'
  },
  tfuel_idr: {
    asset: 2365.3707906, // indodax
    name: 'TFUEL',
    color: '#5C50DD'
  },
  bnb_idr: {
    asset: 0.61486509,
    name: 'BNB',
    color: '#FC5731'
  },
  cake_idr: {
    asset: 5.7543806
      + 21.6, // indodax
    name: 'CAKE',
    color: '#5CACDD'
  },
  uni_idr: {
    asset: 5.81466346, // indodax
    name: 'UNI',
    color: '#fcc19b',
  },
  link_idr: {
    asset: 9.0861151, // indodax
    name: 'LINK',
    color: '#fcc19b',
  },
  sol_idr: {
    asset: 3.76353346
     + 0.43394229, // indodax
    name: 'SOL',
    color: '#5CACDD'
  },
  xrp_idr: {
    asset: 129.9689374 // Tokocrypto
    + 160.88861662, // Indodax
    name: 'XRP',
    color: '#CFE542'
  },
  doge_idr: {
    asset: 1023.80390000,
    name: 'DOGE',
    color: '#fce51c',
  },
  enj_idr: {
    asset: 185.29151978, // indodax
    name: 'ENJ',
    color: '#fce51c',
  },
  zil_idr: {
    asset: 2898.00745595, // indodax
    name: 'ZIL',
    color: '#fce51c',
  },
  near_idr: {
    asset: 16.89676271, // indodax
    name: 'NEAR',
    color: '#fce51c',
  },
  sushi_idr: {
    asset: 40.72509417, // indodax
    name: 'SUSHI',
    color: '#fce51c',
  },
  shib_idr: {
    asset: 6542256, // indodax
    name: 'SHIB',
    color: '#fce51c',
  },
  arb_idr: {
    asset: 132.65084529, // indodax
    name: 'ARB',
    color: '#fce51c',
  },
  sui_idr: {
    asset: 62.28691666, // indodax
    name: 'SUI',
    color: '#fce51c',
  },
  pol_idr: {
    asset: 117.04796 + // tokocrypto
           93.87105246, // indodax
    name: 'POL',
    color: '#fce51c',
  },
  vet_idr: {
    asset: 3352.37532, // tokocrypto
    name: 'VET',
    color: '#fce51c',
  },
  usdt_idr: {
    asset: 0,
    name: 'USDT',
    color: '#8c8c8c'
  },
};

export const BINANCE_PAIRS: Record<string, BinancePair> = {
  ONEUSDT: {
    asset: 3749.04183, // tokocrypto
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
};
