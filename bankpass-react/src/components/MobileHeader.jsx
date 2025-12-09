export default function MobileHeader({ currentStep }) {
  return (
    <header className="md:hidden flex justify-between items-center mb-6 glass-card p-4">
      <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
        <i className="fa-solid fa-layer-group text-xl text-cyan-400"></i>
        <span className="font-bold text-lg">BankPass+</span>
      </div>
      <div className="text-xs px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-semibold">
        Step {currentStep}/9
      </div>
    </header>
  );
}
