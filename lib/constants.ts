import type { Shipment, Driver, Checkpoint, Milestone, ComplianceRecord, RouteMetric } from './types';

export const MOCK_SHIPMENTS: Shipment[] = [
  {
    id: '1',
    contractHashId: '0x7a4B...8FcD',
    cropAsset: 'Arabica Coffee',
    mass: '2,400 kg',
    destinationPort: 'Port of Rotterdam',
    counterpartyBuyer: 'Starbucks Coffee Trading',
    status: 'ai-audited',
    timestamp: new Date('2026-06-09T08:30:00'),
  },
  {
    id: '2',
    contractHashId: '0x9c2E...4Kp1',
    cropAsset: 'Green Tea Leaves',
    mass: '1,800 kg',
    destinationPort: 'Shanghai Port',
    counterpartyBuyer: 'Lipton Tea Ltd',
    status: 'escrow-locked',
    timestamp: new Date('2026-06-09T09:15:00'),
  },
  {
    id: '3',
    contractHashId: '0x5f3A...9Qm7',
    cropAsset: 'Premium Avocado',
    mass: '3,200 kg',
    destinationPort: 'Port of Los Angeles',
    counterpartyBuyer: 'Calavo Growers Inc',
    status: 'in-transit',
    timestamp: new Date('2026-06-09T10:45:00'),
  },
  {
    id: '4',
    contractHashId: '0x2b8F...7Lh3',
    cropAsset: 'Organic Cocoa Beans',
    mass: '2,100 kg',
    destinationPort: 'Hamburg Port',
    counterpartyBuyer: 'Barry Callebaut AG',
    status: 'breach-warning',
    timestamp: new Date('2026-06-09T07:20:00'),
  },
  {
    id: '5',
    contractHashId: '0x8d6C...5Np2',
    cropAsset: 'Ethiopian Honey',
    mass: '950 kg',
    destinationPort: 'Rotterdam Port',
    counterpartyBuyer: 'Beeman Foods Europe',
    status: 'ai-audited',
    timestamp: new Date('2026-06-09T06:00:00'),
  },
];

export const MOCK_DRIVERS: Driver[] = [
  {
    id: 'DRV001',
    name: 'Samuel Kipchoge',
    vehicleId: 'KE-5032-ABC',
    currentLocation: 'Nairobi Distribution Hub',
    status: 'active',
    contactNumber: '+254 712 345 678',
  },
  {
    id: 'DRV002',
    name: 'Grace Mwangi',
    vehicleId: 'KE-7881-XYZ',
    currentLocation: 'Mtito Andei Checkpoint',
    status: 'at-checkpoint',
    contactNumber: '+254 722 654 321',
  },
  {
    id: 'DRV003',
    name: 'Joseph Kariuki',
    vehicleId: 'KE-3344-DEF',
    currentLocation: 'Mombasa Port Terminal',
    status: 'inactive',
    contactNumber: '+254 731 789 012',
  },
];

export const MOCK_CHECKPOINTS: Checkpoint[] = [
  {
    id: 'CP001',
    name: 'Nairobi Border Control',
    location: 'Nairobi, Kenya',
    requiredDocuments: ['Export Permit', 'Phytosanitary Certificate', 'Invoice'],
    estimatedArrival: new Date('2026-06-09T12:00:00'),
  },
  {
    id: 'CP002',
    name: 'Mtito Andei Weighbridge',
    location: 'Mtito Andei, Kenya',
    requiredDocuments: ['Bill of Lading', 'Cold Chain Temperature Log', 'Driver License'],
    estimatedArrival: new Date('2026-06-09T14:30:00'),
  },
  {
    id: 'CP003',
    name: 'Mombasa Port Authority',
    location: 'Mombasa, Kenya',
    requiredDocuments: ['Port Entry Manifest', 'Container Seal Certificate', 'Insurance Documentation'],
    estimatedArrival: new Date('2026-06-09T18:00:00'),
  },
];

export const MOCK_MILESTONES: Milestone[] = [
  {
    id: 'MS001',
    stage: 'deposit-locked',
    label: 'Deposit Locked',
    status: 'completed',
    amount: '$8,400 USD',
    date: new Date('2026-06-08T09:00:00'),
  },
  {
    id: 'MS002',
    stage: 'warehouse-intake',
    label: 'Warehouse Intake',
    status: 'completed',
    amount: '$12,600 USD',
    date: new Date('2026-06-08T14:30:00'),
  },
  {
    id: 'MS003',
    stage: 'sea-transit',
    label: 'Sea Transit Gateway',
    status: 'active',
    amount: '$18,900 USD',
    date: new Date('2026-06-09T08:00:00'),
  },
  {
    id: 'MS004',
    stage: 'quality-payout',
    label: 'Final Quality Payout',
    status: 'locked',
    amount: '$21,000 USD',
    date: new Date('2026-06-15T10:00:00'),
  },
];

export const MOCK_COMPLIANCE: ComplianceRecord[] = [
  {
    id: 'COMP001',
    recordType: 'eudr',
    status: 'verified',
    details: 'Farm Polygons: VERIFIED SATELLITE MAPPING',
    lastUpdated: new Date('2026-06-08T11:00:00'),
  },
  {
    id: 'COMP002',
    recordType: 'deforestation',
    status: 'verified',
    details: 'Zero Deforestation Certificate - EUDR-DDS-2026-KE-892A',
    lastUpdated: new Date('2026-06-08T15:00:00'),
  },
  {
    id: 'COMP003',
    recordType: 'cold-chain',
    status: 'verified',
    details: 'Cold Chain Temperature Log: -18°C maintained throughout transit',
    lastUpdated: new Date('2026-06-09T07:00:00'),
  },
];

export const MOCK_ROUTE_METRICS: RouteMetric[] = [
  {
    label: 'Average Track Transit Duration',
    value: '14.2',
    unit: 'Hours',
    trend: 'down',
    trendValue: '-1.8h',
  },
  {
    label: 'Compliance Pass Rate',
    value: '91.4',
    unit: '%',
    trend: 'up',
    trendValue: '+2.1%',
  },
  {
    label: 'Active Route Exceptions',
    value: '2',
    unit: 'Flagged Cases',
    trend: 'down',
    trendValue: '-1',
  },
];

export const PERFORMANCE_COMPARISON = [
  {
    channel: 'Sea Freight (Main Route)',
    efficiency: '94%',
    aiOptimized: true,
    estimatedDays: 18,
  },
  {
    channel: 'Air Freight (Express)',
    efficiency: '87%',
    aiOptimized: false,
    estimatedDays: 3,
  },
  {
    channel: 'Rail + Truck (Hybrid)',
    efficiency: '76%',
    aiOptimized: true,
    estimatedDays: 12,
  },
  {
    channel: 'Direct Road Transport',
    efficiency: '62%',
    aiOptimized: false,
    estimatedDays: 8,
  },
];

export const COMPLIANCE_NARRATIVE = `Cold-chain integrity maintained throughout Kenyan export corridor. Temperature sensors indicate consistent -18°C storage with zero variance > 2°C. Border clearance expedited via EUDR pre-verification at Nairobi hub. M-Pesa escrow disbursement scheduled upon final weighbridge confirmation at Mombasa. Custom delay expected 2-4 hours due to port congestion; rerouting algorithm recommends alternative consolidation point at Eldoret depot.`;

export const INCIDENT_TYPES = [
  { id: 'mechanical', label: 'Mechanical Failure', icon: 'Wrench' },
  { id: 'temp-spike', label: 'Cold-Chain Temp Spike', icon: 'Thermometer' },
  { id: 'blockage', label: 'Road Blockage', icon: 'AlertTriangle' },
];

export const COMPLIANCE_ISSUES = [
  'Missing Export Permit',
  'Temperature Log Discrepancy',
  'Incomplete Phytosanitary Certificate',
  'Vehicle Inspection Failed',
  'Documentation Timestamp Mismatch',
  'Cold Chain Breach (>2°C variance)',
  'Seal Integrity Compromised',
  'Driver Authorization Expired',
];
