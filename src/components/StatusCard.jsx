import React from 'react';

export default function StatusCard({ title, value, subtext }) {
  return (
    <div className="status-card">
      <div className="status-card-header">
        <span className="status-card-title">{title}</span>
      </div>
      <div>
        <div className="status-card-value">{value}</div>
        <div className="status-card-subtext">{subtext}</div>
      </div>
    </div>
  );
}