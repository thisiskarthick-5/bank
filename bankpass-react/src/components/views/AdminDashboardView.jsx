import { useState } from 'react';

export default function AdminDashboardView({ showToast, goHome }) {
  const [activeTab, setActiveTab] = useState('verifier');
  const [verifierEmail, setVerifierEmail] = useState('');
  const [verifierPassword, setVerifierPassword] = useState('');
  const [bankerEmail, setBankerEmail] = useState('');
  const [bankerPassword, setBankerPassword] = useState('');

  const handleAddVerifier = () => {
    if (verifierEmail && verifierPassword) {
      showToast("Verifier Added Successfully", "success");
      setVerifierEmail('');
      setVerifierPassword('');
    } else {
      showToast("Please fill all fields", "error");
    }
  };

  const handleAddBanker = () => {
    if (bankerEmail && bankerPassword) {
      showToast("Banker Added Successfully", "success");
      setBankerEmail('');
      setBankerPassword('');
    } else {
      showToast("Please fill all fields", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full p-8 pb-16 animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)] relative">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Admin Dashboard</h2>
        <p className="text-slate-400 mb-8 text-center">Manage verifiers and bankers</p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-slate-800/40 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('verifier')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'verifier'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-shield-halved mr-2"></i>
            Add Verifier
          </button>
          <button
            onClick={() => setActiveTab('banker')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'banker'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-building-columns mr-2"></i>
            Add Banker
          </button>
        </div>

        {/* Content */}
        {activeTab === 'verifier' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email ID</label>
              <input
                type="email"
                value={verifierEmail}
                onChange={(e) => setVerifierEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border outline-none input-float"
                placeholder="verifier@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
              <input
                type="password"
                value={verifierPassword}
                onChange={(e) => setVerifierPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border outline-none input-float"
                placeholder="Enter password"
              />
            </div>

            <button
              onClick={handleAddVerifier}
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all mt-4"
            >
              Add Verifier
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email ID</label>
              <input
                type="email"
                value={bankerEmail}
                onChange={(e) => setBankerEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border outline-none input-float"
                placeholder="banker@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
              <input
                type="password"
                value={bankerPassword}
                onChange={(e) => setBankerPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border outline-none input-float"
                placeholder="Enter password"
              />
            </div>

            <button
              onClick={handleAddBanker}
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all mt-4"
            >
              Add Banker
            </button>
          </div>
        )}

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
