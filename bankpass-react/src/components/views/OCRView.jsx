export default function OCRView({ next, prev, ocrData, setOcrData }) {
  const handleChange = (field, value) => {
    setOcrData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="view-section">
      <div className="glass-card p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Review Extracted Data</h2>
          <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-500/30">High Confidence</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account Name</label>
            <input 
              type="text" 
              value={ocrData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full p-3 rounded-xl font-medium outline-none input-float"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account Number</label>
            <input 
              type="text" 
              value={ocrData.account}
              onChange={(e) => handleChange('account', e.target.value)}
              className="w-full p-3 rounded-xl font-medium outline-none input-float"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">IFSC Code</label>
            <input 
              type="text" 
              value={ocrData.ifsc}
              onChange={(e) => handleChange('ifsc', e.target.value)}
              className="w-full p-3 rounded-xl font-medium outline-none input-float"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Address</label>
            <input 
              type="text" 
              value={ocrData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full p-3 rounded-xl font-medium outline-none input-float"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button 
            onClick={prev}
            className="flex-1 py-3 border border-slate-600 rounded-xl font-semibold text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 transition-all"
          >
            Retake
          </button>
          <button 
            onClick={next}
            className="flex-1 py-3 btn-primary text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/30"
          >
            Confirm Details
          </button>
        </div>
      </div>
    </div>
  );
}
