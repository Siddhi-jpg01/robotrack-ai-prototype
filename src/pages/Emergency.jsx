import React from 'react';
import { AlertOctagon } from 'lucide-react';

export default function Emergency({ scenarioData }) {
  const { risk, detections, recommended_action, message } = scenarioData;
  const isEmergency = risk === 'high' || recommended_action.toLowerCase().includes('stop');

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Critical Safety State</div>
        <h1 className="page-title">Safety & Emergency Directive</h1>
        <p className="page-desc">
          High-priority overview of risk triggers and protective supervisory actions.
        </p>
      </div>

      <div className="emergency-container">
        <div className="emergency-header-badge">
          <AlertOctagon size={14} />
          <span>{isEmergency ? 'Critical Advisory Active' : 'System Operating Within Boundaries'}</span>
        </div>

        <h2 className="emergency-title">
          {isEmergency ? 'OPERATOR INTERVENTION REQUIRED' : 'NORMAL MONITORING REGIME'}
        </h2>

        <p className="emergency-desc">
          {message || 'Operating environment nominal. No high-risk target identified.'}
        </p>

        <div className="emergency-action-display">
          <span className="label">Recommended Vehicle Safety Action</span>
          <span className="instruction">
            {recommended_action ? recommended_action.toUpperCase() : 'CONTINUE MONITORING'}
          </span>
        </div>

        {detections?.length > 0 && (
          <div style={{ marginTop: 24, fontSize: 13, color: 'var(--muted)' }}>
            Triggering perception target: <strong style={{ color: 'var(--cream)' }}>{detections[0].object}</strong> ({Math.round(detections[0].confidence * 100)}% confidence)
          </div>
        )}
      </div>
    </div>
  );
}