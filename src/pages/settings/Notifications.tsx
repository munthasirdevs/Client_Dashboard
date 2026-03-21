import React from 'react';
import { motion } from 'motion/react';
import { 
  Bell, 
  MessageSquare, 
  Clock, 
  Moon, 
  Sun, 
  ChevronLeft,
  Search
} from 'lucide-react';
import { Page } from '../../types';

interface NotificationsProps {
  onNavigate: (page: Page) => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col gap-4">
        <button 
          onClick={() => onNavigate('settings')}
          className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Settings
        </button>
        <h1 className="text-4xl font-bold tracking-tight text-white font-display">Notification Preferences</h1>
        <p className="text-slate-400 max-w-2xl">
          Customize how and when you receive updates across your workspace. All changes are saved automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Global Activities */}
        <div className="glass-card p-8 space-y-8">
          <div className="flex items-center gap-3 text-indigo-400">
            <Bell size={24} />
            <h3 className="text-xl font-semibold text-white">Global Activities</h3>
          </div>

          <div className="space-y-6">
            {[
              { title: 'Project Updates', desc: 'Receive alerts for new milestones and tasks.', active: true },
              { title: 'File Uploads', desc: 'Notify when a client uploads new assets.', active: true },
              { title: 'Billing Alerts', desc: 'Status of invoices and payment confirmations.', active: false },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between group">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-indigo-600' : 'bg-slate-700'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${item.active ? 'right-1' : 'left-1'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Channels */}
        <div className="glass-card p-8 space-y-8">
          <div className="flex items-center gap-3 text-indigo-400">
            <MessageSquare size={24} />
            <h3 className="text-xl font-semibold text-white">Chat Channels</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: '#general', active: true },
              { name: '#design', active: true },
              { name: '#feedback', active: false },
              { name: '#dev', active: true },
            ].map((channel, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${channel.active ? 'bg-indigo-500' : 'bg-slate-600'}`} />
                  <span className="text-sm font-medium text-slate-300">{channel.name}</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${channel.active ? 'bg-indigo-600' : 'bg-slate-700'}`}>
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${channel.active ? 'right-0.5' : 'left-0.5'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiet Hours */}
      <div className="glass-card p-8 space-y-8">
        <div className="flex items-center gap-3 text-indigo-400">
          <Moon size={24} />
          <h3 className="text-xl font-semibold text-white">Quiet Hours / DND</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 space-y-2">
            <p className="text-sm text-slate-300">
              Mute all push notifications during your focus time. System alerts will still be archived in your activity feed for later review.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Start Time</label>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
                <Clock size={20} className="text-indigo-400" />
                <span className="text-lg font-mono text-white">10:00 PM</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">End Time</label>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
                <Sun size={20} className="text-indigo-400" />
                <span className="text-lg font-mono text-white">08:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-8">
        <button className="px-8 py-3 rounded-xl text-slate-400 hover:text-white font-bold text-sm tracking-wide transition-all">
          Discard Changes
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-indigo-500/20">
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Notifications;
