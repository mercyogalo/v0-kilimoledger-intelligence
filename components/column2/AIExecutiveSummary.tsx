'use client';

import { COMPLIANCE_NARRATIVE } from '@/lib/constants';
import { Bot } from 'lucide-react';

export function AIExecutiveSummary() {
  return (
    <div className="card-premium p-4 space-y-4">
      {/* Header with Avatar */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-success/20 border border-success/50 flex items-center justify-center">
          <Bot className="w-6 h-6 text-success" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm">AI Intelligence</h3>
          <p className="text-xs text-muted-foreground">Real-time Analysis</p>
        </div>
      </div>

      {/* Narrative */}
      <div className="p-3 bg-slate/20 rounded-sm border border-border/50">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {COMPLIANCE_NARRATIVE}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2.5 bg-success/10 rounded-sm border border-success/30 text-center">
          <p className="text-lg font-bold text-success">4/4</p>
          <p className="text-xs text-muted-foreground mt-0.5">Docs Valid</p>
        </div>
        <div className="p-2.5 bg-locked/10 rounded-sm border border-locked/30 text-center">
          <p className="text-lg font-bold text-locked">-18°C</p>
          <p className="text-xs text-muted-foreground mt-0.5">Cold Chain</p>
        </div>
        <div className="p-2.5 bg-exception/10 rounded-sm border border-exception/30 text-center">
          <p className="text-lg font-bold text-exception">2h</p>
          <p className="text-xs text-muted-foreground mt-0.5">Delay Estimate</p>
        </div>
      </div>
    </div>
  );
}
