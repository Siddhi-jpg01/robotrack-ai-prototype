import React from 'react';
import { LayoutDashboard, Radio, History, Activity, AlertTriangle } from 'lucide-react';

export default function Sidebar({ currentPage, onSelectPage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'live', label: 'Live Detection', icon: Radio },
    { id: 'history', label: 'Detection History', icon: History },
    { id: 'status', label: 'System Status', icon: Activity },
    { id: 'emergency', label: 'Emergency State', icon: AlertTriangle }
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-header">
          <div className="brand-wordmark">ROBOTRAC</div>
          <div className="brand-taglines">
            <span>AI Safety Monitoring</span>
            <span>Autonomous Operations</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelectPage(item.id)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer">
        <span className="system-tag">Vite 8.3 • React 19</span>
      </div>
    </aside>
  );
}