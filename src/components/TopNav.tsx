import React from 'react';
import { Search, Bell, ChevronDown, HelpCircle } from 'lucide-react';

interface TopNavProps {
  title: string;
}

export const TopNav: React.FC<TopNavProps> = ({ title }) => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 z-40 bg-[#111827]/80 backdrop-blur-xl flex items-center px-10 border-b border-white/5">
      {/* Left Section: Title & Secondary Nav */}
      <div className="flex items-center gap-10 min-w-fit">
        <h2 className="text-xl font-bold text-white tracking-tight font-display">{title}</h2>
        
        <nav className="hidden xl:flex items-center gap-8">
          <button className="px-5 py-2 bg-[#1F2937] text-[#dfe2f1] text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:text-white hover:bg-[#2d3a4d] transition-all border border-white/5 shadow-xl">
            Settings
          </button>
          <button className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-all">
            Support
          </button>
        </nav>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-1 flex justify-center px-16">
        <div className="relative w-full max-w-2xl group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#6366F1] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full bg-[#1F2937]/50 border border-white/5 rounded-[1.25rem] py-3 pl-14 pr-6 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/40 focus:bg-[#1F2937] transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center gap-8 min-w-fit">
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all relative group">
            <Bell size={22} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#6366F1] rounded-full border-2 border-[#111827] group-hover:scale-125 transition-transform"></span>
          </button>
          <button className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <HelpCircle size={22} />
          </button>
        </div>

        <div className="h-8 w-px bg-white/10"></div>

        <button className="flex items-center gap-4 group">
          <div className="flex items-center gap-3 hidden lg:flex">
            <p className="text-sm font-bold text-white group-hover:text-[#6366F1] transition-colors tracking-tight">Alex Rivera</p>
            <ChevronDown size={16} className="text-slate-600 group-hover:text-white transition-colors" />
          </div>
          <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#6366F1] to-transparent border border-white/5 shadow-2xl group-hover:scale-105 transition-transform">
            <img 
              src="https://i.pravatar.cc/150?u=alex" 
              alt="Alex Rivera" 
              className="w-full h-full rounded-full object-cover border-2 border-[#111827]"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>
      </div>
    </header>
  );
};
