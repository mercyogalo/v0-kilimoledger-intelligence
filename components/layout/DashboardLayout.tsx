'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Shield, Lock, Settings } from 'lucide-react';
import { NotificationBell } from '@/components/manager/NotificationBell';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role?: 'manager' | 'admin';
}

export function DashboardLayout({ children, role = 'manager' }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Overview', href: `/dashboard/${role}`, icon: Home },
    { label: 'Shipments', href: `/dashboard/${role}/shipments`, icon: Package },
    { label: 'Compliance', href: `/dashboard/${role}/compliance`, icon: Shield },
    { label: 'Escrow', href: `/dashboard/${role}/escrow`, icon: Lock },
    { label: 'Settings', href: `/dashboard/${role}/settings`, icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col bg-white">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/">
            <h1 className="text-lg font-bold text-green-700">KilimoLedger</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-green-100 text-green-700'
                    : 'text-green-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-200 bg-white px-8 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-green-700">Dashboard</h2>
          <div className="flex items-center gap-6">
            {role === 'manager' && <NotificationBell />}
            <div className="text-sm text-gray-400">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}