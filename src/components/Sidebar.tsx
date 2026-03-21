import React from 'react';
import { 
  LayoutDashboard, 
  FolderOpen, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  FolderArchive,
  CreditCard,
  User,
  Bell,
  Layers
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'workspace', label: 'Messages', icon: MessageSquare },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'files', label: 'Files', icon: FolderArchive },
    { id: 'services', label: 'Order Services', icon: Layers },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-[#0B0F19] border-r border-white/5 z-50">
      <div className="p-8 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xl">X</span>
          </div>
          <h1 className="text-lg font-bold text-white tracking-tight">Xenon Studios</h1>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id || (item.id === 'settings' && currentPage.startsWith('settings-'));
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id as Page)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-indigo-600/10 text-indigo-400' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200'} />
              <span className="text-sm font-medium">{item.label}</span>
              {item.id === 'notifications' && (
                <span className="ml-auto bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">12</span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-white/5">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors group">
          <LogOut size={20} className="group-hover:text-red-400" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};
