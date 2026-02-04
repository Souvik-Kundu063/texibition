
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, Gift, Github } from 'lucide-react';

// Sponsor product page URL
const SPONSOR_PRODUCT_URL = 'https://cozzon.in/shop/product/cozzon-duo-snack-match-tee';

interface MerchPopupProps {
  delay?: number; // Custom delay in milliseconds
  pageType?: 'home' | 'event-details';
}

// Animated Background Particles
function ParticleBackground() {
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#a855f7] to-[#00d4ff]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export function MerchPopup({ delay = 3000, pageType = 'home' }: MerchPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleRedirect = useCallback(() => {
    window.location.href = SPONSOR_PRODUCT_URL;
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleClose]);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isVisible]);

  // Show popup after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md cursor-pointer"
          />

          {/* Popup Container */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none p-3">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="pointer-events-auto w-full max-w-xs sm:max-w-sm cursor-auto"
            >
              {/* Main Card with Glassmorphism */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f]/95 via-[#0d1117]/95 to-[#161b22]/95 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#a855f7]/20">
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 via-[#00d4ff]/5 to-transparent -z-10" />
                
                {/* Particle Background */}
                <ParticleBackground />

                {/* Content Container */}
                <div className="relative z-10 p-3 sm:p-4">
                  {/* Limited Edition Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex justify-center mb-2 sm:mb-3"
                  >
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#ff6b35]/20 to-[#f43f5e]/20 border border-[#ff6b35]/40 rounded-full">
                      <Gift className="size-2.5 sm:size-3 text-[#ff6b35]" />
                      <span className="text-[10px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">Limited Edition</span>
                    </div>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm sm:text-lg font-bold text-white mb-1 text-center font-['Orbitron'] leading-tight"
                  >
                    <span className="bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                      Limited Edition
                    </span>
                    <br />
                    <span className="text-white">Texibition 2K26 Merchandise</span>
                  </motion.h2>

                  {/* Sub-headline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-center text-white/50 text-[10px] sm:text-xs mb-2 sm:mb-3"
                  >
                    <span className="text-[#a855f7] font-semibold">CoZzon × Texibition</span>
                    <span className="mx-1.5">•</span>
                    <span className="text-white/60">Official Clothing Partner</span>
                  </motion.p>

                  {/* T-Shirt Image - Transparent bg, no border */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative mb-2 sm:mb-3"
                  >
                    <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden group">
                      {/* T-Shirt Image */}
                      <img
                        src="/images/tshirt.jpg"
                        alt="Official Texibition Merchandise"
                        className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Animated gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff]/5 via-[#a855f7]/5 to-[#ec4899]/5"
                        animate={{
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Early Buyer Bonus Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="relative mb-2 p-2 sm:p-2.5 bg-gradient-to-r from-[#a855f7]/10 via-[#00d4ff]/10 to-[#a855f7]/10 border border-[#a855f7]/30 rounded-lg sm:rounded-xl overflow-hidden"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/20 via-transparent to-[#00d4ff]/20 opacity-50" />
                    
                    <div className="relative flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 p-1.5 sm:p-2 bg-[#a855f7]/20 rounded-lg">
                        <Github className="size-3 sm:size-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-[10px] sm:text-sm">🎁 Early Buyer Bonus</p>
                        <p className="text-white/70 text-[10px] sm:text-xs mt-0.5">First 90 buyers get FREE GitHub stickers</p>
                        <p className="text-white/50 text-[10px] mt-0.5">Collect during the event from the campus GitHub desk</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Scarcity Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-2 mb-2 text-white/40 flex-wrap"
                  >
                    <span className="flex items-center gap-1 text-[10px]">⏳ Limited stock</span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1 text-[10px]">🎟 No restock</span>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="space-y-1.5 sm:space-y-2"
                  >
                    {/* Primary CTA */}
                    <motion.button
                      onClick={handleRedirect}
                      onMouseEnter={() => setIsHoveringCTA(true)}
                      onMouseLeave={() => setIsHoveringCTA(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#ec4899] rounded-lg sm:rounded-xl font-bold text-white shadow-lg shadow-[#a855f7]/30 overflow-hidden"
                    >
                      {/* Animated gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#00d4ff]"
                        animate={{
                          x: isHoveringCTA ? ['0%', '100%'] : ['-100%', '0%'],
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        style={{ opacity: 0.3 }}
                      />

                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                        <ShoppingBag className="size-3.5 sm:size-4" />
                        <span className="text-xs sm:text-sm">🛒 Buy Official Merch</span>
                        <ArrowRight className="size-3.5 sm:size-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>

                    {/* Helper Text */}
                    <p className="text-center text-white/30 text-[9px] sm:text-xs">Secure checkout on official partner website</p>

                    {/* Secondary CTA */}
                    <motion.button
                      onClick={handleClose}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-2 sm:py-2.5 px-3 sm:px-4 text-white/50 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      Maybe later
                    </motion.button>
                  </motion.div>
                </div>

                {/* Decorative bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// Export the sponsor URL for use in navigation and footer
export { SPONSOR_PRODUCT_URL };

