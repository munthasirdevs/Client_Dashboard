import React from 'react';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Layers, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  HelpCircle,
  FolderArchive,
  CreditCard,
  User
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'workspace', label: 'Messages', icon: MessageSquare },
    { id: 'files', label: 'Files', icon: FolderArchive },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-surface-container-low shadow-[20px_0_40px_rgba(0,0,0,0.2)] z-50 py-6">
      <div className="px-6 mb-10">
        <h1 className="text-2xl font-black text-white tracking-tighter font-headline">Obsidian</h1>
        <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mt-1">Digital Agency</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id || (item.id === 'settings' && currentPage.startsWith('settings-'));
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id as Page)}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-all duration-300 group ${
                isActive 
                  ? 'bg-primary-container/10 text-primary-container border-r-2 border-primary-container' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-primary-container' : 'text-slate-400 group-hover:text-slate-200'} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-4 mt-auto space-y-4">
        <button className="w-full bg-primary-container text-on-primary-fixed py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary-container/20 active:scale-[0.98] transition-transform">
          New Project
        </button>
        
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-200 transition-colors">
            <HelpCircle size={18} />
            <span className="text-[11px] uppercase tracking-wider font-semibold">Support</span>
          </button>
          
          <button 
            onClick={() => onPageChange('profile')}
            className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-surface-container-highest overflow-hidden">
              <img 
                src="https://i.pravatar.cc/150?u=alex" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[11px] uppercase tracking-wider font-semibold">Profile</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
