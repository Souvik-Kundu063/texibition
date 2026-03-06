import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { MapView } from '../components/MapView';

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#a855f7]/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient orb
function AnimatedOrb({ className }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-30 ${className}`}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-64 h-64 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full"
      />
    </div>
  );
}

// Sponsor card component - with box (for Coding Competition Partner)
function SponsorCardWithBox({ 
  name, 
  logo, 
  category, 
  link,
  invertLogo = false,
  delay = 0
}: { 
  name: string; 
  logo: string;
  category: string;
  link: string;
  invertLogo?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-6 sm:p-8 rounded-xl transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(0,255,255,0.2)',
        boxShadow: '0 0 20px rgba(0,212,255,0.1)'
      }}
    >
      {/* Hover Glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(168,85,247,0.1) 100%)',
          boxShadow: '0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(168,85,247,0.2)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 mb-4 sm:mb-6 rounded text-xs font-['Space_Grotesk'] font-semibold uppercase tracking-wider"
          style={{
            background: 'linear-gradient(90deg, rgba(0,212,255,0.2) 0%, rgba(168,85,247,0.2) 100%)',
            color: '#00d4ff',
            border: '1px solid rgba(0,212,255,0.3)'
          }}
        >
          {category}
        </div>

        {/* Logo */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={logo} 
              alt={name}
              loading="lazy"
              decoding="async"
              className={`h-20 sm:h-24 lg:h-28 xl:h-32 w-auto object-contain ${invertLogo ? 'brightness-0 invert' : ''} transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]`}
            />
          </motion.div>
        </a>

        {/* Sponsor Name */}
        <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold font-['Orbitron'] text-white group-hover:text-[#00d4ff] transition-colors duration-300">
          {name}
        </h3>
      </div>
    </motion.div>
  );
}

// Sponsor card component - without box (minimal)
function SponsorCardMinimal({ 
  name, 
  logo, 
  category, 
  link,
  invertLogo = false,
  delay = 0,
  isGitHub = false,
  isText = false
}: { 
  name: string; 
  logo: string;
  category: string;
  link: string;
  invertLogo?: boolean;
  delay?: number;
  isGitHub?: boolean;
  isText?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer"
    >
      {/* Logo only - no box */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {isGitHub ? (
            // GitHub SVG Logo
            <svg 
              className={`h-16 sm:h-20 lg:h-24 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]`}
              viewBox="0 0 24 24" 
              fill="white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          ) : isText ? (
            // Text-based logo for .XYZ and Chess.com
            <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Orbitron'] text-[#00d4ff] group-hover:text-white transition-colors">
                {name}
              </span>
            </div>
          ) : (
            <img 
              src={logo} 
              alt={name}
              loading="lazy"
              decoding="async"
              className={`h-16 sm:h-20 lg:h-24 w-auto object-contain ${invertLogo ? 'brightness-0 invert' : ''} transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]`}
            />
          )}
        </motion.div>
      </a>

      {/* Minimal text - name and category */}
      <h3 className="mt-3 text-base sm:text-lg font-bold font-['Orbitron'] text-white group-hover:text-[#00d4ff] transition-colors duration-300">
        {name}
      </h3>
      <p className="text-xs sm:text-sm text-white/50 font-['Space_Grotesk'] uppercase tracking-wider mt-1">
        {category}
      </p>
    </motion.div>
  );
}

// Section Header Component
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-12 lg:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Orbitron'] text-white uppercase tracking-wider">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-sm sm:text-base mt-2 font-['Rajdhani']">
          {subtitle}
        </p>
      )}
      <div className="w-16 sm:w-20 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
    </motion.div>
  );
}

// Sponsors data - Row 1 (3 sponsors)
const sponsorsRow1 = [
  {
    name: 'Cozzon',
    logo: '/sponsors/cozzon.png',
    category: 'Clothing Partner',
    link: 'https://cozzon.in/',
    invertLogo: true,
    hasBox: false,
    isGitHub: false
  },
  {
    name: 'GeeksforGeeks',
    logo: '/sponsors/gfg.png',
    category: 'Coding Competition Partner',
    link: 'https://www.geeksforgeeks.org/',
    invertLogo: false,
    hasBox: false,
    isGitHub: false
  },
  {
    name: 'GDG',
    logo: '/sponsors/GDG.png',
    category: 'Community & Technical Partner',
    link: 'https://gdg.community/',
    invertLogo: false,
    hasBox: false,
    isGitHub: false
  }
];

// Sponsors data - Row 2 (5 sponsors)
const sponsorsRow2 = [
  {
    name: 'Prepverse',
    logo: '/sponsors/Prepverse.png',
    category: 'Career Development Partner',
    link: 'https://prepverse.com/',
    invertLogo: false,
    hasBox: false,
    isGitHub: false
  },
  {
    name: 'Devfolio',
    logo: '/sponsors/Devfolio.png',
    category: 'Hackathon Platform Partner',
    link: 'https://devfolio.co/',
    invertLogo: false,
    hasBox: false,
    isGitHub: false
  },
  {
    name: 'GitHub',
    logo: '/sponsors/GitHub.png',
    category: 'Community Partner',
    link: 'https://github.com/',
    invertLogo: false,
    hasBox: false,
    isGitHub: true
  },
  {
    name: '.XYZ',
    logo: '/sponsors/xyz-logo.png',
    category: 'Domain Partner',
    link: 'https://xyz.com/',
    invertLogo: false,
    hasBox: false,
    isGitHub: false,
    isText: false
  },
  {
    name: 'ClickNBit',
    logo: '/sponsors/clicknbit.jpg',
    category: 'Media Partner',
    link: 'https://play.google.com/store/apps/details?id=com.digontom.clicknbit',
    invertLogo: false,
    hasBox: false,
    isGitHub: false
  }
];

export function Sponsors() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0d1525] to-[#0a0f1c]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a855f7]/8 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />
      
      {/* Animated Orbs */}
      <AnimatedOrb className="top-1/4 left-1/4" />
      <AnimatedOrb className="bottom-1/4 right-1/4" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      <div className="container mx-auto px-4 pt-20 sm:pt-24 pb-12 sm:pb-20 relative z-10">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Terminal-style decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            <span className="text-[#00ffff]">$</span> ls sponsors/
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono"
          >
            sponsors.json
          </motion.h1>

          {/* Glowing Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 sm:w-32 lg:w-48 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto font-['Rajdhani']"
          >
            Meet our amazing partners who make Texibition 2K26 possible!
          </motion.p>
        </motion.div>

        {/* Sponsors Grid - Two Rows of 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <SectionHeader 
            title="Our Partners" 
            subtitle="These incredible organizations power Texibition 2K26"
          />
          
          {/* Row 1 - 3 sponsors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {sponsorsRow1.map((sponsor, index) => (
              sponsor.hasBox ? (
                <SponsorCardWithBox
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  category={sponsor.category}
                  link={sponsor.link}
                  invertLogo={sponsor.invertLogo}
                  delay={index * 0.1}
                />
              ) : (
                <SponsorCardMinimal
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  category={sponsor.category}
                  link={sponsor.link}
                  invertLogo={sponsor.invertLogo}
                  delay={index * 0.1}
                />
              )
            ))}
          </div>
          
          {/* Row 2 - 5 sponsors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sponsorsRow2.map((sponsor, index) => (
              sponsor.hasBox ? (
                <SponsorCardWithBox
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  category={sponsor.category}
                  link={sponsor.link}
                  invertLogo={sponsor.invertLogo}
                  delay={index * 0.1}
                />
              ) : (
                <SponsorCardMinimal
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  category={sponsor.category}
                  link={sponsor.link}
                  invertLogo={sponsor.invertLogo}
                  delay={index * 0.1}
                  isGitHub={sponsor.isGitHub}
                  isText={sponsor.isText}
                />
              )
            ))}
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

        {/* Map Section */}
        <section className="py-6 sm:py-8">
          <MapView 
            title="Event Venue" 
            subtitle="Brainware University, Barasat, Kolkata"
          />
        </section>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Side UI Element */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#a855f7]/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

