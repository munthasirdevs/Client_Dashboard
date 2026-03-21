import React from 'react';
import { FileText, Clock, CheckCircle2, Filter, Plus, MoreHorizontal, TrendingUp } from 'lucide-react';
import { INVOICES } from '../constants';
import { motion } from 'motion/react';

export const Billing: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <header>
        <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Billing Overview</h2>
        <p className="text-on-surface-variant font-medium opacity-80">Track all invoices, payments, and due dates</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Total Invoices', value: '12', sub: 'Issued', trend: '+2 since last month', icon: FileText, color: 'text-primary-container' },
          { label: 'Pending Amount', value: '$1,240.00', sub: 'Due in 3 days', trend: 'Next payment Oct 27', icon: Clock, color: 'text-tertiary' },
          { label: 'Paid This Month', value: '$4,950.00', sub: 'All accounts current', trend: '100% on time', icon: CheckCircle2, color: 'text-primary-container' },
        ].map((card, i) => (
          <div key={i} className="group relative overflow-hidden p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg shadow-black/20 border border-white/5">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <card.icon size={60} />
            </div>
            <p className={`text-[11px] uppercase tracking-[0.2em] font-bold ${card.color} mb-4`}>{card.label}</p>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-extrabold font-headline text-on-surface">{card.value}</span>
              <span className="text-sm font-medium text-on-surface-variant mb-2">{card.sub}</span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[12px] text-on-surface-variant">
              <TrendingUp size={14} className={card.color} />
              <span>{card.trend}</span>
            </div>
            <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${card.color.replace('text', 'bg')} group-hover:w-full transition-all duration-500`}></div>
          </div>
        ))}
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold font-headline text-on-surface">Recent Invoices</h3>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-highest border border-outline-variant/15 text-sm font-medium hover:bg-surface-container-highest/80 transition-all">
              <Filter size={18} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary-container text-on-primary-fixed text-sm font-bold shadow-lg shadow-primary-container/20 hover:scale-105 transition-transform active:scale-95">
              <Plus size={18} />
              Create Invoice
            </button>
          </div>
        </div>
        <div className="bg-surface-container rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant opacity-70">Invoice #</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant opacity-70">Date</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant opacity-70">Due Date</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant opacity-70">Amount</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant opacity-70">Status</th>
                  <th className="px-8 py-5 text-[11px] uppercase tracking-widest font-bold text-on-surface-variant opacity-70">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {INVOICES.map((invoice) => (
                  <tr key={invoice.id} className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <td className="px-8 py-6">
                      <span className="font-headline font-bold text-on-surface group-hover:text-primary-container transition-colors">{invoice.id}</span>
                    </td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant">{invoice.date}</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant">{invoice.dueDate}</td>
                    <td className="px-8 py-6 font-semibold text-on-surface">${invoice.amount.toLocaleString()}</td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ring-1 ${
                        invoice.status === 'paid' ? 'bg-green-500/10 text-green-400 ring-green-500/20' :
                        invoice.status === 'pending' ? 'bg-tertiary/10 text-tertiary ring-tertiary/20' :
                        'bg-red-500/10 text-red-400 ring-red-500/20'
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
