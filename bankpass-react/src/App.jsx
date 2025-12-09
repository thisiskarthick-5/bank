import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import LoginView from './components/views/LoginView';
import AdminLoginView from './components/views/AdminLoginView';
import AdminDashboardView from './components/views/AdminDashboardView';
import VerifierLoginView from './components/views/VerifierLoginView';
import BankerLoginView from './components/views/BankerLoginView';
import OTPView from './components/views/OTPView';
import WalletView from './components/views/WalletView';
import MenuView from './components/views/MenuView';
import UpdateDetailsView from './components/views/UpdateDetailsView';
import PassbookView from './components/views/PassbookView';
import OCRView from './components/views/OCRView';
import IDProofView from './components/views/IDProofView';
import AnalysisView from './components/views/AnalysisView';
import TicketView from './components/views/TicketView';
import SuccessView from './components/views/SuccessView';
import Toast from './components/Toast';


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAdminFlow, setIsAdminFlow] = useState('user');
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [ocrData, setOcrData] = useState({
    name: '',
    account: '',
    ifsc: '',
    address: ''
  });
  const [toasts, setToasts] = useState([]);
  const [reqId] = useState(`REQ-${Math.floor(1000 + Math.random() * 9000)}`);

  const showToast = (msg, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const next = () => setCurrentStep(prev => prev + 1);
  const prev = () => setCurrentStep(prev => prev - 1);
  const goHome = () => {
    setCurrentStep(1);
    setIsAdminFlow('user');
  };

  const adminViews = [
    <LoginView key="login" next={next} setIsAdminFlow={setIsAdminFlow} />,
    <AdminLoginView key="admin-login" next={next} goHome={goHome} />,
    <AdminDashboardView key="admin-dashboard" showToast={showToast} goHome={goHome} />
  ];

  const verifierViews = [
    <LoginView key="login" next={next} setIsAdminFlow={setIsAdminFlow} />,
    <VerifierLoginView key="verifier-login" next={next} goHome={goHome} />
  ];

  const bankerViews = [
    <LoginView key="login" next={next} setIsAdminFlow={setIsAdminFlow} />,
    <BankerLoginView key="banker-login" next={next} goHome={goHome} />
  ];

  const userViews = [
    <LoginView key="login" next={next} setIsAdminFlow={setIsAdminFlow} />,
    <OTPView key="otp" next={next} showToast={showToast} />,
    <WalletView key="wallet" next={next} showToast={showToast} setWalletAddress={setWalletAddress} />,
    <MenuView key="menu" next={next} setSelectedServices={setSelectedServices} />,
    <UpdateDetailsView key="update" next={next} showToast={showToast} selectedServices={selectedServices} />,
    <PassbookView key="passbook" next={next} showToast={showToast} setOcrData={setOcrData} />,
    <OCRView key="ocr" next={next} prev={prev} ocrData={ocrData} setOcrData={setOcrData} />,
    <IDProofView key="idproof" next={next} showToast={showToast} />,
    <AnalysisView key="analysis" next={next} />,
    <TicketView key="ticket" next={next} showToast={showToast} />,
    <SuccessView key="success" ocrData={ocrData} walletAddress={walletAddress} />
  ];

  let views;
  if (isAdminFlow === 'admin') {
    views = adminViews;
  } else if (isAdminFlow === 'verifier') {
    views = verifierViews;
  } else if (isAdminFlow === 'banker') {
    views = bankerViews;
  } else {
    views = userViews;
  }

  return (
    <>
      <div className="bg-mesh"></div>
      <div id="toast-container" className="fixed top-5 right-5 z-50 flex flex-col gap-3">
        {toasts.map(toast => <Toast key={toast.id} {...toast} />)}
      </div>
      
      {currentStep === 1 || isAdminFlow !== 'user' ? (
        views[currentStep - 1]
      ) : (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto p-4 md:p-8 gap-6">
          <Sidebar currentStep={currentStep - 1} reqId={reqId} />
          
          <main className="flex-1 w-full max-w-3xl mx-auto">
            <MobileHeader currentStep={currentStep - 1} />
            {views[currentStep - 1]}
          </main>
        </div>
      )}
    </>
  );
}

export default App;
