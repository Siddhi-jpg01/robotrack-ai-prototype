import React from 'react';

export default function CameraView({ cameraStatus, aiStatus, detections, message }) {
  const isCameraDown = cameraStatus === 'disconnected';
  const isAiDown = aiStatus === 'disconnected' || aiStatus === 'inactive';
  const activeDetection = detections?.[0];

  return (
    <div className="cv-viewport">
      <div className="cv-header-bar">
        <div className="cv-meta-left">
          <span className="cam-id">CAM 01</span>
          <span className="cam-live-indicator">
            <span className={`status-dot ${cameraStatus}`}></span>
            {cameraStatus === 'connected' ? 'LIVE' : 'OFFLINE'}
          </span>
          <span className="cam-spec">FRONT CAMERA</span>
        </div>
        <div className="cv-meta-right">1920 × 1080 • 30 FPS</div>
      </div>

      <div className="cv-canvas">
        <div className="cv-corner top-left"></div>
        <div className="cv-corner top-right"></div>
        <div className="cv-corner bottom-left"></div>
        <div className="cv-corner bottom-right"></div>
        <div className="cv-crosshair"></div>

        {isCameraDown ? (
          <div className="cv-status-message">
            <span className="state-title">CAMERA INPUT DISCONNECTED</span>
            <span>Sensor feed unavailable. Check physical link.</span>
          </div>
        ) : isAiDown ? (
          <div className="cv-status-message">
            <span className="state-title">AI PERCEPTION OFFLINE</span>
            <span>Inference pipeline stopped.</span>
          </div>
        ) : activeDetection ? (
          <div className={`cv-bounding-box ${activeDetection.risk}`}>
            <div className="cv-tag">
              <span>{activeDetection.object.toUpperCase()}</span>
              <span style={{ marginLeft: 8 }}>{Math.round(activeDetection.confidence * 100)}%</span>
            </div>
          </div>
        ) : (
          <div className="cv-status-message">
            <span className="state-title">ENVIRONMENT CLEAR</span>
            <span>{message || 'No relevant object detected.'}</span>
          </div>
        )}
      </div>
    </div>
  );
}