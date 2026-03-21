import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Download, 
  Trash2, 
  FileText, 
  ChevronLeft,
  Mail,
  Eye,
  ChevronRight
} from 'lucide-react';
import { Page } from '../../types';

interface PrivacyDataProps {
  onNavigate: (page: Page) => void;
}

const PrivacyData: React.FC<PrivacyDataProps> = ({ onNavigate }) => {
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
        <h1 className="text-4xl font-bold tracking-tight text-white font-display">Privacy & Data</h1>
        <p className="text-slate-400 max-w-2xl">
          Control your digital footprint, manage data portability, and configure communication preferences across the platform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Communication */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 space-y-8">
            <div className="flex items-center gap-3 text-indigo-400">
              <Mail size={24} />
              <h3 className="text-xl font-semibold text-white">Communication</h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between group">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">Email Marketing</p>
                  <p className="text-xs text-slate-500">Receive updates about new features and ecosystem news.</p>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between group">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">Product Surveys</p>
                  <p className="text-xs text-slate-500">Invites to help us shape the future of AgencyOS.</p>
                </div>
                <div className="w-12 h-6 bg-slate-700 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3 text-indigo-400">
              <Shield size={24} />
              <h3 className="text-xl font-semibold text-white">GDPR & Regulatory Compliance</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              AgencyOS is fully compliant with the General Data Protection Regulation (GDPR). Your data is encrypted at rest and in transit. You have the right to access, rectify, or erase your personal data at any time. We do not sell your data to third parties.
            </p>
            <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-widest flex items-center gap-2">
              Read Privacy Policy <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Data Management & Danger Zone */}
        <div className="space-y-8">
          <div className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3 text-indigo-400">
              <Download size={24} />
              <h3 className="text-xl font-semibold text-white">Data Management</h3>
            </div>
            <p className="text-xs text-slate-500">Download a copy of your account activity, project history, and billing records for your personal archives.</p>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:border-indigo-500/50 transition-all group">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-slate-400 group-hover:text-indigo-400" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">Export as PDF</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Optimized for reading</p>
                  </div>
                </div>
                <Download size={16} className="text-slate-600 group-hover:text-indigo-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:border-indigo-500/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="text-slate-400 group-hover:text-indigo-400 font-mono text-lg">{"{ }"}</div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">Export as JSON</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Optimized for developers</p>
                  </div>
                </div>
                <Download size={16} className="text-slate-600 group-hover:text-indigo-400" />
              </button>
            </div>
            <p className="text-[10px] text-slate-600 text-center uppercase tracking-widest font-bold">Last Export: 14 days ago</p>
          </div>

          <div className="glass-card p-8 space-y-6 border-red-500/10">
            <div className="flex items-center gap-3 text-red-400">
              <Trash2 size={24} />
              <h3 className="text-xl font-semibold text-white">Danger Zone</h3>
            </div>
            <p className="text-xs text-slate-500">Permanently remove your workspace and all associated data. This action is irreversible.</p>
            <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-all font-bold text-xs uppercase tracking-widest">
              <Trash2 size={16} />
              Delete Workspace
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-slate-800/50 text-indigo-400">
            <Eye size={20} />
          </div>
          <div>
            <p className="text-lg font-bold text-white">2 Devices</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Currently active sessions</p>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-slate-800/50 text-indigo-400">
            <Shield size={20} />
          </div>
          <div>
            <p className="text-lg font-bold text-white">2FA Enabled</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Authenticator app active</p>
          </div>
        </div>
        <div className="glass-card p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-slate-800/50 text-indigo-400">
            <Lock size={20} />
          </div>
          <div>
            <p className="text-lg font-bold text-white">Privacy Score: 98%</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Top-tier account protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyData;
