'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function ShipmentDetail() {
  const params = useParams();
  const id = params.id as string;

  // Mock shipment data
  const shipment = {
    contractId: 'CONTRACT-2026-001',
    asset: 'Arabica Coffee',
    status: 'In-Transit',
    origin: 'Kiambu',
    destination: 'Hamburg Port, Germany',
    departure: '2026-01-08',
    carrier: 'Kenya Airways Cargo',
    containerId: 'CONT-2026-KE-001',
    currentTemp: '4.2°C',
    humidity: '45%',
    gpsLat: '-1.2921',
    gpsLng: '36.8219',
  };

  const events = [
    { stage: 'Warehouse Exit', date: '2026-01-08', status: 'completed' },
    { stage: 'Port Intake', date: '2026-01-09', status: 'completed' },
    { stage: 'In Transit', date: '2026-01-10 (ongoing)', status: 'active' },
    { stage: 'Quality Check', date: 'Expected 2026-01-22', status: 'pending' },
  ];

  const documents = [
    { name: 'Bill of Lading', status: 'Verified' },
    { name: 'Phytosanitary Certificate', status: 'Verified' },
    { name: 'Cold Chain Log', status: 'Verified' },
    { name: 'Export License', status: 'Pending' },
  ];

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
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Shipment ID: {id}</p>
            <h1 className="text-3xl font-bold mb-2">{shipment.asset}</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground font-mono">{shipment.contractId}</span>
              <span
                className={`px-3 py-1 rounded-sm text-xs font-medium ${
                  shipment.status === 'In-Transit'
                    ? 'bg-locked/20 text-locked'
                    : 'bg-primary/20 text-primary'
                }`}
              >
                {shipment.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Details Grid */}
          <section className="data-card">
            <h2 className="text-lg font-semibold mb-4">Shipment Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Origin</p>
                <p className="font-semibold">{shipment.origin}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Destination</p>
                <p className="font-semibold">{shipment.destination}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Departure Date</p>
                <p className="font-mono text-sm">{shipment.departure}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Carrier</p>
                <p className="font-semibold">{shipment.carrier}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground mb-1">Container ID</p>
                <p className="font-mono text-sm">{shipment.containerId}</p>
              </div>
            </div>
          </section>

          {/* Cold Chain Stats */}
          <section className="data-card">
            <h2 className="text-lg font-semibold mb-4">Cold Chain Status</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-primary/5 rounded-sm">
                <p className="text-xs text-muted-foreground mb-1">Temperature</p>
                <p className="text-2xl font-bold text-primary">{shipment.currentTemp}</p>
                <p className="text-xs text-muted-foreground mt-1">OPTIMAL</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary/5 rounded-sm">
                <p className="text-xs text-muted-foreground mb-1">Humidity</p>
                <p className="text-2xl font-bold text-primary">{shipment.humidity}</p>
                <p className="text-xs text-muted-foreground mt-1">NORMAL</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary/5 rounded-sm">
                <p className="text-xs text-muted-foreground mb-1">Days in Transit</p>
                <p className="text-2xl font-bold text-primary">2</p>
                <p className="text-xs text-muted-foreground mt-1">of 14</p>
              </div>
            </div>
          </section>

          {/* GPS Coordinates */}
          <section className="data-card">
            <h2 className="text-lg font-semibold mb-4">GPS Coordinates</h2>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Latitude</p>
                <p className="font-mono text-sm">{shipment.gpsLat}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Longitude</p>
                <p className="font-mono text-sm">{shipment.gpsLng}</p>
              </div>
            </div>
          </section>

          {/* Event Timeline */}
          <section className="data-card">
            <h2 className="text-lg font-semibold mb-4">Journey Timeline</h2>
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        event.status === 'completed'
                          ? 'bg-primary border-primary'
                          : event.status === 'active'
                            ? 'bg-locked border-locked'
                            : 'border-border bg-card'
                      }`}
                    />
                    {idx < events.length - 1 && (
                      <div
                        className={`w-0.5 h-8 ${
                          event.status === 'completed' ? 'bg-primary' : 'bg-border'
                        }`}
                      />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold">{event.stage}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Escrow Breakdown */}
          <section className="data-card">
            <h2 className="text-lg font-semibold mb-4">Escrow Breakdown</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Total Value</p>
                <p className="text-2xl font-bold text-primary">$61,400</p>
              </div>
              <div className="border-t border-border pt-3">
                <p className="text-xs text-muted-foreground mb-1">Amount Released</p>
                <p className="text-lg font-semibold text-primary">$30,700</p>
              </div>
              <div className="border-t border-border pt-3">
                <p className="text-xs text-muted-foreground mb-1">Amount Held</p>
                <p className="text-lg font-semibold text-secondary">$30,700</p>
              </div>
            </div>
          </section>

          {/* EUDR Compliance */}
          <section className="data-card">
            <h2 className="text-lg font-semibold mb-4">EUDR Compliance</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm">Farm Polygons Verified</p>
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-sm">VERIFIED</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Certificate ID</p>
                <p className="font-mono text-xs">EUDR-DDS-2026-KE-0001</p>
              </div>
              <button className="w-full mt-4 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90">
                Download Certificate
              </button>
            </div>
          </section>

          {/* Document Status */}
          <section className="data-card">
            <h2 className="text-lg font-semibold mb-4">Documents</h2>
            <div className="space-y-2">
              {documents.map((doc) => (
                <div key={doc.name} className="flex items-center justify-between pb-2 border-b border-border/50 last:border-0">
                  <p className="text-sm">{doc.name}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-sm ${
                      doc.status === 'Verified'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-secondary/20 text-secondary'
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
