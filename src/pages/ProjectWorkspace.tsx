import React from 'react';
import { Video, Info, Paperclip, Smile, Image as ImageIcon, Mic, Send, Hash, ChevronRight, ExternalLink, FileText, Figma } from 'lucide-react';
import { motion } from 'motion/react';

export const ProjectWorkspace: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden bg-[#0B0F19]"
    >
      {/* Channels Pane */}
      <div className="w-72 bg-[#111827]/50 flex flex-col border-r border-white/5">
        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4 px-2">Channels</h3>
            <div className="space-y-1">
              {[
                { name: 'Supports', active: false },
                { name: 'News', active: false },
                { name: 'feedback', active: true },
                { name: 'Announcement', active: false },
              ].map((channel) => (
                <button 
                  key={channel.name}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group ${
                    channel.active 
                      ? 'bg-[#6366F1]/10 text-white shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]' 
                      : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Hash size={16} className={`${channel.active ? 'text-[#6366F1]' : 'text-slate-600 group-hover:text-slate-400'} transition-colors`} />
                    <span className={`text-sm tracking-tight ${channel.active ? 'font-semibold' : 'font-medium'}`}>{channel.name}</span>
                  </div>
                  {channel.active && <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4 px-2">Direct Messages</h3>
            <div className="space-y-1">
              {[
                { name: 'Sarah Jenkins', status: 'online', avatar: 'https://i.pravatar.cc/150?u=sarah', role: 'Head of Design', active: true },
                { name: 'Marcus Knight', status: 'offline', avatar: 'https://i.pravatar.cc/150?u=marcus', role: 'Head of Development', active: false },
              ].map((dm) => (
                <div 
                  key={dm.name} 
                  className={`flex items-center gap-3 px-3 py-3 cursor-pointer rounded-xl transition-all group ${
                    dm.active ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="relative">
                    <img className="w-9 h-9 rounded-xl border border-white/5 object-cover" src={dm.avatar} alt={dm.name} referrerPolicy="no-referrer" />
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#111827] ${
                      dm.status === 'online' ? 'bg-emerald-500' : 'bg-slate-600'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold truncate text-white tracking-tight">{dm.name}</p>
                      {dm.active && <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>}
                    </div>
                    <p className="text-[10px] text-slate-500 truncate font-semibold uppercase tracking-wider mt-0.5">{dm.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Workspace */}
      <div className="flex-1 bg-[#0B0F19] flex flex-col relative">
        {/* Chat Header */}
        <div className="px-10 py-5 bg-[#0B0F19]/80 backdrop-blur-xl flex items-center justify-between z-10 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white tracking-tight">Neo-Finance Redesign</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.1em]">2 team members active</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-[#1F2937] border border-white/5 rounded-xl text-slate-400 hover:text-white hover:border-white/10 transition-all shadow-lg">
              <Info size={20} />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-10 py-8 space-y-10 no-scrollbar">
          <div className="flex items-center gap-6 opacity-30">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Today</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white"></div>
          </div>

          {/* Team Message */}
          <div className="flex items-start gap-5 max-w-[85%] group">
            <img className="w-11 h-11 rounded-2xl shadow-2xl border border-white/5 object-cover mt-1" src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" referrerPolicy="no-referrer" />
            <div className="space-y-2">
              <div className="flex items-center gap-3 ml-1">
                <span className="text-xs font-bold text-white tracking-tight">Sarah Jenkins</span>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">10:24 AM</span>
              </div>
              <div className="bg-[#111827] p-5 rounded-3xl rounded-tl-none border border-white/5 text-[15px] leading-[1.6] text-slate-300 shadow-xl group-hover:border-white/10 transition-all">
                I've just uploaded the updated design assets for the dashboard. Can you take a look at the dark mode contrast ratios? I feel like the obsidian tone could be 5% deeper.
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-5 max-w-[85%] ml-auto flex-row-reverse group">
            <div className="w-11 h-11 rounded-2xl bg-[#6366F1] flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-white/10 mt-1 shrink-0">ME</div>
            <div className="space-y-2 text-right">
              <div className="flex items-center gap-3 justify-end mr-1">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">10:26 AM</span>
                <span className="text-xs font-bold text-white tracking-tight">You</span>
              </div>
              <div className="bg-[#6366F1] text-white p-5 rounded-3xl rounded-tr-none shadow-[0_10px_30px_rgba(99,102,241,0.15)] text-[15px] leading-[1.6] font-medium border border-white/10">
                On it, Sarah. Checking the accessibility scores now. The palette looks incredibly premium so far.
              </div>
            </div>
          </div>

          {/* File Attachment */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-[#1F2937] hover:bg-[#2d3a4d] rounded-2xl flex items-center gap-4 border border-white/5 hover:border-[#6366F1]/30 transition-all group shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all">
                <Paperclip size={18} />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Sarah Jenkins shared</p>
                <p className="text-sm text-white font-bold tracking-tight group-hover:text-[#6366F1] transition-colors">Design_Specs_V4.fig</p>
              </div>
            </button>
          </div>

          {/* Typing Indicator */}
          <div className="flex items-center gap-3 text-slate-500 ml-16">
            <div className="flex gap-1.5 items-center">
              <motion.span 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
                className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"
              ></motion.span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1], delay: 0.2 }}
                className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"
              ></motion.span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1], delay: 0.4 }}
                className="w-1.5 h-1.5 bg-[#6366F1] rounded-full"
              ></motion.span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600 italic">Sarah Jenkins is typing...</span>
          </div>
        </div>

        {/* Message Input Area */}
        <div className="p-8 bg-[#0B0F19]">
          <div className="max-w-4xl mx-auto relative bg-[#111827] rounded-[2rem] p-2 border border-white/5 shadow-2xl focus-within:border-[#6366F1]/40 focus-within:shadow-[0_0_40px_rgba(99,102,241,0.05)] transition-all">
            <textarea 
              className="w-full bg-transparent border-none text-[15px] py-4 px-6 focus:ring-0 resize-none text-white placeholder:text-slate-600 leading-relaxed" 
              placeholder="Type a message to the team..." 
              rows={1}
            ></textarea>
            <div className="flex items-center justify-between px-3 pb-2 pt-1">
              <div className="flex items-center gap-1">
                <button className="p-2.5 text-slate-500 hover:text-[#6366F1] hover:bg-white/5 rounded-xl transition-all">
                  <Smile size={20} />
                </button>
                <button className="p-2.5 text-slate-500 hover:text-[#6366F1] hover:bg-white/5 rounded-xl transition-all">
                  <Paperclip size={20} />
                </button>
                <button className="p-2.5 text-slate-500 hover:text-[#6366F1] hover:bg-white/5 rounded-xl transition-all">
                  <ImageIcon size={20} />
                </button>
                <div className="w-px h-5 bg-white/5 mx-2"></div>
                <button className="p-2.5 text-slate-500 hover:text-[#6366F1] hover:bg-white/5 rounded-xl transition-all">
                  <Mic size={20} />
                </button>
              </div>
              <button className="bg-[#6366F1] text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(99,102,241,0.2)] hover:bg-[#5558e6] hover:shadow-[0_15px_30px_rgba(99,102,241,0.3)] active:scale-95 transition-all">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Pane */}
      <div className="w-80 bg-[#111827]/30 overflow-y-auto no-scrollbar border-l border-white/5">
        <div className="p-8 space-y-10">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-6">Project Metadata</h3>
            <div className="bg-[#111827] p-6 rounded-3xl border border-white/5 shadow-xl">
              <p className="text-[10px] text-slate-500 font-bold uppercase mb-4 tracking-widest">Project Lead</p>
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-2xl border border-white/5 object-cover" src="https://i.pravatar.cc/150?u=sarah" alt="Lead" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Sarah Jenkins</h4>
                  <p className="text-[10px] text-[#6366F1] font-bold uppercase tracking-wider mt-1">Head of Design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase mb-4 tracking-widest">Status</p>
              <span className="px-4 py-1.5 bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20 rounded-full text-[10px] font-bold uppercase tracking-widest">In Progress</span>
            </div>
            
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase mb-4 tracking-widest">Project Members</p>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-xl border-2 border-[#111827] object-cover shadow-lg" src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Member" referrerPolicy="no-referrer" />
                ))}
                <div className="w-10 h-10 rounded-xl border-2 border-[#111827] bg-[#1F2937] flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-lg">+2</div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[
                  { content: 'Task completed: Final logo exports delivered for Vellum.', time: '14 minutes ago', icon: 'check' },
                  { content: 'New message: Sarah left a comment on \'Landing Page\'.', time: '2 hours ago', icon: 'message' },
                  { content: 'File uploaded: 24_brand_assets.zip added by system.', time: '5 hours ago', icon: 'file' },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#6366F1]/30 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-slate-300 leading-relaxed font-medium group-hover:text-white transition-colors">{activity.content}</p>
                      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-6">Key Links</h3>
              <div className="space-y-3">
                {[
                  { name: 'Figma Prototype', icon: Figma },
                  { name: 'Technical PRD', icon: FileText },
                ].map((link, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-2xl transition-all group">
                    <div className="flex items-center gap-3">
                      <link.icon size={16} className="text-slate-500 group-hover:text-[#6366F1] transition-colors" />
                      <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{link.name}</span>
                    </div>
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
