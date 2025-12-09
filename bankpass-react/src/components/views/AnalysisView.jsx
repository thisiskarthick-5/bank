import { useState, useEffect } from 'react';

export default function AnalysisView({ next }) {
  const [loading, setLoading] = useState(true);
  const [statusText, setStatusText] = useState('Comparing Name Entities...');

  useEffect(() => {
    const messages = [
      "Extracting text from ID Proof...",
      "Comparing fuzzy logic strings...",
      "Checking bank fraud database...",
      "Validating holographic markers...",
      "Finalizing score..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setStatusText(messages[i]);
        i++;
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="view-section">
        <div className="glass-card p-12 text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>
            <i className="fa-solid fa-robot absolute inset-0 flex items-center justify-center text-2xl text-cyan-400"></i>
          </div>
          <h3 className="text-2xl font-bold text-white">Analyzing Documents...</h3>
          <p className="text-slate-400 mt-2">{statusText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="view-section">
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4">
          <h2 className="text-3xl font-bold text-white">Risk Assessment</h2>
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full border border-emerald-500/50">
            <i className="fa-solid fa-shield-halved"></i>
            <span className="text-sm font-bold">Safe to Process</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800/40 p-4 rounded-xl border border-cyan-500/30 text-center">
            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Match Score</p>
            <p className="text-3xl font-bold text-cyan-400 mt-1">98%</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-emerald-500/30 text-center">
            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Fraud Check</p>
            <p className="text-3xl font-bold text-emerald-400 mt-1">Pass</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-emerald-500/30 text-center">
            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Blur Detect</p>
            <p className="text-3xl font-bold text-emerald-400 mt-1">Low</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Name Match</p>
                <p className="text-xs text-slate-400">Passbook vs Aadhaar</p>
              </div>
            </div>
            <i className="fa-solid fa-circle-check text-emerald-400 text-xl"></i>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                <i className="fa-solid fa-barcode"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Account Valid</p>
                <p className="text-xs text-slate-400">Format & Checksum</p>
              </div>
            </div>
            <i className="fa-solid fa-circle-check text-emerald-400 text-xl"></i>
          </div>
        </div>

        <button 
          onClick={next}
          className="w-full btn-primary text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/30"
        >
          Submit for Final Approval
        </button>
      </div>
    </div>
  );
}
