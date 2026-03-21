import React from 'react';
import { FileText, Download, Filter, Plus, MoreHorizontal, CloudDownload, Info } from 'lucide-react';
import { motion } from 'motion/react';

export const Files: React.FC = () => {
  const files = [
    { name: 'Q4_Performance_Audit.pdf', project: 'Strategic Review 2026', size: '12.4 MB', date: 'Oct 24, 2026', type: 'pdf' },
    { name: 'Landing_Hero_V2_Draft.png', project: 'SaaS Website Overhaul', size: '4.8 MB', date: 'Nov 02, 2026', type: 'image' },
    { name: 'Brand_Identity_Full_Pack.zip', project: 'Rebranding Phase 1', size: '142.0 MB', date: 'Oct 12, 2026', type: 'zip' },
    { name: 'Explainer_Video_Final.mp4', project: 'Social Media Ads', size: '88.5 MB', date: 'Nov 15, 2026', type: 'video' },
    { name: 'App_Config_Production.json', project: 'Core Platform', size: '42 KB', date: 'Nov 18, 2026', type: 'json' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Files & Deliverables</h1>
          <p className="text-slate-400 text-sm mt-1">Access all project assets and high-fidelity downloadables.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
            <Filter size={16} />
            Filter by Project
          </button>
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all active:scale-[0.98]">
            <Plus size={16} />
            Request Upload
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file, i) => (
          <div key={i} className="group bg-[#0B0F19] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/30">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FileText size={30} />
              </div>
              <button className="p-2 text-slate-500 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 truncate">{file.name}</h3>
              <p className="text-[11px] text-indigo-400 font-bold uppercase tracking-wider mb-6">{file.project}</p>
              
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5">
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-1">Size</p>
                  <p className="text-sm font-bold text-slate-300">{file.size}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-1">Modified</p>
                  <p className="text-sm font-bold text-slate-300">{file.date}</p>
                </div>
              </div>
              
              <button className="w-full mt-4 py-3 bg-white/5 text-slate-300 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Download size={16} />
                Download File
              </button>
            </div>
          </div>
        ))}
        
        <div className="group border-2 border-dashed border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
            <Plus className="text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">Request Custom Export</p>
          <p className="text-xs text-slate-500 mt-2 max-w-[200px]">Need a specific format? Contact your account manager.</p>
        </div>
      </div>

      <div className="space-y-6 pt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white tracking-tight">Download History</h3>
          <button className="text-xs font-bold text-indigo-400 uppercase tracking-widest hover:text-indigo-300 transition-colors">View All Logs</button>
        </div>
        <div className="bg-[#0B0F19] border border-white/5 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 p-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 bg-white/[0.02] border-b border-white/5">
            <div className="pl-2">File Name</div>
            <div>Recipient</div>
            <div>Date & Time</div>
            <div className="text-right pr-2">Status</div>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { name: 'Q4_Performance_Audit.pdf', recipient: 'Sarah Jenkins', time: 'Today, 10:45 AM', status: 'SUCCESS', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
              { name: 'Brand_Identity_Full_Pack.zip', recipient: 'Mike Thompson', time: 'Yesterday, 04:22 PM', status: 'SUCCESS', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
              { name: 'Styleguide_Draft.fig', recipient: 'Sarah Jenkins', time: 'Nov 14, 2026', status: 'EXPIRED', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
            ].map((log, i) => (
              <div key={i} className="grid grid-cols-4 p-5 items-center hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3">
                  <CloudDownload className="text-indigo-400" size={20} />
                  <span className="text-sm font-bold text-slate-200 truncate">{log.name}</span>
                </div>
                <div className="text-sm text-slate-400">{log.recipient}</div>
                <div className="text-sm text-slate-400">{log.time}</div>
                <div className="text-right">
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${log.color}`}>
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
