import React from 'react';
import { TrendingUp, Folder, Zap, CheckCircle, Plus, MoreVertical } from 'lucide-react';
import { PROJECTS, ACTIVITIES } from '../constants';
import { motion } from 'motion/react';

export const Dashboard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <section className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl font-extrabold font-headline text-white tracking-tight">Command Center</h2>
          <p className="text-on-surface-variant/70 mt-2 max-w-md">Real-time overview of your digital ecosystem performance and project health.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-surface-container-highest border border-outline-variant/10 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-surface-container-high transition-all">
            View All Projects
          </button>
          <button className="bg-primary-container text-on-primary-fixed px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary-container/10 active:scale-95 transition-all">
            Order New Service
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Projects', value: '24', icon: Folder, trend: '+3 this month', color: 'text-primary' },
          { label: 'Completed', value: '68%', progress: 68, color: 'text-primary' },
          { label: 'Ongoing Tasks', value: '12', icon: Zap, trend: '4 due today', color: 'text-tertiary' },
          { label: 'Team Bandwidth', value: '82%', icon: TrendingUp, trend: 'Near capacity', color: 'text-on-surface' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-1 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">{stat.label}</span>
            <span className="text-4xl font-extrabold font-headline text-white">{stat.value}</span>
            {stat.progress ? (
              <div className="mt-4 w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary-container" style={{ width: `${stat.progress}%` }}></div>
              </div>
            ) : (
              <div className={`mt-4 flex items-center gap-2 ${stat.color} text-xs font-medium`}>
                {stat.icon && <stat.icon size={14} />}
                <span>{stat.trend}</span>
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <section className="space-y-4">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-lg font-bold font-headline">Active Projects</h3>
              <button className="text-xs text-primary-container font-bold uppercase tracking-wider">See More</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.slice(0, 2).map((project) => (
                <div key={project.id} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/5 hover:border-primary-container/20 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container">
                      <Zap size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      project.status === 'active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{project.name}</h4>
                  <p className="text-xs text-on-surface-variant mb-6 line-clamp-1">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant/60">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest rounded-full">
                      <div className="h-full bg-primary-container shadow-[0_0_8px_rgba(128,131,255,0.4)]" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {project.team.map((avatar, i) => (
                        <img key={i} className="w-6 h-6 rounded-full border border-surface-container" src={avatar} alt="Team" referrerPolicy="no-referrer" />
                      ))}
                      <div className="w-6 h-6 rounded-full bg-surface-container-high border border-surface-container flex items-center justify-center text-[8px] font-bold">+2</div>
                    </div>
                    <div className="text-[10px] text-on-surface-variant font-medium">Due {project.dueDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface-container-low rounded-2xl overflow-hidden">
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-lg font-bold font-headline">Service Orders</h3>
              <MoreVertical className="text-on-surface-variant cursor-pointer" size={20} />
            </div>
            <div className="px-6 pb-6 space-y-4">
              {[
                { name: 'Custom Illustration Pack', id: 'SO-8821', time: '2h ago', status: 'Processing', statusColor: 'text-blue-400 bg-blue-500/10' },
                { name: 'API Integration Module', id: 'SO-8794', time: 'Yesterday', status: 'Approved', statusColor: 'text-green-400 bg-green-500/10' },
              ].map((order, i) => (
                <div key={i} className="bg-surface-container/50 p-4 rounded-xl flex items-center justify-between border border-outline-variant/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                      <Folder className="text-primary-container" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{order.name}</p>
                      <p className="text-[10px] text-on-surface-variant">Order #{order.id} • Requested {order.time}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <section className="bg-surface-container rounded-2xl p-6 border border-outline-variant/5">
            <h3 className="text-lg font-bold font-headline mb-6">Recent Activity</h3>
            <div className="space-y-6 relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-outline-variant/20"></div>
              {ACTIVITIES.map((activity) => (
                <div key={activity.id} className="flex gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container border-4 border-surface-container">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-white">{activity.content}</p>
                    <p className="text-[10px] text-on-surface-variant mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-primary-container" size={18} />
              <h3 className="text-sm font-bold font-headline uppercase tracking-wider">Billing Summary</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Latest Invoice</p>
                  <p className="text-3xl font-black text-white">$4,250.00</p>
                </div>
                <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold rounded">Pending</span>
              </div>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <p className="text-[10px] text-on-surface-variant">Due Date: <span className="text-white">Oct 12, 2023</span></p>
                <button className="text-[10px] font-bold text-primary-container underline">Download PDF</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
