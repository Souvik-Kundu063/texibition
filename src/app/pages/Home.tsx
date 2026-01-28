import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ArrowRight, Sparkles, Code, Gamepad2, Cpu, Terminal, Database, Zap, Star, Heart, Quote, Instagram, Twitter, Github, Youtube, Mail, MapPin, Crown, Award, Lightbulb } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';
import { InteractiveBackground } from '../components/InteractiveBackground';
import Spline from '@splinetool/react-spline';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useEffect, useState, useRef } from "react";


export function Home() {


  const stats = [
    { label: 'Events', value: '9', icon: Terminal },
    { label: 'Participants', value: '3500+', icon: Database },
    { label: 'Days', value: '2', icon: Calendar },
  ];

  const highlights = [
    
    {
      title: 'Xibit',
      description: 'Xibit is a time-bound hackathon where teams work together to solve real-world problem statements provided on the spot. Participants are expected to brainstorm innovative ideas, design practical solutions, and build a working prototype within the given time limit. The focus is on creativity, problem understanding, feasibility, and execution, rather than just coding complexity. Teams are free to choose their tech stack and approach, making this event ideal for innovators, developers, and designers who enjoy turning ideas into impactful solutions under pressure.',
      icon: Code,
      gradient: 'from-[#00d4ff] to-[#00ffff]',
      codeSnippet: `const xibit = {\n  type: 'coding',\n  team: '4 max',\n  duration: '7h'\n};`,
      image: '/event/xihibit.jpg'
    },
    {
      title: 'Free Fire',
      description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory.',
      icon: Gamepad2,
      gradient: 'from-[#ec4899] to-[#f43f5e]',
      codeSnippet: `const freeFire = {\n  type: 'battle-royale',\n  squad: 5,\n  mode: 'survival'\n};`,
      image: '/event/freefire.jpg'
    },
    {
      title: 'BGMI',
      description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory.',
      icon: Gamepad2,
      gradient: 'from-[#ec4899] to-[#f43f5e]',
      codeSnippet: `const bgmi = {\n  map: 'Erangel',\n  squad: 5,\n  chicken_dinner: true\n};`,
      image: '/event/pubg.jpg'
    },
    {
      title: 'PES',
      description: 'Pro Evolution Soccer championship. Show your football gaming skills in 1v1 matches.',
      icon: Gamepad2,
      gradient: 'from-[#fb923c] to-[#fbbf24]',
      codeSnippet: `const pes = {\n  match: '1v1',\n  half_time: '5min',\n  controller: true\n};`,
      image: '/event/pes.jpg'
    },
    {
      title: 'The Blitz',
      description: 'Fast-paced gaming tournament. Quick reflexes and strategy win the day.',
      icon: Zap,
      gradient: 'from-[#f43f5e] to-[#fb923c]',
      codeSnippet: `const blitz = {\n  speed: 'max',\n  reflexes: 'required',\n  win: 'fast'\n};`,
      image: '/event/chess.jpg'
    },
    {
      title: 'Valorant',
      description: 'Tactical FPS action. Show your aim and strategy in intense 5v5 matches.',
      icon: Gamepad2,
      gradient: 'from-[#f43f5e] to-[#fb923c]',
      codeSnippet: `const valorant = {\n  agent: 'Jett',\n  weapon: 'Vandal',\n  plant: 'Spike'\n};`,
      image: '/event/valorant.jpg'
    },
    {
      title: 'The Blusters',
      description: 'Individual coding challenge. Solve programming problems and showcase your logical thinking.',
      icon: Code,
      gradient: 'from-[#00ffff] to-[#a855f7]',
      codeSnippet: `const blusters = {\n  lang: 'any',\n  solo: true,\n  logic: '100%'\n};`,
      image: '/event/bluster.jpg'
    },
    {
      title: 'The Architect',
      description: 'Hardware design and build challenge. Create innovative hardware solutions.',
      icon: Cpu,
      gradient: 'from-[#a855f7] to-[#ec4899]',
      codeSnippet: `const architect = {\n  build: 'hardware',\n  components: 'provided',\n  innovate: true\n};`,
      image: '/event/architect.jpg'
    },
    {
      title: 'The Prompters',
      description: 'AI prompting challenge. Create the most effective prompts for AI systems.',
      icon: Lightbulb,
      gradient: 'from-[#fbbf24] to-[#00d4ff]',
      codeSnippet: `const prompters = {\n  model: 'GPT-4',\n  input: 'creative',\n  output: 'art'\n};`,
      image: '/event/prompters.jpg'
    },
  ];

  // Sponsor data for marquee
  const sponsors = [
    { name: 'TechCorp', logo: 'TC', tier: 'title', color: 'from-[#fbbf24] to-[#f59e0b]' },
    { name: 'CloudTech', logo: 'CT', tier: 'gold', color: 'from-[#fbbf24] to-[#f59e0b]' },
    { name: 'DataSync', logo: 'DS', tier: 'gold', color: 'from-[#fbbf24] to-[#f59e0b]' },
    { name: 'InnovateLab', logo: 'IL', tier: 'gold', color: 'from-[#fbbf24] to-[#f59e0b]' },
    { name: 'StartupHub', logo: 'SH', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
    { name: 'CodeNest', logo: 'CN', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
    { name: 'DevZone', logo: 'DZ', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
    { name: 'TechFlow', logo: 'TF', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
    { name: 'ByteCraft', logo: 'BC', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
    { name: 'PixelPress', logo: 'PP', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
    { name: 'NeuralNet', logo: 'NN', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
    { name: 'QuantumQ', logo: 'QQ', tier: 'silver', color: 'from-[#9ca3af] to-[#6b7280]' },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section - Institutional Format */}
      <section className="relative flex items-center justify-start overflow-hidden pt-16 sm:pt-20">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />

        {/* Interactive Background */}
        <InteractiveBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

            {/* Left Column - Institutional Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4 sm:space-y-6">

                {/* Brainware University Logo */}
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
                  />
                </motion.div>

                {/* Presents */}
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

                {/* TEXIBITION Logo */}
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
                  />
                </motion.div>

                {/* Organised by */}
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
                    />
                  </div>
                </motion.div>

                {/* Date */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                  className="pt-4 sm:pt-6"
                >
                  <div className="font-['Orbitron'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ff6b35] drop-shadow-lg">
                    11-12 <span className="text-white/20 text-lg sm:text-2xl duration-300">|</span> MAR '26
                  </div>
                  <div className="text-white/40 font-['Rajdhani'] text-base sm:text-lg mt-1 tracking-widest uppercase">
                    The Ultimate Tech Odyssey
                  </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                  className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6"
                >
                  <Link to="/code-of-conduct">
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

            {/* Right Column - Space for 3D Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="flex items-center justify-center order-1 lg:order-2 hidden sm:flex"
            >
              <div className="relative w-120 h-44 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl border border-transparent  flex items-center justify-center ">

                {/* 3D Spline Element */}
                <div className="absolute inset-0">
                  <Spline scene="https://prod.spline.design/8waoK8Yzk7ZTbMiR/scene.splinecode" />
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >

            <h2 className="text-4xl md:text-5xl pb-2 font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
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

          {/* 🎢 3D Carousel */}
          <div className="flex justify-center px-2 sm:px-4">
            <div className="w-full max-w-6xl h-[200px] sm:h-[280px] md:h-[400px] lg:h-[420px]">
              <Carousel
                slides={highlights.map((item, i) => ({
                  key: i,
                  content: (
                    <div className="bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl mx-2 sm:mx-4 overflow-hidden">
                      <Link to="#">
                        <img src={item.image} alt={item.title} className="w-full object-cover h-[220px] sm:h-[350px] md:h-[380px] lg:h-[500px]" />
                      </Link>
                    </div>
                  )
                }))}
                goToSlide={carouselIndex}
                offsetRadius={1}
                showNavigation={false}
                animationConfig={config.gentle}
              />
            </div>
          </div>

          {/* Explore Events Button */}
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
                {/* Glow effect */}
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

          {/* Sponsor Marquee - Commented Out */}
          {/*
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
                    <motion.div
                      key={`sponsor-${index}`}
                      className="flex-shrink-0 mx-2 sm:mx-3 lg:mx-4"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="group relative">
                        <div className={`
                          w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                          rounded-lg sm:rounded-xl 
                          bg-gradient-to-br ${sponsor.color}
                          flex items-center justify-center
                          border border-white/20
                          shadow-lg
                          group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]
                          transition-all duration-300
                        `}>
                          <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">
                            {sponsor.logo}
                          </span>
                        </div>

                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          px-2 py-1 bg-[#0a0a0f] border border-[#00d4ff]/30 rounded
                          whitespace-nowrap z-20">
                          <span className="text-white text-xs">{sponsor.name}</span>
                        </div>
                      </div>
                    </motion.div>
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
          */}

        </div>
      </section>

      {/* Last Year Pictures Section */}
      <section className="py-10 sm:py-12 lg:py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm">
              <span className="text-[#00ffff]">//</span> gallery_2025.js
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              Gallery_2025
            </h2>
          </motion.div>

          {/* Mobile: Horizontal Scroll Snap Gallery */}
          <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            <div className="flex gap-3">
              {[
                { title: 'Hackathon Finals', desc: 'Teams presenting solutions', icon: Terminal },
                { title: 'Gaming Arena', desc: 'Valorant championships', icon: Gamepad2 },
                { title: 'Hardware Lab', desc: 'Robotics challenge', icon: Cpu },
                { title: 'Award Ceremony', desc: 'Celebrating winners', icon: Trophy },
                { title: 'Team Collab', desc: 'Coding together', icon: Users },
                { title: 'Innovation', desc: 'Cutting-edge projects', icon: Sparkles },
              ].map((item, index) => (
                <motion.div
                  key={`gallery-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  snap-center
                  className="snap-center flex-shrink-0 w-[280px] group relative rounded-xl overflow-hidden border border-[#00d4ff]/30 bg-[#0a0a0f]"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#0a0a0f] to-[#a855f7]/10" />

                  {/* Card Content */}
                  <div className="relative p-4">
                    {/* Icon */}
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center size-12 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30">
                        <item.icon className="size-6 text-[#00d4ff]" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-1">
                      <div className="font-mono text-sm text-[#00d4ff]">{item.title}</div>
                      <div className="text-xs text-white/60">{item.desc}</div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-5">
            {[
              { title: 'Hackathon Finals', desc: 'Teams presenting their innovative solutions', icon: Terminal },
              { title: 'Gaming Arena', desc: 'Intense Valorant championship matches', icon: Gamepad2 },
              { title: 'Hardware Lab', desc: 'Robotics challenge in action', icon: Cpu },
              { title: 'Award Ceremony', desc: 'Celebrating winners and achievements', icon: Trophy },
              { title: 'Team Collaboration', desc: 'Working together on coding challenges', icon: Users },
              { title: 'Innovation Showcase', desc: 'Displaying cutting-edge projects', icon: Sparkles },
            ].map((image, index) => (
              <motion.div
                key={`desktop-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-video rounded-lg overflow-hidden border border-[#00d4ff]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <image.icon className="size-10 mx-auto mb-2 text-[#00d4ff]" />
                    <div className="font-mono text-sm text-[#00d4ff]">{image.title}</div>
                    <div className="text-sm text-white/60">{image.desc}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 lg:py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#00d4ff]/30 to-[#a855f7]/30 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0f] m-[1px] rounded-[21px] sm:rounded-[22px] z-0" />

            <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-16 text-center">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-4 sm:mb-6 lg:mb-8">
                <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
                <span className="font-['Space_Grotesk'] text-[#00d4ff] text-xs tracking-widest uppercase">System Status: Online</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-['Orbitron'] text-white">
                <span className="text-[#00d4ff]">{"<"}</span>
                READY_TO_JOIN?
                <span className="text-[#00d4ff]">{"/>"}</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-xl text-white/70 mb-6 sm:mb-8 lg:mb-10 max-w-xl lg:max-w-2xl mx-auto font-['Rajdhani'] font-medium tracking-wide px-4">
                Initialize your potential. Register now to access the mainframe and compete in the ultimate tech odyssey.
              </p>

              <Link to="/code-of-conduct">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#a855f7]/20 border border-[#a855f7] rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#a855f7] hover:bg-[#a855f7]/30 transition-all duration-300 group inline-flex items-center gap-2 sm:gap-3"
                >
                  <div className="skew-x-[10deg] flex items-center gap-2">
                    <Terminal className="size-4 sm:size-5" />
                    <span className="text-sm sm:text-base">INITIATE_REGISTRATION</span>
                    <ArrowRight className="size-4 sm:size-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </Link>
            </div>

            {/* Decorative Corner Lines */}
            <div className="absolute top-0 left-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-l-2 border-t-2 border-[#00d4ff]/50 rounded-tl-xl sm:rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-r-2 border-b-2 border-[#a855f7]/50 rounded-br-xl sm:rounded-br-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
