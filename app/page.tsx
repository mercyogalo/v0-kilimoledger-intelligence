import Link from 'next/link';
import { BarChart3, Users, Truck } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold text-primary">KilimoLedger</h1>
          <p className="text-xl text-muted-foreground">Agricultural Export Intelligence Platform</p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-16">
          {/* Manager Card */}
          <Link href="/dashboard/manager">
            <div className="data-card hover:border-primary transition-colors cursor-pointer group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Manager</h3>
                  <p className="text-sm text-muted-foreground">Oversee shipments, compliance, and escrow management</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 transition-colors">
                  Enter Portal
                </button>
              </div>
            </div>
          </Link>

          {/* Driver Card */}
          <Link href="/dashboard/driver">
            <div className="data-card hover:border-primary transition-colors cursor-pointer group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Driver</h3>
                  <p className="text-sm text-muted-foreground">Track checkpoints, manage documents, and report incidents</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 transition-colors">
                  Enter Portal
                </button>
              </div>
            </div>
          </Link>

          {/* Admin Card */}
          <Link href="/dashboard/analytics">
            <div className="data-card hover:border-primary transition-colors cursor-pointer group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Admin</h3>
                  <p className="text-sm text-muted-foreground">View analytics, route efficiency, and system-wide metrics</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 transition-colors">
                  Enter Portal
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        v2026.1.0
      </div>
    </div>
  );
}
