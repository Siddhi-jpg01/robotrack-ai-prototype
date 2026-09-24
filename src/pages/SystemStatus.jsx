import React from 'react';
import StatusCard from '../components/StatusCard';

export default function SystemStatus({ scenarioData }) {
  const { system_status, camera_status, ai_status, vehicle_status } = scenarioData;

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Hardware & Pipeline</div>
        <h1 className="page-title">System Diagnostics</h1>
        <p className="page-desc">
          Operational health metrics across edge perception, sensors, and execution submodules.
        </p>
      </div>

      <div className="system-cards-grid">
        <StatusCard title="System" value={system_status} subtext="Central supervisory node" />
        <StatusCard title="Camera" value={camera_status} subtext="RTSP hardware bridge" />
        <StatusCard title="AI Perception" value={ai_status} subtext="ONNX Runtime engine" />
        <StatusCard title="Vehicle" value={vehicle_status} subtext="Guidance computer" />
      </div>

      <div className="telemetry-grid">
        <div className="diagnostic-card">
          <div className="diagnostic-card-header">Camera Input Subsystem</div>
          <div className="diagnostic-row">
            <span className="key">Input Device</span>
            <span className="val">CAM_01_PRIMARY (Sony IMX)</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Resolution</span>
            <span className="val">1920 × 1080 @ 30fps</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Signal Link</span>
            <span className="val">{camera_status === 'connected' ? 'LOCKED (GMSL2)' : 'DISCONNECTED'}</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Latency</span>
            <span className="val">{camera_status === 'connected' ? '18 ms' : '—'}</span>
          </div>
        </div>

        <div className="diagnostic-card">
          <div className="diagnostic-card-header">AI Inference Pipeline</div>
          <div className="diagnostic-row">
            <span className="key">Model Name</span>
            <span className="val">AgriPercept-v4.1.onnx</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Compute Hardware</span>
            <span className="val">Embedded NPU (8.2 TOPS)</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Inference Time</span>
            <span className="val">{ai_status === 'active' ? '31.4 ms' : '0.0 ms'}</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Pipeline State</span>
            <span className="val">{ai_status.toUpperCase()}</span>
          </div>
        </div>

        <div className="diagnostic-card">
          <div className="diagnostic-card-header">Data & Event Streaming</div>
          <div className="diagnostic-row">
            <span className="key">Data Protocol</span>
            <span className="val">Internal React Event Loop</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Transport</span>
            <span className="val">Direct Memory State Contract</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Buffer Depth</span>
            <span className="val">256 Frames</span>
          </div>
        </div>

        <div className="diagnostic-card">
          <div className="diagnostic-card-header">Mission Session Context</div>
          <div className="diagnostic-row">
            <span className="key">Runtime Mode</span>
            <span className="val">OPERATOR_MONITORING</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Control State</span>
            <span className="val">PROTOTYPE_READ_ONLY</span>
          </div>
          <div className="diagnostic-row">
            <span className="key">Core System Host</span>
            <span className="val">Vite / Local Host Node</span>
          </div>
        </div>
      </div>
    </div>
  );
}