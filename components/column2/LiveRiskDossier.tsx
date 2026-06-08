'use client';

import { AIExecutiveSummary } from './AIExecutiveSummary';
import { CargoStabilityGauge } from './CargoStabilityGauge';
import { EUDRComplianceCard } from './EUDRComplianceCard';
import { MilestoneTimeline } from './MilestoneTimeline';

export function LiveRiskDossier() {
  return (
    <div className="space-y-4">
      <AIExecutiveSummary />
      <CargoStabilityGauge />
      <MilestoneTimeline />
      <EUDRComplianceCard />
    </div>
  );
}
