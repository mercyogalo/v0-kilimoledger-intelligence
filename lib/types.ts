export type ShipmentStatus = 'ai-audited' | 'escrow-locked' | 'in-transit' | 'breach-warning';

export interface Shipment {
  id: string;
  contractHashId: string;
  cropAsset: string;
  mass: string;
  destinationPort: string;
  counterpartyBuyer: string;
  status: ShipmentStatus;
  timestamp: Date;
}

export interface Driver {
  id: string;
  name: string;
  vehicleId: string;
  currentLocation: string;
  status: 'active' | 'inactive' | 'at-checkpoint';
  contactNumber: string;
}

export interface Checkpoint {
  id: string;
  name: string;
  location: string;
  requiredDocuments: string[];
  estimatedArrival: Date;
}

export interface Milestone {
  id: string;
  stage: 'deposit-locked' | 'warehouse-intake' | 'sea-transit' | 'quality-payout';
  label: string;
  status: 'completed' | 'active' | 'locked';
  amount?: string;
  date?: Date;
}

export interface ComplianceRecord {
  id: string;
  recordType: 'eudr' | 'deforestation' | 'cold-chain';
  status: 'verified' | 'pending' | 'failed';
  details: string;
  lastUpdated: Date;
}

export interface RouteMetric {
  label: string;
  value: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  unit?: string;
}

export interface IncidentReport {
  id: string;
  type: 'mechanical-failure' | 'cold-chain-spike' | 'road-blockage';
  timestamp: Date;
  description: string;
  driverId: string;
  location: string;
}
