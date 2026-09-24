import React from 'react';

export default function DetectionTable({ history = [] }) {
  if (!history || history.length === 0) {
    return (
      <div className="table-container" style={{ padding: 24, textAlign: 'center', color: 'var(--muted)' }}>
        No detection logs recorded in current session.
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="standard-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Object</th>
            <th>Confidence</th>
            <th>Risk</th>
            <th>Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td style={{ fontFamily: 'monospace' }}>{entry.time}</td>
              <td style={{ fontWeight: 600 }}>{entry.object}</td>
              <td>{Math.round(entry.confidence * 100)}%</td>
              <td>
                <span className={`risk-pill ${entry.risk}`}>
                  {entry.risk.toUpperCase()}
                </span>
              </td>
              <td>{entry.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}