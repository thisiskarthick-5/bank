import { useState } from 'react';

export default function IDProofView({ next, showToast }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      showToast("ID Uploaded", "success");
    }
  };

  return (
    <div className="view-section">
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-1 text-white">Verify Identity</h2>
        <p className="text-slate-400 text-sm mb-6">Upload Aadhaar or PAN card to match with passbook details.</p>

        <div className="flex gap-4 mb-4">
          <button className="flex-1 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-semibold">
            Aadhaar Card
          </button>
          <button className="flex-1 py-2 rounded-lg border border-slate-600 text-slate-400 text-sm font-semibold hover:bg-slate-800/50">
            PAN Card
          </button>
        </div>

        {!preview ? (
          <div 
            onClick={() => document.getElementById('input-id').click()}
            className="drop-zone h-48 rounded-2xl flex flex-col items-center justify-center cursor-pointer text-slate-400"
          >
            <i className="fa-solid fa-id-card text-3xl mb-3 text-cyan-400"></i>
            <p className="font-semibold text-white">Upload ID Proof</p>
            <input 
              type="file" 
              id="input-id" 
              className="hidden" 
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="mt-4 relative rounded-xl overflow-hidden border border-cyan-500/30 p-3 bg-slate-800/40">
            <div className="flex items-center gap-3">
              <img src={preview} className="w-16 h-10 object-cover rounded border border-cyan-500/30" alt="ID" />
              <div className="flex-1">
                <p className="text-sm font-bold text-white">aadhaar_front.jpg</p>
                <p className="text-xs text-emerald-400">
                  <i className="fa-solid fa-check-circle"></i> Ready for Analysis
                </p>
              </div>
              <button className="text-red-400 hover:bg-red-500/20 p-2 rounded-full transition-colors">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        )}

        <button 
          onClick={next}
          disabled={!file}
          className="w-full mt-6 btn-primary text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Run AI Verification</span>
        </button>
      </div>
    </div>
  );
}
