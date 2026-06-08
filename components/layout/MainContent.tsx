'use client';

import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="ml-0 lg:ml-64 pt-16 lg:pt-0">
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Global Trade Intelligence
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time logistics and compliance tracking across export corridors
          </p>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {children}
        </div>
      </div>
    </main>
  );
}
