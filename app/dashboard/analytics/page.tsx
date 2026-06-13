'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function AnalyticsDashboard() {
  // KPI Data
  const kpis = [
    { label: 'Avg Transit Duration', value: '14.2 hrs', trend: '-1.8h', positive: true },
    { label: 'Compliance Pass Rate', value: '91.4%', trend: '+2.1%', positive: true },
    { label: 'Active Route Exceptions', value: '2', trend: '+1', positive: false },
    { label: 'Route Efficiency Score', value: '83%', trend: '+4%', positive: true },
  ];

  // Route Channel Efficiency Data
  const routeChannels = [
    { channel: 'Sea Freight (Main Route)', efficiency: 94, flag: true, days: 18 },
    { channel: 'Air Freight (Express)', efficiency: 87, flag: false, days: 3 },
    { channel: 'Rail + Truck (Hybrid)', efficiency: 76, flag: true, days: 12 },
    { channel: 'Direct Road Transport', efficiency: 62, flag: false, days: 8 },
  ];

  // Shipments by Corridor Chart Data
  const corridorData = [
    { corridor: 'Nairobi', shipments: 12 },
    { corridor: 'Mombasa', shipments: 18 },
    { corridor: 'Eldoret', shipments: 8 },
    { corridor: 'Kisumu', shipments: 5 },
    { corridor: 'Nakuru', shipments: 7 },
  ];

  // Cold Chain Breach Events Chart Data
  const breachData = [
    { day: 'Day 1', breaches: 0 },
    { day: 'Day 5', breaches: 0 },
    { day: 'Day 10', breaches: 1 },
    { day: 'Day 15', breaches: 0 },
    { day: 'Day 20', breaches: 2 },
    { day: 'Day 25', breaches: 0 },
    { day: 'Day 30', breaches: 0 },
  ];

  return (
    <DashboardLayout role="admin">
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

        {/* Section B: Route Channel Efficiency Table */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Route Channel Efficiency</h2>
          <div className="data-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Channel</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Efficiency %</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">AI Flag</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Est. Days</th>
                </tr>
              </thead>
              <tbody>
                {routeChannels.map((route) => (
                  <tr key={route.channel} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4">{route.channel}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-card rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${route.efficiency}%` }}
                          />
                        </div>
                        <span className="font-mono text-xs">{route.efficiency}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {route.flag ? (
                        <span className="text-xs font-medium text-secondary">✓ AI Flagged</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-mono text-xs">{route.days} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section C: Shipments by Corridor Chart */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipments by Export Corridor</h2>
            <div className="data-card">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={corridorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e2e22" />
                  <XAxis dataKey="corridor" stroke="#4b5563" />
                  <YAxis stroke="#4b5563" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#111a14', border: '1px solid #1e2e22', borderRadius: '4px' }}
                    cursor={{ fill: '#22c55e', opacity: 0.1 }}
                  />
                  <Bar dataKey="shipments" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Section D: Cold Chain Breach Events Chart */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Cold Chain Breach Events (30 Days)</h2>
            <div className="data-card">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={breachData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e2e22" />
                  <XAxis dataKey="day" stroke="#4b5563" />
                  <YAxis stroke="#4b5563" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#111a14', border: '1px solid #1e2e22', borderRadius: '4px' }}
                    cursor={{ fill: '#22c55e', opacity: 0.1 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="breaches"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ fill: '#ef4444', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
