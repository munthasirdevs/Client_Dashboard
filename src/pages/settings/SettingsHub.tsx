import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Bell, 
  Lock, 
  Settings as SettingsIcon, 
  ChevronRight,
  Activity,
  History,
  Cpu
} from 'lucide-react';
import { Page } from '../../types';

interface SettingsHubProps {
  onNavigate: (page: Page) => void;
}

const SettingsHub: React.FC<SettingsHubProps> = ({ onNavigate }) => {
  const settingsCards = [
    {
      id: 'settings-account',
      title: 'Account & Security',
      description: 'Manage your credentials and login sessions',
      icon: Shield,
      action: 'CONFIGURE ACCOUNT',
      preview: [
        { label: 'Last Login', value: '2 hours ago' },
        { label: '2FA Status', value: 'Enabled' }
      ]
    },
    {
      id: 'settings-notifications',
      title: 'Notifications',
      description: 'Control how you receive updates',
      icon: Bell,
      action: 'PREFERENCES',
      preview: [
        { label: 'Active Alerts', value: '3 channels' },
        { label: 'Quiet Hours', value: '10PM - 8AM' }
      ]
    },
    {
      id: 'settings-privacy',
      title: 'Privacy & Data',
      description: 'Manage your data and account footprint',
      icon: Lock,
      action: 'REVIEW PRIVACY',
      preview: [
        { label: 'Data Export', value: 'Available' },
        { label: 'Privacy Score', value: '98%' }
      ]
    },
    {
      id: 'settings-preferences',
      title: 'Preferences',
      description: 'System-wide display and localization settings',
      icon: SettingsIcon,
      action: 'CUSTOMIZE UI',
      preview: [
        { label: 'Timezone', value: 'UTC-08:00' },
        { label: 'Date Format', value: 'DD/MM/YYYY' }
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white font-display">Settings Hub</h1>
        <p className="text-[#c7c4d7] max-w-2xl">
          Configure your agency workspace and personal profile to match your operational workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onNavigate(card.id as Page)}
            className="bg-[#111827] border border-white/5 p-8 group cursor-pointer hover:border-[#6366F1]/50 transition-all duration-300 relative overflow-hidden rounded-2xl"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-[#1F2937] text-[#6366F1] group-hover:scale-110 transition-transform">
                  <card.icon size={24} />
                </div>
                <ChevronRight className="text-slate-600 group-hover:text-[#6366F1] group-hover:translate-x-1 transition-all" size={20} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-[#c7c4d7] text-sm mb-8">{card.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {card.preview.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{item.label}</p>
                    <p className="text-sm text-[#dfe2f1] font-mono">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#6366F1] group-hover:text-[#6366F1]/80 transition-colors">
                {card.action}
                <div className="h-px w-4 bg-[#6366F1]/30 group-hover:w-8 transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Account Health</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
            <p className="text-sm text-[#c7c4d7]">Security systems nominal</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Last Sync</p>
          <p className="text-sm text-[#c7c4d7]">2 minutes ago via CloudFlare Node</p>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Version</p>
          <p className="text-sm text-[#c7c4d7] font-mono">AgencyOS v2.4.0-pro</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsHub;
