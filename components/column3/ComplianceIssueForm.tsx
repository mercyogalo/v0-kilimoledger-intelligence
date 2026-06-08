'use client';

import { COMPLIANCE_ISSUES } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function ComplianceIssueForm() {
  const [selectedIssue, setSelectedIssue] = useState<string>('');
  const [details, setDetails] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = () => {
    console.log('[v0] Compliance issue submitted:', { selectedIssue, details });
    // Reset form
    setSelectedIssue('');
    setDetails('');
    setIsDropdownOpen(false);
  };

  return (
    <div className="space-y-3 p-3 bg-exception/10 border border-exception/30 rounded-sm">
      <p className="text-xs font-semibold text-foreground">Specify Compliance Issue</p>

      {/* Issue Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-3 py-2 bg-terminal-bg border border-exception/50 text-foreground text-left text-xs rounded-sm flex items-center justify-between hover:bg-slate/40 transition-colors"
        >
          {selectedIssue || 'Select issue type...'}
          <ChevronDown className="w-3.5 h-3.5" />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-terminal-bg border border-exception/50 rounded-sm overflow-hidden z-10 shadow-lg">
            {COMPLIANCE_ISSUES.map((issue) => (
              <button
                key={issue}
                onClick={() => {
                  setSelectedIssue(issue);
                  setIsDropdownOpen(false);
                }}
                className="w-full px-3 py-2 text-xs text-foreground hover:bg-slate/40 text-left transition-colors duration-150 border-b border-border/30 last:border-b-0"
              >
                {issue}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details Textarea */}
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Additional details..."
        className="w-full px-3 py-2 bg-terminal-bg border border-exception/50 text-foreground text-xs rounded-sm placeholder-muted-foreground/50 focus:outline-none focus:border-exception resize-none"
        rows={3}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!selectedIssue}
        className="w-full px-3 py-2 bg-exception/20 hover:bg-exception/30 disabled:opacity-50 disabled:cursor-not-allowed border border-exception/50 text-exception rounded-sm text-xs font-semibold transition-colors duration-200"
      >
        Report Issue
      </button>
    </div>
  );
}
