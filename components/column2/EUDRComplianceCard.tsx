'use client';

import { CheckCircle2, Download } from 'lucide-react';

export function EUDRComplianceCard() {
  const handleDownload = () => {
    // Mock download - in production would fetch actual PDF
    const mockPdfUrl = 'data:application/pdf,%25PDF-1.4%0A';
    const link = document.createElement('a');
    link.href = mockPdfUrl;
    link.download = 'EUDR-Compliance-Report-2026.pdf';
    link.click();
  };

  return (
    <div className="card-premium p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-foreground">EUDR Compliance</h3>
          <p className="text-xs text-muted-foreground mt-1">Deforestation Due Diligence</p>
        </div>
        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
      </div>

      {/* Status */}
      <div className="space-y-2">
        <div className="p-3 bg-success/10 border border-success/30 rounded-sm">
          <p className="text-xs font-medium text-success mb-1">Farm Polygons: VERIFIED SATELLITE MAPPING</p>
          <p className="text-xs text-muted-foreground">Zero deforestation detected in source regions</p>
        </div>

        <div className="p-3 bg-locked/10 border border-locked/30 rounded-sm">
          <p className="text-xs font-mono text-locked font-semibold">EUDR-DDS-2026-KE-892A</p>
          <p className="text-xs text-muted-foreground mt-1">Clearance Certificate ID</p>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-success/10 hover:bg-success/20 border border-success/50 text-success rounded-sm text-sm font-medium transition-colors duration-200"
      >
        <Download className="w-4 h-4" />
        Download Certified Compliance PDF
      </button>
    </div>
  );
}
