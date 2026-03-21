import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Calendar, 
  Info, 
  HelpCircle, 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MessageSquare,
  RefreshCw,
  Zap
} from 'lucide-react';
import { Page } from '../../types';

interface PreferencesInfoProps {
  onNavigate: (page: Page) => void;
}

const PreferencesInfo: React.FC<PreferencesInfoProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col gap-4">
        <button 
          onClick={() => onNavigate('settings')}
          className="flex items-center gap-2 text-[#c7c4d7] hover:text-[#6366F1] transition-colors text-sm font-medium group w-fit"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Settings
        </button>
        <h1 className="text-3xl font-bold tracking-tight text-white font-display">Preferences & System Info</h1>
        <p className="text-[#c7c4d7] max-w-2xl">
          Manage your regional settings, view account lineage, and check system health.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Localization */}
        <div className="lg:col-span-2 bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-8">
          <div className="flex items-center gap-3 text-[#6366F1]">
            <Globe size={24} />
            <h3 className="text-xl font-semibold text-white">Localization</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Default Time Zone</label>
              <div className="relative group">
                <select className="w-full bg-[#0B0F19] border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#6366F1]/50 transition-all font-mono text-sm">
                  <option>UTC-08:00 Pacific Time (US & Canada)</option>
                  <option>UTC+00:00 London (GMT)</option>
                  <option>UTC+01:00 Berlin (CET)</option>
                  <option>UTC+05:30 Mumbai (IST)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-[#6366F1] transition-colors">
                  <ChevronRight size={16} className="rotate-90" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Date Format</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 rounded-xl bg-[#0B0F19] border border-white/5 cursor-pointer hover:border-[#6366F1]/30 transition-all group">
                  <div className="w-4 h-4 rounded-full border-2 border-[#6366F1] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                  </div>
                  <span className="text-sm text-[#c7c4d7]">DD/MM/YYYY <span className="text-[10px] text-slate-500 uppercase ml-2 tracking-widest font-bold">(International)</span></span>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-xl bg-[#0B0F19] border border-white/5 cursor-pointer hover:border-[#6366F1]/30 transition-all group opacity-60">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-700" />
                  <span className="text-sm text-[#c7c4d7]">MM/DD/YYYY <span className="text-[10px] text-slate-500 uppercase ml-2 tracking-widest font-bold">(US Standard)</span></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Account Metadata */}
        <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3 text-[#6366F1]">
            <Zap size={24} />
            <h3 className="text-xl font-semibold text-white">Account Metadata</h3>
          </div>
          <p className="text-xs text-slate-500">System-generated audit data for this workspace identity.</p>
          
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-white/5 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Account Created</p>
              <p className="text-sm text-[#6366F1] font-mono">Oct 12, 2023</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Plan Type</p>
              <p className="text-sm text-[#6366F1] font-mono">Enterprise</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Workspace ID</p>
              <p className="text-sm text-[#6366F1] font-mono">#7F42A9B1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Help & Support */}
        <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-8">
          <div className="flex items-center gap-3 text-[#6366F1]">
            <HelpCircle size={24} />
            <h3 className="text-xl font-semibold text-white">Help & Support</h3>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0B0F19] border border-white/5 hover:border-[#6366F1]/50 transition-all group">
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-slate-400 group-hover:text-[#6366F1]" />
                <span className="text-sm font-medium text-white">Knowledge Base</span>
              </div>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-[#6366F1]" />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0B0F19] border border-white/5 hover:border-[#6366F1]/50 transition-all group">
              <div className="flex items-center gap-3">
                <MessageSquare size={20} className="text-slate-400 group-hover:text-[#6366F1]" />
                <span className="text-sm font-medium text-white">Live Support</span>
              </div>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-[#6366F1]" />
            </button>
          </div>
        </div>

        {/* System Info */}
        <div className="lg:col-span-2 bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-8">
          <div className="flex items-center gap-3 text-[#6366F1]">
            <Info size={24} />
            <h3 className="text-xl font-semibold text-white">System Info</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">App Version</p>
                <p className="text-2xl font-bold text-white font-mono">v2.4.12-stable</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Build ID</p>
                <p className="text-2xl font-bold text-white font-mono">0x7F42A9B1</p>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1F2937] text-[#dfe2f1] text-xs font-bold uppercase tracking-widest hover:bg-[#1F2937]/80 transition-all">
                <RefreshCw size={16} />
                Release Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Cache Management */}
      <div className="bg-[#111827] border border-amber-500/10 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="text-lg font-semibold text-white">Advanced Cache Management</h4>
            <p className="text-sm text-slate-500">Clear application cache to resolve sync issues. This will not delete project data.</p>
          </div>
          <button className="px-8 py-3 rounded-xl bg-[#1F2937] border border-white/5 text-[#dfe2f1] text-xs font-bold uppercase tracking-widest hover:bg-[#1F2937]/80 transition-all">
            Purge Cache
          </button>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">System Status: Operational</p>
          </div>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">Last check: 1 minute ago</p>
        </div>
      </div>
    </div>
  );
};

export default PreferencesInfo;
