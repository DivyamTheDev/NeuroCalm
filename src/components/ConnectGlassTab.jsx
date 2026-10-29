import React, { useState } from 'react';
import { 
  Glasses, 
  Bluetooth, 
  Battery, 
  Wifi, 
  CheckCircle2, 
  RefreshCw, 
  Cpu, 
  Thermometer, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  Radio
} from 'lucide-react';

export default function ConnectGlassTab({ 
  devices, 
  connectedDevice, 
  onConnect, 
  onDisconnect, 
  onNavigateToScan 
}) {
  const [connectingId, setConnectingId] = useState(null);
  const [handshakeStep, setHandshakeStep] = useState('');
  const [scanRefreshing, setScanRefreshing] = useState(false);

  const handleConnectClick = (device) => {
    if (connectedDevice && connectedDevice.id === device.id) {
      onDisconnect();
      return;
    }

    setConnectingId(device.id);
    setHandshakeStep('Negotiating BLE 5.0 handshake...');

    setTimeout(() => {
      setHandshakeStep('Verifying ESP32 microcontroller firmware v1.0.4...');
    }, 700);

    setTimeout(() => {
      setHandshakeStep('Calibrating Dual PPG & Infrared Thermopile bus...');
    }, 1400);

    setTimeout(() => {
      onConnect(device);
      setConnectingId(null);
      setHandshakeStep('');
    }, 2100);
  };

  const handleRefresh = () => {
    setScanRefreshing(true);
    setTimeout(() => {
      setScanRefreshing(false);
    }, 900);
  };

  return (
    <div>
      {/* Clinical Banner */}
      <div className="clinical-hero-banner">
        <div>
          <h2>Device Manager: Connect Your NeuroCalm Glass</h2>
          <p>
            Pair your biomedical spectacles via Bluetooth Low Energy (BLE 5.0). Real-time telemetry 
            synchronizes forehead/temple thermal radiance, microvascular PPG volume, and trigeminal 
            neuromodulation controls for clinical evaluation.
          </p>
        </div>
        <div className="hero-tag">
          Prototype Version 1.0 • BLE 5.0
        </div>
      </div>

      <div className="layout-2col">
        
        {/* Left Column: Discovered Prototype Devices */}
        <div className="medical-card">
          <div className="medical-card-header">
            <div className="card-title-group">
              <Glasses size={20} color="var(--primary)" />
              <h3>Discovered NeuroCalm Eyewear</h3>
            </div>
            <button 
              className="med-btn med-btn-outline" 
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
              onClick={handleRefresh}
              disabled={scanRefreshing}
            >
              <RefreshCw size={13} className={scanRefreshing ? 'animate-spin' : ''} />
              {scanRefreshing ? 'Scanning...' : 'Rescan BLE'}
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {devices.map((device) => {
              const isCurrent = connectedDevice && connectedDevice.id === device.id;
              const isPending = connectingId === device.id;

              return (
                <div 
                  key={device.id} 
                  className={`device-item-card ${isCurrent ? 'connected-active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="device-avatar">
                      <Glasses size={26} />
                    </div>
                    <div className="device-meta-content">
                      <h4>{device.name}</h4>
                      <p>{device.frame} • Weight: {device.weight}</p>
                      
                      <div className="chips-row">
                        {device.isPrimary && <span className="chip chip-cyan">Recommended V1</span>}
                        <span className="chip">RSSI: {device.rssi} dBm</span>
                        <span className="chip chip-green">
                          <Battery size={11} style={{ display: 'inline', marginRight: '2px' }} />
                          {device.battery}%
                        </span>
                        <span className="chip">{device.firmware}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <button
                      className={`med-btn ${isCurrent ? 'med-btn-danger' : 'med-btn-primary'}`}
                      style={{ minWidth: '115px' }}
                      onClick={() => handleConnectClick(device)}
                      disabled={isPending || (connectingId && !isPending)}
                    >
                      {isPending ? (
                        <span>Connecting...</span>
                      ) : isCurrent ? (
                        'Disconnect'
                      ) : (
                        'Connect Glass'
                      )}
                    </button>
                    {isPending && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}>
                        {handshakeStep}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Notice */}
          <div style={{ marginTop: '1rem', padding: '0.85rem 1rem', background: 'var(--slate-50)', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--slate-600)', border: '1px solid var(--slate-200)' }}>
            <strong>Note for Version 1 Prototype:</strong> Selecting <em>NeuroCalm Glass V1 (NC-PRO-8842)</em> connects the full dual-sensor optical PPG and IR temperature matrix required for clinical scans.
          </div>
        </div>

        {/* Right Column: Hardware Telemetry HUD */}
        <div className="medical-card">
          <div className="medical-card-header">
            <div className="card-title-group">
              <Cpu size={20} color="var(--primary)" />
              <h3>Hardware Telemetry Status</h3>
            </div>
            {connectedDevice ? (
              <span className="status-badge badge-stable">BLE Synced (Active)</span>
            ) : (
              <span className="status-badge badge-alert">Awaiting Connection</span>
            )}
          </div>

          {connectedDevice ? (
            <div>
              <div style={{ padding: '1rem', background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '10px', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f766e', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={18} />
                  Eyewear Telemetry Stream Active
                </div>
                <p style={{ fontSize: '0.82rem', color: '#115e59' }}>
                  Paired with <strong>{connectedDevice.name}</strong>. Physiological scanning is now unlocked in the <strong>Patient Clinical Scan</strong> tab.
                </p>
              </div>

              {/* Hardware Telemetry Parameters */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'var(--slate-50)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--slate-200)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Frame Temp</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>32.1 °C</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--teal)', fontWeight: 600 }}>Normal Ambient</div>
                </div>

                <div style={{ background: 'var(--slate-50)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--slate-200)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>PPG Sampling</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>500 Hz</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--success)', fontWeight: 600 }}>Signal Quality: 99.4%</div>
                </div>

                <div style={{ background: 'var(--slate-50)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--slate-200)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Peltier Cooling</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>Standby</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-600)', fontWeight: 600 }}>Target: 18°C on demand</div>
                </div>

                <div style={{ background: 'var(--slate-50)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--slate-200)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase' }}>Vibe Motors</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-mono)' }}>Armed</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--slate-600)', fontWeight: 600 }}>Dual temple & forehead</div>
                </div>
              </div>

              {/* Action Button to Advance */}
              <button 
                className="med-btn med-btn-teal" 
                style={{ width: '100%', padding: '0.85rem' }}
                onClick={onNavigateToScan}
              >
                <span>Go to Clinical Scan Screen</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--slate-100)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-400)', marginBottom: '1rem' }}>
                <Radio size={28} />
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>No Hardware Linked</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', maxWidth: '320px', margin: '0 auto 1.25rem auto' }}>
                Click <strong>"Connect Glass"</strong> on any dummy spectacle to initialize Bluetooth telemetry and enable scan capabilities.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
