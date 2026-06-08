'use client';

import { useEffect, useRef, useState } from 'react';

interface LogEntry {
  id: string;
  timestamp: string;
  action: string;
  table: string;
  record: Record<string, unknown>;
  opacity: number;
}

interface TerminalLogProps {
  isActive: boolean;
}

const generateMockRecord = () => {
  const tables = ['shipments', 'drivers', 'checkpoints', 'compliance_records'];
  const actions = ['write', 'update', 'insert', 'commit'];
  const shipmentIds = ['SHP001', 'SHP002', 'SHP003', 'SHP004', 'SHP005'];

  const table = tables[Math.floor(Math.random() * tables.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];

  return {
    action,
    table,
    record: {
      id: shipmentIds[Math.floor(Math.random() * shipmentIds.length)],
      status: ['ai-audited', 'escrow-locked', 'in-transit'][Math.floor(Math.random() * 3)],
      timestamp: new Date().toISOString(),
      region: 'KE',
    },
  };
};

export function TerminalLog({ isActive }: TerminalLogProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) {
      setLogs([]);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const timestamp = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

      const newLog: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp,
        ...generateMockRecord(),
        opacity: 1,
      };

      setLogs((prev) => {
        const updated = [...prev, newLog];
        // Keep only last 15 entries
        if (updated.length > 15) {
          return updated.slice(-15);
        }
        return updated;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isActive]);

  // Fade out old logs
  useEffect(() => {
    if (logs.length === 0) return;

    const timer = setInterval(() => {
      setLogs((prev) =>
        prev.map((log, idx) => ({
          ...log,
          opacity: 1 - (prev.length - idx - 1) * 0.15,
        }))
      );
    }, 500);

    return () => clearInterval(timer);
  }, [logs.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="card-premium overflow-hidden mt-4">
      <div
        ref={terminalRef}
        className="bg-terminal-bg p-4 h-64 overflow-y-auto space-y-1.5 text-xs font-light font-mono text-green-400 border border-border/20"
      >
        {logs.length === 0 && (
          <div className="text-muted-foreground/50 italic">
            Waiting for live stream data...
          </div>
        )}
        {logs.map((log) => (
          <div
            key={log.id}
            style={{ opacity: log.opacity }}
            className="transition-opacity duration-500 whitespace-nowrap"
          >
            <span className="text-success">[{log.timestamp}]</span>
            {` {"`}
            <span className="text-blue-400">"action"</span>
            {`: "`}
            <span className="text-green-400">{log.action}</span>
            {`", "table": "`}
            <span className="text-cyan-400">{log.table}</span>
            {`", "id": "`}
            <span className="text-yellow-400">{log.record.id}</span>
            {`"}`}
          </div>
        ))}
      </div>
    </div>
  );
}
