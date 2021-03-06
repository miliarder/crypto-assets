import React from "react";

export default function Note({total, losses}) {
  
  const percent = (losses / (total / 100)).toFixed(1);
  
  return <div style={{color: '#FFF', marginTop: 5, fontSize: 11}}>
    Need to regain <strong>{percent}%</strong> to reclaim all losses
  </div>
}
