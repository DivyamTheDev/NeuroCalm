export const DUMMY_GLASSES = [
  {
    id: 'NC-PRO-8842',
    name: 'NeuroCalm Glass V1 (NC-PRO-8842)',
    model: 'Clinical Prototype V1.0',
    type: 'Full Biomedical Suite',
    firmware: 'v1.0.4-beta',
    battery: 94,
    rssi: -52,
    weight: '32g',
    frame: 'TR90 Medical Polycarbonate',
    sensors: [
      'Dual Temple PPG (500Hz optical sampling)',
      'Forehead Infrared Radiance Thermopile (±0.05°C)',
      'Trigeminal HRV & Sympathetic Stress Matrix',
      'Dual-side Micro-vibration Actuators (40-100Hz)',
      'Forehead Thermoelectric Peltier Cooling Modules (18°C)',
      'e-TNS Trigeminal Neuromodulation Electrodes'
    ],
    status: 'Ready to Pair',
    isPrimary: true
  },
  {
    id: 'NC-LITE-3102',
    name: 'NeuroCalm Spectacle Lite (NC-LITE-3102)',
    model: 'Ambulatory Wellness Edition',
    type: 'Vibration Only',
    firmware: 'v1.0.1',
    battery: 68,
    rssi: -76,
    weight: '30g',
    frame: 'Matte Polymer',
    sensors: [
      'Single Temple PPG',
      'Ambient Skin Temp Sensor',
      'Temple Micro-vibrators'
    ],
    status: 'Available',
    isPrimary: false
  },
  {
    id: 'NC-DEV-9901',
    name: 'NeuroCalm Dev-Kit (ESP32-BLE-99)',
    model: 'Engineering Breadboard Unit',
    type: 'Raw Telemetry Unit',
    firmware: 'v0.9.8-dev',
    battery: 45,
    rssi: -86,
    weight: '48g',
    frame: 'Open PCB Frame',
    sensors: [
      'ESP32 WROOM Node',
      'MAX30102 PPG',
      'MLX90614 IR Temp'
    ],
    status: 'Weak Signal',
    isPrimary: false
  }
];

export const DUMMY_PATIENTS = {
  p1: {
    id: '#NC-PT-1042',
    name: 'Sarah Jenkins',
    age: 29,
    gender: 'Female',
    diagnosis: 'Chronic Migraine with Visual Aura',
    physician: 'Dr. Anuj Pathak (KSOP Neurological Research)',
    baselineTemp: 36.8,
    lastScan: {
      timestamp: 'Today, 19:35',
      temperature: 37.4,
      tempUnit: '°C',
      tempFahrenheit: 99.3,
      tempStatus: 'Elevated (+0.6°C above baseline)',
      tempDiagnosis: 'Localized temporal vasodilation detected; indicates neurovascular inflammatory phase preceding acute migraine aura.',
      stressLevel: 76,
      stressStatus: 'High Stress / Sympathetic Hyperarousal',
      hrvMetric: 'SDNN: 24 ms (Autonomic Suppression)',
      stressDiagnosis: 'Significant vagal tone suppression and elevated trigeminal nerve tension observed; high risk of migraine progression within 30-45 minutes.',
      migraineRisk: 'High (84%)',
      recommendedTherapy: 'Activate Localized Peltier Cooling (18°C) + Micro-Vibration (40 Hz) for 5-10 minutes.'
    },
    weeklyComparison: {
      currentWeekLabel: 'Oct 23 – Oct 29 (Current Week)',
      previousWeekLabel: 'Oct 16 – Oct 22 (Previous Week)',
      metrics: {
        avgStress: { current: '64%', previous: '78%', change: '-14%', improved: true, note: 'Stress down with daily wearable usage' },
        avgTemp: { current: '36.9 °C', previous: '37.4 °C', change: '-0.5 °C', improved: true, note: 'Thermal stability around temples' },
        episodes: { current: '2 Attacks', previous: '6 Attacks', change: '-66%', improved: true, note: 'Early cooling aborted 4 potential attacks' },
        wearTime: { current: '6.4 hrs/day', previous: '4.1 hrs/day', change: '+56%', improved: true, note: 'High patient compliance' }
      },
      dailyComparison: [
        { day: 'Mon', date: 'Oct 23', currentTemp: 37.1, currentStress: 65, prevTemp: 37.5, prevStress: 82, attacks: 0, therapy: 'None', note: 'Mild afternoon ocular strain; rest taken.' },
        { day: 'Tue', date: 'Oct 24', currentTemp: 37.6, currentStress: 76, prevTemp: 37.8, prevStress: 90, attacks: 1, therapy: 'Cooling + Vibe (15m)', note: 'Early intervention halted pain intensity to 3/10.' },
        { day: 'Wed', date: 'Oct 25', currentTemp: 36.8, currentStress: 55, prevTemp: 37.3, prevStress: 75, attacks: 0, therapy: 'Preventive (5m)', note: 'Post-episode recovery normal. Restful sleep.' },
        { day: 'Thu', date: 'Oct 26', currentTemp: 36.9, currentStress: 60, prevTemp: 37.2, prevStress: 70, attacks: 0, therapy: 'None', note: 'Standard work day; stable baseline.' },
        { day: 'Fri', date: 'Oct 27', currentTemp: 37.3, currentStress: 72, prevTemp: 37.7, prevStress: 85, attacks: 1, therapy: 'Vibration Therapy (10m)', note: 'Supraorbital tension modulated successfully.' },
        { day: 'Sat', date: 'Oct 28', currentTemp: 36.7, currentStress: 48, prevTemp: 37.1, prevStress: 68, attacks: 0, therapy: 'None', note: 'Weekend rest; optimal parasympathetic tone.' },
        { day: 'Sun', date: 'Oct 29', currentTemp: 36.8, currentStress: 42, prevTemp: 37.0, prevStress: 60, attacks: 0, therapy: 'Preventive Check', note: 'Stable temperature & resting autonomic tone.' }
      ]
    }
  },
  p2: {
    id: '#NC-PT-1043',
    name: 'Liam Patel',
    age: 34,
    gender: 'Male',
    diagnosis: 'Stress-Induced Episodic Migraine',
    physician: 'Dr. Abhay Bhardwaj (KSOP)',
    baselineTemp: 36.6,
    lastScan: {
      timestamp: 'Today, 18:10',
      temperature: 37.0,
      tempUnit: '°C',
      tempFahrenheit: 98.6,
      tempStatus: 'Normal Range (+0.4°C mild)',
      tempDiagnosis: 'Vascular dilation within acceptable physiological thresholds; mild temple warming.',
      stressLevel: 58,
      stressStatus: 'Moderate Stress / Workplace Fatigue',
      hrvMetric: 'SDNN: 38 ms (Moderate Tone)',
      stressDiagnosis: 'Elevated mental strain from prolonged monitor exposure. Mild sympathetic arousal.',
      migraineRisk: 'Moderate (42%)',
      recommendedTherapy: 'Recommend 5-minute gentle micro-vibration therapy to release facial muscular strain.'
    },
    weeklyComparison: {
      currentWeekLabel: 'Oct 23 – Oct 29 (Current Week)',
      previousWeekLabel: 'Oct 16 – Oct 22 (Previous Week)',
      metrics: {
        avgStress: { current: '52%', previous: '68%', change: '-16%', improved: true, note: 'Marked reduction in tension headache' },
        avgTemp: { current: '36.7 °C', previous: '37.1 °C', change: '-0.4 °C', improved: true, note: 'Normal thermal regulation' },
        episodes: { current: '1 Attack', previous: '4 Attacks', change: '-75%', improved: true, note: 'Attack aborted on Wednesday' },
        wearTime: { current: '5.8 hrs/day', previous: '3.2 hrs/day', change: '+81%', improved: true, note: 'Routine morning & evening wear' }
      },
      dailyComparison: [
        { day: 'Mon', date: 'Oct 23', currentTemp: 36.8, currentStress: 54, prevTemp: 37.2, prevStress: 72, attacks: 0, therapy: 'None', note: 'Standard routine.' },
        { day: 'Tue', date: 'Oct 24', currentTemp: 36.7, currentStress: 58, prevTemp: 37.3, prevStress: 75, attacks: 0, therapy: 'Vibration (5m)', note: 'Screen glare strain relieved.' },
        { day: 'Wed', date: 'Oct 25', currentTemp: 37.2, currentStress: 68, prevTemp: 37.6, prevStress: 88, attacks: 1, therapy: 'Cooling + Vibe (10m)', note: 'Stress peak; headache aborted in 15 mins.' },
        { day: 'Thu', date: 'Oct 26', currentTemp: 36.6, currentStress: 48, prevTemp: 37.0, prevStress: 64, attacks: 0, therapy: 'None', note: 'Good recovery.' },
        { day: 'Fri', date: 'Oct 27', currentTemp: 36.7, currentStress: 52, prevTemp: 37.1, prevStress: 70, attacks: 0, therapy: 'None', note: 'Work completed without triggers.' },
        { day: 'Sat', date: 'Oct 28', currentTemp: 36.5, currentStress: 44, prevTemp: 36.9, prevStress: 55, attacks: 0, therapy: 'None', note: 'Relaxation period.' },
        { day: 'Sun', date: 'Oct 29', currentTemp: 36.6, currentStress: 40, prevTemp: 36.8, prevStress: 52, attacks: 0, therapy: 'None', note: 'Healthy autonomic balance.' }
      ]
    }
  },
  p3: {
    id: '#NC-PT-1044',
    name: 'Elena Rostova',
    age: 42,
    gender: 'Female',
    diagnosis: 'Refractory Trigeminal Autonomic Cephalgia',
    physician: 'Dr. Anuj Pathak (KSOP Neurological Research)',
    baselineTemp: 36.7,
    lastScan: {
      timestamp: 'Today, 17:40',
      temperature: 37.8,
      tempUnit: '°C',
      tempFahrenheit: 100.0,
      tempStatus: 'High Thermal Dilation (+1.1°C alert)',
      tempDiagnosis: 'Acute bilateral temporal hyperthermia with severe vasodilation.',
      stressLevel: 84,
      stressStatus: 'Severe Autonomic Distress / Pre-Ictal Crisis',
      hrvMetric: 'SDNN: 18 ms (Severe Sympathetic Dominance)',
      stressDiagnosis: 'Acute trigeminal nerve sensitization and intense sympathetic outflow.',
      migraineRisk: 'Critical (92%)',
      recommendedTherapy: 'Immediate high-intensity Peltier Cooling (16°C) + Continuous 40Hz Trigeminal Neuromodulation.'
    },
    weeklyComparison: {
      currentWeekLabel: 'Oct 23 – Oct 29 (Current Week)',
      previousWeekLabel: 'Oct 16 – Oct 22 (Previous Week)',
      metrics: {
        avgStress: { current: '71%', previous: '84%', change: '-13%', improved: true, note: 'Pain flare-ups reduced from severe to moderate' },
        avgTemp: { current: '37.2 °C', previous: '37.7 °C', change: '-0.5 °C', improved: true, note: 'Thermoregulation improved via Peltier' },
        episodes: { current: '3 Attacks', previous: '7 Attacks', change: '-57%', improved: true, note: 'Substantial reduction in emergency clinic visits' },
        wearTime: { current: '7.5 hrs/day', previous: '5.2 hrs/day', change: '+44%', improved: true, note: 'Daily prophylactic wearable protocol' }
      },
      dailyComparison: [
        { day: 'Mon', date: 'Oct 23', currentTemp: 37.4, currentStress: 78, prevTemp: 37.9, prevStress: 88, attacks: 1, therapy: 'Cooling + e-TNS', note: 'Aura detected at noon; mitigated.' },
        { day: 'Tue', date: 'Oct 24', currentTemp: 37.1, currentStress: 68, prevTemp: 37.8, prevStress: 84, attacks: 0, therapy: 'Preventive Cooling', note: 'Calm interval.' },
        { day: 'Wed', date: 'Oct 25', currentTemp: 37.7, currentStress: 82, prevTemp: 38.1, prevStress: 92, attacks: 1, therapy: 'Full Tri-Modality', note: 'Severe weather pressure drop triggered aura.' },
        { day: 'Thu', date: 'Oct 26', currentTemp: 37.0, currentStress: 66, prevTemp: 37.6, prevStress: 80, attacks: 0, therapy: 'Vibration', note: 'Stable.' },
        { day: 'Fri', date: 'Oct 27', currentTemp: 37.5, currentStress: 76, prevTemp: 37.9, prevStress: 86, attacks: 1, therapy: 'Cooling (18°C)', note: 'Evening onset halted.' },
        { day: 'Sat', date: 'Oct 28', currentTemp: 36.9, currentStress: 64, prevTemp: 37.3, prevStress: 78, attacks: 0, therapy: 'None', note: 'Home rest.' },
        { day: 'Sun', date: 'Oct 29', currentTemp: 36.8, currentStress: 61, prevTemp: 37.2, prevStress: 75, attacks: 0, therapy: 'Preventive', note: 'Baseline normalized.' }
      ]
    }
  }
};

export const PATENT_DETAILS = {
  title: 'NeuroCalm Smart Spectacles: AI-Based Migraine Detection and Trigeminal Neuromodulation Eyewear',
  institution: 'KIET University • Krishna Institute of Engineering & Technology (KSOP)',
  inventors: [
    { name: 'Anam', role: 'Student Researcher', dept: 'KSOP' },
    { name: 'Dr. Anuj Pathak', role: 'Faculty / Lead Scientist', dept: 'KSOP' },
    { name: 'Dr. Abhay Bhardwaj', role: 'Faculty / Biomedical Specialist', dept: 'KSOP' },
    { name: 'Tanya Sharma', role: 'Student Researcher', dept: 'KSOP' }
  ],
  specs: {
    frameMaterial: 'TR90 / Medical-grade Polycarbonate (Hypoallergenic)',
    totalWeight: '~32 grams (Equivalent to standard eyeglasses)',
    powerSystem: '180mAh Li-ion Rechargeable Battery (6–8 hours active wear)',
    chargingPort: 'USB Type-C Fast Charge (~1.5 hours to 100%)',
    wirelessProtocol: 'Bluetooth Low Energy 5.0 (BLE 2.4GHz)',
    microcontroller: 'Espressif ESP32 Dual-Core (Low Power Sensory Bus)',
    opticalSensor: 'Dual-temple Photoplethysmography (PPG) for vasodilation & blood volume',
    thermalSensor: 'Non-contact Infrared Thermopile Matrix (Forehead / Temple Radiance)',
    stressSensor: 'Heart Rate Variability (HRV) & Autonomic Tone Engine',
    therapyActuators: [
      'Miniature Forehead & Temple Vibration Motors (Modulating Trigeminal C-fibers)',
      'Thermoelectric Peltier Cooling Modules (18°C vasoconstrictive relief)',
      'Low-intensity Transcutaneous Electrical Trigeminal Stimulation (e-TNS)'
    ]
  },
  clinicalWorkflow: [
    { step: '1. Device Wearing', desc: 'Patient wears lightweight smart spectacles like normal glasses throughout daily routines.' },
    { step: '2. Continuous Biosensing', desc: 'Integrated dual PPG and IR thermopiles sample blood flow pulsations and localized temperature variations in real time.' },
    { step: '3. Pre-Ictal Signal Analysis', desc: 'Microcontroller detects hallmark migraine markers: temporal vasodilation (+0.4°C to +1.2°C) and autonomic stress spikes.' },
    { step: '4. Non-Invasive Therapy', desc: 'Immediate automated localized cooling and micro-vibration attenuates pain receptor hypersensitivity and aborts attack progression.' }
  ]
};
