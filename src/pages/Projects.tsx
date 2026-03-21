import React from 'react';
import { PROJECTS } from '../constants';
import { Zap, Calendar, Plus } from 'lucide-react';
import { motion } from 'motion/react';

export const Projects: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-white mb-2">Projects</h2>
          <p className="text-on-surface-variant max-w-md">Manage and monitor your digital ecosystem performance across all active workflows.</p>
        </div>
        <div className="flex p-1 bg-surface-container-low rounded-2xl">
          {['All', 'Active', 'Completed', 'Pending'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-6 py-2 text-sm font-semibold rounded-xl transition-all ${
                i === 0 ? 'bg-primary-container text-on-primary-fixed' : 'text-on-surface-variant hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group bg-surface-container rounded-2xl p-6 transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.05)] border border-outline-variant/5">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
                <Zap size={24} className="text-primary-container" />
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                project.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                project.status === 'completed' ? 'bg-slate-500/10 text-slate-400 border-outline-variant/20' :
                'bg-tertiary/10 text-tertiary border-tertiary/20'
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="text-xl font-bold font-headline text-white mb-2 group-hover:text-primary-container transition-colors">{project.name}</h3>
            <p className="text-sm text-on-surface-variant line-clamp-2 mb-6 leading-relaxed">{project.description}</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Progress</span>
                <span className="text-xs font-bold text-white">{project.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-container shadow-[0_0_10px_rgba(192,193,255,0.4)]" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-outline-variant/10">
                <div className="flex -space-x-2">
                  {project.team.map((avatar, i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-surface-container" src={avatar} alt="Team" referrerPolicy="no-referrer" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface-container flex items-center justify-center text-[10px] font-bold">+3</div>
                </div>
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <Calendar size={14} />
                  <span className="text-[11px] font-semibold">Due {project.dueDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="group rounded-2xl p-6 border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center gap-4 hover:border-primary-container/50 transition-all cursor-pointer hover:bg-primary-container/5">
          <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
            <Plus className="text-slate-500 group-hover:text-on-primary-fixed" />
          </div>
          <div className="text-center">
            <h4 className="text-white font-bold font-headline mb-1">Create New Project</h4>
            <p className="text-xs text-on-surface-variant">Launch a new creative workflow</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
