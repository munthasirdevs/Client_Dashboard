import React from 'react';
import { Bell, Check, Trash2, Clock, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Project Update',
    message: 'Neo-Finance App Redesign has been moved to "In Progress" by Alex Rivera.',
    time: '2 minutes ago',
    type: 'info',
    read: false,
  },
  {
    id: '2',
    title: 'New Deliverable',
    message: 'A new file "Brand_Guidelines_v2.pdf" has been uploaded to the assets folder.',
    time: '1 hour ago',
    type: 'success',
    read: false,
  },
  {
    id: '3',
    title: 'Billing Alert',
    message: 'Your invoice for March 2026 is now available for review and payment.',
    time: '3 hours ago',
    type: 'warning',
    read: true,
  },
  {
    id: '4',
    title: 'System Maintenance',
    message: 'The Nexus platform will undergo scheduled maintenance on Sunday at 02:00 UTC.',
    time: '5 hours ago',
    type: 'info',
    read: true,
  },
  {
    id: '5',
    title: 'Security Login',
    message: 'New login detected from a Chrome browser on Windows (IP: 192.168.1.1).',
    time: 'Yesterday',
    type: 'error',
    read: true,
  },
  {
    id: '6',
    title: 'Task Completed',
    message: 'The "User Research Phase" for Project Alpha has been marked as complete.',
    time: 'Yesterday',
    type: 'success',
    read: true,
  },
];

export const Inbox: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Notifications</h1>
          <p className="text-slate-400 text-sm mt-1">Stay updated with your latest project activities and system alerts.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            <Check size={16} />
            Mark all as read
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 transition-all">
            <Trash2 size={16} />
            Clear all
          </button>
        </div>
      </div>

      <div className="bg-[#0B0F19] border border-white/5 rounded-2xl overflow-hidden">
        <div className="divide-y divide-white/5">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className={`p-6 flex gap-4 transition-all hover:bg-white/[0.02] ${!notification.read ? 'bg-indigo-600/[0.03]' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                notification.type === 'info' ? 'bg-blue-500/10 text-blue-400' :
                notification.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                notification.type === 'warning' ? 'bg-amber-500/10 text-amber-400' :
                'bg-red-500/10 text-red-400'
              }`}>
                {notification.type === 'info' && <Info size={20} />}
                {notification.type === 'success' && <CheckCircle2 size={20} />}
                {notification.type === 'warning' && <AlertCircle size={20} />}
                {notification.type === 'error' && <AlertCircle size={20} />}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-sm font-bold ${!notification.read ? 'text-white' : 'text-slate-300'}`}>
                    {notification.title}
                  </h3>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock size={12} />
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {notification.message}
                </p>
              </div>

              {!notification.read && (
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
