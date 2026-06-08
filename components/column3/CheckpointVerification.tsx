'use client';

import { CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';
import { ComplianceIssueForm } from './ComplianceIssueForm';

interface CheckpointVerificationProps {
  checkpointName: string;
  requiredDocuments: string[];
  onConfirm?: () => void;
}

export function CheckpointVerification({
  checkpointName,
  requiredDocuments,
  onConfirm,
}: CheckpointVerificationProps) {
  const [isRejected, setIsRejected] = useState(false);

  return (
    <div className="space-y-3">
      {/* Checkpoint Card */}
      <div className="bg-slate/20 border border-border/50 rounded-sm p-3.5">
        <p className="text-xs font-semibold text-foreground mb-3">Active Checkpoint</p>
        <p className="text-sm font-bold text-success">{checkpointName}</p>

        {/* Required Documents */}
        <div className="mt-3 space-y-1.5">
          <p className="text-xs text-muted-foreground font-medium">Required Documents:</p>
          {requiredDocuments.map((doc) => (
            <div key={doc} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
              <span>{doc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      {!isRejected && (
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onConfirm}
            className="px-3 py-2.5 bg-success/20 hover:bg-success/30 border border-success/50 text-success rounded-sm text-xs font-semibold transition-colors duration-200"
          >
            Confirm Verification
          </button>
          <button
            onClick={() => setIsRejected(true)}
            className="px-3 py-2.5 bg-exception/20 hover:bg-exception/30 border border-exception/50 text-exception rounded-sm text-xs font-semibold transition-colors duration-200"
          >
            Flag Rejection
          </button>
        </div>
      )}

      {/* Rejection Form */}
      {isRejected && (
        <div className="space-y-2">
          <ComplianceIssueForm />
          <button
            onClick={() => setIsRejected(false)}
            className="w-full px-3 py-2 bg-border/30 hover:bg-border/50 text-muted-foreground rounded-sm text-xs font-medium transition-colors duration-200"
          >
            Cancel Rejection
          </button>
        </div>
      )}
    </div>
  );
}
