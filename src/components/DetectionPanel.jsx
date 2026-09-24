import React from 'react';

export default function DetectionPanel({ detections, risk, recommendedAction }) {
  const detection = detections?.[0];

  return (
    <div className="metric-card" style={{ height: '100%', justifyContent: 'space-between' }}>
      <div>
        <div className="metric-card-label">Detection Diagnostics</div>
        
        <div style={{ marginTop: 12, marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Identified Target
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--cream)', marginTop: 2 }}>
            {detection ? detection.object : 'None'}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Confidence Level
          </div>
          <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--cream)', marginTop: 2 }}>
            {detection ? `${Math.round(detection.confidence * 100)}%` : '—'}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Risk Classification
          </div>
          <div className={`metric-card-state risk-${risk}`} style={{ fontSize: 18, marginTop: 2 }}>
            {risk ? risk.toUpperCase() : 'UNKNOWN'}
          </div>
        </div>
      </div>

      <div className="action-card" style={{ margin: 0 }}>
        <div className="metric-card-label">Operational Directive</div>
        <div className="action-card-value" style={{ fontSize: 16 }}>{recommendedAction}</div>
      </div>
    </div>
  );
}