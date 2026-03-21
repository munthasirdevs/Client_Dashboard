import React from 'react';
import { User, Info, CreditCard, Copy, ChevronDown, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export const Profile: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-10"
    >
      {/* Header Area */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-6">
          <div className="space-y-1">
            <h1 className="text-5xl font-bold text-white tracking-tight font-display">Your Profile</h1>
            <p className="text-slate-500 text-sm font-medium">Account Details</p>
          </div>
          <button className="relative group overflow-hidden bg-[#6366F1] text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all active:scale-95 flex items-center gap-2">
            <Camera size={18} />
            Edit Profile Photo
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#6366F1]/10 blur-3xl rounded-full scale-125"></div>
          <div className="relative w-48 h-48 rounded-full p-1.5 bg-gradient-to-tr from-[#6366F1]/40 to-transparent border border-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-[#111827]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Personal Information */}
        <div className="lg:col-span-7 bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-8 shadow-xl">
          <div className="flex items-center gap-3 text-[#6366F1]">
            <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
              <User size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Personal Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">First Name</label>
              <input 
                type="text" 
                defaultValue="Alex"
                className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Last Name</label>
              <input 
                type="text" 
                defaultValue="Rivers"
                className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
            <input 
              type="email" 
              defaultValue="alex.rivers@luminaprojects.com"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Phone Number</label>
            <input 
              type="tel" 
              defaultValue="+1 (555) 123-4567"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="lg:col-span-5 bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-8 shadow-xl">
          <div className="flex items-center gap-3 text-[#6366F1]">
            <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
              <Info size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Additional Information</h3>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Username</label>
              <div className="bg-[#0B0F19] border border-white/5 rounded-xl px-5 py-4 text-white text-sm font-medium">
                arivers_lead
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">User ID</label>
              <div className="flex items-center justify-between bg-[#0B0F19] border border-white/5 rounded-xl px-5 py-4 text-white text-sm font-mono">
                <span className="text-indigo-400">#LUM-9921-X9</span>
                <button className="text-slate-600 hover:text-white transition-colors">
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-end">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Profile Completion</p>
                <p className="text-xs font-bold text-[#6366F1]">85%</p>
              </div>
              <div className="h-2 w-full bg-[#0B0F19] rounded-full overflow-hidden p-0.5 border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#6366F1] to-[#818cf8] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.4)]" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-8 shadow-xl">
        <div className="flex items-center gap-3 text-[#6366F1]">
          <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
            <CreditCard size={20} />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Billing Address</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Company Name</label>
            <input 
              type="text" 
              placeholder="Optional"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Payment Method</label>
            <div className="relative group">
              <select className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all appearance-none cursor-pointer">
                <option>Visa ending in 4242</option>
                <option>Mastercard ending in 8891</option>
                <option>PayPal (arivers@gmail.com)</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-white transition-colors pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Address 1</label>
            <input 
              type="text" 
              defaultValue="742 Evergreen Terrace"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Address 2</label>
            <input 
              type="text" 
              placeholder="Apt, Suite..."
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">City</label>
            <input 
              type="text" 
              defaultValue="San Francisco"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">State/Region</label>
            <input 
              type="text" 
              defaultValue="California"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Zip Code</label>
            <input 
              type="text" 
              defaultValue="94103"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Country</label>
            <input 
              type="text" 
              defaultValue="United States"
              className="w-full bg-[#1F2937] border border-white/5 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 transition-all placeholder:text-slate-600"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-6 pt-4">
        <button className="text-slate-500 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
          Discard Changes
        </button>
        <button className="bg-[#6366F1] text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all active:scale-95">
          Save Preferences
        </button>
      </div>
    </motion.div>
  );
};
