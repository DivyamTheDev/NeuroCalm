import React, { useState } from 'react';
import { 
  Calendar, 
  TrendingDown, 
  TrendingUp, 
  Thermometer, 
  Activity, 
  FileText, 
  Download, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export default function WeeklyReportTab({ activePatient }) {
  const [selectedView, setSelectedView] = useState('comparison'); // 'comparison', 'current', 'previous'
  const report = activePatient.weeklyComparison;
  const metrics = report.metrics;

  const handleExport = () => {
    alert(`Generating Official NeuroCalm Clinical PDF Report for ${activePatient.name} (${activePatient.id})...\nPrepared by Team- NeuroNova.`);
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="clinical-hero-banner">
        <div>
          <h2>Weekly Longitudinal Analytics & Week-over-Week Comparison</h2>
          <p>
            Track physiological response markers across 7 days. Compares <strong>{report.currentWeekLabel}</strong> against <strong>{report.previousWeekLabel}</strong> to quantify therapeutic efficacy of NeuroCalm smart eyewear.
          </p>
        </div>
        <div className="hero-tag">
          Patient: {activePatient.name} • {activePatient.diagnosis}
        </div>
      </div>

      {/* Comparison KPI Grid */}
      <div className="comparison-hero-grid">
        
        {/* KPI 1: Stress Level */}
        <div className="comp-box">
          <div className="comp-label">Average Stress Level</div>
          <div className="comp-val">{metrics.avgStress.current}</div>
          <div className="comp-trend green">
            <TrendingDown size={16} />
            <span>{metrics.avgStress.change} vs prev ({metrics.avgStress.previous})</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', marginTop: '0.35rem' }}>
            {metrics.avgStress.note}
          </div>
        </div>

        {/* KPI 2: Temple Temperature */}
        <div className="comp-box">
          <div className="comp-label">Avg Temple Temperature</div>
          <div className="comp-val">{metrics.avgTemp.current}</div>
          <div className="comp-trend green">
            <TrendingDown size={16} />
            <span>{metrics.avgTemp.change} vs prev ({metrics.avgTemp.previous})</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', marginTop: '0.35rem' }}>
            {metrics.avgTemp.note}
          </div>
        </div>

        {/* KPI 3: Migraine Attacks */}
        <div className="comp-box">
          <div className="comp-label">Migraine Episodes</div>
          <div className="comp-val">{metrics.episodes.current}</div>
          <div className="comp-trend green">
            <TrendingDown size={16} />
            <span>{metrics.episodes.change} vs prev ({metrics.episodes.previous})</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', marginTop: '0.35rem' }}>
            {metrics.episodes.note}
          </div>
        </div>

        {/* KPI 4: Wear Time Compliance */}
        <div className="comp-box">
          <div className="comp-label">Wearable Adherence</div>
          <div className="comp-val">{metrics.wearTime.current}</div>
          <div className="comp-trend green">
            <TrendingUp size={16} />
            <span>{metrics.wearTime.change} vs prev ({metrics.wearTime.previous})</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--slate-500)', marginTop: '0.35rem' }}>
            {metrics.wearTime.note}
          </div>
        </div>

      </div>

      {/* Visual Chart: Day-by-Day Stress Comparison */}
      <div className="medical-card" style={{ marginBottom: '1.5rem' }}>
        <div className="medical-card-header">
          <div className="card-title-group">
            <Activity size={20} color="var(--primary)" />
            <h3>Stress Level Comparison: Current Week vs. Previous Week</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.78rem', fontWeight: 700 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '3px' }}></span>
              <span>Current Week ({report.metrics.avgStress.current} Avg)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '12px', height: '12px', background: 'var(--slate-300)', borderRadius: '3px' }}></span>
              <span>Previous Week ({report.metrics.avgStress.previous} Avg)</span>
            </div>
          </div>
        </div>

        <div className="chart-visual-container">
          {report.dailyComparison.map((day) => (
            <div key={day.day} className="chart-col">
              <div className="dual-bar-pair">
                {/* Current Week Bar */}
                <div 
                  className="col-bar bar-curr" 
                  style={{ height: `${day.currentStress}%` }}
                  title={`${day.day}: Current Week ${day.currentStress}%`}
                ></div>
                {/* Previous Week Bar */}
                <div 
                  className="col-bar bar-prev" 
                  style={{ height: `${day.prevStress}%` }}
                  title={`${day.day}: Previous Week ${day.prevStress}%`}
                ></div>
              </div>
              <span className="chart-day-label">{day.day}</span>
              <span style={{ fontSize: '0.68rem', color: 'var(--slate-400)', fontFamily: 'var(--font-mono)' }}>
                {day.currentStress}%
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--slate-500)' }}>
          <span>* Measured via dual temple PPG photoplethysmography sensor array during routine daily wear</span>
          <span style={{ fontWeight: 600, color: 'var(--teal)' }}>Consistent drop in autonomic stress observed across all 7 days</span>
        </div>
      </div>

      {/* Detailed Clinical Diary Table */}
      <div className="medical-card">
        <div className="medical-card-header">
          <div className="card-title-group">
            <FileText size={20} color="var(--primary)" />
            <h3>7-Day Physiological Telemetry & Attack Diary</h3>
          </div>
          <button className="med-btn med-btn-outline" style={{ fontSize: '0.78rem', padding: '0.4rem 0.85rem' }} onClick={handleExport}>
            <Download size={14} />
            <span>Export Clinical PDF</span>
          </button>
        </div>

        <div className="table-responsive">
          <table className="med-table">
            <thead>
              <tr>
                <th>Day & Date</th>
                <th>Temple Temp</th>
                <th>Stress Level</th>
                <th>Migraine Onset</th>
                <th>Delivered Spectacle Therapy</th>
                <th>Clinical Observation</th>
              </tr>
            </thead>
            <tbody>
              {report.dailyComparison.map((row) => {
                const isAttack = row.attacks > 0;
                return (
                  <tr key={row.day}>
                    <td>
                      <strong>{row.day}</strong> <span style={{ color: 'var(--slate-500)', fontSize: '0.76rem' }}>({row.date})</span>
                    </td>
                    <td>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: row.currentTemp > 37.3 ? 'var(--danger)' : 'var(--navy)' }}>
                        {row.currentTemp} °C
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--slate-400)', marginLeft: '4px' }}>
                        (prev: {row.prevTemp}°C)
                      </span>
                    </td>
                    <td>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: row.currentStress > 70 ? 'var(--danger)' : 'var(--navy)' }}>
                        {row.currentStress}%
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--slate-400)', marginLeft: '4px' }}>
                        (prev: {row.prevStress}%)
                      </span>
                    </td>
                    <td>
                      {isAttack ? (
                        <span className="status-badge badge-danger">
                          <AlertCircle size={12} /> Episode Halted
                        </span>
                      ) : (
                        <span className="status-badge badge-stable">
                          <CheckCircle size={12} /> Asymptomatic
                        </span>
                      )}
                    </td>
                    <td>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: row.therapy !== 'None' ? 'var(--teal)' : 'var(--slate-500)' }}>
                        {row.therapy}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.82rem', color: 'var(--slate-600)' }}>
                      {row.note}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
