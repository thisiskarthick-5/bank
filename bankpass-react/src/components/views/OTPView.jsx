import { useState } from 'react';

export default function OTPView({ next, showToast }) {
  const [phone, setPhone] = useState('');
  const [awaitingOtp, setAwaitingOtp] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleSendOtp = () => {
    if (phone.length < 10) {
      showToast("Invalid Phone Number", "error");
      return;
    }
    setAwaitingOtp(true);
    showToast("OTP Sent: 1234", "info");
  };

  const handleVerifyOtp = () => {
    const otpValue = otp.join('');
    if (otpValue === '1234') {
      next();
    } else {
      showToast("Incorrect OTP", "error");
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="view-section">
      <div className="glass-card p-8 md:p-12 text-center max-w-lg mx-auto mt-10">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl border border-cyan-500/30">
          <i className="fa-solid fa-user-shield"></i>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-white">Verify Your Identity</h2>
        <p className="text-slate-400 mb-8">Securely login to update your passbook.</p>
        
        <div className="text-left space-y-4">
          {!awaitingOtp ? (
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
              <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border outline-none input-float" 
                placeholder="+91 98765 43210"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Enter OTP (Try: 1234)</label>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl border rounded-xl outline-none input-float"
                  />
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={awaitingOtp ? handleVerifyOtp : handleSendOtp}
            className="w-full btn-primary text-white font-semibold py-3 rounded-xl mt-4"
          >
            {awaitingOtp ? 'Verify & Continue' : 'Send OTP'}
          </button>
        </div>
      </div>
    </div>
  );
}
