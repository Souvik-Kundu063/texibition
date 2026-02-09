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
          <div className="font-code text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            <span className="text-[#a855f7]">const</span> sponsors = <span className="text-[#00ffff]">[</span><br/>
            <span className="ml-2 sm:ml-4 text-white/80">'title', 'gold', 'silver'</span><br/>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 sm:mb-12 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Clock className="size-5 sm:size-8 text-[#fbbf24]" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Sponsors</h2>
          </div>
            <img src="" alt="DEVFOLIO LOGO" />
          <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto">
            <div className="p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm">
              <div className="size-20 sm:size-24 md:size-32 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-[#0a0a0f]/50 border border-[#00d4ff]/30 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-4xl font-bold text-[#00d4ff]">COMING SOON</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2">
                Sponsors Announcement
              </h3>
              <p className="text-white/60 text-center text-sm sm:text-base">
                Our amazing sponsors will be announced soon. Stay tuned!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <section className="py-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 md:p-1 rounded-3xl bg-gradient-to-br from-[#00d4ff]/30 to-[#a855f7]/30 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0f] m-[1px] rounded-[23px] z-0" />

            <div className="relative z-10 p-6 md:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-8">
                <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
                <span className="font-['Space_Grotesk'] text-[#00d4ff] text-xs tracking-widest uppercase">Sponsorship Status: Open</span>
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 font-['Orbitron'] text-white">
                <span className="text-[#00d4ff]">{"<"}</span>
                WANT_TO_SPONSOR?
                <span className="text-[#00d4ff]">{">"}</span>
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-['Rajdhani'] font-medium tracking-wide">
                Partner with us to reach 8000+ talented students and showcase your brand in the ultimate tech odyssey.
              </p>

              <a href="mailto:souvikkundu7718@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 md:px-10 py-3 md:py-4 bg-[#00d4ff]/20 border border-[#00d4ff] rounded-none md:skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#00d4ff] hover:bg-[#00d4ff]/30 transition-all duration-300 group inline-flex items-center gap-2 md:gap-3"
                >
                  <div className="skew-x-[10deg] flex items-center gap-2">
                    <Mail className="size-5" />
                    <span>CONTACT_US</span>
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </a>
            </div>

            {/* Decorative Corner Lines */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#00d4ff]/50 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#a855f7]/50 rounded-br-3xl" />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

