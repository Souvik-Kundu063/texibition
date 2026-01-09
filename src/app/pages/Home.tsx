


import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ArrowRight, Sparkles, Code, Gamepad2, Cpu, Terminal, Database, Zap, Star, Heart, Quote, Instagram, Twitter, Github, Youtube, Mail, MapPin } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';

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

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section - Institutional Format */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />

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
                  className="flex flex-col items-center lg:items-start"
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
                  className="flex items-center justify-center lg:justify-start gap-4 py-2"
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
                   <div className="flex items-center justify-center lg:justify-start gap-2 text-white/60 font-['Rajdhani'] uppercase tracking-wider text-sm">
                    <Sparkles className="size-3 text-[#ff6b35]" />
                    <span>Organised By</span>
                   </div>
                   
                   <div className="flex items-center justify-center lg:justify-start gap-6">
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
                    27-28 <span className="text-white/20 text-2xl duration-300">|</span> FEB '26
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
              transition={{ duration: 1, delay: 0.3, type: "spring"}}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-[#00d4ff]/10 via-[#a855f7]/10 to-[#00ffff]/10 rounded-2xl border border-[#00d4ff]/30 backdrop-blur-sm flex items-center justify-center">
                
                {/* Placeholder for 3D Element */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full flex items-center justify-center animate-pulse">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-[#00d4ff] text-lg font-mono">
                    <span className="text-[#00ffff]">//</span> 3D Element Space
                  </div>
                  
                  <div className="text-white/60 text-sm">
                    Interactive 3D Model Area
                  </div>
                </div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwZDRmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-30 rounded-2xl" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-36 relative">
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
            <p className="text-white/60 text-lg">Don't miss the deadline - Register now!</p>
          </motion.div>
          
          <CountdownTimer />
        </div>
      </section>

      {/* Highlights Section */}
      <section id="events" className="py-36 relative">
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
              <span className="text-[#a855f7]">const</span> highlights = <span className="text-[#00ffff]">[
                'innovation', 'gaming', 'hardware'
              ]</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">

            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden hover:border-[#00d4ff]/60 transition-all duration-300">
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#00d4ff]/20">
                      <div className="w-3 h-3 rounded-full bg-[#f43f5e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#fbbf24]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                      <div className="font-mono text-xs text-[#00d4ff] ml-2">
                        <span className="text-[#00ffff]">$</span> ./events/{highlight.title.toLowerCase().replace(/\s+/g, '_')}
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${highlight.gradient} mb-4`}>
                        <Icon className="size-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 font-mono">{highlight.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-4 text-sm">{highlight.description}</p>
                      
                      {/* Code snippet */}
                      <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 rounded-lg p-4 font-code text-xs">
                        <div className="text-[#00d4ff] mb-1">// {highlight.title.toLowerCase().replace(/\s+/g, '_')}.js</div>
                        <div className="text-white/80 whitespace-pre-line">{highlight.codeSnippet}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </section>

      {/* About Us Section */}
      <section className="py-36 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> about_us.js
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              About_Us
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-lg p-8">
                <div className="font-mono text-[#00d4ff] mb-4">
                  <span className="text-[#00ffff]">//</span> mission_statement
                </div>
                <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 rounded-lg p-6 font-code text-sm">
                  <div className="text-[#a855f7]">const</div>
                  <div className="text-white/80 ml-4">
                    mission = {'{'}<br/>
                    <div className="ml-4">
                      goal: <span className="text-[#fbbf24]">'foster_tech_innovation'</span>,<br/>
                      focus: <span className="text-[#00ffff]">'collaborative_learning'</span>,<br/>
                      community: <span className="text-[#a855f7]">'tech_enthusiasts'</span>,<br/>
                      impact: <span className="text-[#00d4ff]">'empowering_future'</span>
                    </div>
                    {'}'};
                  </div>
                </div>
                <p className="text-white/70 mt-6 leading-relaxed">
                  TechFest 2K26 is more than just a competition—it's a celebration of innovation, creativity, and technological advancement. 
                  We bring together the brightest minds to collaborate, compete, and create the future of technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-6">
                <div className="bg-[#0a0a0f] border border-[#00d4ff]/30 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#a855f7]">
                      <Star className="size-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-mono text-[#00d4ff]">Innovation Hub</h3>
                  </div>
                  <p className="text-white/70">A platform where ideas transform into reality through cutting-edge technology.</p>
                </div>

                <div className="bg-[#0a0a0f] border border-[#a855f7]/30 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
                      <Users className="size-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-mono text-[#a855f7]">Community</h3>
                  </div>
                  <p className="text-white/70">Building connections that last beyond the event, creating lifelong partnerships.</p>
                </div>

                <div className="bg-[#0a0a0f] border border-[#ec4899]/30 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#ec4899] to-[#f43f5e]">
                      <Trophy className="size-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-mono text-[#ec4899]">Excellence</h3>
                  </div>
                  <p className="text-white/70">Recognizing and rewarding outstanding talent and innovative solutions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-36 relative">
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
      </section>

      {/* Testimonials Section */}
      <section className="py-36 relative">
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
      </section>

      {/* Last Year Pictures Section */}
      <section className="py-36 relative">
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
      <section className="py-36 relative">
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

      </section>

      {/* CTA Section */}
      <section className="py-36 relative">
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


      {/* Footer */}
      <footer className="py-36 relative border-t border-[#00d4ff]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="font-mono text-[#00d4ff] mb-4">
                <span className="text-[#00ffff]">//</span>  brand_info
              </div>
              <h3 className="text-xl font-bold font-mono text-[#00d4ff] mb-4">TEXIBITION 2K26</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                The ultimate tech experience bringing together innovation, gaming, and hardware challenges.
              </p>
            </div>
            
            <div>
              <div className="font-mono text-[#00d4ff] mb-4">
                <span className="text-[#00ffff]">//</span> quick_links
              </div>
              <ul className="space-y-2">
                {['Events', 'Register', 'Schedule', 'Team', 'FAQ'].map((link) => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase()}`} className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm group flex items-center gap-2">
                      <span className="text-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity">$</span> 
                      <span className="group-hover:translate-x-1 transition-transform">{link.toLowerCase()}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="font-mono text-[#00d4ff] mb-4">
                <span className="text-[#00ffff]">//</span> event_info
              </div>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-[#00d4ff]" />
                  <span>Feb 27-28, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#00d4ff]" />
                  <span>Tech Campus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-[#00d4ff]" />
                  <span>500+ Participants</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="font-mono text-[#00d4ff] mb-4">
                <span className="text-[#00ffff]">//</span> contact
              </div>
              <div className="space-y-3 text-sm text-white/60">
                <a href="mailto:contact@techfest.com" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors group">
                  <Mail className="size-4 group-hover:animate-pulse" />
                  <span>contact@techfest.com</span>
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors group">
                  <span className="text-[#00d4ff] group-hover:text-white transition-colors">#</span>
                  <span>+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* University and Tech Club Section */}
          <div className="border-t border-[#00d4ff]/20 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* University Section */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                  <img 
                    src="/images/bwulogo.png" 
                    alt="Brainware University" 
                    className="h-16 w-auto"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-[#00d4ff] font-mono text-xs mb-1">PRESENTS</p>
                    <p className="text-white font-bold tracking-widest">TEXIBITION 2K26</p>
                  </div>
              </div>
              
              {/* Tech Club Section */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-4">
                  <img 
                    src="/images/techclub-iic.png" 
                    alt="Tech Club IIC" 
                    className="h-14 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                   <div className="text-center md:text-right">
                    <p className="text-[#00d4ff] font-mono text-xs mb-1">ORGANISED BY</p>
                    <p className="text-white font-bold tracking-wide">TECH CLUB & IIC</p>
                  </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#00d4ff]/20 pt-8 text-center">
            <div className="font-mono text-[#00d4ff] mb-2 text-xs">
              <span className="text-[#00ffff]">//</span>  copyright_notice
            </div>
            <p className="text-white/40 text-xs">
              © 2026 TechFest. Built by the TechFest Team
            </p>
          </div>
        </div>
      </footer>


    </div>
  );
}
