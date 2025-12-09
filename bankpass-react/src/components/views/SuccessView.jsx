export default function SuccessView({ ocrData, walletAddress }) {
  return (
    <div className="view-section">
      <div className="glass-card p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"></div>
        
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl border border-emerald-500/30 shadow-lg shadow-emerald-500/30">
          <i className="fa-solid fa-check"></i>
        </div>
        
        <h2 className="text-4xl font-bold mb-2 text-white">Approved!</h2>
        <p className="text-slate-400 mb-8">Your passbook has been updated successfully.</p>

        <div className="bg-slate-800/40 rounded-xl p-5 mb-8 text-left border border-cyan-500/30 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Account Holder</span>
            <span className="font-bold text-white">{ocrData.name}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Account Number</span>
            <span className="font-bold text-white">{ocrData.account}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Wallet Address</span>
            <span className="font-bold text-cyan-400 font-mono text-xs">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Update Date</span>
            <span className="font-bold text-white">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
        >
          <i className="fa-solid fa-download"></i> Download Report
        </button>
      </div>
    </div>
  );
}
