import { useState } from 'react';

export default function UpdateDetailsView({ next, showToast, selectedServices }) {
  const [values, setValues] = useState({});

  const handleChange = (id, value) => {
    setValues(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const allFilled = selectedServices.every(service => values[service.id]?.trim());
    if (allFilled) {
      showToast("Details Updated Successfully", "success");
      next();
    } else {
      showToast("Please fill all fields", "error");
    }
  };

  return (
    <div className="view-section">
      <div className="glass-card p-8 md:p-12 max-w-lg mx-auto">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl border border-cyan-500/30">
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-white text-center">Enter New Details</h2>
        <p className="text-slate-400 mb-8 text-center">Provide your updated information</p>
        
        <div className="space-y-4">
          {selectedServices.map((service) => (
            <div key={service.id}>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                <i className={`fa-solid ${service.icon} mr-2 text-cyan-400`}></i>
                {service.title}
              </label>
              <input 
                type="text" 
                value={values[service.id] || ''}
                onChange={(e) => handleChange(service.id, e.target.value)}
                className="w-full px-4 py-3 rounded-xl border outline-none input-float" 
                placeholder={service.placeholder}
              />
            </div>
          ))}

          <button 
            onClick={handleSubmit}
            className="w-full btn-primary text-white font-semibold py-3 rounded-xl mt-4"
          >
            Submit & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
