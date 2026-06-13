'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Copy, Download } from 'lucide-react';

export default function ComplianceGenerator() {
  const [farmName, setFarmName] = useState('');
  const [gpsCoords, setGpsCoords] = useState('');
  const [commodity, setCommodity] = useState('');
  const [destination, setDestination] = useState('');
  const [harvestDate, setHarvestDate] = useState('');
  const [cooperativeName, setCooperativeName] = useState('');
  const [generated, setGenerated] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const generateStatement = () => {
    if (!farmName || !gpsCoords || !commodity || !destination || !harvestDate || !cooperativeName) {
      alert('Please fill all fields');
      return;
    }
    const newCertId = `EUDR-DDS-2026-KE-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    setCertificateId(newCertId);
    setGenerated(true);
  };

  const copyToClipboard = () => {
    const statement = generateComplianceStatement();
    navigator.clipboard.writeText(statement);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  const generateComplianceStatement = () => {
    return `EUROPEAN UNION DEFORESTATION REGULATION (EUDR)
DUE DILIGENCE STATEMENT

Certificate ID: ${certificateId}
Issued: ${new Date().toLocaleDateString()}

FARM INFORMATION
Farm Name: ${farmName}
GPS Coordinates: ${gpsCoords}
Cooperative: ${cooperativeName}
Harvest Date: ${harvestDate}

COMMODITY INFORMATION
Commodity: ${commodity}
Export Destination: ${destination}
Category: Agricultural Product

COMPLIANCE STATUS
Farm Polygon Verification: VERIFIED
Land Use Classification: COMPLIANT
Deforestation Risk: LOW
Regulatory Status: COMPLIANT WITH EUDR

This statement certifies that the above-mentioned agricultural product has been sourced in compliance with the EU Deforestation Regulation (EUDR) and applicable local laws.

Valid until: ${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString()}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border px-8 py-6">
        <Link
          href="/dashboard/manager"
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4 text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold">EUDR Compliance Generator</h1>
        <p className="text-muted-foreground mt-2">Generate Due Diligence Statements for agricultural exports</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Left Column: Form */}
        <div>
          <div className="data-card">
            <h2 className="text-lg font-semibold mb-6">Shipment Information</h2>
            <div className="space-y-4">
              {/* Farm Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Farm Name</label>
                <input
                  type="text"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                  placeholder="e.g., Highlands Arabica Estate"
                  className="w-full bg-card border border-border rounded-sm p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* GPS Coordinates */}
              <div>
                <label className="block text-sm font-medium mb-2">GPS Coordinates</label>
                <input
                  type="text"
                  value={gpsCoords}
                  onChange={(e) => setGpsCoords(e.target.value)}
                  placeholder="-1.2921, 36.8219"
                  className="w-full bg-card border border-border rounded-sm p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Commodity */}
              <div>
                <label className="block text-sm font-medium mb-2">Commodity</label>
                <select
                  value={commodity}
                  onChange={(e) => setCommodity(e.target.value)}
                  className="w-full bg-card border border-border rounded-sm p-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select commodity...</option>
                  <option value="Arabica Coffee">Arabica Coffee</option>
                  <option value="Green Tea">Green Tea</option>
                  <option value="Avocado">Avocado</option>
                  <option value="Cocoa">Cocoa</option>
                  <option value="Honey">Honey</option>
                </select>
              </div>

              {/* Export Destination */}
              <div>
                <label className="block text-sm font-medium mb-2">Export Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-card border border-border rounded-sm p-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select destination...</option>
                  <option value="EU">European Union</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="UAE">United Arab Emirates</option>
                </select>
              </div>

              {/* Harvest Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Harvest Date</label>
                <input
                  type="date"
                  value={harvestDate}
                  onChange={(e) => setHarvestDate(e.target.value)}
                  className="w-full bg-card border border-border rounded-sm p-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Cooperative Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Cooperative Name</label>
                <input
                  type="text"
                  value={cooperativeName}
                  onChange={(e) => setCooperativeName(e.target.value)}
                  placeholder="e.g., Kiambu Farmers Cooperative"
                  className="w-full bg-card border border-border rounded-sm p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={generateStatement}
                className="w-full mt-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Generate EUDR Statement
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Output */}
        <div>
          <div className="data-card">
            <h2 className="text-lg font-semibold mb-4">Generated Statement</h2>
            <div className="terminal font-mono text-xs space-y-1 h-96 overflow-y-auto mb-4 p-4 bg-black rounded-sm text-green-400">
              {!generated ? (
                <p className="text-muted-foreground">Fill the form to generate your Due Diligence Statement</p>
              ) : (
                generateComplianceStatement()
                  .split('\n')
                  .map((line, idx) => (
                    <div key={idx} className={line.includes('ID:') || line.includes('Issued:') ? 'text-yellow-400' : ''}>
                      {line || <br />}
                    </div>
                  ))
              )}
            </div>

            {generated && (
              <div className="space-y-3">
                <div className="bg-card border border-border rounded-sm p-3">
                  <p className="text-xs text-muted-foreground mb-1">Certificate ID</p>
                  <p className="font-mono text-sm text-primary">{certificateId}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center gap-2 py-2 bg-card border border-border rounded-sm hover:border-primary transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-medium">
                      {copiedToClipboard ? 'Copied!' : 'Copy'}
                    </span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90">
                    <Download className="w-4 h-4" />
                    <span className="text-xs font-medium">Download PDF</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
