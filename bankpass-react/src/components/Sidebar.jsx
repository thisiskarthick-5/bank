const steps = [
  { id: 1, label: "Login", icon: "fa-right-to-bracket" },
  { id: 2, label: "Wallet", icon: "fa-wallet" },
  { id: 3, label: "Menu", icon: "fa-list" },
  { id: 4, label: "Passbook", icon: "fa-book" },
  { id: 5, label: "Review", icon: "fa-magnifying-glass" },
  { id: 6, label: "Identity", icon: "fa-id-card" },
  { id: 7, label: "Analysis", icon: "fa-robot" },
  { id: 8, label: "Status", icon: "fa-list-check" },
  { id: 9, label: "Complete", icon: "fa-check-double" }
];

export default function Sidebar({ currentStep, reqId }) {
  const percentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <aside className="hidden md:flex flex-row items-center justify-between glass-card p-6 w-full">
      <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
        <i className="fa-solid fa-layer-group text-2xl text-cyan-400"></i>
        <h1 className="font-bold text-xl tracking-tight">BankPass+</h1>
      </div>
      
      <nav className="relative flex-1 mx-8">
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-slate-700/50"></div>
        <div className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 step-line" style={{ width: `${percentage}%` }}></div>

        <ul className="flex justify-between relative z-10">
          {steps.map((s, idx) => {
            const stepNum = idx + 1;
            const isActive = stepNum === currentStep;
            const isCompleted = stepNum < currentStep;
            
            let iconClass = "bg-slate-800/50 text-slate-500 border border-slate-700/50";
            if (isActive) iconClass = "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 scale-110 border-0";
            if (isCompleted) iconClass = "bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0";

            return (
              <li key={s.id} className="flex flex-col items-center gap-2 group cursor-default">
                <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${iconClass}`}>
                  <i className={`fa-solid ${isCompleted ? 'fa-check' : s.icon} text-sm`}></i>
                </div>
                <div className={`flex flex-col items-center transition-all duration-300 ${isActive || isCompleted ? 'opacity-100' : 'opacity-40'}`}>
                  <span className="text-xs font-semibold text-white">{s.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="text-xs text-slate-400 text-right">
        <p>ID: <span className="font-mono text-cyan-400">{reqId}</span></p>
      </div>
    </aside>
  );
}
