'use client';

import { Radio } from 'lucide-react';

interface TelemetryControlProps {
  isActive: boolean;
  onToggle: () => void;
}

export function TelemetryControl({ isActive, onToggle }: TelemetryControlProps) {
  return (
    <div className="card-premium p-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 rounded-sm bg-slate/30 hover:bg-slate/50 transition-colors duration-200 group"
      >
        <div className="flex items-center gap-3">
          <Radio className="w-5 h-5 text-foreground group-hover:text-success transition-colors" />
          <span className="text-sm font-medium text-foreground">Live Stream Control</span>
        </div>
        <div
          className={`w-2 h-2 rounded-full ${
            isActive ? 'bg-success animate-pulse' : 'bg-muted'
          }`}
        />
      </button>

      {isActive && (
        <div className="mt-3 px-3 py-2 rounded-sm bg-success/10 border border-success/30 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          <p className="text-xs text-success font-medium">
            Live Stream Connected — Database writes active
          </p>
        </div>
      )}
    </div>
  );
}
