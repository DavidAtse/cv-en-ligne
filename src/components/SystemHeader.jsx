import React from 'react';

export default function SystemHeader({ tagline = "RESUME | 2026" }) {
  return (
    <div className="system-header">
      <div className="system-left">
        <span className="system-tag">{tagline}</span>
        <div className="header-divider-line"></div>
      </div>
      <div className="system-tab">
        <div className="tab-dots">
          <span className="tab-dot"></span>
          <span className="tab-dot"></span>
          <span className="tab-dot"></span>
        </div>
      </div>
    </div>
  );
}
