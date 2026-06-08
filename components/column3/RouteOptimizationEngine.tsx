'use client';

import { MOCK_ROUTE_METRICS, PERFORMANCE_COMPARISON } from '@/lib/constants';
import { TrendingDown, TrendingUp } from 'lucide-react';

export function RouteOptimizationEngine() {
  return (
    <div className="space-y-4">
      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3">
        {MOCK_ROUTE_METRICS.map((metric) => (
          <div key={metric.label} className="card-premium p-3">
            <p className="text-xs text-muted-foreground truncate">{metric.label}</p>
            <div className="flex items-baseline gap-1.5 mt-1.5">
              <p className="text-lg font-bold text-foreground">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.unit}</p>
            </div>
            {metric.trend && (
              <div className={`flex items-center gap-1 mt-1.5 text-xs font-medium ${
                metric.trend === 'down' ? 'text-success' : 'text-exception'
              }`}>
                {metric.trend === 'down' ? (
                  <TrendingDown className="w-3 h-3" />
                ) : (
                  <TrendingUp className="w-3 h-3" />
                )}
                <span>{metric.trendValue}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Performance Matrix */}
      <div className="card-premium overflow-hidden">
        <div className="p-3 border-b border-border bg-slate/30">
          <h4 className="text-xs font-semibold text-foreground">Route Channel Efficiency</h4>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border/50 bg-slate/20">
                <th className="px-3 py-2.5 text-left font-semibold text-muted-foreground">Channel</th>
                <th className="px-3 py-2.5 text-center font-semibold text-muted-foreground">Efficiency</th>
                <th className="px-3 py-2.5 text-center font-semibold text-muted-foreground">AI Flag</th>
                <th className="px-3 py-2.5 text-right font-semibold text-muted-foreground">Days</th>
              </tr>
            </thead>
            <tbody>
              {PERFORMANCE_COMPARISON.map((comparison, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border/30 hover:bg-slate/20 transition-colors"
                >
                  <td className="px-3 py-2.5 text-foreground font-medium truncate text-xs">
                    {comparison.channel}
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <span className="inline-block px-2 py-1 bg-success/10 text-success rounded-sm text-xs font-bold">
                      {comparison.efficiency}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    {comparison.aiOptimized && (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-locked/20 border border-locked/50">
                        <span className="text-xs font-bold text-locked">✓</span>
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2.5 text-right text-muted-foreground">
                    {comparison.estimatedDays}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
