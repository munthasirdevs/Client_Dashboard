import React from 'react';
import { PROJECTS } from '../constants';
import { Zap, Calendar, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectsProps {
  onSelectProject: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Projects List</h1>
          <p className="text-slate-400 text-sm mt-1">Manage and monitor your active digital ecosystems.</p>
        </div>
        <div className="flex p-1 bg-[#0B0F19] border border-white/5 rounded-xl">
          {['All', 'Active', 'Completed', 'Pending'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                i === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            onClick={onSelectProject}
            className="group bg-[#0B0F19] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/30 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 transition-colors">
                <Zap size={24} className="text-indigo-400 group-hover:text-white transition-colors" />
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                project.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                project.status === 'completed' ? 'bg-slate-500/10 text-slate-400 border-white/10' :
                'bg-amber-500/10 text-amber-400 border-amber-500/20'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.name}</h3>
            <p className="text-sm text-slate-400 line-clamp-2 mb-8 leading-relaxed">{project.description}</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Progress</span>
                <span className="text-xs font-bold text-white">{project.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              
              <div className="pt-6 flex justify-between items-center border-t border-white/5">
                <div className="flex -space-x-2">
                  {project.team.map((avatar, i) => (
                    <img key={i} className="w-8 h-8 rounded-lg border-2 border-[#0B0F19] object-cover" src={avatar} alt="Team" referrerPolicy="no-referrer" />
                  ))}
                  <div className="w-8 h-8 rounded-lg bg-white/5 border-2 border-[#0B0F19] flex items-center justify-center text-[10px] font-bold text-slate-400">+3</div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Calendar size={14} />
                  <span className="text-[11px] font-bold uppercase tracking-wider">{project.dueDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="group rounded-2xl p-6 border-2 border-dashed border-white/5 flex flex-col items-center justify-center gap-4 hover:border-indigo-500/30 transition-all cursor-pointer hover:bg-white/[0.02]">
          <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
            <Plus className="text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <div className="text-center">
            <h4 className="text-white font-bold mb-1">Create New Project</h4>
            <p className="text-xs text-slate-500">Launch a new creative workflow</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
