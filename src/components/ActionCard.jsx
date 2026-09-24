import React from 'react';

export default function ActionCard({ action }) {
  return (
    <div className="action-card">
      <div className="metric-card-label">Recommended Action</div>
      <div className="action-card-value">{action || 'Continue Monitoring'}</div>
    </div>
  );
}