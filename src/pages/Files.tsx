import React from 'react';
import { FileText, Download, Filter, Plus, MoreHorizontal, CloudDownload, Info } from 'lucide-react';
import { motion } from 'motion/react';

export const Files: React.FC = () => {
  const files = [
    { name: 'Q4_Performance_Audit.pdf', project: 'Strategic Review 2023', size: '12.4 MB', date: 'Oct 24, 2023', type: 'pdf' },
    { name: 'Landing_Hero_V2_Draft.png', project: 'SaaS Website Overhaul', size: '4.8 MB', date: 'Nov 02, 2023', type: 'image' },
    { name: 'Brand_Identity_Full_Pack.zip', project: 'Rebranding Phase 1', size: '142.0 MB', date: 'Oct 12, 2023', type: 'zip' },
    { name: 'Explainer_Video_Final.mp4', project: 'Social Media Ads', size: '88.5 MB', date: 'Nov 15, 2023', type: 'video' },
    { name: 'App_Config_Production.json', project: 'Core Platform', size: '42 KB', date: 'Nov 18, 2023', type: 'json' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-container">Assets Management</span>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-white">Files & Deliverables</h2>
          <p className="text-on-surface-variant max-w-lg">Access all project files and high-fidelity downloadables for your active campaigns.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-surface-container-high text-on-surface rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <Filter size={14} />
            Filter by Project
          </button>
          <button className="px-5 py-2.5 bg-primary-container text-on-primary-fixed rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary-container/20 hover:scale-[1.02] transition-transform">
            <Plus size={14} />
            Request Upload
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file, i) => (
          <div key={i} className="group relative bg-surface-container-low rounded-2xl p-6 border border-transparent hover:border-primary-container/30 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary-container">
                <FileText size={30} />
              </div>
              <button className="text-slate-500 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 truncate">{file.name}</h3>
              <p className="text-xs text-primary-container font-semibold uppercase tracking-wider mb-4">{file.project}</p>
              <div className="flex items-center gap-4 py-4 border-t border-outline-variant/10">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-500 font-bold">Size</span>
                  <span className="text-sm font-medium text-slate-300">{file.size}</span>
                </div>
                <div className="flex flex-col border-l border-outline-variant/10 pl-4">
                  <span className="text-[10px] uppercase text-slate-500 font-bold">Modified</span>
                  <span className="text-sm font-medium text-slate-300">{file.date}</span>
                </div>
              </div>
              <button className="w-full mt-2 py-3 bg-surface-container-highest text-on-surface rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary-container group-hover:text-on-primary-fixed transition-all duration-300">
                <Download size={14} />
                Download File
              </button>
            </div>
          </div>
        ))}
        <div className="group relative bg-surface-container-lowest border-2 border-dashed border-outline-variant/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary-container/50 hover:bg-primary-container/[0.02] transition-all">
          <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Plus className="text-slate-500 group-hover:text-primary-container" />
          </div>
          <p className="text-sm font-bold text-slate-400 group-hover:text-primary-container">Request Custom Export</p>
          <p className="text-xs text-slate-600 mt-1 max-w-[150px]">Need a specific format? Contact your account manager.</p>
        </div>
      </div>

      <div className="space-y-6 pt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-headline text-white">Download History</h3>
          <button className="text-xs font-bold text-primary-container uppercase tracking-widest hover:underline">View All Logs</button>
        </div>
        <div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10">
          <div className="grid grid-cols-4 p-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-surface-container-high/50">
            <div className="pl-2">File Name</div>
            <div>Recipient</div>
            <div>Date & Time</div>
            <div className="text-right pr-2">Status</div>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {[
              { name: 'Q4_Performance_Audit.pdf', recipient: 'Sarah Jenkins', time: 'Today, 10:45 AM', status: 'SUCCESS', color: 'text-green-400 bg-green-500/10' },
              { name: 'Brand_Identity_Full_Pack.zip', recipient: 'Mike Thompson', time: 'Yesterday, 04:22 PM', status: 'SUCCESS', color: 'text-green-400 bg-green-500/10' },
              { name: 'Styleguide_Draft.fig', recipient: 'Sarah Jenkins', time: 'Nov 14, 2023', status: 'EXPIRED', color: 'text-red-400 bg-red-500/10' },
            ].map((log, i) => (
              <div key={i} className="grid grid-cols-4 p-4 items-center hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <CloudDownload className="text-primary-container" size={18} />
                  <span className="text-sm font-medium text-slate-200 truncate">{log.name}</span>
                </div>
                <div className="text-sm text-slate-400">{log.recipient}</div>
                <div className="text-sm text-slate-400">{log.time}</div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-[10px] font-bold rounded-full border ${log.color}`}>
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
