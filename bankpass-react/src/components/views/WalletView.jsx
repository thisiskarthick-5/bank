import { useState } from 'react';

export default function WalletView({ next, showToast, setWalletAddress }) {
  const [connecting, setConnecting] = useState(false);

  const connectMetaMask = async () => {
    setConnecting(true);
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);
        showToast("Wallet Connected", "success");
        setTimeout(() => next(), 1000);
      } else {
        // Mock connection for demo
        const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
        setWalletAddress(mockAddress);
        showToast("Wallet Connected (Demo)", "success");
        setTimeout(() => next(), 1000);
      }
    } catch (error) {
      showToast("Connection failed", "error");
      setConnecting(false);
    }
  };

  const connectWalletConnect = () => {
    setConnecting(true);
    // Mock WalletConnect
    const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
    setWalletAddress(mockAddress);
    showToast("Wallet Connected via WalletConnect", "success");
    setTimeout(() => next(), 1000);
  };

  return (
    <div className="view-section">
      <div className="glass-card p-8 md:p-12 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl border border-emerald-500/30">
          <i className="fa-solid fa-wallet"></i>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-white">Connect Wallet</h2>
        <p className="text-slate-400 mb-8">Connect your wallet to continue</p>
        
        <div className="space-y-3">
          <button 
            onClick={connectMetaMask}
            disabled={connecting}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-50 border border-orange-400/30"
          >
            <i className="fa-brands fa-ethereum text-2xl"></i>
            <span>MetaMask</span>
          </button>

          <button 
            onClick={connectWalletConnect}
            disabled={connecting}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-50 border border-blue-400/30"
          >
            <i className="fa-solid fa-link text-xl"></i>
            <span>WalletConnect</span>
          </button>
        </div>
      </div>
    </div>
  );
}
