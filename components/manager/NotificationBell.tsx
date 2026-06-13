'use client';

import { useState } from 'react';
import { Bell } from 'lucide-react';
import { notifications } from '@/lib/data';

export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllRead = () => {
    // In a real app, this would update the backend
    console.log('[v0] Marked all notifications as read');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-card rounded-sm transition-colors"
      >
        <Bell className="w-5 h-5 text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-destructive text-destructive-foreground text-xs font-bold flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-sm shadow-lg z-50">
          <div className="border-b border-border p-4 flex items-center justify-between">
            <h3 className="font-semibold text-sm">Notifications</h3>
            <button
              onClick={handleMarkAllRead}
              className="text-xs text-primary hover:text-primary/80 font-medium"
            >
              Mark all read
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 border-b border-border/50 last:border-b-0 ${
                  !notif.read ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary">{notif.type}</span>
                      <span className="text-xs text-muted-foreground">{notif.time}</span>
                    </div>
                    <p className="text-sm text-foreground mt-1">{notif.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
