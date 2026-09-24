import React from 'react';

export default function Topbar({ systemStatus, cameraStatus, aiStatus }) {
  return (
    <header className="topbar">
      <div className="topbar-title">
        <span>ROBOTRAC</span>
        <span className="separator">/</span>
        <span className="mission-label">MISSION CONTROL</span>
      </div>

      <div className="topbar-telemetry">
        <div className="telemetry-node">
          <span className={`status-dot ${systemStatus}`}></span>
          <span className="label">System</span>
          <span className="val">{systemStatus}</span>
        </div>

        <div className="telemetry-node">
          <span className={`status-dot ${cameraStatus}`}></span>
          <span className="label">Camera</span>
          <span className="val">{cameraStatus}</span>
        </div>

        <div className="telemetry-node">
          <span className={`status-dot ${aiStatus}`}></span>
          <span className="label">AI</span>
          <span className="val">{aiStatus}</span>
        </div>
      </div>
    </header>
  );
}