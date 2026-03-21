import React from 'react';
import { Mail, Phone, Building2, MapPin, Verified, Folder, Zap, CheckCircle, Headset, ArrowRight } from 'lucide-react';
import { ACTIVITIES } from '../constants';
import { motion } from 'motion/react';

export const Profile: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      <div className="mb-10">
        <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-2">
          <span>Portal</span>
          <ArrowRight size={10} />
          <span className="text-primary-container">Profile Details</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white font-headline tracking-tight">Client Profile</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-low rounded-2xl p-8 relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 blur-[80px] rounded-full group-hover:bg-primary-container/15 transition-all duration-700"></div>
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="relative">
                <img 
                  src="https://i.pravatar.cc/150?u=alex" 
                  alt="Alex Rivera" 
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-surface-container-high shadow-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary-container text-on-primary-fixed p-1.5 rounded-lg shadow-lg">
                  <Verified size={14} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-headline">Alex Rivera</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-container text-[10px] font-bold uppercase tracking-wider">Premium Client</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                      <p className="text-slate-400 text-sm">Luminescent Agency</p>
                    </div>
                  </div>
                  <button className="bg-primary-container text-on-primary-fixed px-6 py-2.5 rounded-xl font-bold text-sm shadow-[0_10px_20px_rgba(99,102,241,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Edit Profile
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 pt-6 border-t border-white/5">
                  {[
                    { label: 'Email Address', value: 'alex@luminescent.io', icon: Mail },
                    { label: 'Phone Number', value: '+1 555-1234', icon: Phone },
                    { label: 'Organization', value: 'Luminescent Agency', icon: Building2 },
                    { label: 'Region', value: 'San Francisco, CA', icon: MapPin },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-slate-400">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{item.label}</p>
                        <p className="text-on-surface font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Total Projects', value: '12', icon: Folder, color: 'text-primary-container', bgColor: 'bg-primary-container/10' },
              { label: 'Active Projects', value: '4', icon: Zap, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10' },
              { label: 'Completed', value: '8', icon: CheckCircle, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
            ].map((metric, i) => (
              <div key={i} className="bg-surface-container-low rounded-2xl p-6 border border-white/5 hover:border-primary-container/30 transition-colors group">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">{metric.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-4xl font-extrabold text-white font-headline">{metric.value}</p>
                  <div className={`w-10 h-10 rounded-full ${metric.bgColor} flex items-center justify-center ${metric.color}`}>
                    <metric.icon size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-white/5 shadow-xl sticky top-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white font-headline">Recent Activity</h3>
              <button className="text-[10px] uppercase font-bold text-primary-container tracking-widest hover:underline transition-all">View All</button>
            </div>
            <div className="space-y-8 relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-container via-slate-700 to-transparent opacity-30"></div>
              {ACTIVITIES.map((activity) => (
                <div key={activity.id} className="relative flex gap-4">
                  <div className="z-10 w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-surface-container-low flex items-center justify-center text-primary-container shadow-lg">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-on-surface font-medium">{activity.content}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 rounded-xl bg-gradient-to-br from-surface-container-low to-surface-container-lowest border border-white/5 group cursor-pointer overflow-hidden relative">
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary-container/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
                  <Headset size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Need Support?</p>
                  <p className="text-[10px] text-slate-500">Contact your manager</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-slate-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
