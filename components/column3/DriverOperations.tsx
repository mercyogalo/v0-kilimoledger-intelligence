'use client';

import { ConnectivityIndicator } from './ConnectivityIndicator';
import { DriverMobileSimulator } from './DriverMobileSimulator';
import { RouteOptimizationEngine } from './RouteOptimizationEngine';

export function DriverOperations() {
  return (
    <div className="space-y-4">
      <DriverMobileSimulator />
      <ConnectivityIndicator />
      <RouteOptimizationEngine />
    </div>
  );
}
