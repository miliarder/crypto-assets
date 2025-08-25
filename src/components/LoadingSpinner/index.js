import React from 'react';

function LoadingSpinner() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '200px',
      color: 'white'
    }}>
      <div>Loading portfolio data...</div>
    </div>
  );
}

export default LoadingSpinner;
