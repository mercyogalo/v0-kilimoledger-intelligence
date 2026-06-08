'use client';

import { Activity, BarChart3, Boxes, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Activity, label: 'Live Dashboard', href: '#' },
    { icon: Boxes, label: 'Shipments', href: '#' },
    { icon: BarChart3, label: 'Analytics', href: '#' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-sm bg-card border border-border lg:hidden hover:bg-slate"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Kilimo<span className="text-success">Ledger</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Intelligence Platform</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium text-foreground hover:bg-slate hover:text-success transition-colors duration-200 group"
            >
              <item.icon className="w-5 h-5 group-hover:text-success transition-colors" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-border text-xs text-muted-foreground">
          <p>Agri-Export Logistics System</p>
          <p className="mt-2">v2026.1.0</p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
