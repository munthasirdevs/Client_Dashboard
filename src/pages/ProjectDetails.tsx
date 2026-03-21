import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Users, 
  MoreVertical, 
  FileText, 
  MessageSquare, 
  Download,
  ExternalLink,
  Plus
} from 'lucide-react';

interface ProjectDetailsProps {
  onBack: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ onBack }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </button>
        <div className="flex gap-3">
          <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
            <MoreVertical size={20} />
          </button>
          <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]">
            Edit Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[11px] font-bold uppercase tracking-wider rounded-full border border-indigo-500/20">
                In Progress
              </span>
              <span className="px-3 py-1 bg-white/5 text-slate-400 text-[11px] font-bold uppercase tracking-wider rounded-full border border-white/10 flex items-center gap-1.5">
                <Calendar size={12} />
                Deadline: May 15, 2026
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white tracking-tight mb-4">Neo-Finance App Redesign</h1>
            <p className="text-slate-400 leading-relaxed text-lg">
              A complete overhaul of the Neo-Finance mobile application, focusing on improving user experience, 
              modernizing the visual design, and integrating new crypto-fiat bridge features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Project Lead</p>
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/150?u=alex" className="w-6 h-6 rounded-full" alt="Lead" />
                  <p className="text-sm font-bold text-white">Alex Rivera</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Team Members</p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-6 h-6 rounded-full border-2 border-[#0B0F19]" alt="Member" />
                  ))}
                  <div className="w-6 h-6 rounded-full bg-white/5 border-2 border-[#0B0F19] flex items-center justify-center text-[10px] font-bold text-slate-400">
                    +2
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Total Budget</p>
                <p className="text-sm font-bold text-white">$45,000.00</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white tracking-tight mb-6">Key Objectives</h2>
            <div className="space-y-4">
              {[
                { title: 'User Experience Audit', completed: true },
                { title: 'New Visual Identity System', completed: true },
                { title: 'High-Fidelity Mobile Prototypes', completed: false },
                { title: 'Crypto Bridge Integration Architecture', completed: false },
                { title: 'User Testing & Feedback Loop', completed: false },
              ].map((obj, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5 group hover:border-indigo-500/30 transition-all">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center border ${
                    obj.completed ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-white/10 text-transparent'
                  }`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <span className={`text-sm font-medium ${obj.completed ? 'text-slate-300 line-through' : 'text-white'}`}>
                    {obj.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white tracking-tight">Recent Assets</h2>
              <button className="text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-wider">View All</button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Wireframes_v1.pdf', size: '4.2 MB', type: 'PDF' },
                { name: 'Style_Guide.fig', size: '12.8 MB', type: 'FIG' },
                { name: 'User_Flows.png', size: '2.1 MB', type: 'PNG' },
              ].map((asset, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-indigo-400 transition-colors">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate">{asset.name}</p>
                    <p className="text-[11px] text-slate-500">{asset.size}</p>
                  </div>
                  <button className="p-2 text-slate-500 hover:text-white transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white tracking-tight">Latest Discussion</h2>
              <button className="text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-wider">Open Chat</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <img src="https://i.pravatar.cc/150?u=alex" className="w-8 h-8 rounded-lg shrink-0" alt="User" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-white">Alex Rivera</p>
                    <span className="text-[10px] text-slate-500">2h ago</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed bg-white/5 p-3 rounded-xl rounded-tl-none">
                    I've uploaded the latest wireframes for the crypto bridge. Let me know what you think!
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <img src="https://i.pravatar.cc/150?u=munthasir" className="w-8 h-8 rounded-lg shrink-0" alt="User" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-white">You</p>
                    <span className="text-[10px] text-slate-500">1h ago</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed bg-indigo-600/10 p-3 rounded-xl rounded-tl-none border border-indigo-500/10">
                    Looks great, Alex. I'll review them by EOD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
