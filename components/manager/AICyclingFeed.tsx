'use client';

import { useState, useEffect } from 'react';
import { aiFeedMessages } from '@/lib/data';

export function AICyclingFeed() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cycle through messages every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % aiFeedMessages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Blinking cursor animation
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">AI Cold-Chain Analyst — Live Feed</h2>
        <span className="text-xs text-muted-foreground font-mono">
          {currentMessageIndex + 1}/{aiFeedMessages.length}
        </span>
      </div>
      <div className="terminal data-card font-mono text-sm space-y-2 p-4 min-h-32">
        <div className="text-green-400">
          <span className="text-muted-foreground">[LIVE]</span> {aiFeedMessages[currentMessageIndex]}
          {showCursor && <span className="animate-pulse">▋</span>}
        </div>
      </div>
    </section>
  );
}
