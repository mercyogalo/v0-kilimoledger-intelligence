'use client';

import { checkpointHistory } from '@/lib/data';

export function CheckpointHistory() {
  return (
    <div className="data-card">
      <h3 className="text-lg font-semibold mb-4">Checkpoint History</h3>
      <div className="space-y-4">
        {checkpointHistory.map((checkpoint, idx) => {
          const getStatusDot = () => {
            if (checkpoint.status === 'Cleared') return 'bg-primary';
            if (checkpoint.status === 'Current') return 'w-4 h-4 bg-primary animate-pulse';
            return 'bg-muted';
          };

          return (
            <div key={idx} className="flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${getStatusDot()}`} />
                {idx < checkpointHistory.length - 1 && <div className="w-0.5 h-6 bg-border" />}
              </div>
              <div className="pb-2">
                <p className="text-sm font-medium">{checkpoint.name}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <span>{checkpoint.time}</span>
                  <span className={`px-2 py-0.5 rounded-sm ${
                    checkpoint.status === 'Cleared' ? 'bg-primary/10 text-primary' :
                    checkpoint.status === 'Current' ? 'bg-secondary/10 text-secondary' :
                    'bg-muted/10 text-muted-foreground'
                  }`}>
                    {checkpoint.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
