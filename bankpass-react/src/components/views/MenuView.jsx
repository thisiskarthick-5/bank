import { useState } from 'react';

export default function MenuView({ next, setSelectedServices }) {
  const [selected, setSelected] = useState([]);

  const menuOptions = [
    { id: 'phone', title: 'Update Phone Number', icon: 'fa-phone', gradient: 'from-cyan-500 to-blue-600', placeholder: '+91 98765 43210' },
    { id: 'address', title: 'Update Address', icon: 'fa-location-dot', gradient: 'from-blue-500 to-purple-600', placeholder: 'Enter new address' },
    { id: 'email', title: 'Update Email', icon: 'fa-envelope', gradient: 'from-emerald-500 to-teal-600', placeholder: 'email@example.com' }
  ];

  const handleSelect = (id) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      setSelectedServices(menuOptions.filter(opt => selected.includes(opt.id)));
      next();
    }
  };

  return (
    <div className="view-section">
      <div className="glass-card p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-white">Select Service</h2>
        <p className="text-slate-400 text-sm mb-6">Choose what you'd like to update</p>
        
        <div className="space-y-3 mb-6">
          {menuOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group ${
                selected.includes(option.id)
                  ? 'bg-slate-800/60 border-cyan-500/60 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-lg ${
                  selected.includes(option.id) ? 'scale-110' : 'group-hover:scale-105'
                } transition-transform`}>
                  <i className={`fa-solid ${option.icon} text-white text-lg`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-base">{option.title}</h3>
                </div>
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  selected.includes(option.id)
                    ? 'border-cyan-400 bg-cyan-400'
                    : 'border-slate-600'
                }`}>
                  {selected.includes(option.id) && (
                    <i className="fa-solid fa-check text-slate-900 text-xs"></i>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={selected.length === 0}
          className="w-full btn-primary text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-cyan-500/30 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue ({selected.length} selected)
        </button>
      </div>
    </div>
  );
}
