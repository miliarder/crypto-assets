// Currency formatter for Indonesian Rupiah
export const currencyFormatter = new Intl.NumberFormat('id', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

// Percentage formatter
export const formatPercentage = (value, decimals = 1) => {
  return Number(value).toFixed(decimals);
};

// Number formatter with specific decimal places
export const formatNumber = (value, decimals = 2) => {
  return Number(value).toFixed(decimals);
};
