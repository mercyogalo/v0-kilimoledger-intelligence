'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TrendingUp, TrendingDown, Download } from 'lucide-react';
import { BreachAlertBanner } from '@/components/manager/BreachAlertBanner';
import { AICyclingFeed } from '@/components/manager/AICyclingFeed';
import { breachAlerts } from '@/lib/data';

export default function ManagerDashboard() {
  // KPI Data
  const kpis = [
    { label: 'Active Shipments', value: '5', trend: '+2', positive: true },
    { label: 'Compliance Pass Rate', value: '91.4%', trend: '+2.1%', positive: true },
    { label: 'Avg Transit Duration', value: '14.2 hrs', trend: '-1.8h', positive: true },
    { label: 'Escrow Held', value: '$61,400', trend: '+$12k', positive: false },
  ];

  // Shipments Data
  const shipments = [
    {
      id: 'SHP-001',
      contractId: 'CONTRACT-2026-001',
      asset: 'Arabica Coffee (100kg)',
      origin: 'Kiambu',
      status: 'AI-Audited',
      coldChain: '4.2°C',
    },
    {
      id: 'SHP-002',
      contractId: 'CONTRACT-2026-002',
      asset: 'Green Tea (50kg)',
      origin: 'Mombasa',
      status: 'Escrow Locked',
      coldChain: '3.8°C',
    },
    {
      id: 'SHP-003',
      contractId: 'CONTRACT-2026-003',
      asset: 'Avocado (75kg)',
      origin: 'Eldoret',
      status: 'In-Transit',
      coldChain: '5.1°C',
    },
    {
      id: 'SHP-004',
      contractId: 'CONTRACT-2026-004',
      asset: 'Cocoa (60kg)',
      origin: 'Kisii',
      status: 'Breach Warning',
      coldChain: '8.3°C',
    },
    {
      id: 'SHP-005',
      contractId: 'CONTRACT-2026-005',
      asset: 'Honey (40kg)',
      origin: 'Rift Valley',
      status: 'AI-Audited',
      coldChain: '2.1°C',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'AI-Audited':
        return 'bg-primary/20 text-primary border border-primary/50';
      case 'Escrow Locked':
        return 'bg-secondary/20 text-secondary border border-secondary/50';
      case 'In-Transit':
        return 'bg-locked/20 text-locked border border-locked/50';
      case 'Breach Warning':
        return 'bg-destructive/20 text-destructive border border-destructive/50';
      default:
        return 'bg-muted/20 text-muted-foreground border border-muted/50';
    }
  };

  const getMilestones = () => {
    const milestones = [
      { label: 'Deposit Locked', amount: '$15,350', date: '2026-01-08', completed: true },
      { label: 'Warehouse Intake', amount: '$15,350', date: '2026-01-09', completed: true },
      { label: 'Sea Transit Gateway', amount: '$15,350', date: '2026-01-15', completed: false },
      { label: 'Final Quality Payout', amount: '$15,350', date: '2026-01-22', completed: false },
    ];
    return milestones;
  };

  // Check for breach alert
  const hasBreach = shipments.some((s) => s.status === 'Breach Warning');
  const breachShipment = shipments.find((s) => s.status === 'Breach Warning');

  return (
    <DashboardLayout role="manager">
      {hasBreach && breachShipment && (
        <BreachAlertBanner alert={{ id: breachShipment.id, asset: breachShipment.asset, temperature: breachShipment.coldChain }} />
      )}
      <div className="space-y-8">
        {/* Section A: KPI Row */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="data-card">
                <p className="text-xs text-muted-foreground mb-1">{kpi.label}</p>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold">{kpi.value}</h3>
                  <div className={`flex items-center gap-1 text-xs ${kpi.positive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {kpi.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {kpi.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B: Active Shipments Table */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Active Shipments</h2>
          <div className="data-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Contract ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Asset</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Origin</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Cold Chain</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr 
                    key={shipment.id} 
                    className={`border-b border-border/50 hover:bg-primary/5 transition-colors ${
                      shipment.status === 'Breach Warning' ? 'border-l-4 border-l-destructive bg-destructive/5 animate-pulse-subtle' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-mono text-xs">{shipment.contractId}</td>
                    <td className="py-3 px-4">{shipment.asset}</td>
                    <td className="py-3 px-4">{shipment.origin}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded-sm ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs">{shipment.coldChain}</td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:text-primary/80 text-xs font-medium">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section C: Escrow Milestone Timeline */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Escrow Milestones (Selected Shipment)</h2>
          <div className="data-card">
            <div className="flex items-center justify-between">
              {getMilestones().map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 ${
                      milestone.completed
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-border text-muted-foreground'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-xs font-medium text-center">{milestone.label}</p>
                  <p className="text-xs text-primary font-mono mt-1">{milestone.amount}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{milestone.date}</p>
                  {idx < getMilestones().length - 1 && (
                    <div className="absolute ml-20 h-1 bg-border w-12 -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: AI Intelligence Feed */}
        <AICyclingFeed />
      </div>
    </DashboardLayout>
  );
}
