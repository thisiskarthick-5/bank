export default function LoginView({ next, setIsAdminFlow }) {
  const roles = [
    { id: 'user', name: 'User', icon: 'fa-user', gradient: 'from-cyan-500 to-blue-600', desc: 'Access your account' },
    { id: 'verifier', name: 'Verifier', icon: 'fa-shield-halved', gradient: 'from-blue-500 to-purple-600', desc: 'Verify documents' },
    { id: 'banker', name: 'Banker', icon: 'fa-building-columns', gradient: 'from-emerald-500 to-teal-600', desc: 'Manage accounts' },
    { id: 'admin', name: 'Admin', icon: 'fa-crown', gradient: 'from-purple-500 to-pink-600', desc: 'System administration' }
  ];

  const handleRoleSelect = (roleId) => {
    if (roleId === 'user') {
      setIsAdminFlow('user');
      next();
    } else if (roleId === 'admin') {
      setIsAdminFlow('admin');
      next();
    } else if (roleId === 'verifier') {
      setIsAdminFlow('verifier');
      next();
    } else if (roleId === 'banker') {
      setIsAdminFlow('banker');
      next();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card max-w-5xl w-full grid md:grid-cols-2 gap-0 overflow-hidden animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)]">
        
        {/* Left Panel - Welcome */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-12 flex flex-col justify-center border-r border-slate-700/50">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30">
              <i className="fa-solid fa-layer-group text-3xl text-cyan-400"></i>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Welcome Back</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Select your role to access the BankPass+ platform and manage your banking operations securely.
            </p>
          </div>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                <i className="fa-solid fa-shield-check text-cyan-400 text-sm"></i>
              </div>
              <span className="text-sm">Secure Authentication</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                <i className="fa-solid fa-bolt text-emerald-400 text-sm"></i>
              </div>
              <span className="text-sm">Fast Processing</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/30">
                <i className="fa-solid fa-clock text-purple-400 text-sm"></i>
              </div>
              <span className="text-sm">24/7 Availability</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Role Selection */}
        <div className="p-12 flex flex-col justify-center bg-slate-900/40">
          <h2 className="text-2xl font-bold text-white mb-2">Login As</h2>
          <p className="text-slate-400 text-sm mb-8">Choose your role to continue</p>

          <div className="space-y-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className="w-full p-4 rounded-xl border bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                    <i className={`fa-solid ${role.icon} text-white text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-base">{role.name}</h3>
                    <p className="text-xs text-slate-400">{role.desc}</p>
                  </div>
                  <i className="fa-solid fa-arrow-right text-slate-600 group-hover:text-cyan-400 transition-colors"></i>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8">
            Need help? <a href="#" className="text-cyan-400 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
