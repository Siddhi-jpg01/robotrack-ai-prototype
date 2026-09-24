import React from 'react';
import StatusCard from '../components/StatusCard';
import CameraView from '../components/CameraView';
import RiskCard from '../components/RiskCard';
import ActionCard from '../components/ActionCard';

export default function Dashboard({
  scenarioData,
  currentScenario,
  onSelectScenario,
  scenarioKeys = []
}) {
  const {
    system_status,
    camera_status,
    ai_status,
    vehicle_status,
    detections,
    risk,
    recommended_action,
    message
  } = scenarioData;

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Autonomous Operations</div>
        <h1 className="page-title">Mission Dashboard</h1>
        <p className="page-desc">
          Real-time perception and safety monitoring for the Robotrac operating environment.
        </p>
      </div>

      <div className="system-cards-grid">
        <StatusCard
          title="System"
          value={system_status}
          subtext={system_status === 'active' ? 'Operational' : 'Attention Required'}
        />
        <StatusCard
          title="Camera"
          value={camera_status}
          subtext={camera_status === 'connected' ? 'Signal stable' : 'Link lost'}
        />
        <StatusCard
          title="AI Perception"
          value={ai_status}
          subtext={ai_status === 'active' ? 'Processing' : 'Stopped'}
        />
        <StatusCard
          title="Vehicle"
          value={vehicle_status}
          subtext={vehicle_status === 'ready' ? 'Autonomous mode' : 'Standby'}
        />
      </div>

      <div className="dashboard-operations-grid">
        <CameraView
          cameraStatus={camera_status}
          aiStatus={ai_status}
          detections={detections}
          message={message}
        />
        <div className="operations-sidebar">
          <RiskCard risk={risk} message={message} />
          <ActionCard action={recommended_action} />
        </div>
      </div>

      <div className="sim-controls-panel">
        <span className="sim-label">Simulation Testbed:</span>
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