import React from 'react';
import CameraView from '../components/CameraView';
import DetectionPanel from '../components/DetectionPanel';

export default function LiveDetection({
  scenarioData,
  currentScenario,
  onSelectScenario,
  scenarioKeys = []
}) {
  const {
    camera_status,
    ai_status,
    detections,
    risk,
    recommended_action,
    message
  } = scenarioData;

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Perception Stream</div>
        <h1 className="page-title">Live Detection</h1>
        <p className="page-desc">
          Computer vision classification, confidence monitoring, and real-time bounding overlays.
        </p>
      </div>

      <div className="dashboard-operations-grid">
        <CameraView
          cameraStatus={camera_status}
          aiStatus={ai_status}
          detections={detections}
          message={message}
        />
        <DetectionPanel
          detections={detections}
          risk={risk}
          recommendedAction={recommended_action}
        />
      </div>

      <div className="sim-controls-panel">
        <span className="sim-label">Simulate Input:</span>
        <div className="sim-button-group">
          {scenarioKeys.map((key) => (
            <button
              key={key}
              className={`sim-btn ${currentScenario === key ? 'active' : ''}`}
              onClick={() => onSelectScenario(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}