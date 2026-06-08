'use client';

import { Wifi, WifiOff } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ConnectivityIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Get initial state from localStorage
    const savedState = localStorage.getItem('driverConnectivity');
    if (savedState !== null) {
      setIsOnline(JSON.parse(savedState));
    }
  }, []);

  const toggleConnectivity = () => {
    const newState = !isOnline;
    setIsOnline(newState);
    localStorage.setItem('driverConnectivity', JSON.stringify(newState));
  };

  return (
    <div
      className={`p-3 rounded-sm border flex items-center justify-between ${
        isOnline
          ? 'bg-success/10 border-success/30'
          : 'bg-exception/10 border-exception/30'
      }`}
    >
      <div className="flex items-center gap-2.5">
        {isOnline ? (
          <Wifi className="w-4 h-4 text-success" />
        ) : (
          <WifiOff className="w-4 h-4 text-exception" />
        )}
        <div>
          <p className={`text-xs font-semibold ${isOnline ? 'text-success' : 'text-exception'}`}>
            {isOnline ? 'Online' : 'Offline Cache'}
          </p>
          <p className="text-xs text-muted-foreground">
            {isOnline ? 'Live connection' : 'Buffering enabled'}
          </p>
        </div>
      </div>

      <button
        onClick={toggleConnectivity}
        className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors duration-200 ${
          isOnline
            ? 'bg-success/10 hover:bg-success/20 text-success border border-success/50'
            : 'bg-exception/10 hover:bg-exception/20 text-exception border border-exception/50'
        }`}
      >
        Toggle
      </button>
    </div>
  );
}
