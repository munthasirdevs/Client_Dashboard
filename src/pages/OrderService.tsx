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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-16"
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary-container"></span>
          <span className="text-primary-container font-headline text-[10px] font-bold uppercase tracking-[0.2em]">Solutions Catalog</span>
        </div>
        <h1 className="text-5xl font-headline font-extrabold text-on-surface tracking-tighter mb-4 max-w-2xl leading-tight">
          Elevate your <span className="text-primary-container">infrastructure.</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed font-light">
          Select from our suite of premium enterprise services designed to accelerate your growth and secure your digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = getIcon(service.icon);
          const colorClass = service.color === 'indigo' ? 'text-primary-container bg-primary-container/10' : 
                             service.color === 'orange' ? 'text-orange-400 bg-orange-500/10' : 
                             'text-red-400 bg-red-500/10';
          
          return (
            <div key={service.id} className="bg-surface-container-low rounded-2xl p-8 border border-white/5 hover:border-primary-container/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1">
              <div className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon size={30} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary-container transition-colors">{service.name}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6 mt-2">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-surface-container text-on-surface-variant text-[9px] uppercase tracking-widest rounded-md font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-lg font-headline font-black text-on-surface">
                  {service.price}<span className="text-[10px] text-on-surface-variant font-normal ml-1">/{service.unit}</span>
                </span>
                {service.id === '1' ? (
                  <button className="px-4 py-2 bg-primary-container text-on-primary-fixed text-xs font-bold rounded-xl transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] active:scale-95 flex items-center gap-1">
                    Order Now <ArrowRight size={12} />
                  </button>
                ) : (
                  <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-on-primary-fixed transition-all">
                    <Plus size={20} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="bg-surface-container-low rounded-2xl p-8 border border-white/5 hover:border-primary-container/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-1">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <Sparkles size={30} />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary-container transition-colors">Custom Request</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6 mt-2">Have a unique project in mind? Our team can architect a bespoke solution tailored to your needs.</p>
            </div>
            <div className="mt-auto pt-6 border-t border-white/5">
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-on-surface hover:bg-white/10 transition-all">
                Open Inquiry
              </button>
            </div>
          </div>
      </div>

      <div className="mt-24 p-12 rounded-2xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
        <div>
          <h2 className="text-3xl font-headline font-bold mb-2 text-white">Ready to deploy?</h2>
          <p className="text-slate-400 font-light">Our team initiates most services within 24 hours of checkout.</p>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-slate-400 text-sm font-medium hover:text-white transition-colors">View Terms</button>
          <button className="px-8 py-4 bg-primary-container text-on-primary-fixed font-black rounded-2xl shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:scale-105 transition-transform active:scale-95">
            Explore Full Library
          </button>
        </div>
      </div>
    </motion.div>
  );
};
