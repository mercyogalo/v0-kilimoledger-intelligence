'use client';

import { MOCK_MILESTONES } from '@/lib/constants';
import { CheckCircle2, Lock, Zap } from 'lucide-react';

export function MilestoneTimeline() {
  return (
    <div className="card-premium p-4">
      <h3 className="text-sm font-semibold text-foreground mb-4">Escrow Milestone Timeline</h3>

      <div className="space-y-0">
        {MOCK_MILESTONES.map((milestone, idx) => {
          const isLast = idx === MOCK_MILESTONES.length - 1;
          const statusIcon =
            milestone.status === 'completed'
              ? CheckCircle2
              : milestone.status === 'active'
                ? Zap
                : Lock;
          const StatusIcon = statusIcon;

          const statusColor =
            milestone.status === 'completed'
              ? 'text-success'
              : milestone.status === 'active'
                ? 'text-exception animate-pulse'
                : 'text-locked';

          const bgColor =
            milestone.status === 'completed'
              ? 'bg-success/10'
              : milestone.status === 'active'
                ? 'bg-exception/10'
                : 'bg-locked/10';

          return (
            <div key={milestone.id} className="flex gap-4">
              {/* Timeline Line & Icon */}
              <div className="flex flex-col items-center">
                <div className={`p-1.5 rounded-full border ${bgColor} ${statusColor}`}>
                  <StatusIcon className="w-4 h-4" />
                </div>
                {!isLast && (
                  <div className={`w-0.5 h-12 mt-2 ${
                    milestone.status === 'completed'
                      ? 'bg-success/30'
                      : 'bg-border'
                  }`} />
                )}
              </div>

              {/* Content */}
              <div className="pb-4 flex-1 pt-0.5">
                <p className="text-xs font-semibold text-foreground">{milestone.label}</p>
                {milestone.amount && (
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                    {milestone.amount}
                  </p>
                )}
                {milestone.date && (
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {milestone.date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-locked/10 border border-locked/30 rounded-sm text-xs text-locked font-medium">
        Next payout: Upon quality verification
      </div>
    </div>
  );
}
