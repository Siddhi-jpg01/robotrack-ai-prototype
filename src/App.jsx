import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import LiveDetection from './pages/LiveDetection';
import History from './pages/History';
import SystemStatus from './pages/SystemStatus';
import Emergency from './pages/Emergency';
import { scenarios } from './data/mockData';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [currentScenarioKey, setCurrentScenarioKey] = useState('safe');
  
  const [history, setHistory] = useState([
    {
      time: '20:41',
      object: 'Person',
      confidence: 0.94,
      risk: 'high',
      action: 'Emergency Stop'
    },
    {
      time: '20:39',
      object: 'Animal',
      confidence: 0.91,
      risk: 'high',
      action: 'Stop'
    },
    {
      time: '20:37',
      object: 'Large Obstacle',
      confidence: 0.88,
      risk: 'medium',
      action: 'Slow Down / Stop'
    },
    {
      time: '20:35',
      object: 'Tractor',
      confidence: 0.76,
      risk: 'low',
      action: 'Monitor'
    }
  ]);

  const activeScenario = scenarios[currentScenarioKey] || scenarios.safe;
  const scenarioKeys = Object.keys(scenarios);

  const handleScenarioChange = (newKey) => {
    setCurrentScenarioKey(newKey);
    const target = scenarios[newKey];
    
    if (target && target.detections && target.detections.length > 0) {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const firstDet = target.detections[0];

      setHistory((prev) => [
        {
          time: timeStr,
          object: firstDet.object,
          confidence: firstDet.confidence,
          risk: target.risk,
          action: target.recommended_action
        },
        ...prev.slice(0, 29) // Retain most recent 30 records
      ]);
    }
  };

  return (
    <div className="app-container">
      <Sidebar currentPage={currentPage} onSelectPage={setCurrentPage} />
      <div className="main-viewport">
        <Topbar
          systemStatus={activeScenario.system_status}
          cameraStatus={activeScenario.camera_status}
          aiStatus={activeScenario.ai_status}
        />
        <main className="content-area">
          {currentPage === 'dashboard' && (
            <Dashboard
              scenarioData={activeScenario}
              currentScenario={currentScenarioKey}
              onSelectScenario={handleScenarioChange}
              scenarioKeys={scenarioKeys}
            />
          )}
          {currentPage === 'live' && (
            <LiveDetection
              scenarioData={activeScenario}
              currentScenario={currentScenarioKey}
              onSelectScenario={handleScenarioChange}
              scenarioKeys={scenarioKeys}
            />
          )}
          {currentPage === 'history' && <History history={history} />}
          {currentPage === 'status' && <SystemStatus scenarioData={activeScenario} />}
          {currentPage === 'emergency' && <Emergency scenarioData={activeScenario} />}
        </main>
      </div>
    </div>
  );
}