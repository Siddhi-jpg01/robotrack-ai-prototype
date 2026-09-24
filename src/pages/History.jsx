import React from 'react';
import DetectionTable from '../components/DetectionTable';

export default function History({ history = [] }) {
  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Audit Log</div>
        <h1 className="page-title">Detection History</h1>
        <p className="page-desc">
          Sequential log of AI perception events, confidence scores, and safety directives.
        </p>
      </div>

      <DetectionTable history={history} />
    </div>
  );
}