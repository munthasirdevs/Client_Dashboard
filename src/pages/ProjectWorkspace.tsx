import React from 'react';
import { Video, Info, Paperclip, Smile, Image as ImageIcon, Mic, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const ProjectWorkspace: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden"
    >
      {/* Channels Pane */}
      <div className="w-80 bg-surface-container-low flex flex-col border-r border-white/5">
        <div className="p-6">
          <h3 className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-4">Channels</h3>
          <div className="space-y-1">
            {[
              { name: 'general', active: true },
              { name: 'design-assets', active: false },
              { name: 'feedback', active: false },
            ].map((channel) => (
              <button 
                key={channel.name}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all ${
                  channel.active ? 'bg-surface-container-high text-on-surface' : 'text-slate-400 hover:bg-surface-container hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${channel.active ? 'text-primary-container' : 'text-slate-600'} font-bold`}>#</span>
                  <span className={`text-sm ${channel.active ? 'font-semibold' : 'font-medium'}`}>{channel.name}</span>
                </div>
                {channel.active && <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>}
              </button>
            ))}
          </div>

          <h3 className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mt-8 mb-4">Direct Messages</h3>
          <div className="space-y-2">
            {[
              { name: 'Sarah Jenkins', status: 'online', avatar: 'https://i.pravatar.cc/150?u=sarah', last: 'Approved the new hero layout...' },
              { name: 'Marcus Knight', status: 'offline', avatar: 'https://i.pravatar.cc/150?u=marcus', last: 'Wait, where is the PRD?' },
            ].map((dm) => (
              <div key={dm.name} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-surface-container rounded-xl transition-all">
                <div className="relative">
                  <img className="w-8 h-8 rounded-full border border-surface-container-highest" src={dm.avatar} alt={dm.name} referrerPolicy="no-referrer" />
                  <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-surface-container-low ${
                    dm.status === 'online' ? 'bg-emerald-500' : 'bg-slate-600'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-white">{dm.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{dm.last}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Workspace */}
      <div className="flex-1 bg-surface-container flex flex-col relative">
        <div className="px-8 py-4 bg-surface-container-high/50 backdrop-blur-md flex items-center justify-between z-10 border-b border-white/5">
          <div>
            <h2 className="text-lg font-bold text-white font-headline">Neo-Finance Redesign</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] text-slate-400 font-medium">4 team members active</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-container-highest rounded-lg text-slate-300 hover:text-white transition-colors">
              <Video size={20} />
            </button>
            <button className="p-2 bg-surface-container-highest rounded-lg text-slate-300 hover:text-white transition-colors">
              <Info size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
          <div className="flex items-center gap-4 opacity-40">
            <div className="h-[1px] flex-1 bg-outline-variant"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Today</span>
            <div className="h-[1px] flex-1 bg-outline-variant"></div>
          </div>

          <div className="flex items-end gap-4 max-w-[80%] group">
            <img className="w-10 h-10 rounded-full shadow-lg" src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" referrerPolicy="no-referrer" />
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-slate-500 ml-1">Sarah Jenkins • 10:24 AM</p>
              <div className="bg-surface-container-high p-4 rounded-2xl rounded-bl-none shadow-xl border border-white/5 text-sm leading-relaxed text-slate-200">
                I've just uploaded the updated design assets for the dashboard. Can you take a look at the dark mode contrast ratios? I feel like the obsidian tone could be 5% deeper.
              </div>
            </div>
          </div>

          <div className="flex items-end gap-4 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-fixed font-bold shadow-lg shadow-primary-container/20">ME</div>
            <div className="space-y-1 text-right">
              <p className="text-[10px] font-bold text-slate-500 mr-1">You • 10:26 AM</p>
              <div className="bg-primary-container text-on-primary-fixed p-4 rounded-2xl rounded-br-none shadow-xl shadow-indigo-500/10 text-sm leading-relaxed font-medium">
                On it, Sarah. Checking the accessibility scores now. The palette looks incredibly premium so far.
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="px-4 py-1.5 bg-surface-container-highest/50 rounded-full flex items-center gap-2 border border-white/5">
              <Paperclip className="text-primary-container" size={14} />
              <span className="text-[11px] text-slate-400 font-medium">Sarah Jenkins shared <span className="text-primary-container">Design_Specs_V4.fig</span></span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-500 ml-14">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-pulse"></span>
              <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-pulse delay-75"></span>
              <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-pulse delay-150"></span>
            </div>
            <span className="text-[11px] font-medium">Marcus Knight is typing...</span>
          </div>
        </div>

        <div className="p-6 bg-surface-container">
          <div className="max-w-4xl mx-auto relative bg-surface-container-lowest rounded-2xl p-2 border border-outline-variant/10 shadow-2xl focus-within:ring-1 focus-within:ring-primary-container/40 transition-all">
            <textarea 
              className="w-full bg-transparent border-none text-sm py-3 px-4 focus:ring-0 resize-none text-on-surface" 
              placeholder="Type a message to the team..." 
              rows={1}
            ></textarea>
            <div className="flex items-center justify-between px-2 pb-1 pt-1">
              <div className="flex items-center gap-1">
                <button className="p-2 text-slate-500 hover:text-primary-container hover:bg-primary-container/10 rounded-lg transition-all">
                  <Smile size={20} />
                </button>
                <button className="p-2 text-slate-500 hover:text-primary-container hover:bg-primary-container/10 rounded-lg transition-all">
                  <Paperclip size={20} />
                </button>
                <button className="p-2 text-slate-500 hover:text-primary-container hover:bg-primary-container/10 rounded-lg transition-all">
                  <ImageIcon size={20} />
                </button>
                <div className="w-[1px] h-4 bg-outline-variant/20 mx-1"></div>
                <button className="p-2 text-slate-500 hover:text-primary-container hover:bg-primary-container/10 rounded-lg transition-all">
                  <Mic size={20} />
                </button>
              </div>
              <button className="bg-primary-container text-on-primary-fixed p-2 rounded-xl flex items-center justify-center shadow-lg shadow-primary-container/20">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Pane */}
      <div className="w-80 bg-surface-container-low overflow-y-auto no-scrollbar border-l border-white/5">
        <div className="p-8">
          <h3 className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-6">Project Metadata</h3>
          <div className="bg-surface-container p-5 rounded-2xl shadow-sm border border-white/5 mb-8">
            <p className="text-[10px] text-slate-500 font-bold uppercase mb-3">Project Lead</p>
            <div className="flex items-center gap-4">
              <img className="w-12 h-12 rounded-xl" src="https://i.pravatar.cc/150?u=sarah" alt="Lead" referrerPolicy="no-referrer" />
              <div>
                <h4 className="text-sm font-bold text-white">Sarah Jenkins</h4>
                <p className="text-xs text-primary-container font-medium">Head of Design</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Status</p>
              <span className="px-3 py-1 bg-primary-container/10 text-primary-container border border-primary-container/20 rounded-full text-[10px] font-bold uppercase tracking-wider">In Progress</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase mb-3">Project Members</p>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-4 border-surface-container-low" src={`https://i.pravatar.cc/150?u=${i}`} alt="Member" referrerPolicy="no-referrer" />
                ))}
                <div className="w-10 h-10 rounded-full border-4 border-surface-container-low bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-slate-300">+2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
