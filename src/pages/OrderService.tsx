import React from 'react';
import { Brush, Code, Cloud, Shield, Sparkles, ArrowRight, Plus, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { motion } from 'motion/react';

export const OrderService: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brush': return Brush;
      case 'code': return Code;
      case 'cloud_done': return Cloud;
      case 'security': return Shield;
      default: return Sparkles;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12"
    >
      <header>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-indigo-600"></span>
          <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em]">Solutions Catalog</span>
        </div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4 max-w-2xl leading-tight">
          Elevate your <span className="text-indigo-500">infrastructure.</span>
        </h1>
        <p className="text-slate-400 max-w-xl text-sm leading-relaxed font-medium">
          Select from our suite of premium enterprise services designed to accelerate your growth and secure your digital presence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => {
          const Icon = getIcon(service.icon);
          const colorClass = service.color === 'indigo' ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' : 
                             service.color === 'orange' ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 
                             'text-rose-400 bg-rose-500/10 border-rose-500/20';
          
          return (
            <div key={service.id} className="bg-[#0B0F19] rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1">
              <div className={`w-12 h-12 ${colorClass} border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{service.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 mt-2">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-slate-500 text-[9px] uppercase tracking-widest rounded-md font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-lg font-bold text-white">
                  {service.price}<span className="text-[10px] text-slate-500 font-normal ml-1">/{service.unit}</span>
                </span>
                {service.id === '1' ? (
                  <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl transition-all hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center gap-1">
                    Order Now <ArrowRight size={12} />
                  </button>
                ) : (
                  <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all">
                    <Plus size={20} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="bg-[#0B0F19] rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">Custom Request</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 mt-2">Have a unique project in mind? Our team can architect a bespoke solution tailored to your needs.</p>
            </div>
            <div className="mt-auto pt-6 border-t border-white/5">
              <button className="w-full py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/10 transition-all">
                Open Inquiry
              </button>
            </div>
          </div>
      </div>

      <div className="mt-12 p-10 rounded-2xl bg-indigo-600 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl shadow-indigo-600/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2 text-white">Ready to deploy?</h2>
          <p className="text-indigo-100 text-sm font-medium">Our team initiates most services within 24 hours of checkout.</p>
        </div>
        <div className="flex items-center gap-4 relative z-10">
          <button className="text-white/80 text-sm font-bold hover:text-white transition-colors">View Terms</button>
          <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-xl hover:scale-105 transition-transform active:scale-95 text-sm">
            Explore Full Library
          </button>
        </div>
      </div>
    </motion.div>
  );
};
