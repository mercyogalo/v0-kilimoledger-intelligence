'use client';

import { useState, useEffect } from 'react';
import { aiFeedMessages } from '@/lib/data';

export function AICyclingFeed() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % aiFeedMessages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-green-700">AI Cold-Chain Analyst — Live Feed</h2>
        <span className="text-xs text-green-600 font-mono">
          {currentMessageIndex + 1}/{aiFeedMessages.length}
        </span>
      </div>
      <div className="terminal data-card font-mono text-sm space-y-2 p-4 min-h-32 bg-green-700">
        <div className="text-white">
          <span className="text-green-200">[LIVE]</span> {aiFeedMessages[currentMessageIndex]}
          {showCursor && <span className="animate-pulse">▋</span>}
        </div>
      </div>
    </section>
  );
}