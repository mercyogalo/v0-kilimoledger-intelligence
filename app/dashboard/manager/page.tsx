'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { BreachAlertBanner } from '@/components/manager/BreachAlertBanner';
import { AICyclingFeed } from '@/components/manager/AICyclingFeed';

export default function ManagerDashboard() {
  const kpis = [
    { label: 'Active Shipments', value: '5', trend: '+2', positive: true },
    { label: 'Compliance Pass Rate', value: '91.4%', trend: '+2.1%', positive: true },
    { label: 'Avg Transit Duration', value: '14.2 hrs', trend: '-1.8h', positive: true },
    { label: 'Escrow Held', value: '$61,400', trend: '+$12k', positive: false },
  ];

  const shipments = [
    { id: 'SHP-001', contractId: 'CONTRACT-2026-001', asset: 'Arabica Coffee (100kg)', origin: 'Kiambu', status: 'AI-Audited', coldChain: '4.2°C' },
    { id: 'SHP-002', contractId: 'CONTRACT-2026-002', asset: 'Green Tea (50kg)', origin: 'Mombasa', status: 'Escrow Locked', coldChain: '3.8°C' },
    { id: 'SHP-003', contractId: 'CONTRACT-2026-003', asset: 'Avocado (75kg)', origin: 'Eldoret', status: 'In-Transit', coldChain: '5.1°C' },
    { id: 'SHP-004', contractId: 'CONTRACT-2026-004', asset: 'Cocoa (60kg)', origin: 'Kisii', status: 'Breach Warning', coldChain: '8.3°C' },
    { id: 'SHP-005', contractId: 'CONTRACT-2026-005', asset: 'Honey (40kg)', origin: 'Rift Valley', status: 'AI-Audited', coldChain: '2.1°C' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'AI-Audited':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'Escrow Locked':
        return 'bg-amber-50 text-amber-700 border border-amber-200';
      case 'In-Transit':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Breach Warning':
        return 'bg-red-50 text-red-700 border border-red-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
    }
  };

  const getMilestones = () => [
    { label: 'Deposit Locked', amount: '$15,350', date: '2026-01-08', completed: true },
    { label: 'Warehouse Intake', amount: '$15,350', date: '2026-01-09', completed: true },
    { label: 'Sea Transit Gateway', amount: '$15,350', date: '2026-01-15', completed: false },
    { label: 'Final Quality Payout', amount: '$15,350', date: '2026-01-22', completed: false },
  ];

  const hasBreach = shipments.some((s) => s.status === 'Breach Warning');
  const breachShipment = shipments.find((s) => s.status === 'Breach Warning');

  return (
    <DashboardLayout role="manager">
      {hasBreach && breachShipment && (
        <BreachAlertBanner
          alert={{
            id: breachShipment.id,
            asset: breachShipment.asset,
            temperature: breachShipment.coldChain,
          }}
        />
      )}

      <div className="space-y-8 bg-white min-h-screen p-6">

        {/* Section A: KPI Row */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
              >
                <p className="text-xs text-gray-500 mb-1">{kpi.label}</p>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
                  <div
                    className={`flex items-center gap-1 text-xs ${
                      kpi.positive ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    {kpi.positive ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {kpi.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B: Active Shipments Table */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Shipments</h2>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Contract ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Asset</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Origin</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Cold Chain</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr
                    key={shipment.id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      shipment.status === 'Breach Warning'
                        ? 'border-l-4 border-l-red-500 bg-red-50/50'
                        : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-mono text-xs text-gray-600">{shipment.contractId}</td>
                    <td className="py-3 px-4 text-gray-900">{shipment.asset}</td>
                    <td className="py-3 px-4 text-gray-600">{shipment.origin}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded-md font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-gray-600">{shipment.coldChain}</td>
                    <td className="py-3 px-4">
                      <button className="text-green-600 hover:text-green-700 text-xs font-medium">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section C: Escrow Milestone Timeline */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Escrow Milestones</h2>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="relative flex items-start justify-between">
              {/* Connector line */}
              <div className="absolute top-5 left-0 right-0 h-px bg-gray-200 z-0" />

              {getMilestones().map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3 ring-4 ${
                      milestone.completed
                        ? 'bg-green-600 text-white ring-green-100'
                        : 'bg-white text-gray-400 border-2 border-gray-300 ring-white'
                    }`}
                  >
                    {milestone.completed ? '✓' : idx + 1}
                  </div>
                  <p className="text-xs font-medium text-gray-900 text-center leading-tight mb-1">
                    {milestone.label}
                  </p>
                  <p className="text-xs text-green-600 font-mono font-medium">{milestone.amount}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{milestone.date}</p>
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