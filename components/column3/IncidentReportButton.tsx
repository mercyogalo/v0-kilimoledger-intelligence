'use client';

import { AlertTriangle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const INCIDENT_TYPES = [
  { id: 'mechanical', label: 'Mechanical Failure' },
  { id: 'temp-spike', label: 'Cold-Chain Temp Spike' },
  { id: 'blockage', label: 'Road Blockage' },
];

export function IncidentReportButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState<string>('');

  const handleSelectIncident = (incidentId: string) => {
    setSelectedIncident(incidentId);
    console.log('[v0] Incident reported:', incidentId);
    // Reset after a brief moment
    setTimeout(() => {
      setSelectedIncident('');
      setIsDropdownOpen(false);
    }, 500);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-exception/20 hover:bg-exception/30 border border-exception/50 text-exception rounded-sm text-sm font-semibold transition-colors duration-200 group"
      >
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          <span>SOS: Report Incident</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-sm overflow-hidden z-20 shadow-lg">
          {INCIDENT_TYPES.map((incident) => (
            <button
              key={incident.id}
              onClick={() => handleSelectIncident(incident.id)}
              className="w-full px-4 py-2.5 text-xs text-foreground hover:bg-slate/40 text-left transition-colors duration-150 border-b border-border/30 last:border-b-0 flex items-center gap-2"
            >
              {selectedIncident === incident.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-exception animate-pulse" />
              )}
              <span>{incident.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
