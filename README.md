# NeuroCalm Smart Eyewear — Version 1 Medical Prototype

Biomedical wearable eyewear interface for **Migraine Early Detection and Trigeminal Neuromodulation**, developed by **Team- NeuroNova**.

Based on the Patent Invention Disclosure:  
*"NeuroCalm Smart Spectacles: AI-Based Migraine Detection and Trigeminal Neuromodulation Eyewear"*  
**Department of KSOP, KIET University**  
Inventors: Anam, Dr. Anuj Pathak, Dr. Abhay Bhardwaj, Tanya Sharma.

---

## 🚀 Quick Start (Node & React)

To launch the interactive medical prototype:

```bash
# 1. Start the Vite development server
npm run dev

# 2. Open in your browser:
# http://localhost:3000
```

To build for production:
```bash
npm run build
```

---

## 🛠️ Features Included in Version 1:

1. **Logo & Identity**:
   - Logo: **NeuroCalm** (Medical pulse + eyewear insignia).
   - Clinical purpose design system (Hospital teal, cyan, dark navy slate).

2. **1. Connect Your Glass Tab**:
   - Prototype dummy device list:
     - `NeuroCalm Glass V1 (NC-PRO-8842)` (32g TR90 frame, dual PPG + IR thermopiles + Peltier cooling).
     - `NeuroCalm Spectacle Lite (NC-LITE-3102)`.
     - `NeuroCalm Dev-Kit (ESP32-BLE-99)`.
   - Simulated Bluetooth BLE 5.0 pairing handshake.
   - Live hardware telemetry HUD once connected (Frame temperature, PPG sampling rate, battery %).

3. **2. Patient Clinical Scan Tab**:
   - **Gated Safety Mechanism**: Diagnostic scan is locked when disconnected.
   - Unlocked once paired with NeuroCalm eyewear.
   - Animated 3-stage physiological biosignal acquisition.
   - **Primary Scan Findings**:
     - 🌡️ **Patient Temperature** (Forehead / Temple IR reading in °C and °F, vasodilation flag, baseline comparison).
     - ⚡ **Patient Stress Level** (PPG-derived autonomic tone and HRV SDNN metric, percentage load, risk index).
   - Simulated dual-modality therapy trigger (Peltier cooling 18°C + 40Hz micro-vibration).

4. **3. Weekly Report & Comparison Tab**:
   - No login/auth required; preloaded with clinical dummy patients:
     - *Sarah Jenkins* (#NC-PT-1042)
     - *Liam Patel* (#NC-PT-1043)
     - *Elena Rostova* (#NC-PT-1044)
   - Week-over-Week comparison (Current Week vs. Previous Week) for Average Stress, Average Temple Temperature, Migraine Episodes, and Wear Time.
   - Day-by-Day (Mon–Sun) comparative visual chart.
   - Detailed 7-day diary with recorded temperatures, stress levels, episodes, delivered therapies, and clinical notes.

5. **4. Eyewear Architecture & Patent Tab**:
   - Exploded frame view highlighting forehead vibration motors, temple PPG sensors, infrared thermopiles, Peltier cooling modules, and ESP32 MCU.
   - Technical specifications and research credits.

6. **Footer**:
   - Exact line: **`Version 1 developerd by Team- NeuroNova`**
