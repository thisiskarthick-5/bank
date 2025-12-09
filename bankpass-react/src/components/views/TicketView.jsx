import { useEffect } from 'react';

export default function TicketView({ next, showToast }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      showToast("Supervisor approved request", "success");
      setTimeout(() => next(), 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [next, showToast]);

  return (
    <div className="view-section">
      <div className="glass-card p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl animate-pulse border border-yellow-500/30">
            <i className="fa-solid fa-hourglass-half"></i>
          </div>
          <h2 className="text-3xl font-bold text-white">Request Submitted</h2>
          <p className="text-slate-400">Request ID: <span className="font-mono text-cyan-400 font-bold">REQ-2023-8892</span></p>
        </div>

        <div className="relative pl-8 space-y-8">
          <div className="timeline-item completed relative">
            <div className="timeline-line"></div>
            <h4 className="text-sm font-bold text-white">Submission Received</h4>
            <p className="text-xs text-slate-400">Today, 10:42 AM</p>
          </div>
          <div className="timeline-item completed relative">
            <div className="timeline-line"></div>
            <h4 className="text-sm font-bold text-white">AI Verification Passed</h4>
            <p className="text-xs text-slate-400">Today, 10:43 AM</p>
          </div>
          <div className="timeline-item current relative">
            <div className="timeline-line"></div>
            <h4 className="text-sm font-bold text-cyan-400">Supervisor Review</h4>
            <p className="text-xs text-slate-400">In Progress...</p>
          </div>
          <div className="timeline-item relative opacity-50">
            <h4 className="text-sm font-bold text-white">Final Approval</h4>
            <p className="text-xs text-slate-400">Estimated: 2 hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
