import { motion } from 'motion/react';
import { Users, Clock, Sparkles } from 'lucide-react';

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

export function Team() {
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

      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32 relative z-10">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8"
          >
            <Clock className="w-4 h-4 text-[#a855f7]" />
            <span className="text-xs uppercase tracking-widest text-white/60">Coming Soon</span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-sm sm:text-base tracking-[0.3em] uppercase mb-4 font-['Rajdhani']"
          >
            Meet the Minds Behind Texibition 2K26
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-['Orbitron'] tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#e0e0e0] to-white bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </motion.h1>

          {/* Glowing Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-32 sm:w-48 lg:w-64 h-[1px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/40 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We're curating an exceptional team of innovators, organizers, and visionaries. 
            Stay tuned to meet the brilliant minds bringing Texibition 2K26 to life!
          </motion.p>

          {/* Icon Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            className="mt-16"
          >
            <div className="relative inline-block">
              {/* Glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.3)",
                    "0 0 40px rgba(168, 85, 247, 0.5)",
                    "0 0 20px rgba(168, 85, 247, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#a855f7]/20 to-[#00d4ff]/20 border border-white/[0.1] backdrop-blur-xl flex items-center justify-center"
              >
                <Users className="w-12 h-12 text-white/80" />
              </motion.div>
              
              {/* Sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4"
              >
                <Sparkles className="w-4 h-4 text-[#a855f7] absolute top-0 left-1/2 -translate-x-1/2" />
                <Sparkles className="w-4 h-4 text-[#00d4ff] absolute bottom-0 right-0" />
                <Sparkles className="w-3 h-3 text-white/60 absolute top-1/2 -right-2" />
              </motion.div>
            </div>
          </motion.div>

          {/* Stay Updated Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 text-white/30 text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
              Stay tuned for updates
            </span>
          </motion.p>
        </motion.div>

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

export default Team;

