import React from 'react';
import { Chart } from 'react-google-charts';
import { UI_CONFIG } from '../../constants/config';

function PortfolioChart({ summary }) {
  const chartData = [
    ['Asset', 'Value'],
    ...Object.keys(summary).map(key => {
      const { name, total } = summary[key];
      return [name, total];
    })
  ];

  return (
    <div style={{ width: 500, maxWidth: '100%' }} className="cart">
      <Chart
        width={UI_CONFIG.CHART_CONFIG.width}
        height={UI_CONFIG.CHART_CONFIG.height}
        chartType="PieChart"
        loader={<div />}
        data={chartData}
        rootProps={{ 'data-testid': '1' }}
        options={{
          backgroundColor: UI_CONFIG.CHART_CONFIG.backgroundColor,
          legend: UI_CONFIG.CHART_CONFIG.legend
        }}
      />
    </div>
  );
}

export default PortfolioChart;
