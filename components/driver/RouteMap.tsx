'use client';

import { routeWaypoints } from '@/lib/data';
import { useState, useEffect } from 'react';

export function RouteMap() {
  const [truckPosition, setTruckPosition] = useState(3); // Starting at Mtito Andei (current checkpoint)

  // Animate truck along waypoints
  useEffect(() => {
    const timer = setInterval(() => {
      setTruckPosition((prev) => (prev + 1) % routeWaypoints.length);
    }, 5000); // Move every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="data-card">
      <h3 className="text-lg font-semibold mb-4">Route to Mombasa Port</h3>
      <div className="bg-slate-dark rounded-sm p-4 space-y-3">
        {/* Simple ASCII-style route visualization */}
        <div className="space-y-2">
          {routeWaypoints.map((point, idx) => {
            const isCompleted = idx < truckPosition;
            const isCurrent = idx === truckPosition;
            const isUpcoming = idx > truckPosition;

            return (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                  isCurrent ? 'w-4 h-4 bg-primary animate-pulse' : isCompleted ? 'bg-primary' : 'bg-muted'
                }`} />
                <span className={`text-xs flex-1 ${
                  isCompleted ? 'text-muted-foreground' : isCurrent ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}>
                  {idx === 0 && 'Nairobi'}
                  {idx === 1 && 'Athi River'}
                  {idx === 2 && 'Sultan Hamud'}
                  {idx === 3 && 'Mtito Andei (Current)'}
                  {idx === 4 && 'Voi'}
                  {idx === 5 && 'Maungu'}
                  {idx === 6 && 'Mombasa Port (Destination)'}
                </span>
                {isCompleted && <span className="text-xs text-primary">✓</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
