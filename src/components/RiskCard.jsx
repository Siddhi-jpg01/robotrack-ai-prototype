import React from 'react';

export default function RiskCard({ risk, message }) {
  const riskClass = `risk-${risk?.toLowerCase() || 'unknown'}`;

  return (
    <div className="metric-card">
      <div className="metric-card-label">Current Risk</div>
      <div className={`metric-card-state ${riskClass}`}>
        {risk ? risk.toUpperCase() : 'UNKNOWN'}
      </div>
      <div className="metric-card-desc">{message}</div>
    </div>
  );
}