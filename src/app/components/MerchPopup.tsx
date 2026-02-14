
import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, Gift, Github } from 'lucide-react';

// Sponsor product page URL
const SPONSOR_PRODUCT_URL = 'https://cozzon.in/shop/product/texibition-2k26-official-tee';

// Constants for popup control
const MAX_TRIGGERS = 5; // Total triggers capped at 3
const TIME_GAP_MS = 40000; // 30 seconds between shows
const CLOSE_COOLDOWN_MS = 40000; // 30 seconds cooldown after close to prevent immediate re-trigger

interface MerchPopupProps {
  delay?: number; // Custom delay in milliseconds
  pageType?: 'home' | 'event-details';
}

// Get exit intent count from localStorage
const getExitIntentCount = (): number => {
  try {
    return parseInt(localStorage.getItem('merchPopupExitCount') || '0', 10);
  } catch {
    return 0;
  }
};

// Get last shown timestamp from localStorage
const getLastShownTime = (): number => {
  try {
    return parseInt(localStorage.getItem('merchPopupLastShown') || '0', 10);
  } catch {
    return 0;
  }
};

// Get last closed timestamp from localStorage
const getLastClosedTime = (): number => {
  try {
    return parseInt(localStorage.getItem('merchPopupLastClosed') || '0', 10);
  } catch {
    return 0;
  }
};

// Check if popup should be shown (for both exit intent and auto-show)
// Behavior change: Removed unlimited popup on home/event-details; now capped at 3 total triggers with time gap and cooldown after close
const shouldShowPopup = (count: number, lastShown: number, lastClosed: number): boolean => {
  // Check if we've exceeded max total triggers
  if (count >= MAX_TRIGGERS) {
    return false;
  }

  const now = Date.now();
  // Check time gap since last shown
  const timeGapPassed = now - lastShown >= TIME_GAP_MS;
  // Check cooldown after close to prevent immediate re-trigger
  const cooldownPassed = now - lastClosed >= CLOSE_COOLDOWN_MS;

  return timeGapPassed && cooldownPassed;
};

// Animated Background Particles
function ParticleBackground() {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#2563eb]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
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

export function MerchPopup({ delay = 5000, pageType = 'home' }: MerchPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [exitIntentRemaining, setExitIntentRemaining] = useState(MAX_TRIGGERS);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Merchandise images for slideshow
  const merchImages = [
    '/images/tshirt.jpg',
    '/images/tshirt.jpg',
    '/images/tshirt.jpg',
  ];
  
  // Use refs to track state across renders
  const hasShownRef = useRef(false);
  const hasUpdatedRef = useRef(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Record close time to prevent immediate re-trigger
    localStorage.setItem('merchPopupLastClosed', Date.now().toString());
  }, []);

  const handleRedirect = useCallback(() => {
    window.location.href = SPONSOR_PRODUCT_URL;
  }, []);

  // Update localStorage when popup is shown
  const updateStorageOnShow = useCallback(() => {
    if (hasUpdatedRef.current) return;
    hasUpdatedRef.current = true;

    const newCount = getExitIntentCount() + 1;
    localStorage.setItem('merchPopupExitCount', newCount.toString());
    localStorage.setItem('merchPopupLastShown', Date.now().toString());

    setExitIntentRemaining(Math.max(0, MAX_TRIGGERS - newCount));
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

  // Exit intent detection - capped at 3 total triggers with time gap and cooldown
  // Behavior change: Maintain exit intent but ensure it respects total trigger limit and cooldown
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible && !hasShownRef.current) {
        const count = getExitIntentCount();
        const lastShown = getLastShownTime();
        const lastClosed = getLastClosedTime();

        if (shouldShowPopup(count, lastShown, lastClosed)) {
          hasShownRef.current = true;
          setIsVisible(true);
          updateStorageOnShow();
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isVisible, updateStorageOnShow]);

  // Show popup after delay (page navigation) - now capped at 3 total triggers with time gap and cooldown
  // Behavior change: Removed unlimited behavior on home/event-details; increased default delay to 5 seconds
  useEffect(() => {
    if (hasShownRef.current) return;

    const count = getExitIntentCount();
    const lastShown = getLastShownTime();
    const lastClosed = getLastClosedTime();

    if (!shouldShowPopup(count, lastShown, lastClosed)) {
      setExitIntentRemaining(Math.max(0, MAX_TRIGGERS - count));
      return;
    }

    const timer = setTimeout(() => {
      if (!hasShownRef.current) {
        hasShownRef.current = true;
        setIsVisible(true);
        updateStorageOnShow();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, updateStorageOnShow]);

  // Initialize remaining count display
  useEffect(() => {
    const count = getExitIntentCount();
    setExitIntentRemaining(Math.max(0, MAX_TRIGGERS - count));
  }, []);

  // Auto-rotate slideshow every 3 seconds
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % merchImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible, merchImages.length]);

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
              <div className="relative overflow-hidden bg-[#0a0a0f]/95 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#2563eb]/20">
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-[#2563eb]/5 -z-10" />
                
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
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#2563eb]/20 border border-[#f97316]/40 rounded-full">
                      <Gift className="size-2.5 sm:size-3 text-[#f97316]" />
                      <span className="text-[10px] sm:text-xs font-bold text-[#f97316] uppercase tracking-wider">Limited Edition</span>
                    </div>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm sm:text-lg font-bold text-white mb-1 text-center font-['Orbitron'] leading-tight"
                  >
                    <span className="text-[#2563eb]">
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
                    <span className="text-[#f97316] font-semibold">CoZzon × Texibition</span>
                    <span className="mx-1.5">•</span>
                    <span className="text-white/60">Official Clothing Partner</span>
                  </motion.p>

                  {/* T-Shirt Image Slideshow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative mb-2 sm:mb-3"
                  >
                    <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden group">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSlide}
                          src={merchImages[currentSlide]}
                          alt={`Texibition Merchandise ${currentSlide + 1}`}
                          className="w-full h-full object-contain p-2 sm:p-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>

                      {/* Slideshow indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {merchImages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              index === currentSlide ? 'bg-[#2563eb]' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Animated overlay */}
                      <motion.div
                        className="absolute inset-0 bg-[#2563eb]/5"
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
                    className="relative mb-2 p-2 sm:p-2.5 bg-[#2563eb]/10 border border-[#f97316]/30 rounded-lg sm:rounded-xl overflow-hidden"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[#2563eb]/20 opacity-50" />
                    
                    <div className="relative flex items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 p-1.5 sm:p-2 bg-[#f97316]/20 rounded-lg">
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
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-[#2563eb] rounded-lg sm:rounded-xl font-bold text-white shadow-lg shadow-[#2563eb]/30 overflow-hidden"
                    >

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
                  className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-[#2563eb]"
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

