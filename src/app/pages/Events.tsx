

import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Gamepad2, Cpu, Users, Clock, Trophy, ChevronRight, Terminal, Database, Zap, Monitor, Presentation, Settings, Lightbulb } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  duration: string;
  teamSize: string;
  fee: string;
  category: 'game' | 'coding' | 'hardware' | 'prompting' | 'presentation';
  day: string;
  time: string;
  icon: any;
  gradient: string;
  featured?: boolean;
}

const events: Event[] = [
  // Featured Event
  {
    id: 'xibit',
    title: 'Xibit',
    description: 'The ultimate coding challenge where teams compete to solve complex algorithmic problems under time pressure.',
    duration: '7 hours',
    teamSize: '4 members max',
    fee: '200 per team',
    category: 'coding',
    day: 'Day 2',
    time: '9-4',
    icon: Code,
    gradient: 'from-[#00d4ff] to-[#00ffff]',
    featured: true,
  },
  // Gaming Events
  {
    id: 'free-fire',
    title: 'Free Fire',
    description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '300 per team',
    category: 'game',
    day: 'Day 1',
    time: '9-4',
    icon: Gamepad2,
    gradient: 'from-[#ec4899] to-[#f43f5e]',
  },
  {
    id: 'bgmi',
    title: 'BGMI',
    description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '300 per team',
    category: 'game',
    day: 'Day 1',
    time: '9-4',
    icon: Gamepad2,
    gradient: 'from-[#ec4899] to-[#f43f5e]',
  },
  {
    id: 'pes',
    title: 'PES',
    description: 'Pro Evolution Soccer championship. Show your football gaming skills in 1v1 matches.',
    duration: '7 hours',
    teamSize: '1 person',
    fee: '50 per team',
    category: 'game',
    day: 'Day 1',
    time: '9-4',
    icon: Gamepad2,
    gradient: 'from-[#fb923c] to-[#fbbf24]',
  },
  {
    id: 'the-blitz',
    title: 'The Blitz',
    description: 'Fast-paced gaming tournament. Quick reflexes and strategy win the day.',
    duration: '5 hours',
    teamSize: '1 person',
    fee: '50 per person',
    category: 'game',
    day: 'Day 1',
    time: '10-3',
    icon: Zap,
    gradient: 'from-[#f43f5e] to-[#fb923c]',
  },
  {
    id: 'valorant',
    title: 'Valorant',
    description: 'Tactical FPS action. Show your aim and strategy in intense 5v5 matches.',
    duration: '5 hours',
    teamSize: '5 members max',
    fee: '300 per team',
    category: 'game',
    day: 'Day 1',
    time: '10-3',
    icon: Gamepad2,
    gradient: 'from-[#f43f5e] to-[#fb923c]',
  },
  // Coding Events
  {
    id: 'the-blusters',
    title: 'The Blusters',
    description: 'Individual coding challenge. Solve programming problems and showcase your logical thinking.',
    duration: '2 hours',
    teamSize: '1 person',
    fee: '100 per student',
    category: 'coding',
    day: 'Day 2',
    time: '11-1',
    icon: Code,
    gradient: 'from-[#00ffff] to-[#a855f7]',
  },
  // Hardware Events
  {
    id: 'the-architect',
    title: 'The Architect',
    description: 'Hardware design and build challenge. Create innovative hardware solutions.',
    duration: '3 hours',
    teamSize: '5 members max',
    fee: '500 per team',
    category: 'hardware',
    day: 'Day 2',
    time: '11-2',
    icon: Cpu,
    gradient: 'from-[#a855f7] to-[#ec4899]',
  },
  {
    id: 'robo-race',
    title: 'Robo Race',
    description: 'Autonomous robot racing challenge. Test your robotics and programming skills.',
    duration: '5 hours',
    teamSize: '4 members max',
    fee: '400 per team',
    category: 'hardware',
    day: 'Day 1',
    time: '10-3',
    icon: Cpu,
    gradient: 'from-[#00d4ff] to-[#a855f7]',
  },
  // Prompting Event
  {
    id: 'the-prompters',
    title: 'The Prompters',
    description: 'AI prompting challenge. Create the most effective prompts for AI systems.',
    duration: '3 hours',
    teamSize: '2 members max',
    fee: '120 per team',
    category: 'prompting',
    day: 'Day 2',
    time: '11-2',
    icon: Lightbulb,
    gradient: 'from-[#fbbf24] to-[#00d4ff]',
  },
  // Presentation Event
  {
    id: 'ideathon',
    title: 'Ideathon',
    description: 'Innovation presentation challenge. Present your innovative ideas to judges.',
    duration: '6 hours',
    teamSize: '3 members max',
    fee: '100 per team',
    category: 'presentation',
    day: 'Day 2',
    time: '10-4',
    icon: Presentation,
    gradient: 'from-[#00d4ff] to-[#fbbf24]',
  },
];


export function Events() {
  const [activeTab, setActiveTab] = useState<'game' | 'coding' | 'hardware' | 'prompting' | 'presentation'>('game');

  const filteredEvents = events.filter(event => event.category === activeTab);
  const featuredEvent = events.find(e => e.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-4">
            <span className="text-[#00ffff]">$</span> ls events/
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            events.json
          </h1>

          <div className="font-code text-white/60 text-lg max-w-2xl mx-auto">
            <span className="text-[#a855f7]">const</span> events = <span className="text-[#00ffff]">[</span><br/>
            <span className="ml-4 text-white/80">'game', 'coding', 'hardware', 'prompting', 'presentation'</span><br/>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>


        {/* Featured Event */}
        {featuredEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-16"
          >
            <div className="relative rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-6 py-4 bg-[#00d4ff]/10 border-b border-[#00d4ff]/30">
                <div className="w-3 h-3 rounded-full bg-[#f43f5e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#fbbf24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                <div className="font-mono text-sm text-[#00d4ff] ml-4">
                  <span className="text-[#00ffff]">$</span> ./events/featured.js --highlight
                </div>
                <div className="ml-auto px-3 py-1 bg-[#00d4ff] text-[#0a0a0f] text-xs font-mono rounded">
                  FEATURED
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="font-mono text-[#00d4ff] mb-4">
                      <span className="text-[#00ffff]">//</span> event_config
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-[#00d4ff]">
                      {featuredEvent.title}
                    </h2>
                    

                    <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 rounded-lg p-4 font-code text-sm mb-6">
                      <div className="text-[#a855f7]">const</div>
                      <div className="text-white/80 ml-4">
                        event = {'{'}<br/>
                        <div className="ml-4">
                          type: <span className="text-[#00ffff]">'coding'</span>,<br/>
                          description: <span className="text-[#fbbf24]">'The ultimate coding challenge'</span>,<br/>
                          difficulty: <span className="text-[#00d4ff]">'intermediate'</span>
                        </div>
                        {'}'};
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      <div className="text-center p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                        <Clock className="size-5 mx-auto mb-2 text-[#00d4ff]" />
                        <div className="text-xs font-mono text-white/60 uppercase tracking-wider">Duration</div>
                        <div className="font-mono font-semibold">{featuredEvent.duration}</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                        <Users className="size-5 mx-auto mb-2 text-[#00d4ff]" />
                        <div className="text-xs font-mono text-white/60 uppercase tracking-wider">Team Size</div>
                        <div className="font-mono font-semibold">{featuredEvent.teamSize}</div>
                      </div>

                      <div className="text-center p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                        <Trophy className="size-5 mx-auto mb-2 text-[#00d4ff]" />
                        <div className="text-xs font-mono text-white/60 uppercase tracking-wider">Fee</div>
                        <div className="font-mono font-semibold">{featuredEvent.fee}</div>
                      </div>
                    </div>
                    
                    <Link to={`/events/${featuredEvent.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-lg font-mono text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="text-[#00ffff]">$</span>
                        view_details()
                        <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className="relative h-64">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 2, repeat: Infinity },
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20 rounded-lg blur-xl"
                    />
                    <div className="relative h-full flex items-center justify-center bg-[#0a0a0a] border border-[#00d4ff]/20 rounded-lg">
                      <Terminal className="size-20 text-[#00d4ff]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}



        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30">
            <button
              onClick={() => setActiveTab('game')}
              className={`relative px-6 py-3 rounded-lg font-mono text-sm transition-colors ${
                activeTab === 'game' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#00ffff]">//</span> game
            </button>
            <button
              onClick={() => setActiveTab('coding')}
              className={`relative px-6 py-3 rounded-lg font-mono text-sm transition-colors ${
                activeTab === 'coding' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#a855f7]">//</span> coding
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`relative px-6 py-3 rounded-lg font-mono text-sm transition-colors ${
                activeTab === 'hardware' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#ec4899]">//</span> hardware
            </button>
            <button
              onClick={() => setActiveTab('prompting')}
              className={`relative px-6 py-3 rounded-lg font-mono text-sm transition-colors ${
                activeTab === 'prompting' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#fbbf24]">//</span> prompting
            </button>
            <button
              onClick={() => setActiveTab('presentation')}
              className={`relative px-6 py-3 rounded-lg font-mono text-sm transition-colors ${
                activeTab === 'presentation' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#fb923c]">//</span> presentation
            </button>
          </div>
        </div>


        {/* Event Cards */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/events/${event.id}`}>
                  <div className="relative h-full rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden hover:border-[#00d4ff]/60 transition-all duration-300">
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5">
                      <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                      <div className="font-mono text-xs text-[#00d4ff] ml-2">
                        <span className="text-[#00ffff]">$</span> ./events/{event.id}
                      </div>
                    </div>
                    
                    <div className="relative z-10 p-6">
                      <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${event.gradient} mb-4`}>
                        <Icon className="size-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 font-mono text-[#00d4ff]">{event.title}</h3>
                      <p className="text-white/70 text-sm mb-6 leading-relaxed">{event.description}</p>
                      
                      {/* Code snippet */}
                      <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 rounded-lg p-3 font-code text-xs mb-6">
                        <div className="text-[#00d4ff] mb-2">// {event.id}.js</div>

                        <div className="text-white/80">
                          <span className="text-[#a855f7]">const</span> config = {'{'}<br/>
                          <div className="ml-4">
                            duration: <span className="text-[#00ffff]">'{event.duration}'</span>,<br/>
                            fee: <span className="text-[#fbbf24]">'{event.fee}'</span>
                          </div>
                          {'}'};
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 rounded bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                          <Clock className="size-4 mx-auto mb-1 text-[#00d4ff]" />
                          <div className="text-xs font-mono text-white/60">{event.duration}</div>
                        </div>
                        <div className="text-center p-2 rounded bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                          <Users className="size-4 mx-auto mb-1 text-[#00d4ff]" />
                          <div className="text-xs font-mono text-white/60">{event.teamSize}</div>
                        </div>

                        <div className="text-center p-2 rounded bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                          <Trophy className="size-4 mx-auto mb-1 text-[#00d4ff]" />
                          <div className="text-xs font-mono text-white/60">{event.fee}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[#00d4ff] font-mono text-sm group-hover:gap-3 transition-all">
                        <span className="text-[#00ffff]">$</span>
                        view_details()
                        <ChevronRight className="size-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
