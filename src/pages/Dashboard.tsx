import React from 'react';
import { TrendingUp, Folder, Zap, CheckCircle, Plus, MoreVertical, FileText, Bell, ChevronRight } from 'lucide-react';
import { PROJECTS, ACTIVITIES } from '../constants';
import { motion } from 'motion/react';

export const Dashboard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-10"
    >
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-2">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-white tracking-tight font-display">Command Center</h1>
          <p className="text-[#c7c4d7] text-sm font-medium">Real-time overview of your digital ecosystem performance and project health.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#1F2937] border border-white/5 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest text-[#dfe2f1] hover:bg-[#1F2937]/80 transition-all active:scale-95">
            View All Projects
          </button>
          <button className="bg-[#6366F1] text-white px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all active:scale-95">
            Order New Service
          </button>
        </div>
      </section>

      {/* Stats Cards Row */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Projects', value: '24', icon: Folder, trend: '+3 this month', color: 'text-[#6366F1]' },
          { label: 'Completed', value: '68%', progress: 68, color: 'text-emerald-400' },
          { label: 'Ongoing Tasks', value: '12', icon: Zap, trend: '4 due today', color: 'text-amber-400' },
          { label: 'Team Bandwidth', value: '82%', icon: TrendingUp, trend: 'Near capacity', color: 'text-[#6366F1]' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#111827] border border-white/5 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all hover:-translate-y-1 hover:border-white/10 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
              <div className="text-4xl font-bold text-white tracking-tight">{stat.value}</div>
            </div>
            {stat.progress ? (
              <div className="mt-6 space-y-2">
                <div className="w-full h-1.5 bg-[#0B0F19] rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div className="h-full bg-[#6366F1] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.4)]" style={{ width: `${stat.progress}%` }}></div>
                </div>
              </div>
            ) : (
              <div className={`mt-6 flex items-center gap-2 ${stat.color} text-[10px] font-bold uppercase tracking-widest`}>
                {stat.icon && <stat.icon size={14} />}
                <span>{stat.trend}</span>
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          {/* Active Projects */}
          <section className="space-y-6">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-xl font-bold text-white tracking-tight">Active Projects</h3>
              <button className="text-[10px] text-[#6366F1] font-bold uppercase tracking-widest hover:text-[#818cf8] transition-colors flex items-center gap-1">
                See More <ChevronRight size={14} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.slice(0, 2).map((project) => (
                <div key={project.id} className="bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-[#6366F1]/30 transition-all group cursor-pointer shadow-xl relative overflow-hidden">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F2937] flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all shadow-inner">
                      <Zap size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      project.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#6366F1] transition-colors tracking-tight">{project.name}</h4>
                  <p className="text-sm text-slate-500 mb-8 line-clamp-1 italic">/ {project.description}</p>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      <span>Progress</span>
                      <span className="text-white">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#0B0F19] rounded-full overflow-hidden p-0.5 border border-white/5">
                      <div className="h-full bg-[#6366F1] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.4)]" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center pt-8 border-t border-white/5">
                    <div className="flex -space-x-3">
                      {project.team.map((avatar, i) => (
                        <img key={i} className="w-8 h-8 rounded-xl border-2 border-[#111827] object-cover shadow-lg" src={avatar} alt="Team" referrerPolicy="no-referrer" />
                      ))}
                      <div className="w-8 h-8 rounded-xl bg-[#1F2937] border-2 border-[#111827] flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-lg">+2</div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Due {project.dueDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Orders */}
          <section className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 flex justify-between items-center border-b border-white/5">
              <h3 className="text-xl font-bold text-white tracking-tight">Service Orders</h3>
              <button className="p-2 text-slate-500 hover:text-white transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="p-8 space-y-4">
              {[
                { name: 'Custom Illustration Pack', id: 'SO-8821', time: '2h ago', status: 'Processing', statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
                { name: 'API Integration Module', id: 'SO-8794', time: 'Yesterday', status: 'Approved', statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
              ].map((order, i) => (
                <div key={i} className="bg-[#1F2937]/30 p-5 rounded-2xl flex items-center justify-between border border-white/5 hover:bg-[#1F2937]/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F2937] flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all shadow-inner">
                      <Folder size={24} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-white tracking-tight">{order.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Order #{order.id} • {order.time}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 flex justify-between items-center border-b border-white/5">
              <h3 className="text-xl font-bold text-white tracking-tight">Notifications</h3>
              <button className="p-2 text-slate-500 hover:text-white transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="p-8 space-y-4">
              {[
                { name: 'Custom Illustration Pack', id: 'SO-8821', time: '2h ago' },
                { name: 'API Integration Module', id: 'SO-8794', time: 'Yesterday' },
              ].map((notif, i) => (
                <div key={i} className="bg-[#1F2937]/30 p-5 rounded-2xl flex items-center justify-between border border-white/5 hover:bg-[#1F2937]/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F2937] flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all shadow-inner">
                      <Bell size={24} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-white tracking-tight">{notif.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Order #{notif.id} • {notif.time}</p>
                    </div>
                  </div>
                  <button className="px-6 py-2 rounded-xl bg-[#1F2937] text-[#dfe2f1] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1F2937]/80 transition-all">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Recent Activity */}
          <section className="bg-[#111827] border border-white/5 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-8">Recent Activity</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/5"></div>
              {ACTIVITIES.slice(0, 3).map((activity) => (
                <div key={activity.id} className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#111827] border border-white/5 flex items-center justify-center text-[#6366F1] shadow-xl">
                    <CheckCircle size={18} />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm text-[#dfe2f1] leading-relaxed font-medium">{activity.content}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Billing Summary */}
          <section className="bg-[#111827] border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366F1]/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1]">
                <FileText size={20} />
              </div>
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Billing Summary</h3>
            </div>
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Latest Invoice</p>
                  <p className="text-4xl font-bold text-white tracking-tight">$4,250.00</p>
                </div>
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-amber-500/20">Pending</span>
              </div>
              <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Due: <span className="text-white">Oct 12, 2023</span></p>
                <button className="text-[10px] font-bold text-[#6366F1] uppercase tracking-widest hover:underline underline-offset-4 transition-all">Download PDF</button>
              </div>
            </div>
          </section>

          {/* Recent Files */}
          <section className="bg-[#111827] border border-white/5 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white tracking-tight">Recent Files</h3>
              <Folder size={20} className="text-slate-500" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Project_Scope_V2.pdf', size: '1.2 MB', date: 'Oct 04' },
                { name: 'Final_Invoicing.csv', size: '420 KB', date: 'Oct 03' },
              ].map((file, i) => (
                <div key={i} className="bg-[#0B0F19] p-4 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-[#6366F1]/30 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-[#1F2937] flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate">{file.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{file.size} • {file.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
