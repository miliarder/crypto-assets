// Currency formatter for Indonesian Rupiah
export const currencyFormatter = new Intl.NumberFormat('id', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});

// Percentage formatter
export const formatPercentage = (value: number, decimals: number = 1): string => {
  return Number(value).toFixed(decimals);
};

// Number formatter with specific decimal places
export const formatNumber = (value: number, decimals: number = 2): string => {
  return Number(value).toFixed(decimals);
};
