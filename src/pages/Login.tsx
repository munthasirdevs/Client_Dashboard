import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface LoginProps {
  onNavigate: (page: Page) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle auth here
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0B0F19]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#1e1b4b] opacity-100" />
        
        {/* Glowing Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,25,0.4)_100%)]" />
      </div>

      {/* Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="bg-[#111827] border border-white/5 p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 mb-6"
            >
              <div className="w-8 h-8 bg-indigo-500 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-gray-400 font-medium">Login to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@agency.com"
                  className="w-full bg-[#1F2937] border border-gray-700 text-white text-sm rounded-xl block pl-11 p-3.5 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-gray-300">Password</label>
                <button type="button" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot Password?
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#1F2937] border border-gray-700 text-white text-sm rounded-xl block pl-11 pr-11 p-3.5 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-gray-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center px-1">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 bg-[#1F2937] border-gray-700 rounded focus:ring-indigo-600 focus:ring-offset-0 focus:ring-offset-transparent"
              />
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-400">Remember me</label>
            </div>

            <motion.button
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full text-white bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl text-sm px-5 py-4 text-center transition-all shadow-[0_10px_20px_rgba(99,102,241,0.2)] hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight size={18} />
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 font-medium">
              Don't have an account?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="text-indigo-400 font-bold hover:text-indigo-300 hover:underline transition-all"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
