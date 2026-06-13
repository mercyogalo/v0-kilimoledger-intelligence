'use client';

import { useState } from 'react';
import { dispatchNotes } from '@/lib/data';
import { Send } from 'lucide-react';

interface Message {
  from: string;
  message: string;
  time: string;
  driver: string;
}

export function DispatchNotes() {
  const [messages, setMessages] = useState<Message[]>(dispatchNotes);
  const [newMessage, setNewMessage] = useState('');
  const currentDriver = 'James Mwangi';

  const relevantMessages = messages.filter((m) => m.driver === currentDriver);

  const handleSendNote = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        from: 'You',
        message: newMessage,
        time: 'Just now',
        driver: currentDriver,
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="data-card">
      <h3 className="text-lg font-semibold mb-4">Dispatch Notes</h3>
      <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
        {relevantMessages.map((msg, idx) => (
          <div key={idx} className="border-l-2 border-primary/30 pl-3 pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-primary">{msg.from}</span>
              <span className="text-xs text-muted-foreground">{msg.time}</span>
            </div>
            <p className="text-sm text-foreground mt-1">{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Send note to driver..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendNote()}
          className="flex-1 bg-input border border-border rounded-sm px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handleSendNote}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>
    </div>
  );
}
