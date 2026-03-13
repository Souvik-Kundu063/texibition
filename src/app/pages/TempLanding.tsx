import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Image, Heart } from 'lucide-react';
import { useState } from 'react';

export default function TempLanding() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white overflow-hidden relative">
      {/* CSS Animated Particles Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_40%_40%,rgba(120,119,198,0.2),transparent)] animate-pulse" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#00d4ff] rounded-full animate-ping" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#a855f7] rounded-full animate-ping [animation-delay:1s]" />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#00ffff] rounded-full animate-ping [animation-delay:2s]" />
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#00d4ff] rounded-full animate-ping [animation-delay:3s]" />
        </div>
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/95 via-[#0a0a0f]/50 to-[#0a0a0f]/95" />

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20 lg:py-32 min-h-screen flex flex-col items-center justify-center text-center">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <img
            src="/images/texibitionlogo.png"
            alt="TEXIBITION"
            className="h-24 sm:h-32 lg:h-40 w-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Orbitron'] font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight bg-gradient-to-r from-[#00d4ff] via-[#00ffff] to-[#a855f7] bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-12 tracking-tight"
        >
          WE ARE COOKING
          <br />
          <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">SOMETHING CRAZY</span>
          <br />
          FOR NEXT YEAR
        </motion.h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-lg sm:text-xl lg:text-2xl font-['Rajdhani'] text-white/80 leading-relaxed px-4"
        >
          <p>TEXIBITION 2K26 MAY BE OVER,</p>
          <p className="text-[#00d4ff] font-semibold mt-2">BUT THE ENERGY, IDEAS AND CRAZY MOMENTS ARE STILL ALIVE.</p>
          <br />
          <p>OUR TEAM IS ALREADY WORKING BEHIND THE SCENES</p>
          <p>TO MAKE NEXT YEAR EVEN BIGGER, LOUDER AND MORE UNFORGETTABLE.</p>
          <br />
          <p className="font-semibold text-[#a855f7]">STAY TUNED. SOMETHING MASSIVE IS COMING.</p>
        </motion.div>

        {/* Motivational Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="font-['Orbitron'] font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00ffff] mb-4 flex flex-col items-center gap-2">
            TILL THEN —
            <div className="text-sm sm:text-base text-white/60 font-['Rajdhani'] tracking-wider uppercase">KEEP LEARNING. KEEP BUILDING. KEEP INNOVATING.</div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-center mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="group relative">
            <motion.button
              onClick={() => setGalleryOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#00d4ff] to-[#00ffff] text-[#0a0a0f] font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-none skew-x-[-12deg] text-lg sm:text-xl lg:text-2xl shadow-2xl hover:shadow-[#00d4ff]/50 transition-all duration-300 font-['Space_Grotesk']"
            >
              <div className="skew-x-[12deg] flex items-center gap-3">
                EXPLORE GALLERIES
                <ArrowRight className="group-hover:translate-x-2 transition-transform size-5 sm:size-6" />
              </div>
            </motion.button>
            
            {galleryOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-4 w-80 sm:w-96 bg-[#0a0a0f]/95 backdrop-blur-xl border border-[#00d4ff]/40 rounded-2xl p-6 shadow-2xl"
                style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-['Orbitron'] font-bold text-[#00d4ff] mb-2">Texibition 2K26 Galleries</h3>
                  <p className="text-white/70 font-['Rajdhani'] text-sm">Choose your day:</p>
                </div>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://drive.google.com/drive/folders/1STSvacsG12Bk9ZdbrtXiJZbhv6FDzm73?usp=sharing', '_blank')}
                    className="w-full flex items-center justify-center gap-3 h-14 bg-gradient-to-r from-[#00d4ff]/20 to-[#00ffff]/20 border-2 border-[#00d4ff]/50 hover:from-[#00d4ff]/40 hover:border-[#00d4ff] text-[#00d4ff] font-bold rounded-xl transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#00d4ff]/30 font-['Space_Grotesk']"
                  >
                    <CalendarDays className="h-5 w-5" />
                    DAY 1 GALLERY
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://drive.google.com/drive/folders/1R901GFJstceL-41tc2F_iOP-W0FHWQS9?usp=sharing', '_blank')}
                    className="w-full flex items-center justify-center gap-3 h-14 bg-gradient-to-r from-[#a855f7]/20 to-[#ec4899]/20 border-2 border-[#a855f7]/50 hover:from-[#a855f7]/40 hover:border-[#a855f7] text-[#a855f7] font-bold rounded-xl transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#a855f7]/30 font-['Space_Grotesk']"
                  >
                    <Image className="h-5 w-5" />
                    DAY 2 GALLERY
                  </motion.button>
                  <motion.button
                    onClick={() => setGalleryOpen(false)}
                    className="w-full h-12 text-white/70 hover:text-white font-['Rajdhani'] text-sm transition-colors mt-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* In Numbers Section - Removed per request */}
        {/* ... */}

        {/* Optional Countdown - Temporarily disabled */}
        {/* <CountdownTimer /> */}

        {/* Footer Message */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="max-w-2xl mx-auto px-4 text-lg sm:text-xl lg:text-2xl font-['Rajdhani'] text-white/70 leading-relaxed"
        >
          <p className="mb-4">PROBLEMS, RESULTS AND COMPETITIONS MAY BE FORGOTTEN,</p>
          <p className="mb-4 font-semibold text-[#00d4ff]">BUT EVERYONE WILL REMEMBER ONE THING —</p>
          <div className="bg-gradient-to-r from-[#a855f7]/30 to-[#ec4899]/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#a855f7]/30">
            <p className="font-bold text-[#a855f7] mb-2">IT WAS A TEAM.</p>
            <p className="font-bold text-[#a855f7] mb-2">IT WAS A MOVEMENT.</p>
            <p className="font-bold text-[#a855f7]">IT WAS TEXIBITION.</p>
          </div>
          <p className="mt-8 text-sm sm:text-base text-white/50 font-['Orbitron'] tracking-wider uppercase">SEE YOU NEXT YEAR ✨</p>
        </motion.footer>
      </div>
    </div>
  );
}
