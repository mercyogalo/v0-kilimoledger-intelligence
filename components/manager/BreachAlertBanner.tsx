'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface BreachAlertBannerProps {
  alert: { id: string; asset: string; temperature: string };
}

export function BreachAlertBanner({ alert }: BreachAlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 30000); // Reappear after 30 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="bg-destructive/20 border-b border-destructive/50 px-6 py-4 flex items-center justify-between animate-pulse-subtle">
      <div className="flex items-center gap-3">
        <span className="text-destructive text-lg">⚠</span>
        <p className="text-sm text-destructive font-medium">
          Cold Chain Breach Detected — {alert.asset} ({alert.id}) — Temperature: {alert.temperature} — Immediate action required
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-destructive hover:text-destructive/80 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
