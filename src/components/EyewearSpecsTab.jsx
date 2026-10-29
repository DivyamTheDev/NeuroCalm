import React from 'react';
import { 
  Glasses, 
  Cpu, 
  Thermometer, 
  Activity, 
  Zap, 
  Wind, 
  Layers, 
  Award, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { PATENT_DETAILS } from '../data/dummyData';

export default function EyewearSpecsTab() {
  return (
    <div>
      {/* Top Banner */}
      <div className="clinical-hero-banner">
        <div>
          <h2>Patent Architecture & Hardware Specifications</h2>
          <p>
            {PATENT_DETAILS.title} • Developed at <strong>{PATENT_DETAILS.institution}</strong>. 
            Integrating optical photoplethysmography, localized thermoelectric cooling, and trigeminal neuromodulation in a lightweight 32g frame.
          </p>
        </div>
        <div className="hero-tag">
          Invention Disclosure V1.0
        </div>
      </div>

      {/* 4-Step Methodology Pipeline */}
      <div className="medical-card" style={{ marginBottom: '1.5rem' }}>
        <div className="medical-card-header">
          <div className="card-title-group">
            <Layers size={20} color="var(--primary)" />
            <h3>NeuroCalm Clinical Operational Methodology</h3>
          </div>
          <span className="status-badge badge-stable">Non-Invasive Protocol</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {PATENT_DETAILS.clinicalWorkflow.map((step, idx) => (
            <div key={idx} style={{ background: 'var(--slate-50)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--slate-200)', position: 'relative' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                {idx + 1}
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                {step.step.split('. ')[1]}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="layout-2col">
        
        {/* Left Column: Exploded Hardware Architecture */}
        <div className="medical-card" style={{ background: '#0f172a', color: 'white', borderColor: '#1e293b' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #334155', paddingBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Glasses size={22} color="#38bdf8" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>Exploded Frame Anatomy</h3>
            </div>
            <span style={{ fontSize: '0.74rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>
              TR90 Eyewear Frame
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>
                1
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>Forehead Vibration Motors</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Miniature coin vibration actuators positioned over supraorbital and supratrochlear branches of trigeminal nerve to modulate C-fiber pain transmission.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>
                2
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>Dual Temple PPG Sensors (Left & Right)</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Green/IR optical sensors measuring superficial temporal artery blood volume changes to detect arterial vasodilation before pain manifests.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>
                3
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>Infrared Thermal Sensor Matrix</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Thermopiles sampling forehead and temporal temperature variation (+0.4°C to +1.2°C) resulting from localized neurogenic inflammation.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>
                4
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>Peltier Thermoelectric Cooling Modules</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Micro cooling elements embedded within spectacle rim providing localized 18°C cooling to induce vasoconstriction and relieve burning sensation.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>
                5
              </div>
              <div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>ESP32 MCU & 180mAh Li-ion Battery</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Ultra-low power microcontroller with BLE 5.0 wireless stack, USB-C rechargeability, and 6–8 hours of uninterrupted wearable monitoring.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Technical Specs & Inventors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Specifications Table */}
          <div className="medical-card">
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
              Technical Specifications
            </h3>
            <table className="med-table">
              <tbody>
                <tr>
                  <td><strong>Frame Material</strong></td>
                  <td>{PATENT_DETAILS.specs.frameMaterial}</td>
                </tr>
                <tr>
                  <td><strong>Total Eyewear Weight</strong></td>
                  <td>{PATENT_DETAILS.specs.totalWeight}</td>
                </tr>
                <tr>
                  <td><strong>Battery & Endurance</strong></td>
                  <td>{PATENT_DETAILS.specs.powerSystem}</td>
                </tr>
                <tr>
                  <td><strong>Recharging Port</strong></td>
                  <td>{PATENT_DETAILS.specs.chargingPort}</td>
                </tr>
                <tr>
                  <td><strong>Wireless Telemetry</strong></td>
                  <td>{PATENT_DETAILS.specs.wirelessProtocol}</td>
                </tr>
                <tr>
                  <td><strong>Processing Controller</strong></td>
                  <td>{PATENT_DETAILS.specs.microcontroller}</td>
                </tr>
                <tr>
                  <td><strong>Therapy Modes</strong></td>
                  <td>Micro-Vibration + Peltier Cooling + Optional e-TNS</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Patent Inventors Credit Box */}
          <div className="medical-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Award size={20} color="var(--primary)" />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)' }}>Inventors & Academic Research Team</h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--slate-500)', marginBottom: '0.75rem' }}>
              Department of KSOP, KIET Group of Institutions (Under Section 3 of UGC Act, 1956):
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              {PATENT_DETAILS.inventors.map((inv, idx) => (
                <div key={idx} style={{ background: 'var(--slate-50)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--slate-200)' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.86rem', color: 'var(--navy)' }}>{inv.name}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--slate-500)' }}>{inv.role} • {inv.dept}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
