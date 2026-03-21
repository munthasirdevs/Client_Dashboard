import React from 'react';
import { FileText, Clock, CheckCircle2, Filter, Plus, MoreHorizontal, TrendingUp } from 'lucide-react';
import { INVOICES } from '../constants';
import { motion } from 'motion/react';

export const Billing: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Billing & Invoices</h1>
          <p className="text-slate-400 text-sm mt-1">Manage your subscriptions, invoices, and payment methods.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            Download All
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 active:scale-95 transition-all">
            Add Payment Method
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Invoiced', value: '$12,450.00', sub: 'Lifetime', trend: '+12% vs last year', icon: FileText, color: 'text-indigo-400' },
          { label: 'Pending Amount', value: '$1,240.00', sub: 'Due in 3 days', trend: 'Next payment Oct 27', icon: Clock, color: 'text-amber-400' },
          { label: 'Paid This Month', value: '$4,950.00', sub: 'All accounts current', trend: '100% on time', icon: CheckCircle2, color: 'text-emerald-400' },
        ].map((card, i) => (
          <div key={i} className="bg-[#0B0F19] border border-white/5 p-6 rounded-2xl flex flex-col gap-1 group relative overflow-hidden transition-all hover:border-white/10">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <card.icon size={48} />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold">{card.label}</span>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-3xl font-bold text-white">{card.value}</span>
              <span className="text-[10px] text-slate-500 font-medium mb-1.5">{card.sub}</span>
            </div>
            <div className={`mt-4 flex items-center gap-2 ${card.color} text-[11px] font-bold uppercase tracking-wider`}>
              <TrendingUp size={14} />
              <span>{card.trend}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0B0F19] border border-white/5 rounded-2xl overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-white/5">
          <h3 className="text-lg font-bold text-white tracking-tight">Recent Invoices</h3>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all">
              <Filter size={16} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">Invoice #</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">Date</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">Due Date</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">Amount</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-slate-500">Status</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {INVOICES.map((invoice) => (
                <tr key={invoice.id} className="group hover:bg-white/[0.01] transition-colors cursor-pointer">
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{invoice.id}</span>
                  </td>
                  <td className="px-6 py-5 text-xs text-slate-400">{invoice.date}</td>
                  <td className="px-6 py-5 text-xs text-slate-400">{invoice.dueDate}</td>
                  <td className="px-6 py-5 text-sm font-bold text-white">${invoice.amount.toLocaleString()}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      invoice.status === 'paid' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      invoice.status === 'pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                      'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-slate-500 hover:text-white transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
};
