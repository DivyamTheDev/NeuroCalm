import React, { useState } from 'react';
import Header from './components/Header';
import ConnectGlassTab from './components/ConnectGlassTab';
import ClinicalScanTab from './components/ClinicalScanTab';
import WeeklyReportTab from './components/WeeklyReportTab';
import EyewearSpecsTab from './components/EyewearSpecsTab';
import Footer from './components/Footer';
import { DUMMY_GLASSES, DUMMY_PATIENTS } from './data/dummyData';
import { Glasses, Activity, BarChart2, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('connect');
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [activePatientKey, setActivePatientKey] = useState('p1');
  const [patients, setPatients] = useState(DUMMY_PATIENTS);

  const activePatient = patients[activePatientKey];

  const handleConnect = (device) => {
    setConnectedDevice(device);
  };

  const handleDisconnect = () => {
    setConnectedDevice(null);
  };

  const handleScanComplete = (newScan) => {
    setPatients((prev) => ({
      ...prev,
      [activePatientKey]: {
        ...prev[activePatientKey],
        lastScan: newScan
      }
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Top Medical Header */}
      <Header
        patients={patients}
        activePatientKey={activePatientKey}
        setActivePatientKey={setActivePatientKey}
        connectedDevice={connectedDevice}
        onDisconnect={handleDisconnect}
      />

      {/* Main Tab Navigation */}
      <nav className="tabs-bar">
        <div className="tabs-inner">
          <button 
            className={`nav-tab-button ${activeTab === 'connect' ? 'active' : ''}`}
            onClick={() => setActiveTab('connect')}
          >
            <Glasses size={18} />
            <span>1. Connect Your Glass</span>
          </button>

          <button 
            className={`nav-tab-button ${activeTab === 'scan' ? 'active' : ''}`}
            onClick={() => setActiveTab('scan')}
          >
            <Activity size={18} />
            <span>2. Patient Clinical Scan</span>
          </button>

          <button 
            className={`nav-tab-button ${activeTab === 'report' ? 'active' : ''}`}
            onClick={() => setActiveTab('report')}
          >
            <BarChart2 size={18} />
            <span>3. Weekly Report & Comparison</span>
          </button>

          <button 
            className={`nav-tab-button ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <Layers size={18} />
            <span>4. Eyewear Architecture</span>
          </button>
        </div>
      </nav>

      {/* Main Workspace Body */}
      <main className="main-content">
        {activeTab === 'connect' && (
          <ConnectGlassTab
            devices={DUMMY_GLASSES}
            connectedDevice={connectedDevice}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
            onNavigateToScan={() => setActiveTab('scan')}
          />
        )}

        {activeTab === 'scan' && (
          <ClinicalScanTab
            connectedDevice={connectedDevice}
            activePatient={activePatient}
            onNavigateToConnect={() => setActiveTab('connect')}
            onScanComplete={handleScanComplete}
          />
        )}

        {activeTab === 'report' && (
          <WeeklyReportTab
            activePatient={activePatient}
          />
        )}

        {activeTab === 'specs' && (
          <EyewearSpecsTab />
        )}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
