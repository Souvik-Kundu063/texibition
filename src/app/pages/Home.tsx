
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ArrowRight, Sparkles, Code, Gamepad2, Cpu, Terminal, Database, Zap, Heart, Lightbulb, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

// Custom Discord Icon
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}
import { CountdownTimer } from '../components/CountdownTimer';
import { InteractiveBackground } from '../components/InteractiveBackground';
import { LazySpline } from '../components/LazySpline';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback, Suspense, lazy } from "react";

// Lazy load PreviousYearGallary
const PreviousYearGallary = lazy(() => import('../components/PreviousYearGallary').then(module => ({ default: module.default })));

// Optimized Embla Carousel Component - Performance Improved
function EmblaCarousel({ highlights }: { highlights: typeof highlightsData }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    slidesToScroll: 1,
    duration: 30,
    skipSnaps: false,
    containScroll: 'trimSnaps',
    dragFree: false,
    watchDrag: true,
  }, []);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Memoized auto-scroll to prevent unnecessary re-renders
  const autoScroll = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  // Auto-scroll with efficient state updates
  useEffect(() => {
    if (!emblaApi) return;
    
    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('init', onInit);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onInit);
    
    // Initial setup
    onInit();
    setSelectedIndex(emblaApi.selectedScrollSnap());
    
    // Auto-advance timer - optimized with ref to prevent closure issues
    let interval: ReturnType<typeof setInterval>;
    if (emblaApi) {
      interval = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext();
        }
      }, 5000);
    }
    
    return () => {
      emblaApi.off('init', onInit);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onInit);
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container flex touch-pan-y">
        {highlights.map((item, index) => (
          <div 
            key={index} 
            className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-2 sm:pl-3 lg:pl-4"
          >
            <div
              className="bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl overflow-hidden mx-1 sm:mx-2 transition-transform duration-300 hover:scale-[1.02]"
              style={{ transform: 'translateZ(0)' }}
            >
              <Link to="#">
                <div className="h-auto min-h-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === selectedIndex 
                ? 'bg-[#00d4ff] w-6' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Sponsors data for marquee
const sponsors = [
  { name: 'Cozzon', logo: '/sponsors/cozzon.png', color: 'from-[#ff6b6b] to-[#ff8e8e]', category: 'Clothing Partner' },
  { name: 'GeeksforGeeks', logo: '/sponsors/gfg.png', color: 'from-[#00d4ff] to-[#00ff88]', category: 'Coding Competition Partner' },
  { name: 'GDG', logo: '/sponsors/GDG.png', color: 'from-[#4285f4] to-[#34a853]', category: 'Community Partner' },
  { name: 'Prepverse', logo: '/sponsors/Prepverse.png', color: 'from-[#a855f7] to-[#ec4899]', category: 'Career Partner' },
  { name: 'Devfolio', logo: '/sponsors/Devfolio.png', color: 'from-[#00ff88] to-[#00d4ff]', category: 'Hackathon Platform' },
  { name: '.XYZ', logo: '/sponsors/xyz-logo.png', color: 'from-[#00d4ff] to-[#a855f7]', category: 'Domain Partner' },
  { name: 'Chess.com', logo: '/sponsors/chess.com.png', color: 'from-[#769656] to-[#eee]', category: 'Gaming Partner' },
  { name: 'ClickNBit', logo: '/sponsors/clicknbit.jpg', color: 'from-[#ff6b35] to-[#ff9f1c]', category: 'Media Partner' },
];

// Gallery images for marquee
const galleryImages = [
  { id: 1, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620589/54491969277_047478720b_o_liehqe.jpg', alt: 'Event moment 1' },
  { id: 2, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620672/54492836266_d67be3fe9d_o_qbnpyu.jpg', alt: 'Event moment 2' },
  { id: 3, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620584/54503423770_e4a9e98fde_o_chh3hf.jpg', alt: 'Event moment 3' },
  { id: 4, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620669/54492836741_b1ddd1eb23_o_d9lupr.jpg', alt: 'Event moment 4' },
  { id: 5, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620770/54503251394_8fd5735628_o_x6e0rk.jpg', alt: 'Event moment 5' },
  { id: 6, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620655/54503423745_29a46510ca_o_i8udlh.jpg', alt: 'Event moment 6' },
  { id: 7, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620821/54493180685_ee5d1d4ac9_o_jeydoh.jpg', alt: 'Event moment 7' },
  { id: 8, src: 'https://res.cloudinary.com/dyeglgnfd/image/upload/f_auto,q_auto/v1771620927/54492835961_0c1e52092f_o_meqvbl.jpg', alt: 'Event moment 8' },
];

// Event highlights data
const highlightsData = [
  {
    title: 'Xibit',
    description: 'Xibit is a time-bound hackathon where teams work together to solve real-world problem statements provided on the spot.',
    icon: Code,
    gradient: 'from-[#00d4ff] to-[#00ffff]',
    codeSnippet: `const xibit = {\n  type: 'coding',\n  team: '4 max',\n  duration: '7h'\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844817/bw_xihibit_fucc1x.jpg'
  },
  {
    title: 'Free Fire',
    description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory.',
    icon: Gamepad2,
    gradient: 'from-[#ec4899] to-[#f43f5e]',
    codeSnippet: `const freeFire = {\n  type: 'battle-royale',\n  squad: 5,\n  mode: 'survival'\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844800/free_fire_bw_v3pdyq.jpg'
  },
  {
    title: 'BGMI',
    description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory.',
    icon: Gamepad2,
    gradient: 'from-[#ec4899] to-[#f43f5e]',
    codeSnippet: `const bgmi = {\n  map: 'Erangel',\n  squad: 5,\n  chicken_dinner: true\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844623/bw_pubg_iuev64.jpg'
  },
  {
    title: 'PES',
    description: 'Pro Evolution Soccer championship. Show your football gaming skills in 1v1 matches.',
    icon: Gamepad2,
    gradient: 'from-[#fb923c] to-[#fbbf24]',
    codeSnippet: `const pes = {\n  match: '1v1',\n  half_time: '5min',\n  controller: true\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844799/pes_bw_w9ni0j.jpg'
  },
  {
    title: 'The Blitz',
    description: 'Fast-paced gaming tournament. Quick reflexes and strategy win the day.',
    icon: Zap,
    gradient: 'from-[#f43f5e] to-[#fb923c]',
    codeSnippet: `const blitz = {\n  speed: 'max',\n  reflexes: 'required',\n  win: 'fast'\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844807/chess_bw_g8zmqd.jpg'
  },
  {
    title: 'Valorant',
    description: 'Tactical FPS action. Show your aim and strategy in intense 5v5 matches.',
    icon: Gamepad2,
    gradient: 'from-[#f43f5e] to-[#fb923c]',
    codeSnippet: `const valorant = {\n  agent: 'Jett',\n  weapon: 'Vandal',\n  plant: 'Spike'\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844689/bw_valorant_fbeamm.jpg'
  },
  {
    title: 'The Blusters',
    description: 'Individual coding challenge. Solve programming problems and showcase your logical thinking.',
    icon: Code,
    gradient: 'from-[#00ffff] to-[#a855f7]',
    codeSnippet: `const blusters = {\n  lang: 'any',\n  solo: true,\n  logic: '100%'\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844546/bw_bluster_exkmrn.jpg'
  },
  {
    title: 'The Architect',
    description: 'Hardware design and build challenge. Create innovative hardware solutions.',
    icon: Cpu,
    gradient: 'from-[#a855f7] to-[#ec4899]',
    codeSnippet: `const architect = {\n  build: 'hardware',\n  components: 'provided',\n  innovate: true\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844463/architect_bw_dqvjij.jpg'
  },
  {
    title: 'The Prompters',
    description: 'AI prompting challenge. Create the most effective prompts for AI systems.',
    icon: Lightbulb,
    gradient: 'from-[#fbbf24] to-[#00d4ff]',
    codeSnippet: `const prompters = {\n  model: 'GPT-4',\n  input: 'creative',\n  output: 'art'\n};`,
    image: 'https://res.cloudinary.com/do8ufkhvn/image/upload/v1769844643/bw_prompters_daozhg.jpg'
  },
];

export function Home() {
  const stats = [
    { label: 'Events', value: '9', icon: Terminal },
    { label: 'Participants', value: '3500+', icon: Database },
    { label: 'Days', value: '2', icon: Calendar },
  ];

  const highlights = highlightsData;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />

        <InteractiveBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="flex items-center justify-center"
                >
                  <img
                    src="/images/bwulogo.png"
                    alt="Brainware University"
                    className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="60"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center justify-center lg:justify-center gap-2 sm:gap-4 py-2"
                >
                  <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#00d4ff]/50"></div>
                  <span className="text-[#00d4ff] font-['Rajdhani'] tracking-[0.3em] text-xs sm:text-sm md:text-base font-semibold uppercase">
                    Presents
                  </span>
                  <div className="h-[1px] w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-transparent to-[#00d4ff]/50"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  className="flex items-center justify-center lg:justify-start"
                >
                  <img
                    src="/images/texibitionlogo.png"
                    alt="TEXIBITION"
                    className="h-28 sm:h-36 md:h-48 lg:h-64 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,2,255,0.3)]"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="200"
                  />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-3 text-center lg:text-left"
                  >
                    <div className="font-['Rajdhani'] text-lg sm:text-xl tracking-wider uppercase font-semibold text-[#FFD60A]">
                      Innovating Intelligence: Building The Future With AI
                    </div>
                  </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2 sm:space-y-3"
                >
                  <div className="flex items-center justify-center lg:justify-center gap-2 text-white/60 font-['Rajdhani'] uppercase tracking-wider text-xs sm:text-sm">
                    <Sparkles className="size-3 sm:size-4 text-[#ff6b35]" />
                    <span>Organised By</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-center gap-4 sm:gap-6">
                    <img
                      src="/images/techclub-iic.png"
                      alt="Tech Club IIC"
                      className="h-8 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      decoding="async"
                      width="100"
                      height="40"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                  className="pt-4 sm:pt-6"
                >
                  <div className="font-['Orbitron'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ff6b35] drop-shadow-lg">
                    11-12 <span className="text-white/20 text-lg sm:text-2xl duration-300">|</span> MAR '26
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                  className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6"
                >
                  <Link to="/events">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300 flex items-center gap-2 group backdrop-blur-md"
                    >
                      <div className="skew-x-[10deg] flex items-center gap-2">
                        <span className="text-[#00ffff] text-sm sm:text-lg">$</span>
                        <span className="text-sm sm:text-base">REGISTER_NOW</span>
                        <ArrowRight className="size-4 sm:size-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.button>
                  </Link>

                  <motion.button
                    onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 border border-white/20 rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-medium text-white/80 hover:text-[#a855f7] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  >
                    <div className="skew-x-[10deg] flex items-center gap-2 text-sm sm:text-base">
                      EXPLORE EVENTS
                    </div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="flex items-center justify-center order-1 lg:order-2 hidden sm:flex"
            >
              <div className="relative w-120 h-44 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl border border-transparent flex items-center justify-center">
                <div className="absolute inset-0">
                  <LazySpline scene="https://prod.spline.design/8waoK8Yzk7ZTbMiR/scene.splinecode" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-6 sm:py-8 lg:py-10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4 sm:mb-6 lg:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-2 font-bold mb-2 sm:mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
              Registration Closes In
            </h2>
          </motion.div>
          <CountdownTimer />
        </div>
      </section>

      {/* Highlights Section */}
      <section id="events" className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> event_highlights.js
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              Event_Highlights
            </h2>
            <div className="font-code text-white/60 text-lg">
              <span className="text-[#a855f7]">const</span> highlights ={" "}
              <span className="text-[#00ffff]">['innovation','gaming','hardware']</span>
            </div>
          </motion.div>

          {/* Optimized Carousel */}
          <div className="flex justify-center px-2 sm:px-4">
            <div className="w-full max-w-6xl overflow-hidden">
              <EmblaCarousel highlights={highlights} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mt-8 sm:mt-10 lg:mt-12"
          >
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.35)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300 flex items-center gap-3"
              >
                <div className="skew-x-[10deg] flex items-center gap-3">
                  <span className="text-[#00ffff] text-sm sm:text-base">$</span>
                  <span className="text-sm sm:text-lg tracking-wide">EXPLORE_EVENTS</span>
                  <ArrowRight className="size-5 sm:size-6 text-[#00d4ff] group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 via-[#a855f7]/10 to-[#00d4ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

 {/* About Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#a855f7]/5" />
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#00d4ff]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#a855f7]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm">
              <span className="text-[#00ffff]">//</span> about_us.js
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent font-['Orbitron'] tracking-tight">
              About_Us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl lg:max-w-3xl mx-auto font-['Rajdhani'] leading-relaxed px-4">
              Born from late-night coding sessions and coffee-fueled brainstorming at Brainware University. TEXIBITION is our way of saying: tech should be fun, chaotic, and utterly transformative.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="max-w-4xl mx-auto px-4">
              <div className="relative p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#00d4ff]/30 rounded-xl sm:rounded-2xl backdrop-blur-sm overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] rounded-xl sm:rounded-2xl opacity-20 animate-pulse" />
                <div className="absolute inset-[2px] bg-[#0a0a0f] rounded-xl sm:rounded-2xl" />

                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-4 sm:mb-6"
                  >
                    <Heart className="size-8 sm:10 md:12 mx-auto text-[#ff6b35] mb-3 sm:mb-4" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Orbitron'] text-white mb-3 sm:mb-4">Our Mission</h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-xl lg:max-w-2xl mx-auto"
                  >
                    TEXIBITION is Brainware University's premier inter-college technology festival, organized by the Tech Club IIC.
                    We bring together the brightest minds from across colleges to compete, collaborate, and innovate in an environment
                    that fosters creativity, learning, and technological excellence. Join us for an unforgettable journey into the future of technology.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Makes Us Different - Organic Layout */}
          <div className="relative">
            {/* Floating Elements - hidden on small screens */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#00d4ff]/20 rounded-full blur-xl animate-pulse hidden sm:block" />
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#a855f7]/15 rounded-full blur-2xl animate-pulse delay-1000 hidden sm:block" />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#ec4899]/25 rounded-full blur-lg animate-pulse delay-500 hidden sm:block" />

            {/* Organic Text Blocks */}
            <div className="space-y-6 sm:space-y-10 lg:space-y-12">
              {/* First Row */}
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex-1 w-full"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#00d4ff]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transform rotate-0 sm:rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#00d4ff] font-mono text-xs sm:text-sm mb-2 sm:mb-3">// innovation_driven</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Orbitron'] text-white mb-2 sm:mb-4">Innovation Driven</h3>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      We believe in pushing boundaries and encouraging bold experimentation. Innovation requires taking risks,
                      learning from failures, and persisting until breakthrough moments happen.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  className="flex-1 w-full lg:mt-0 mt-4 sm:mt-6 lg:mt-12"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#a855f7]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transform rotate-0 sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#a855f7] font-mono text-xs sm:text-sm mb-2 sm:mb-3">// community_focused</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Orbitron'] text-white mb-2 sm:mb-4">Community Focused</h3>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      We create meaningful connections between students, educators, and industry professionals.
                      TEXIBITION is where you'll build lasting relationships and find your place in the tech community.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="flex-1 w-full"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#ec4899]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transform rotate-0 sm:rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#ec4899] font-mono text-xs sm:text-sm mb-2 sm:mb-3">// excellence_rewarded</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Orbitron'] text-white mb-2 sm:mb-4">Excellence Rewarded</h3>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      Outstanding achievements are recognized and celebrated. Winners receive substantial prizes,
                      certificates, and the satisfaction of being acknowledged by the tech community.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4 }}
                  className="flex-1 w-full lg:mt-0 mt-4 sm:mt-6 lg:mt-8"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#00ffff]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transform rotate-0 sm:-rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#00ffff] font-mono text-xs sm:text-sm mb-2 sm:mb-3">// hands_on_learning</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Orbitron'] text-white mb-2 sm:mb-4">Hands-On Learning</h3>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      Theory meets practice at TEXIBITION. Participants engage in real-world projects,
                      from coding challenges to hardware prototyping, gaining practical skills that matter.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Third Row - Single Centered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
                className="max-w-2xl mx-auto px-4"
              >
                <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] backdrop-blur-sm border border-[#fb923c]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                  <div className="text-[#fb923c] font-mono text-xs sm:text-sm mb-2 sm:mb-3">// future_focused</div>
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-bold font-['Orbitron'] text-white mb-3 sm:mb-4">Future Focused</h3>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                    TEXIBITION prepares participants for the technology landscape of tomorrow. Through exposure to
                    emerging technologies and industry trends, we empower the next generation of innovators.
                  </p>
                  <div className="mt-4 sm:mt-6 flex justify-center">
                    <Heart className="size-5 sm:size-8 text-[#ff6b35] animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sponsor Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 sm:mt-20 lg:mt-24"
          >
            <div className="text-center mb-6 sm:mb-8">
              <div className="font-mono text-[#00d4ff] mb-2 sm:mb-3 text-xs sm:text-sm">
                <span className="text-[#00ffff]">//</span> our_sponsors.js
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Orbitron'] text-white">
                Our <span className="text-[#00d4ff]">Sponsors</span>
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-2 font-['Rajdhani']">
                Proudly supported by industry leaders
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

              <div className="flex items-center py-4 sm:py-6">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                    <div
                      key={`sponsor-${index}`}
                      className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
                    >
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        loading="lazy"
                        decoding="async"
                        className={`h-10 w-auto sm:h-12 lg:h-14 object-contain ${sponsor.name === 'Cozzon' ? 'brightness-0 invert' : ''}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-6 sm:mt-8"
            >
              <Link
                to="/sponsors"
                className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ffff] 
                  font-['Space_Grotesk'] text-xs sm:text-sm transition-colors duration-300"
              >
                <span>VIEW_ALL_SPONSORS</span>
                <ArrowRight className="size-3 sm:size-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Event Gallery Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 sm:mt-20 lg:mt-24"
          >
            <div className="text-center mb-6 sm:mb-8">
              <div className="font-mono text-[#a855f7] mb-2 sm:mb-3 text-xs sm:text-sm">
                <span className="text-[#00ffff]">//</span> event_gallery.js
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Orbitron'] text-white">
                Event <span className="text-[#a855f7]">Gallery</span>
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-2 font-['Rajdhani']">
                Glimpses from TEXIBITION 2K25
              </p>
            </div>

            {/* Two Row Marquee - Row 1 (Forward) */}
            <div className="relative overflow-hidden mb-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
              
              <div className="flex items-center py-3">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
                    <div
                      key={`gallery-row1-${index}`}
                      className="flex-shrink-0 mx-4 sm:mx-5 lg:mx-6"
                    >
                      <div className="w-40 sm:w-52 lg:w-64 h-24 sm:h-32 lg:h-40 rounded-lg overflow-hidden border border-[#a855f7]/30">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Two Row Marquee - Row 2 (Backward) */}
            <div className="relative overflow-hidden mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
              
              <div className="flex items-center py-3">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                  {[...galleryImages.slice().reverse(), ...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()].map((image, index) => (
                    <div
                      key={`gallery-row2-${index}`}
                      className="flex-shrink-0 mx-4 sm:mx-5 lg:mx-6"
                    >
                      <div className="w-40 sm:w-52 lg:w-64 h-24 sm:h-32 lg:h-40 rounded-lg overflow-hidden border border-[#00d4ff]/30">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* View Gallery Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <Link to="/event-gallery">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.35)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-[#a855f7]/10 border border-[#a855f7] rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#a855f7] hover:bg-[#a855f7]/20 transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                  <div className="skew-x-[10deg] flex items-center gap-3">
                    <span className="text-[#c084fc] text-sm sm:text-base">$</span>
                    <span className="text-sm sm:text-lg tracking-wide">VIEW_FULL_GALLERY</span>
                    <ArrowRight className="size-5 sm:size-6 text-[#a855f7] group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/20 via-[#00d4ff]/10 to-[#a855f7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>
            {/* Gallery Section   Last Year Pictures Section * /}
        {/* <PreviousYearGallary/> */}
{/* CTA Section */}
      <section id="contact-us" className="py-10 sm:py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-8 md:p-10 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10,10,15,0.9) 0%, rgba(20,20,40,0.8) 100%)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(0,255,255,0.3)',
              boxShadow: '0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(168,85,247,0.1)'
            }}
          >
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-[#00d4ff]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-[#a855f7]/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center mb-8 sm:mb-10 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
                <span className="font-['Space_Grotesk'] text-[#00d4ff] text-xs tracking-widest uppercase">System Status: Online</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-['Orbitron'] text-white">
                <span className="text-[#00d4ff]">{"<"}</span>
                CONTACT_US
                <span className="text-[#00d4ff]">{"/>"}</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto font-['Rajdhani'] font-medium tracking-wide">
                Connect with the core team. For sponsorships, partnerships, or event-related queries, reach out directly.
              </p>
            </div>

{/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                {
                  designation: 'Convenor',
                  name: 'Mr. Partha Pratim Dasgupta',
                  phone: '+91 89611 42172',
                  email: 'techclub@brainwareuniversity.ac.in'
                },
                {
                  designation: 'Treasurer',
                  name: 'Dr. Arighna Basak',
                  phone: '+91 94337 78573',
                  email: 'techclub@brainwareuniversity.ac.in'
                },
                {
                  designation: 'Lead Organizer',
                  name: 'Madhusudan Mahatha',
                  phone: '+91 6289600599',
                  email: 'madhusudanmahatha14@gmail.com'
                },
                {
                  designation: 'Lead Organizer',
                  name: 'Tushar Daiya',
                  phone: '+91 9123720395',
                  email: 'tdaiya02@gmail.com'
                },
                {
                  designation: 'Lead Organizer',
                  name: 'Souvik Kundu',
                  phone: '+91 7718427880',
                  email: 'souvikkundu7718@gmail.com'
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer"
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

                  <div className="relative z-10">
                    {/* Designation Label */}
                    <div className="inline-block px-2 py-0.5 mb-2 sm:mb-3 rounded text-[10px] sm:text-xs font-['Space_Grotesk'] font-semibold uppercase tracking-wider"
                      style={{
                        background: 'linear-gradient(90deg, rgba(0,212,255,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                        color: '#00d4ff',
                        border: '1px solid rgba(0,212,255,0.3)'
                      }}
                    >
                      {contact.designation}
                    </div>

                    {/* Name */}
                    <h3 className="text-base sm:text-lg font-bold font-['Orbitron'] text-white mb-3 sm:mb-4 group-hover:text-[#00d4ff] transition-colors duration-300">
                      {contact.name}
                    </h3>

                    {/* Phone */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <Phone className="size-3 sm:size-4 text-[#a855f7] flex-shrink-0" />
                      <a 
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="text-xs sm:text-sm text-white/70 hover:text-[#00d4ff] transition-colors duration-300 font-['Rajdhani']"
                      >
                        {contact.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Mail className="size-3 sm:size-4 text-[#a855f7] flex-shrink-0" />
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-xs sm:text-sm text-white/70 hover:text-[#00d4ff] transition-colors duration-300 font-['Rajdhani'] truncate"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow Us On Social Section */}
      <section className="py-10 sm:py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-8 md:p-10 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10,10,15,0.9) 0%, rgba(20,20,40,0.8) 100%)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(168,85,247,0.3)',
              boxShadow: '0 0 40px rgba(168,85,247,0.15), 0 0 80px rgba(236,72,153,0.1)'
            }}
          >
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-[#a855f7]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-[#ec4899]/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#a855f7]/30 bg-[#a855f7]/10 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse" />
                <span className="font-['Space_Grotesk'] text-[#a855f7] text-xs tracking-widest uppercase">Stay Connected</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-['Orbitron'] text-white">
                <span className="text-[#a855f7]">{"<"}</span>
                FOLLOW_US
                <span className="text-[#a855f7]">{"/>"}</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto font-['Rajdhani'] font-medium tracking-wide mb-8 sm:mb-10">
                Join our community and stay updated with the latest news, events, and announcements.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/texibition2k26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 sm:p-5 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(18px)',
                    border: '1px solid rgba(168,85,247,0.2)',
                    boxShadow: '0 0 20px rgba(168,85,247,0.1)'
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 100%)',
                      boxShadow: '0 0 30px rgba(168,85,247,0.4)'
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <Instagram className="size-8 sm:size-10 text-[#ec4899] group-hover:text-[#ff6b9d] transition-colors" />
                    <span className="text-xs sm:text-sm font-['Space_Grotesk'] text-white/80 group-hover:text-white transition-colors">Instagram</span>
                  </div>
                </motion.a>

                {/* Discord */}
                <motion.a
                  href="https://discord.gg/Fga6sYVJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 sm:p-5 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(18px)',
                    border: '1px solid rgba(88,101,242,0.2)',
                    boxShadow: '0 0 20px rgba(88,101,242,0.1)'
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(88,101,242,0.2) 0%, rgba(136,151,255,0.2) 100%)',
                      boxShadow: '0 0 30px rgba(88,101,242,0.4)'
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <DiscordIcon className="size-8 sm:size-10 text-[#5865F2] group-hover:text-[#7289da] transition-colors" />
                    <span className="text-xs sm:text-sm font-['Space_Grotesk'] text-white/80 group-hover:text-white transition-colors">Discord</span>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/company/texibition/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn3CZkEEtKlXYF-huMY8l_jveUxWtG1nr25caOMkeWpwupKwXcwtc68WnN1BI_aem_R5Tmxuteijz1YsTMtmeNEg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 sm:p-5 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(18px)',
                    border: '1px solid rgba(0,119,181,0.2)',
                    boxShadow: '0 0 20px rgba(0,119,181,0.1)'
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,119,181,0.2) 0%, rgba(0,168,255,0.2) 100%)',
                      boxShadow: '0 0 30px rgba(0,119,181,0.4)'
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <Linkedin className="size-8 sm:size-10 text-[#0077b5] group-hover:text-[#00a0dc] transition-colors" />
                    <span className="text-xs sm:text-sm font-['Space_Grotesk'] text-white/80 group-hover:text-white transition-colors">LinkedIn</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
