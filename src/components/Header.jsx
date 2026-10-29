import React from 'react';
import { Eye, Activity, User, ShieldCheck, Wifi, WifiOff, Battery } from 'lucide-react';

export default function Header({ 
  patients, 
  activePatientKey, 
  setActivePatientKey, 
  connectedDevice, 
  onDisconnect 
}) {
  const currentPatient = patients[activePatientKey];

  return (
    <header className="header-glass">
      <div className="header-container">
        
        {/* Logo and Medical Title */}
        <div className="logo-group">
          <div className="logo-icon-box">
            <Eye size={24} strokeWidth={2.2} />
          </div>
          <div className="logo-text">
            <h1>Neuro<span>Calm</span></h1>
            <p>Smart Eyewear • Migraine Detection & Neuromodulation</p>
          </div>
        </div>

        {/* Right Action Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          
          {/* Patient Selector */}
          <div className="patient-badge">
            <User size={16} color="var(--primary)" />
            <span style={{ color: 'var(--slate-500)', fontSize: '0.8rem', fontWeight: 600 }}>Patient:</span>
            <select 
              value={activePatientKey} 
              onChange={(e) => setActivePatientKey(e.target.value)}
              title="Select Patient Profile"
            >
              {Object.keys(patients).map((key) => (
                <option key={key} value={key}>
                  {patients[key].name} ({patients[key].id}) • {patients[key].age}y
                </option>
              ))}
            </select>
          </div>

          {/* Connection Status Pill */}
          {connectedDevice ? (
            <div className="device-status-pill connected" title="Spectacles BLE 5.0 Synced">
              <span className="pulse-indicator"></span>
              <span>{connectedDevice.name.split(' (')[0]} Connected</span>
              <span style={{ opacity: 0.85, fontSize: '0.74rem', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <Battery size={13} /> {connectedDevice.battery}%
              </span>
            </div>
          ) : (
            <div className="device-status-pill disconnected" title="No Spectacles Connected">
              <span className="pulse-indicator"></span>
              <span>No Spectacle Connected</span>
            </div>
          )}

        </div>

      </div>
    </header>
  );
}
