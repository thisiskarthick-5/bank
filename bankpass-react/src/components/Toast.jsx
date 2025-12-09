export default function Toast({ msg, type }) {
  const colors = type === 'success' 
    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' 
    : type === 'error' 
    ? 'bg-red-500/20 border-red-500/50 text-red-300' 
    : 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300';
  
  return (
    <div className={`${colors} backdrop-blur-xl border px-6 py-3 rounded-xl shadow-2xl transform transition-all duration-300 flex items-center gap-3 min-w-[300px] animate-[slideIn_0.3s_ease]`}>
      <i className={`fa-solid fa-${type === 'success' ? 'circle-check' : 'circle-info'}`}></i>
      <span className="font-medium">{msg}</span>
    </div>
  );
}
