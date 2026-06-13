// Breach Alerts
export const breachAlerts = [
  {
    id: 'SHP-004',
    asset: 'Organic Cocoa Beans',
    temperature: '-9°C',
    status: 'Breach Warning',
  },
];

// Notifications
export const notifications = [
  { id: 1, type: 'Breach', message: 'SHP-004 temperature exceeded threshold', time: '2 min ago', read: false },
  { id: 2, type: 'SOS', message: 'James Mwangi reported Refrigeration Leak', time: '18 min ago', read: false },
  { id: 3, type: 'Escrow', message: 'SHP-001 Warehouse Intake milestone released $12,600', time: '1 hr ago', read: true },
  { id: 4, type: 'Compliance', message: 'EUDR certificate generated for SHP-005', time: '3 hrs ago', read: true },
  { id: 5, type: 'Document', message: 'Phytosanitary Certificate rejected on SHP-003', time: '5 hrs ago', read: true },
];

// AI Feed Messages
export const aiFeedMessages = [
  'Cold-chain integrity maintained throughout Kenyan export corridor. Temperature sensors indicate consistent -18°C storage. Border clearance expedited via EUDR pre-verification at Nairobi hub.',
  'SHP-004 Organic Cocoa Beans flagged: container temperature rose to -9°C at Kisii depot. Recommending emergency re-icing at Naivasha consolidation point before port entry.',
  'M-Pesa escrow disbursement of $12,600 confirmed for SHP-001. Next milestone release pending weighbridge confirmation at Mombasa Gate 7.',
  'EUDR satellite verification complete for SHP-002 Green Tea Leaves. Zero deforestation detected across 3 farm polygons in Kericho county.',
  'Route optimization: Sea Freight corridor showing 94% efficiency. AI recommends rerouting SHP-004 via Eldoret depot to reduce estimated delay by 2.4 hours.',
];

// Route Waypoints (A109 Highway from Nairobi to Mombasa)
export const routeWaypoints = [
  [-1.2921, 36.8219],  // Nairobi
  [-1.5833, 37.0667],  // Athi River
  [-2.3500, 37.5833],  // Sultan Hamud
  [-2.6833, 38.0000],  // Mtito Andei (current checkpoint)
  [-3.4000, 38.5500],  // Voi
  [-3.8667, 39.2000],  // Maungu
  [-4.0435, 39.6682]   // Mombasa Port
];

// Checkpoint History
export const checkpointHistory = [
  { name: 'Nairobi Depot — Warehouse Exit', time: 'Jun 10, 06:00 AM', status: 'Cleared' },
  { name: 'Athi River Weighbridge', time: 'Jun 10, 07:45 AM', status: 'Cleared' },
  { name: 'Sultan Hamud Checkpoint', time: 'Jun 10, 09:30 AM', status: 'Cleared' },
  { name: 'Mtito Andei Weighbridge', time: 'Jun 10, 11:42 AM', status: 'Current' },
  { name: 'Voi Junction', time: 'ETA 2:00 PM', status: 'Upcoming' },
  { name: 'Maungu Stop', time: 'ETA 3:30 PM', status: 'Upcoming' },
  { name: 'Mombasa Port Gate 7', time: 'ETA 4:20 PM', status: 'Upcoming' },
];

// Rejection Reasons
export const rejectionReasons = [
  'Expired Stamp',
  'Missing Signature',
  'Wrong Format',
  'Illegible Document',
  'Incorrect Details',
  'Other',
];

// Dispatch Notes / Manager Messages
export const dispatchNotes = [
  { from: 'Manager', message: 'Ensure cold chain log is signed at Voi Junction before proceeding', time: '10:30 AM', driver: 'James Mwangi' },
  { from: 'Manager', message: 'Port Gate 7 is congested — use alternate Gate 4 on arrival', time: '11:00 AM', driver: 'James Mwangi' },
  { from: 'Manager', message: 'All documents verified. Proceed to weighbridge.', time: '09:45 AM', driver: 'Peter Otieno' },
];

// Shipment Weight and Quantity Data
export const shipmentWeightData: Record<string, { quantity: string; containers: number; grossWeight: string }> = {
  'SHP-001': { quantity: '12,400 kg', containers: 2, grossWeight: '13,100 kg' },
  'SHP-002': { quantity: '8,200 kg', containers: 1, grossWeight: '8,750 kg' },
  'SHP-003': { quantity: '6,800 kg', containers: 1, grossWeight: '7,200 kg' },
  'SHP-004': { quantity: '15,600 kg', containers: 3, grossWeight: '16,400 kg' },
  'SHP-005': { quantity: '3,200 kg', containers: 1, grossWeight: '3,500 kg' },
};

// Temperature Chart Data Generator
export const generateTemperatureData = (shipmentId: string) => {
  const isBreach = shipmentId === 'SHP-004';
  const data = [];
  
  for (let hour = 0; hour <= 23; hour++) {
    if (isBreach) {
      // Start at -18°C, gradually rise to -9°C around hour 14
      const temp = -18 + (Math.max(0, hour - 8) * 0.7);
      data.push({ hour: `${hour.toString().padStart(2, '0')}:00`, temp: Math.round(temp * 10) / 10 });
    } else {
      // Flat line with ±1°C variance
      const baseTemp = shipmentId === 'SHP-001' || shipmentId === 'SHP-005' ? -18 : 4;
      const variance = (Math.random() - 0.5) * 2;
      data.push({ hour: `${hour.toString().padStart(2, '0')}:00`, temp: baseTemp + variance });
    }
  }
  return data;
};

// How It Works Steps
export const howItWorks = [
  {
    step: 1,
    title: 'Farmer Registers Export',
    description: 'Cooperative registers GPS farm plots and commodity details for EUDR compliance',
    icon: '🌾',
  },
  {
    step: 2,
    title: 'Buyer Locks Escrow',
    description: 'International buyer deposits funds into a secure milestone-based escrow vault',
    icon: '🔐',
  },
  {
    step: 3,
    title: 'Live Transit Tracking',
    description: 'IoT sensors and driver checkpoints stream real-time cold-chain data throughout the journey',
    icon: '📍',
  },
  {
    step: 4,
    title: 'Auto-Release on Verification',
    description: 'Funds release automatically at each verified milestone — warehouse, port, quality check',
    icon: '✅',
  },
];

// Cargo Photos Placeholders
export const cargoPhotos = [
  { id: 1, label: 'Warehouse Loading' },
  { id: 2, label: 'Container Seal' },
  { id: 3, label: 'Weighbridge Receipt' },
  { id: 4, label: 'Port Inspection' },
];
