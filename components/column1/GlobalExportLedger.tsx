'use client';

import { MOCK_SHIPMENTS } from '@/lib/constants';
import { useState } from 'react';
import { ShipmentsTable } from './ShipmentsTable';
import { TelemetryControl } from './TelemetryControl';
import { TerminalLog } from './TerminalLog';

export function GlobalExportLedger() {
  const [isLiveStreamActive, setIsLiveStreamActive] = useState(false);

  return (
    <div className="space-y-4">
      <ShipmentsTable shipments={MOCK_SHIPMENTS} />
      <TelemetryControl isActive={isLiveStreamActive} onToggle={() => setIsLiveStreamActive(!isLiveStreamActive)} />
      {isLiveStreamActive && <TerminalLog isActive={isLiveStreamActive} />}
    </div>
  );
}
