'use client';

import type { Shipment } from '@/lib/types';
import { AlertCircle, CheckCircle2, Lock, Truck } from 'lucide-react';

interface ShipmentsTableProps {
  shipments: Shipment[];
}

const statusConfig = {
  'ai-audited': {
    label: 'AI-Audited',
    icon: CheckCircle2,
    bgColor: 'bg-success/10',
    textColor: 'text-success',
    borderColor: 'border-success/30',
  },
  'escrow-locked': {
    label: 'Escrow Locked',
    icon: Lock,
    bgColor: 'bg-locked/10',
    textColor: 'text-locked',
    borderColor: 'border-locked/30',
  },
  'in-transit': {
    label: 'In-Transit',
    icon: Truck,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
  },
  'breach-warning': {
    label: 'Breach Warning',
    icon: AlertCircle,
    bgColor: 'bg-exception/10',
    textColor: 'text-exception',
    borderColor: 'border-exception/30',
  },
};

export function ShipmentsTable({ shipments }: ShipmentsTableProps) {
  return (
    <div className="card-premium overflow-hidden">
      <div className="p-4 border-b border-border bg-slate/30">
        <h3 className="font-semibold text-foreground text-sm">Active Shipments</h3>
        <p className="text-xs text-muted-foreground mt-1">{shipments.length} contracts tracked</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border/50 bg-slate/20">
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Contract ID</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Asset</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => {
              const config = statusConfig[shipment.status];
              const Icon = config.icon;
              return (
                <tr
                  key={shipment.id}
                  className="border-b border-border/30 hover:bg-slate/20 transition-colors duration-150 cursor-pointer group"
                >
                  <td className="px-4 py-3 text-muted-foreground font-mono">
                    {shipment.contractHashId}
                  </td>
                  <td className="px-4 py-3 text-foreground truncate group-hover:text-success transition-colors">
                    {shipment.cropAsset}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium border ${config.bgColor} ${config.textColor} ${config.borderColor} ${
                        shipment.status === 'breach-warning' ? 'animate-pulse-subtle' : ''
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {config.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 bg-slate/10 border-t border-border/30 text-xs text-muted-foreground">
        <p>Last updated: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
    </div>
  );
}
