'use client';

import { MOCK_CHECKPOINTS } from '@/lib/constants';
import { CheckpointVerification } from './CheckpointVerification';
import { IncidentReportButton } from './IncidentReportButton';

export function DriverMobileSimulator() {
  const activeCheckpoint = MOCK_CHECKPOINTS[1]; // Mtito Andei

  return (
    <div className="card-premium p-4 space-y-4">
      {/* Mobile Frame */}
      <div className="mx-auto w-80 bg-gradient-to-b from-slate to-slate-dark border-8 border-slate rounded-3xl shadow-2xl overflow-hidden">
        {/* Status Bar */}
        <div className="bg-terminal-bg px-4 py-2.5 flex items-center justify-between text-xs text-muted-foreground font-mono border-b border-border/30">
          <span>9:41</span>
          <span>4G</span>
          <span>🔋</span>
        </div>

        {/* Screen Content */}
        <div className="bg-card min-h-96 p-4 space-y-3">
          <h3 className="text-sm font-bold text-foreground text-center">Driver Portal</h3>

          {/* Active Checkpoint */}
          <CheckpointVerification
            checkpointName={activeCheckpoint.name}
            requiredDocuments={activeCheckpoint.requiredDocuments}
            onConfirm={() => console.log('[v0] Checkpoint confirmed')}
          />

          {/* SOS Button */}
          <IncidentReportButton />

          {/* Status Footer */}
          <div className="p-2.5 bg-success/10 border border-success/30 rounded-sm text-center">
            <p className="text-xs text-success font-medium">Vehicle Active</p>
            <p className="text-xs text-muted-foreground mt-0.5">Last update: 2 min ago</p>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="bg-terminal-bg h-6 flex items-center justify-center">
          <div className="w-32 h-1 bg-foreground/30 rounded-full" />
        </div>
      </div>

      {/* Connectivity Info Below */}
      <div className="text-center text-xs text-muted-foreground">
        <p>iPhone 14 Pro Simulator</p>
        <p>375 × 812 px viewport</p>
      </div>
    </div>
  );
}
