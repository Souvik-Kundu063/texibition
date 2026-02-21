import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Sparkles } from 'lucide-react';

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
          className="absolute rounded-full bg-[#00d4ff]/30"
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
        className="w-64 h-64 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full"
      />
    </div>
  );
}

// Image data with Cloudinary optimization
const galleryImages = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620589/54491969277_047478720b_o_liehqe.jpg',
    alt: 'Event moment 1'
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620672/54492836266_d67be3fe9d_o_qbnpyu.jpg',
    alt: 'Event moment 2'
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620584/54503423770_e4a9e98fde_o_chh3hf.jpg',
    alt: 'Event moment 3'
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620669/54492836741_b1ddd1eb23_o_d9lupr.jpg',
    alt: 'Event moment 4'
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620770/54503251394_8fd5735628_o_x6e0rk.jpg',
    alt: 'Event moment 5'
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620655/54503423745_29a46510ca_o_i8udlh.jpg',
    alt: 'Event moment 6'
  },
  {
    id: 7,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620821/54493180685_ee5d1d4ac9_o_jeydoh.jpg',
    alt: 'Event moment 7'
  },
  {
    id: 8,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620927/54492835961_0c1e52092f_o_meqvbl.jpg',
    alt: 'Event moment 8'
  },
  {
    id: 9,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620917/54493180775_e5a1a4b052_o_v2ukeq.jpg',
    alt: 'Event moment 9'
  },
  {
    id: 10,
    src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620584/54503423770_e4a9e98fde_o_chh3hf.jpg',
    alt: 'Event moment 10'
  }
];

// Bento grid item sizes for desktop (asymmetric pattern)
const bentoSizes = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
];

// Lightbox Modal Component
function LightboxModal({ image, onClose }: { image: typeof galleryImages[0] | null; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00d4ff]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#a855f7]/20 rounded-full blur-3xl" />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 border border-[#00d4ff]/30 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <X className="size-6 text-[#00d4ff]" />
      </button>
      
      {/* Image Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative max-w-5xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative rounded-2xl overflow-hidden border border-[#00d4ff]/40 shadow-[0_0_50px_rgba(0,212,255,0.3),0_0_100px_rgba(168,85,247,0.2)]"
          style={{
            background: 'rgba(10,10,15,0.95)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <img
            src={image?.src}
            alt={image?.alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Gallery Image Card Component
function GalleryCard({ 
  image, 
  index, 
  onClick 
}: { 
  image: typeof galleryImages[0]; 
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-2xl cursor-pointer h-full"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(0,255,255,0.25)',
        boxShadow: '0 0 30px rgba(0,212,255,0.1), 0 0 60px rgba(168,85,247,0.05)'
      }}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <div className="flex items-center gap-2 text-[#00d4ff]">
          <ZoomIn className="size-6" />
          <span className="font-['Space_Grotesk'] font-semibold text-lg">View</span>
        </div>
      </div>
      
      {/* Neon Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border-2 border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.5),inset_0_0_20px_rgba(0,212,255,0.1)]" />
      </div>
    </motion.div>
  );
}

export default function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = useCallback((image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0d1525] to-[#0a0f1c]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00d4ff]/8 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#a855f7]/5 via-transparent to-transparent" />
      
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
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-sm sm:text-base tracking-[0.3em] uppercase mb-4 font-['Rajdhani']"
          >
            Texibition 2K26
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-['Orbitron'] tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#e0e0e0] to-white bg-clip-text text-transparent">
              EVENT GALLERY
            </span>
          </motion.h1>

          {/* Glowing Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-32 sm:w-48 lg:w-64 h-[1px] mx-auto mb-8 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/40 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into Texibition — Innovation, Energy & Technology in Action.
          </motion.p>
        </motion.div>

        {/* Glassmorphism Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl p-4 sm:p-6 lg:p-8"
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0,255,255,0.25)',
            boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 100px rgba(168,85,247,0.1), inset_0_0_60px_rgba(0,212,255,0.05)'
          }}
        >
          {/* Bento Grid Layout */}
          <div className="relative z-10">
            {/* Mobile: 1 Column */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:hidden">
              {galleryImages.map((image, index) => (
                <div key={image.id} className="aspect-video">
                  <GalleryCard 
                    image={image} 
                    index={index} 
                    onClick={() => openLightbox(image)} 
                  />
                </div>
              ))}
            </div>

            {/* Tablet: 2 Columns */}
            <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-5 lg:hidden">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className={index % 3 === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-video'}
                >
                  <GalleryCard 
                    image={image} 
                    index={index} 
                    onClick={() => openLightbox(image)} 
                  />
                </div>
              ))}
            </div>

            {/* Desktop: Bento Grid with Asymmetric Pattern */}
            <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-5">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className={bentoSizes[index]}
                >
                  <GalleryCard 
                    image={image} 
                    index={index} 
                    onClick={() => openLightbox(image)} 
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA with View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a
            href="https://drive.google.com/drive/folders/1_8LujCi6g4tyzR_0jChMiSgVh33u3rrc?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.35)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <div className="skew-x-[10deg] flex items-center gap-3">
                <span className="text-[#00ffff] text-sm sm:text-base">$</span>
                <span className="text-sm sm:text-lg tracking-wide">VIEW_MORE</span>
                <svg 
                  className="size-5 sm:size-6 text-[#00d4ff] group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 via-[#a855f7]/10 to-[#00d4ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </motion.button>
          </a>
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
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent" />
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <LightboxModal 
            image={selectedImage} 
            onClose={closeLightbox} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

