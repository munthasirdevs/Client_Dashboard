import React from 'react';
import { Search, Bell, HelpCircle, MoreVertical } from 'lucide-react';

interface TopNavProps {
  title: string;
}

export const TopNav: React.FC<TopNavProps> = ({ title }) => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-8 border-b border-white/5">
      <div className="flex items-center gap-6">
        <h2 className="text-xl font-bold text-white font-headline tracking-tight">{title}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search workspace..." 
            className="bg-surface-container-lowest border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary-container transition-all"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary-container rounded-full border-2 border-surface"></span>
          </button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <HelpCircle size={20} />
          </button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="h-8 w-px bg-white/10"></div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-white">Alex Rivera</p>
            <p className="text-[10px] text-slate-500">Premium Client</p>
          </div>
          <img 
            src="https://i.pravatar.cc/150?u=alex" 
            alt="User" 
            className="w-10 h-10 rounded-full border-2 border-surface-container-high object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
