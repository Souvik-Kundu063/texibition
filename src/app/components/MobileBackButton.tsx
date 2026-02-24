import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

export function MobileBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  // Don't show on home page or if not mobile
  if (!isMobile || location.pathname === '/') {
    return null;
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.button
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleGoBack}
      className="lg:hidden fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2.5 text-white bg-[#0a0a0f]/80 backdrop-blur-md rounded-full border border-white/20 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 transition-all"
    >
      <ChevronLeft className="size-5" />
      <span className="text-sm font-medium">Back</span>
    </motion.button>
  );
}

