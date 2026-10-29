import React from 'react';

export default function Footer() {
  return (
    <footer className="medical-footer">
      <div className="footer-inner">
        {/* Exact line requested by user */}
        <div className="team-statement">
          Version 1 developerd by Team- NeuroNova
        </div>
        <div className="sub-statement">
          NeuroCalm Smart Spectacles • Migraine Detection & Trigeminal Neuromodulation Eyewear
        </div>
        <div style={{ fontSize: '0.74rem', color: 'var(--slate-400)', marginTop: '0.25rem' }}>
          Biomedical Prototype Version 1.0 • For clinical demonstration and laboratory evaluation only.
        </div>
      </div>
    </footer>
  );
}
