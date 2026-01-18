


import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ArrowRight, Sparkles, Code, Gamepad2, Cpu, Terminal, Database, Zap, Star, Heart, Quote, Instagram, Twitter, Github, Youtube, Mail, MapPin } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';
import { InteractiveBackground } from '../components/InteractiveBackground';
import Spline from '@splinetool/react-spline';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useEffect, useState } from "react";



export function Home() {


  const stats = [
    { label: 'Events', value: '6', icon: Terminal },
    { label: 'Participants', value: '3500+', icon: Database },
    { label: 'Days', value: '2', icon: Calendar },
  ];

  const highlights = [
    {
      title: '6-Hour Hackathon',
      description: 'Build innovative solutions to real-world problems using cutting-edge technologies.',
      icon: Terminal,
      gradient: 'from-[#00d4ff] to-[#00ffff]',
      codeSnippet: `const hackathon = {\n  duration: '6 hours',\n  stack: ['React', 'Node.js', 'AI/ML'],\n  prize: '₹50,000'\n};`,
    },
    {
      title: 'Gaming Championships',
      description: 'Compete in the ultimate gaming tournaments with cutting-edge gameplay.',
      icon: Zap,
      gradient: 'from-[#a855f7] to-[#ec4899]',
      codeSnippet: `const gaming = {\n  tournaments: ['BGMI', 'Valorant', 'FIFA'],\n  players: '500+',\n  level: 'competitive'\n};`,
    },
    {

      title: 'Hardware Competition',
      description: 'Dive deep into IoT, robotics, and embedded systems with hands-on projects.',
      icon: Cpu,
      gradient: 'from-[#00ffff] to-[#a855f7]',
      codeSnippet: `const hardware = {\n  domains: ['IoT', 'Robotics', 'Embedded'],\n  build: 'Real hardware',\n  showcase: true\n};`,
    },
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % highlights.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-10 pt-0">
      {/* Hero Section - Institutional Format */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />

        {/* Interactive Background */}
        <InteractiveBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20 pt-10">

            {/* Left Column - Institutional Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-8"
            >
              <div className="space-y-6">

                {/* Brainware University */}
                <motion.div
                  initial={{ opacity: 0, letterSpacing: "0em" }}
                  animate={{ opacity: 1, letterSpacing: "0.05em" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="flex flex-col items-center lg:items-center"
                >
                  <span className="text-white text-3xl md:text-5xl font-['Orbitron'] font-medium tracking-tight">
                    BRAINWARE
                  </span>
                  <span className="text-white/90 text-2xl md:text-4xl font-['Orbitron'] font-light block mt-1">
                    UNIVERSITY
                  </span>
                </motion.div>

                {/* Presents */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center justify-center lg:justify-center gap-4 py-2"
                >
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00d4ff]/50"></div>
                  <span className="text-[#00d4ff] font-['Rajdhani'] tracking-[0.3em] text-sm md:text-base font-semibold uppercase">
                    Presents
                  </span>
                  <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-[#00d4ff]/50"></div>
                </motion.div>

                {/* TEXIBITION Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  className="flex items-center justify-center lg:justify-start -ml-4"
                >
                  <img
                    src="/images/texibitionlogo.png"
                    alt="TEXIBITION"
                    className="h-48 md:h-64 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,2,255,0.3)]"
                  />
                </motion.div>

                {/* Organised by */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-center lg:justify-center gap-2 text-white/60 font-['Rajdhani'] uppercase tracking-wider text-sm">
                    <Sparkles className="size-3 text-[#ff6b35]" />
                    <span>Organised By</span>
                  </div>

                  <div className="flex items-center justify-center lg:justify-center gap-6">
                    <img
                      src="/images/techclub-iic.png"
                      alt="Tech Club IIC"
                      className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>

                {/* Date */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                  className="pt-6"
                >
                  <div className="font-['Orbitron'] font-bold text-3xl md:text-5xl text-[#ff6b35] drop-shadow-lg">
                    11-12 <span className="text-white/20 text-2xl duration-300">|</span> MAR '26
                  </div>
                  <div className="text-white/40 font-['Rajdhani'] text-lg mt-1 tracking-widest uppercase">
                    The Ultimate Tech Odyssey
                  </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6"
                >
                  <Link to="/code-of-conduct">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300 flex items-center gap-2 group backdrop-blur-md"
                    >
                      <div className="skew-x-[10deg] flex items-center gap-2">
                        <span className="text-[#00ffff] text-lg">$</span>
                        REGISTER_NOW
                        <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.button>
                  </Link>

                  <motion.button
                    onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-white/20 rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-medium text-white/80 hover:text-[#a855f7] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  >
                    <div className="skew-x-[10deg] flex items-center gap-2">
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
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl border border-transparent backdrop-blur-sm flex items-center justify-center overflow-hidden">

                {/* Placeholder for 3D Element */}
                <div className="absolute inset-0">

                  {/* <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full flex items-center justify-center animate-pulse">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-[#00d4ff] text-lg font-mono">
                    <span className="text-[#00ffff]">//</span> 3D Element Space
                  </div>
                  
                  <div className="text-white/60 text-sm">
                    Interactive 3D Model Area
                  </div> */}
                  <Spline scene="https://prod.spline.design/p53BqoL7wUiPF6WM/scene.splinecode"

                  />


                </div>

                {/* Subtle grid pattern */}
                {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwZDRmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-30 rounded-2xl" /> */}
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
          <div className="flex justify-center">
            <div className="w-full max-w-5xl h-[420px]">
              <Carousel
                slides={highlights.map((item, i) => ({
                  key: i,
                  content: (
                    <div className="bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-xl p-8">
                      <div className={`p-4 rounded-lg bg-gradient-to-r ${item.gradient} inline-block mb-5`}>
                        <item.icon className="size-10 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold font-mono mb-3">
                        {item.title}
                      </h3>

                      <p className="text-white/70 mb-5">
                        {item.description}
                      </p>

                      <pre className="text-sm font-code bg-[#0a0a0a] border border-[#00d4ff]/20 rounded-lg p-4 text-white/80 whitespace-pre-wrap">
                        {item.codeSnippet}
                      </pre>
                    </div>
                  )
                }))}
                goToSlide={carouselIndex}
                offsetRadius={2}
                showNavigation={false}
                animationConfig={config.gentle}
              />
            </div>
          </div>

        </div>
      </section>


      {/* About Us Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#a855f7]/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> about_us.js
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent font-['Orbitron'] tracking-tight">
              About_Us
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-['Rajdhani'] leading-relaxed">
              Born from late-night coding sessions and coffee-fueled brainstorming at Brainware University. TEXIBITION is our way of saying: tech should be fun, chaotic, and utterly transformative.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] border border-[#00d4ff]/30 rounded-2xl backdrop-blur-sm overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#ec4899] rounded-2xl opacity-20 animate-pulse" />
                <div className="absolute inset-[2px] bg-[#0a0a0f] rounded-2xl" />

                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-6"
                  >
                    <Heart className="size-12 mx-auto text-[#ff6b35] mb-4" />
                    <h3 className="text-3xl font-bold font-['Orbitron'] text-white mb-4">Our Mission</h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
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
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#00d4ff]/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#a855f7]/15 rounded-full blur-2xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#ec4899]/25 rounded-full blur-lg animate-pulse delay-500" />

            {/* Organic Text Blocks */}
            <div className="space-y-16">
              {/* First Row */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex-1"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#00d4ff] font-mono text-sm mb-3">// innovation_driven</div>
                    <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-4">Innovation Driven</h3>
                    <p className="text-white/80 leading-relaxed">
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
                  className="flex-1 lg:mt-12"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#a855f7]/30 rounded-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#a855f7] font-mono text-sm mb-3">// community_focused</div>
                    <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-4">Community Focused</h3>
                    <p className="text-white/80 leading-relaxed">
                      We create meaningful connections between students, educators, and industry professionals.
                      TEXIBITION is where you'll build lasting relationships and find your place in the tech community.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="flex-1"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#ec4899]/30 rounded-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#ec4899] font-mono text-sm mb-3">// excellence_rewarded</div>
                    <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-4">Excellence Rewarded</h3>
                    <p className="text-white/80 leading-relaxed">
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
                  className="flex-1 lg:mt-8"
                >
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#00ffff]/30 rounded-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="text-[#00ffff] font-mono text-sm mb-3">// hands_on_learning</div>
                    <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-4">Hands-On Learning</h3>
                    <p className="text-white/80 leading-relaxed">
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
                className="max-w-2xl mx-auto"
              >
                <div className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] backdrop-blur-sm border border-[#fb923c]/30 rounded-2xl p-8 text-center">
                  <div className="text-[#fb923c] font-mono text-sm mb-3">// future_focused</div>
                  <h3 className="text-3xl font-bold font-['Orbitron'] text-white mb-4">Future Focused</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    TEXIBITION prepares participants for the technology landscape of tomorrow. Through exposure to
                    emerging technologies and industry trends, we empower the next generation of innovators.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Heart className="size-8 text-[#ff6b35] animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      {/* <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> impact_metrics.js
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              Impact_Metrics
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '₹60,000+', label: 'Prize Pool', icon: Trophy },
              { value: '3500+', label: 'Expected Participants', icon: Users },
              { value: '6', label: 'Exciting Events', icon: Terminal },
              { value: '48', label: 'Hours of Innovation', icon: Calendar },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 backdrop-blur-sm overflow-hidden hover:border-[#00d4ff]/60 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 text-center">
                      <Icon className="size-8 mx-auto mb-4 text-[#00d4ff]" />
                      <div className="text-2xl md:text-3xl font-bold font-mono bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-mono text-white/60 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> testimonials.js
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              Testimonials
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Sharma',
                role: 'Previous Participant',
                quote: 'The experience was incredible! I learned so much and made lifelong connections.',
                avatar: 'RS',
                gradient: 'from-[#00d4ff] to-[#00ffff]'
              },
              {
                name: 'Priya Patel',
                role: 'Winner 2025',
                quote: 'TechFest gave me the platform to showcase my skills and win the coding competition.',
                avatar: 'PP',
                gradient: 'from-[#a855f7] to-[#ec4899]'
              },
              {
                name: 'Arjun Kumar',
                role: 'Team Captain',
                quote: 'The hardware challenge was amazing. Building robots with my team was unforgettable.',
                avatar: 'AK',
                gradient: 'from-[#ec4899] to-[#f43f5e]'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 backdrop-blur-sm overflow-hidden hover:border-[#00d4ff]/60 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <Quote className="size-8 text-[#00d4ff] mb-4" />
                    <p className="text-white/70 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center font-bold text-white`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-[#00d4ff]">{testimonial.name}</div>
                        <div className="text-sm text-white/60">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Last Year Pictures Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> gallery_2025.js
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              Gallery_2025
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Hackathon Finals', desc: 'Teams presenting their innovative solutions' },
              { title: 'Gaming Arena', desc: 'Intense Valorant championship matches' },
              { title: 'Hardware Lab', desc: 'Robotics challenge in action' },
              { title: 'Award Ceremony', desc: 'Celebrating winners and achievements' },
              { title: 'Team Collaboration', desc: 'Working together on coding challenges' },
              { title: 'Innovation Showcase', desc: 'Displaying cutting-edge projects' }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0 }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-video rounded-lg overflow-hidden border border-[#00d4ff]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Terminal className="size-12 mx-auto mb-2 text-[#00d4ff]" />
                    <div className="font-mono text-[#00d4ff]">{image.title}</div>
                    <div className="text-sm text-white/60">{image.desc}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      {/* <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> social_connect.js
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              Connect_With_Us
            </h2>
            <p className="text-white/60">Follow us for updates and behind-the-scenes content</p>
          </motion.div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Instagram, label: 'Instagram', handle: '@techfest2026', gradient: 'from-[#ec4899] to-[#f43f5e]' },
              { icon: Twitter, label: 'Twitter', handle: '@TechFest2K26', gradient: 'from-[#00d4ff] to-[#00ffff]' },
              { icon: Youtube, label: 'YouTube', handle: 'TechFest 2K26', gradient: 'from-[#f43f5e] to-[#fb923c]' },
              { icon: Mail, label: 'Email', handle: 'contact@techfest.com', gradient: 'from-[#a855f7] to-[#00d4ff]' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-r ${social.gradient} backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                    <Icon className="size-8 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-lg px-3 py-1">
                      <div className="text-xs font-mono text-[#00d4ff] whitespace-nowrap">{social.handle}</div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

      </section> */}

      {/* CTA Section */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 md:p-1 rounded-3xl bg-gradient-to-br from-[#00d4ff]/30 to-[#a855f7]/30 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0f] m-[1px] rounded-[23px] z-0" />

            <div className="relative z-10 p-12 md:p-16 text-center">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-8">
                <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
                <span className="font-['Space_Grotesk'] text-[#00d4ff] text-xs tracking-widest uppercase">System Status: Online</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] text-white">
                <span className="text-[#00d4ff]">&lt;</span>
                READY_TO_JOIN?
                <span className="text-[#00d4ff]">/&gt;</span>
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-['Rajdhani'] font-medium tracking-wide">
                Initialize your potential. Register now to access the mainframe and compete in the ultimate tech odyssey.
              </p>

              <Link to="/code-of-conduct">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#a855f7]/20 border border-[#a855f7] rounded-none skew-x-[-10deg] font-['Space_Grotesk'] font-bold text-[#a855f7] hover:bg-[#a855f7]/30 transition-all duration-300 group inline-flex items-center gap-3"
                >
                  <div className="skew-x-[10deg] flex items-center gap-2">
                    <Terminal className="size-5" />
                    <span>INITIATE_REGISTRATION</span>
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </Link>
            </div>

            {/* Decorative Corner Lines */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#00d4ff]/50 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#a855f7]/50 rounded-br-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
