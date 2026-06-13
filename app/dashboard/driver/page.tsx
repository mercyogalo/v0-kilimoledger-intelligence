'use client';

import { useState } from 'react';
import { MapPin, FileText, AlertTriangle } from 'lucide-react';

export default function DriverPortal() {
  const [activeTab, setActiveTab] = useState('checkpoint');
  const [showSOSConfirm, setShowSOSConfirm] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const documents = [
    { id: 1, name: 'Bill of Lading', status: 'Approved' },
    { id: 2, name: 'Cold Chain Temperature Log', status: 'Pending' },
    { id: 3, name: 'Driver License', status: 'Approved' },
  ];

  const incidents = [
    'Mechanical Breakdown',
    'Refrigeration Leak',
    'Road Blockage',
    'Security Threat',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      {/* Mobile Phone Simulator */}
      <div className="w-full max-w-sm border-8 border-slate rounded-3xl bg-black aspect-video flex flex-col shadow-2xl overflow-hidden">
        {/* Phone Content */}
        <div className="flex-1 flex flex-col bg-background overflow-hidden">
          {/* Status Bar */}
          <div className="bg-card border-b border-border px-4 py-2 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">9:41</span>
            <span className="text-primary font-medium">Driver Portal</span>
            <span className="text-muted-foreground">100%</span>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Tab: Checkpoint */}
            {activeTab === 'checkpoint' && (
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Active Checkpoint</p>
                  <h2 className="text-lg font-bold">Mtito Andei Weighbridge</h2>
                </div>
                <div className="data-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span className="text-sm font-medium">Vehicle Active</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Just now</span>
                  </div>
                </div>
                <div className="data-card">
                  <p className="text-xs text-muted-foreground mb-2">Last Update</p>
                  <p className="text-sm font-mono">{new Date().toLocaleString()}</p>
                </div>
              </div>
            )}

            {/* Tab: Documents */}
            {activeTab === 'documents' && (
              <div className="space-y-3">
                <h2 className="text-lg font-bold mb-4">Documents</h2>
                {documents.map((doc) => (
                  <div key={doc.id} className="data-card">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-2 flex-1">
                        <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{doc.name}</p>
                          <span
                            className={`text-xs inline-block mt-1 px-2 py-0.5 rounded-sm ${
                              doc.status === 'Approved'
                                ? 'bg-primary/20 text-primary'
                                : doc.status === 'Pending'
                                  ? 'bg-secondary/20 text-secondary'
                                  : 'bg-destructive/20 text-destructive'
                            }`}
                          >
                            {doc.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-sm hover:bg-primary/90">
                        Approve
                      </button>
                      <button className="flex-1 py-2 bg-destructive text-destructive foreground text-xs font-medium rounded-sm hover:bg-destructive/90">
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
                <div className="data-card mt-4">
                  <label className="block text-xs text-muted-foreground mb-2">Rejection Reason</label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Optional notes..."
                    className="w-full bg-card border border-border rounded-sm p-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    rows={3}
                  />
                  <button className="w-full mt-3 py-2 bg-destructive text-destructive-foreground text-xs font-medium rounded-sm hover:bg-destructive/90">
                    Flag Rejection
                  </button>
                </div>
              </div>
            )}

            {/* Tab: SOS */}
            {activeTab === 'sos' && (
              <div className="space-y-4 flex flex-col items-center justify-center h-full py-8">
                {!showSOSConfirm ? (
                  <>
                    <button
                      onClick={() => setShowSOSConfirm(true)}
                      className="w-full py-4 bg-destructive text-destructive-foreground rounded-sm font-bold text-lg hover:bg-destructive/90 transition-colors"
                    >
                      REPORT INCIDENT
                    </button>
                    <div className="grid grid-cols-2 gap-3 w-full mt-6">
                      {incidents.map((incident) => (
                        <button
                          key={incident}
                          onClick={() => {
                            setSelectedIncident(incident);
                            setShowSOSConfirm(true);
                          }}
                          className="py-3 px-2 bg-card border border-border rounded-sm text-xs font-medium hover:border-primary hover:text-primary transition-colors"
                        >
                          {incident}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="data-card text-center space-y-3 w-full">
                    <AlertTriangle className="w-8 h-8 text-destructive mx-auto" />
                    <h3 className="font-bold text-lg">SOS Sent</h3>
                    <p className="text-sm text-muted-foreground">Control has been notified of your incident</p>
                    {selectedIncident && (
                      <p className="text-xs text-primary font-mono">{selectedIncident}</p>
                    )}
                    <button
                      onClick={() => {
                        setShowSOSConfirm(false);
                        setSelectedIncident(null);
                      }}
                      className="w-full py-2 bg-primary text-primary-foreground text-xs font-medium rounded-sm hover:bg-primary/90 mt-4"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Tab Bar */}
          <div className="border-t border-border bg-card flex">
            <button
              onClick={() => setActiveTab('checkpoint')}
              className={`flex-1 py-3 text-xs font-medium border-t-2 transition-colors ${
                activeTab === 'checkpoint'
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <MapPin className="w-4 h-4 mx-auto mb-1" />
              Checkpoint
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`flex-1 py-3 text-xs font-medium border-t-2 transition-colors ${
                activeTab === 'documents'
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <FileText className="w-4 h-4 mx-auto mb-1" />
              Documents
            </button>
            <button
              onClick={() => setActiveTab('sos')}
              className={`flex-1 py-3 text-xs font-medium border-t-2 transition-colors ${
                activeTab === 'sos'
                  ? 'text-destructive border-destructive'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <AlertTriangle className="w-4 h-4 mx-auto mb-1" />
              SOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
