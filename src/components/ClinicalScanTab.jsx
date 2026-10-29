import React, { useState } from 'react';
import { 
  Lock, 
  Thermometer, 
  Activity, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Wind, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ClinicalScanTab({ 
  connectedDevice, 
  activePatient, 
  onNavigateToConnect,
  onScanComplete 
}) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStepText, setScanStepText] = useState('');
  const [hasScanned, setHasScanned] = useState(false); // Only show results after user explicitly clicks scan!
  const [currentScan, setCurrentScan] = useState(null);
  const [therapyDelivered, setTherapyDelivered] = useState(false);
  const [therapyDelivering, setTherapyDelivering] = useState(false);

  // When patient changes or device changes, reset to ready-to-scan state
  React.useEffect(() => {
    setHasScanned(false);
    setCurrentScan(null);
    setTherapyDelivered(false);
  }, [activePatient.id, connectedDevice?.id]);

  const handleStartScan = () => {
    if (!connectedDevice) return;

    setIsScanning(true);
    setScanProgress(0);
    setScanStepText('Initializing Dual Temple PPG (500Hz) & IR Thermopiles...');
    setTherapyDelivered(false);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 10;
        if (next === 30) {
          setScanStepText('Measuring Superficial Temporal Artery Blood Pulsation (Vasodilation)...');
        } else if (next === 60) {
          setScanStepText('Sampling Forehead Infrared Radiance & Localized Thermal Gradient...');
        } else if (next === 90) {
          setScanStepText('Calculating Heart Rate Variability (SDNN) & Sympathetic Stress Index...');
        } else if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setHasScanned(true);

            // Generate realistic medical variance based on baseline
            const randomVarianceTemp = (Math.random() * 0.4 - 0.15);
            const calculatedTemp = parseFloat((activePatient.baselineTemp + 0.6 + randomVarianceTemp).toFixed(1));
            const calculatedFahrenheit = parseFloat(((calculatedTemp * 9/5) + 32).toFixed(1));
            const calculatedStress = Math.floor(Math.min(94, Math.max(45, activePatient.lastScan.stressLevel + (Math.random() * 8 - 4))));

            const now = new Date();
            const timeStr = `Today, ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

            const newScanResult = {
              timestamp: timeStr,
              temperature: calculatedTemp,
              tempUnit: '°C',
              tempFahrenheit: calculatedFahrenheit,
              tempStatus: calculatedTemp > 37.2 ? `Elevated (+${(calculatedTemp - activePatient.baselineTemp).toFixed(1)}°C vasodilation)` : 'Normal Baseline',
              tempDiagnosis: calculatedTemp > 37.2 
                ? 'Superficial temporal artery hyperthermia detected; corroborates acute vasodilation of cranial vascular beds.'
                : 'Thermal gradient within normal resting cranial baseline.',
              stressLevel: calculatedStress,
              stressStatus: calculatedStress > 70 ? 'High Stress / Sympathetic Arousal' : 'Moderate Autonomic Load',
              hrvMetric: calculatedStress > 70 ? 'SDNN: 22 ms (Vagal Tone Depressed)' : 'SDNN: 34 ms (Moderate Tone)',
              stressDiagnosis: calculatedStress > 70 
                ? 'Heightened autonomic sympathetic activity and supraorbital muscle contraction indicate impending migraine attack.'
                : 'Physiological stress manageable; mild muscular tension observed.',
              migraineRisk: calculatedStress > 70 ? 'High (84%)' : 'Moderate (48%)',
              recommendedTherapy: 'Deliver 5-minute Peltier Cooling (18°C) + Micro-Vibration (40 Hz) intervention.'
            };

            setCurrentScan(newScanResult);
            if (onScanComplete) onScanComplete(newScanResult);
          }, 400);
          return 100;
        }
        return next;
      });
    }, 150);
  };

  const handleTriggerTherapy = () => {
    setTherapyDelivering(true);
    setTimeout(() => {
      setTherapyDelivering(false);
      setTherapyDelivered(true);
    }, 2500);
  };

  // IF DISCONNECTED: SHOW CLINICAL SAFETY GATE
  if (!connectedDevice) {
    return (
      <div className="scan-locked-card">
        <div className="lock-avatar">
          <Lock size={32} />
        </div>
        <h3>NeuroCalm Eyewear Not Connected</h3>
        <p>
          In accordance with biomedical diagnostic protocols, clinical scans require an active 
          connection with a certified NeuroCalm smart spectacle device. Please connect your spectacles 
          to enable dual-temple optical PPG and forehead infrared radiance telemetry.
        </p>
        <button className="med-btn med-btn-primary med-btn-large" onClick={onNavigateToConnect}>
          <span>Go to "Connect Your Glass" Tab</span>
          <ArrowRight size={18} />
        </button>
      </div>
    );
  }

  // IF CONNECTED: SHOW CLINICAL SCAN WORKSTATION
  return (
    <div>
      {/* Top Banner */}
      <div className="clinical-hero-banner">
        <div>
          <h2>Patient Clinical Diagnostic Scan</h2>
          <p>
            Conduct real-time physiological scanning through the connected <strong>{connectedDevice.name}</strong>. 
            Measures localized temporal vasodilation (forehead/temple temperature) and autonomic sympathetic stress markers.
          </p>
        </div>
        <div className="hero-tag">
          Active Patient: {activePatient.name} ({activePatient.id})
        </div>
      </div>

      {/* Scan Control Action Bar */}
      <div className="medical-card" style={{ marginBottom: '1.5rem', background: 'linear-gradient(to right, #ffffff, #f8fafc)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 0 3px rgba(13, 148, 136, 0.2)' }}></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--navy)' }}>Diagnostic Biosensor Telemetry</h3>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--slate-600)' }}>
              Optical Sensor: <strong>Dual Temple PPG</strong> • Thermal Sensor: <strong>Infrared Thermopile</strong> • Frame: <strong>{connectedDevice.frame}</strong>
            </p>
          </div>

          <button 
            className="med-btn med-btn-primary med-btn-large"
            onClick={handleStartScan}
            disabled={isScanning}
          >
            <Play size={18} fill="currentColor" />
            <span>{isScanning ? 'Acquiring Biosignals...' : 'Initiate Clinical Scan'}</span>
          </button>
        </div>
      </div>

      {/* In-Progress Scan Progress View */}
      {isScanning && (
        <div className="scanning-bar-box">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', color: 'var(--primary)', fontWeight: 800 }}>
            <Activity className="animate-pulse" size={22} />
            <span style={{ fontSize: '1.05rem' }}>{scanStepText}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${scanProgress}%` }}></div>
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate-500)', fontFamily: 'var(--font-mono)' }}>
            {scanProgress}% Completed
          </span>
        </div>
      )}

      {/* STATE A: AWAITING USER SCAN TRIGGER (Device connected, but user has NOT clicked scan yet) */}
      {!hasScanned && !isScanning && (
        <div className="medical-card" style={{ textAlign: 'center', padding: '3.5rem 2rem', background: '#ffffff' }}>
          <div style={{ width: '64px', height: '64px', background: '#e0f2fe', color: 'var(--primary)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <Activity size={32} />
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.5rem' }}>
            NeuroCalm Eyewear Connected & Ready
          </h3>
          <p style={{ color: 'var(--slate-600)', maxWidth: '520px', margin: '0 auto 1.75rem auto', fontSize: '0.92rem', lineHeight: 1.6 }}>
            Eyewear hardware is synchronized with <strong>{activePatient.name}</strong> ({activePatient.id}). 
            To measure the patient's current <strong>Temperature</strong> and <strong>Stress Level</strong>, click the scan button below.
          </p>
          <button 
            className="med-btn med-btn-primary med-btn-large" 
            style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
            onClick={handleStartScan}
          >
            <Play size={20} fill="currentColor" />
            <span>Click to Scan Patient</span>
          </button>
        </div>
      )}

      {/* STATE B: SCAN RESULTS DISPLAY (Strict User Requirement: Patient Temperature & Patient Stress Level ONLY AFTER SCAN) */}
      {hasScanned && currentScan && (
        <div>
          <div className="medical-card-header" style={{ marginBottom: '1rem' }}>
            <div className="card-title-group">
              <CheckCircle2 size={20} color="var(--teal)" />
              <h3>Clinical Scan Findings & Diagnostic Results</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                <Clock size={14} />
                <span>Timestamp: {currentScan.timestamp}</span>
              </div>
              <button 
                className="med-btn med-btn-outline" 
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                onClick={handleStartScan}
                disabled={isScanning}
              >
                <span>Run New Scan</span>
              </button>
            </div>
          </div>

          {/* PRIMARY RESULTS SPOTLIGHT (Temperature & Stress Level) */}
          <div className="scan-metric-grid">
            
            {/* RESULT 1: PATIENT TEMPERATURE */}
            <div className="metric-big-card temp-accent">
              <div className="metric-kicker">
                <Thermometer size={15} />
                <span>Patient Temperature (Forehead / Temple)</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <span className="metric-stat-number">{currentScan.temperature}</span>
                <span className="metric-stat-unit">°C</span>
                <span style={{ marginLeft: '0.85rem', fontSize: '1.1rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                  ({currentScan.tempFahrenheit} °F)
                </span>
              </div>

              <div>
                <span className={`status-badge ${currentScan.temperature > 37.2 ? 'badge-alert' : 'badge-stable'}`}>
                  {currentScan.tempStatus}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--slate-500)', marginLeft: '0.5rem' }}>
                  (Patient Baseline: {activePatient.baselineTemp}°C)
                </span>
              </div>

              <div className="metric-clinical-annotation">
                <strong>Medical Significance:</strong> {currentScan.tempDiagnosis}
              </div>
            </div>

            {/* RESULT 2: PATIENT STRESS LEVEL */}
            <div className="metric-big-card stress-accent">
              <div className="metric-kicker">
                <Activity size={15} />
                <span>Patient Stress Level (HRV / Sympathetic)</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <span className="metric-stat-number">{currentScan.stressLevel}</span>
                <span className="metric-stat-unit">%</span>
                <span style={{ marginLeft: '0.85rem', fontSize: '0.85rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                  ({currentScan.hrvMetric})
                </span>
              </div>

              <div>
                <span className={`status-badge ${currentScan.stressLevel > 70 ? 'badge-danger' : 'badge-alert'}`}>
                  {currentScan.stressStatus}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--slate-500)', marginLeft: '0.5rem' }}>
                  Migraine Risk: <strong>{currentScan.migraineRisk}</strong>
                </span>
              </div>

              <div className="metric-clinical-annotation">
                <strong>Autonomic Analysis:</strong> {currentScan.stressDiagnosis}
              </div>
            </div>

          </div>

          {/* SIMULATED THERAPY MODULE (Based on Patent: Peltier Cooling & Vibration) */}
          <div className="medical-card" style={{ marginTop: '1.5rem', background: '#f0fdfa', borderColor: '#99f6e4' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f766e', fontWeight: 800, fontSize: '0.98rem', marginBottom: '0.25rem' }}>
                  <Zap size={18} />
                  <span>Prescribed Non-Invasive Intervention: Dual Modality Therapy</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#134e4a', maxWidth: '780px' }}>
                  {currentScan.recommendedTherapy} Trigeminal nerve micro-vibration modulates C-fiber pain transmission, 
                  while localized thermoelectric cooling induces vasoconstriction to abort migraine progression.
                </p>
              </div>

              <button 
                className="med-btn med-btn-teal"
                onClick={handleTriggerTherapy}
                disabled={therapyDelivering}
              >
                {therapyDelivering ? (
                  <span>Delivering Cooling (18°C) + 40Hz Vibe...</span>
                ) : therapyDelivered ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} /> Therapy Completed (5m Cycle)
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Wind size={16} /> Trigger Spectacle Relief Therapy
                  </span>
                )}
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
