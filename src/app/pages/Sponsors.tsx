import { motion } from 'motion/react';
import { Crown, Award, Star, Mail } from 'lucide-react';

const sponsors = {
  title: [
    { name: 'TechCorp', logo: 'TC', tier: 'Title Sponsor' },
  ],
  gold: [
    { name: 'CloudTech Solutions', logo: 'CS' },
    { name: 'DataSync Pro', logo: 'DP' },
    { name: 'InnovateLab', logo: 'IL' },
  ],
  silver: [
    { name: 'StartupHub', logo: 'SH' },
    { name: 'CodeNest', logo: 'CN' },
    { name: 'DevZone', logo: 'DZ' },
    { name: 'TechFlow', logo: 'TF' },
  ],
};

export function Sponsors() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-4">
            <span className="text-[#00ffff]">$</span> ls sponsors/
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            sponsors.json
          </h1>
          <div className="font-code text-white/60 text-lg max-w-2xl mx-auto">
            <span className="text-[#a855f7]">const</span> sponsors = <span className="text-[#00ffff]">[</span><br/>
            <span className="ml-4 text-white/80">'title', 'gold', 'silver'</span><br/>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="size-8 text-[#fbbf24]" />
            <h2 className="text-3xl font-bold">Title Sponsor</h2>
          </div>
          
          {sponsors.title.map((sponsor, index) => (
            <div key={index} className="max-w-md mx-auto">
              <div className="p-12 rounded-3xl bg-gradient-to-br from-[#fbbf24]/10 to-[#f59e0b]/10 border-2 border-[#fbbf24]/50 backdrop-blur-sm">
                <div className="size-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{sponsor.logo}</span>
                </div>
                <h3 className="text-3xl font-bold text-center">{sponsor.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="size-7 text-[#fbbf24]" />
            <h2 className="text-2xl font-bold">Gold Sponsors</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#fbbf24]/5 to-[#f59e0b]/5 border border-[#fbbf24]/30 backdrop-blur-sm"
              >
                <div className="size-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{sponsor.logo}</span>
                </div>
                <h3 className="text-xl font-bold text-center">{sponsor.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="size-6 text-[#9ca3af]" />
            <h2 className="text-2xl font-bold">Silver Sponsors</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#9ca3af]/5 to-[#6b7280]/5 border border-[#9ca3af]/30 backdrop-blur-sm"
              >
                <div className="size-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#9ca3af] to-[#6b7280] flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{sponsor.logo}</span>
                </div>
                <h3 className="text-sm font-bold text-center">{sponsor.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
          <p className="text-white/70 mb-8">
            Partner with us to reach 500+ talented students and showcase your brand
          </p>
          <a href="mailto:sponsors@techfest.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-xl font-semibold flex items-center gap-2 mx-auto hover:shadow-2xl hover:shadow-[#00d4ff]/50 transition-shadow"
            >
              <Mail className="size-5" />
              Contact Us
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
