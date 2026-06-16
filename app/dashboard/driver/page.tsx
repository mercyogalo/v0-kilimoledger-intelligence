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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Status Bar */}
      <div className="bg-green-700 px-6 py-3 flex items-center justify-between text-sm">
        <span className="text-green-200">9:41</span>
        <span className="text-white font-semibold tracking-wide">Driver Portal</span>
        <span className="text-green-200">100%</span>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-6 py-8 max-w-4xl mx-auto w-full">
        {/* Tab: Checkpoint */}
        {activeTab === 'checkpoint' && (
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Active Checkpoint</p>
              <h2 className="text-2xl font-bold text-green-700">Mtito Andei Weighbridge</h2>
            </div>
            <div className="border border-gray-200 rounded-md p-5 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-green-700">Vehicle Active</span>
                </div>
                <span className="text-xs text-gray-400">Just now</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md p-5 bg-white shadow-sm">
              <p className="text-xs text-gray-400 mb-2">Last Update</p>
              <p className="text-sm font-mono text-green-700">{new Date().toLocaleString()}</p>
            </div>
          </div>
        )}

        {/* Tab: Documents */}
        {activeTab === 'documents' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-700 mb-6">Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <div key={doc.id} className="border border-gray-200 rounded-md p-5 bg-white shadow-sm">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                      <span
                        className={`text-xs inline-block mt-1 px-2 py-0.5 rounded-sm ${
                          doc.status === 'Approved'
                            ? 'bg-green-100 text-green-700'
                            : doc.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-600'
                        }`}
                      >
                        {doc.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-green-700 text-white text-xs font-medium rounded-sm hover:bg-green-600 transition-colors">
                      Approve
                    </button>
                    <button className="flex-1 py-2 bg-red-500 text-white text-xs font-medium rounded-sm hover:bg-red-600 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-gray-200 rounded-md p-5 bg-white shadow-sm mt-6 max-w-lg">
              <label className="block text-xs text-gray-400 mb-2">Rejection Reason</label>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Optional notes..."
                className="w-full bg-white border border-gray-200 rounded-sm p-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                rows={3}
              />
              <button className="w-full mt-3 py-2 bg-red-500 text-white text-sm font-medium rounded-sm hover:bg-red-600 transition-colors">
                Flag Rejection
              </button>
            </div>
          </div>
        )}

        {/* Tab: SOS */}
        {activeTab === 'sos' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-700 mb-6">Incident Report</h2>
            {!showSOSConfirm ? (
              <>
                <button
                  onClick={() => setShowSOSConfirm(true)}
                  className="w-full max-w-sm py-5 bg-red-500 text-white rounded-md font-bold text-xl hover:bg-red-600 transition-colors"
                >
                  REPORT INCIDENT
                </button>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {incidents.map((incident) => (
                    <button
                      key={incident}
                      onClick={() => {
                        setSelectedIncident(incident);
                        setShowSOSConfirm(true);
                      }}
                      className="py-4 px-4 border border-gray-200 rounded-md text-sm font-medium text-green-700 hover:border-green-500 hover:bg-green-50 transition-colors"
                    >
                      {incident}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="border border-gray-200 rounded-md p-8 bg-white shadow-sm text-center space-y-4 max-w-md">
                <AlertTriangle className="w-10 h-10 text-red-500 mx-auto" />
                <h3 className="font-bold text-xl text-green-700">SOS Sent</h3>
                <p className="text-sm text-gray-400">Control has been notified of your incident</p>
                {selectedIncident && (
                  <p className="text-sm text-green-600 font-mono">{selectedIncident}</p>
                )}
                <button
                  onClick={() => {
                    setShowSOSConfirm(false);
                    setSelectedIncident(null);
                  }}
                  className="w-full py-2 bg-green-700 text-white text-sm font-medium rounded-sm hover:bg-green-600 transition-colors mt-4"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Tab Bar */}
      <div className="border-t border-gray-200 bg-white flex sticky bottom-0">
        <button
          onClick={() => setActiveTab('checkpoint')}
          className={`flex-1 py-4 text-sm font-medium border-t-2 transition-colors ${
            activeTab === 'checkpoint'
              ? 'text-green-700 border-green-700'
              : 'text-gray-400 border-transparent hover:text-green-600'
          }`}
        >
          <MapPin className="w-5 h-5 mx-auto mb-1" />
          Checkpoint
        </button>
        <button
          onClick={() => setActiveTab('documents')}
          className={`flex-1 py-4 text-sm font-medium border-t-2 transition-colors ${
            activeTab === 'documents'
              ? 'text-green-700 border-green-700'
              : 'text-gray-400 border-transparent hover:text-green-600'
          }`}
        >
          <FileText className="w-5 h-5 mx-auto mb-1" />
          Documents
        </button>
        <button
          onClick={() => setActiveTab('sos')}
          className={`flex-1 py-4 text-sm font-medium border-t-2 transition-colors ${
            activeTab === 'sos'
              ? 'text-red-500 border-red-500'
              : 'text-gray-400 border-transparent hover:text-red-400'
          }`}
        >
          <AlertTriangle className="w-5 h-5 mx-auto mb-1" />
          SOS
        </button>
      </div>
    </div>
  );
}