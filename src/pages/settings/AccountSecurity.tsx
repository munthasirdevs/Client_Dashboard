import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Smartphone, 
  Mail, 
  Key, 
  Monitor, 
  LogOut, 
  History,
  CheckCircle2,
  AlertCircle,
  ChevronLeft
} from 'lucide-react';
import { Page } from '../../types';

interface AccountSecurityProps {
  onNavigate: (page: Page) => void;
}

const AccountSecurity: React.FC<AccountSecurityProps> = ({ onNavigate }) => {
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
        <h1 className="text-4xl font-bold tracking-tight text-white font-display">Security Hub</h1>
        <p className="text-slate-400 max-w-2xl">
          Manage your account credentials, authentication methods, and monitor your session activity to keep your data protected.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Change Password */}
        <div className="lg:col-span-2 glass-card p-8 space-y-8">
          <div className="flex items-center gap-3 text-indigo-400">
            <Key size={24} />
            <h3 className="text-xl font-semibold text-white">Change Password</h3>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Current Password</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all font-mono"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">New Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Confirm New Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all font-mono"
                />
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98]">
              Update Password
            </button>
          </div>
        </div>

        {/* 2FA & SSO */}
        <div className="space-y-8">
          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3 text-indigo-400">
              <Shield size={24} />
              <h3 className="text-xl font-semibold text-white">Two-Factor Auth</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700/30">
                <div className="flex items-center gap-3">
                  <Smartphone size={20} className="text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Authenticator App</p>
                    <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">Recommended</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 opacity-60">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-slate-400" />
                  <div>
                    <p className="text-sm font-medium text-white">SMS Authentication</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">+1 (555) ••• 42</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-slate-700 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3 text-indigo-400">
              <Key size={24} />
              <h3 className="text-xl font-semibold text-white">SSO Configuration</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:border-indigo-500/50 transition-all">
                <div className="w-5 h-5 bg-white rounded-sm" />
                <span className="text-xs font-bold text-slate-300">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:border-indigo-500/50 transition-all">
                <div className="w-5 h-5 bg-slate-800 rounded-sm" />
                <span className="text-xs font-bold text-slate-300">GitHub</span>
              </button>
            </div>
            <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-bold">Connected accounts allow for one-click secure login.</p>
          </div>
        </div>
      </div>

      {/* Connected Devices */}
      <div className="glass-card p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-indigo-400">
            <Monitor size={24} />
            <h3 className="text-xl font-semibold text-white">Connected Devices</h3>
          </div>
          <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-widest">Sign out of all sessions</button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 group hover:border-indigo-500/30 transition-all">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-xl bg-slate-800/50 text-indigo-400">
                <Monitor size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">MacBook Pro 16"</h4>
                <p className="text-sm text-slate-400">San Francisco, CA • <span className="text-indigo-400 font-medium">Current Session</span></p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">Active Now</span>
              <button className="p-2 text-slate-500 hover:text-red-400 transition-colors">
                <LogOut size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 group hover:border-indigo-500/30 transition-all">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-xl bg-slate-800/50 text-slate-400">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">iPhone 15 Pro</h4>
                <p className="text-sm text-slate-400">London, UK • 2 hours ago</p>
              </div>
            </div>
            <button className="px-6 py-2 rounded-xl bg-slate-800/50 text-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-slate-700 transition-all">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Security Logs */}
      <div className="glass-card p-8 space-y-8">
        <div className="flex items-center gap-3 text-indigo-400">
          <History size={24} />
          <h3 className="text-xl font-semibold text-white">Security Logs</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-800/50">
                <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Timestamp</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Action</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Status</th>
                <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/30">
              {[
                { time: 'Oct 24, 2023 • 14:22', action: 'Successful Login', status: 'COMPLETED', ip: '192.168.1.104', color: 'indigo' },
                { time: 'Oct 23, 2023 • 09:15', action: 'Password Changed', status: 'COMPLETED', ip: '24.156.99.12', color: 'amber' },
                { time: 'Oct 21, 2023 • 18:45', action: 'Failed Login Attempt', status: 'BLOCKED', ip: '103.45.1.200', color: 'red' },
                { time: 'Oct 19, 2023 • 11:30', action: 'New SSO Linked (GitHub)', status: 'COMPLETED', ip: '192.168.1.104', color: 'indigo' },
              ].map((log, idx) => (
                <tr key={idx} className="group hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 text-sm text-slate-400 font-mono">{log.time}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${log.color}-500`} />
                      <span className="text-sm font-medium text-white">{log.action}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-widest ${
                      log.status === 'COMPLETED' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-slate-400 font-mono">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center pt-4">
          <button className="text-xs font-bold text-slate-500 hover:text-indigo-400 transition-colors flex items-center gap-2 uppercase tracking-widest">
            View Full Audit Trail <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default AccountSecurity;
