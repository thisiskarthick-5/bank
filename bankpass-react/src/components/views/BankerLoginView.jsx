import { useState } from 'react';

export default function BankerLoginView({ next, goHome }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      next();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card max-w-md w-full p-10 pb-16 text-center animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)] relative">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
          <i className="fa-solid fa-building-columns text-3xl text-emerald-400"></i>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2">Banker Login</h2>
        <p className="text-slate-400 mb-8">Enter your credentials to continue</p>

        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border outline-none input-float"
              placeholder="banker@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border outline-none input-float"
              placeholder="Enter password"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all mt-6"
          >
            Login
          </button>
        </div>

        <button
          onClick={goHome}
          className="absolute bottom-6 right-6 text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2 transition-colors"
        >
          <span>Go to Home</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
