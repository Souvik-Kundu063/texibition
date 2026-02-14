import { motion } from 'motion/react';
import { Mail, ArrowRight, Clock } from 'lucide-react';

export function Sponsors() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm">
            <span className="text-[#00ffff]">$</span> ls sponsors/
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            sponsors.json
          </h1>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 sm:mb-12 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Partners</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {/* Cozzon - Clothing Partner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <img 
                src="/sponsors/cozzon.png" 
                alt="Cozzon" 
                className="h-24 sm:h-32 lg:h-40 w-auto object-contain brightness-0 invert"
              />
              <span className="mt-4 text-lg sm:text-xl font-medium text-[#ff6b6b]">
                Clothing Partner
              </span>
            </motion.div>

            {/* GFG - Coding Competition Partner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <img 
                src="/sponsors/gfg.png" 
                alt="GeeksforGeeks" 
                className="h-24 sm:h-32 lg:h-40 w-auto object-contain"
              />
              <span className="mt-4 text-lg sm:text-xl font-medium text-[#00d4ff]">
                Coding Competition Partner
              </span>
            </motion.div>

            {/* GDG - Community & Technical Partner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <img 
                src="/sponsors/GDG.png" 
                alt="GDG" 
                className="h-24 sm:h-32 lg:h-40 w-auto object-contain"
              />
              <span className="mt-4 text-lg sm:text-xl font-medium text-[#4285f4]">
                Community & Technical Partner
              </span>
            </motion.div>

            {/* Prepverse - Career Development Partner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <img 
                src="/sponsors/Prepverse.png" 
                alt="Prepverse" 
                className="h-24 sm:h-32 lg:h-40 w-auto object-contain"
              />
              <span className="mt-4 text-lg sm:text-xl font-medium text-[#a855f7]">
                Career Development Partner
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <section className="py-6 sm:py-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-[#00d4ff]/30 to-[#a855f7]/30 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0f] m-[1px] rounded-[15px] z-0" />

            <div className="relative z-10 p-4 sm:p-6 md:p-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
                <span className="font-['Space_Grotesk'] text-[#00d4ff] text-xs tracking-widest uppercase">Sponsorship Status: Open</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 font-['Orbitron'] text-white">
                <span className="text-[#00d4ff]">{"<"}</span>
                WANT_TO_SPONSOR?
                <span className="text-[#00d4ff]">{">"}</span>
              </h2>

              <p className="text-sm sm:text-base text-white/70 mb-6 max-w-lg mx-auto font-['Rajdhani'] font-medium tracking-wide">
                Partner with us to reach 8000+ talented students and showcase your brand in the ultimate tech odyssey.
              </p>

              <a href="mailto:souvikkundu7718@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-[#00d4ff]/20 border border-[#00d4ff] rounded-none font-['Space_Grotesk'] font-bold text-[#00d4ff] hover:bg-[#00d4ff]/30 transition-all duration-300 group inline-flex items-center gap-2"
                >
                  <Mail className="size-4" />
                  <span>CONTACT_US</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>
            </div>

            {/* Decorative Corner Lines */}
            <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-[#00d4ff]/50 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-[#a855f7]/50 rounded-br-xl" />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

