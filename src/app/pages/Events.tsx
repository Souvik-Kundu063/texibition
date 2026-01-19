import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Gamepad2, Cpu, Users, Clock, Trophy, ChevronRight, Terminal, Database, Zap, Monitor, Settings, Lightbulb } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  duration: string;
  teamSize: string;
  fee: string;
  category: 'game' | 'coding' | 'hardware' | 'prompting';
  day: string;
  time: string;
  icon: any;
  gradient: string;
  featured?: boolean;
  imagePath?: string;
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

];

export function Events() {
  const [activeTab, setActiveTab] = useState<'game' | 'coding' | 'hardware' | 'prompting'>('game');
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredEvents = events.filter(event => event.category === activeTab);
  const featuredEvent = events.find(e => e.featured);

  const toggleFlip = (eventId: string) => {
    setFlippedCard(prev => prev === eventId ? null : eventId);
  };

  const handleMouseEnter = (eventId: string) => {
    // Only flip on hover for desktop (screens larger than md)
    if (window.innerWidth >= 768) {
      setHoveredCard(eventId);
    }
  };

  const handleMouseLeave = (eventId: string) => {
    // Only unflip on mouse leave for desktop
    if (window.innerWidth >= 768) {
      setHoveredCard(null);
    }
  };

  return (

    <div className="min-h-screen bg-[#0a0a0f] text-white pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-12 lg:mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-2 sm:mb-4 text-xs sm:text-sm">
            <span className="text-[#00ffff]">$</span> ls events/
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            events.json
          </h1>

          <div className="font-code text-white/60 text-xs sm:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            <span className="text-[#a855f7]">const</span> events = <span className="text-[#00ffff]">[</span>
            <span className="ml-2 sm:ml-4 text-white/80">'game', 'coding', 'hardware', 'prompting'</span>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>


        {/* Featured Event */}
        {featuredEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 md:mb-16"
          >
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="relative rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 overflow-hidden">
                {/* Featured Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-[#00d4ff] text-[#0a0a0f] text-xs font-mono rounded-full z-10">
                  FEATURED
                </div>

                <div className="p-4">
                  {/* Terminal-style header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                    <div className="font-mono text-xs text-[#00d4ff] ml-2">
                      <span className="text-[#00ffff]">$</span> ./events/featured
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 font-mono text-[#00d4ff]">
                    {featuredEvent.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  {/* Stats in a compact horizontal layout */}
                  <div className="flex justify-between items-center mb-4 p-3 bg-[#0a0a0a]/50 rounded-lg border border-[#00d4ff]/20">
                    <div className="text-center flex-1">
                      <div className="text-xs font-mono text-white/60 uppercase tracking-wider">Duration</div>
                      <div className="font-mono font-semibold text-sm text-[#00d4ff]">{featuredEvent.duration}</div>
                    </div>
                    <div className="w-px h-8 bg-[#00d4ff]/20 mx-3"></div>
                    <div className="text-center flex-1">
                      <div className="text-xs font-mono text-white/60 uppercase tracking-wider">Team Size</div>
                      <div className="font-mono font-semibold text-sm text-[#00d4ff]">{featuredEvent.teamSize}</div>
                    </div>
                    <div className="w-px h-8 bg-[#00d4ff]/20 mx-3"></div>
                    <div className="text-center flex-1">
                      <div className="text-xs font-mono text-white/60 uppercase tracking-wider">Fee</div>
                      <div className="font-mono font-semibold text-sm text-[#00d4ff]">{featuredEvent.fee}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={`/events/${featuredEvent.id}`}>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-lg font-mono text-[#0a0a0f] font-semibold text-sm hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300"
                    >
                      <span className="text-[#0a0a0f]">$</span> view_details()
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
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

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                    <div>
                      <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm">
                        <span className="text-[#00ffff]">//</span> event_config
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-mono text-[#00d4ff]">
                        {featuredEvent.title}
                      </h2>


                      <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 rounded-lg p-3 sm:p-4 font-code text-xs sm:text-sm mb-4 sm:mb-6">
                        <div className="text-[#a855f7]">const</div>
                        <div className="text-white/80 ml-2 sm:ml-4">
                          event = {'{'} type: <span className="text-[#00ffff]">'coding'</span>, description: <span className="text-[#fbbf24]">'The ultimate coding challenge'</span>, difficulty: <span className="text-[#00d4ff]">'intermediate'</span> {'}'};
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="text-center p-2 sm:p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                          <Clock className="size-4 sm:size-5 mx-auto mb-1 sm:mb-2 text-[#00d4ff]" />
                          <div className="text-[10px] sm:text-xs font-mono text-white/60 uppercase tracking-wider">Duration</div>
                          <div className="font-mono font-semibold text-xs sm:text-sm">{featuredEvent.duration}</div>
                        </div>
                        <div className="text-center p-2 sm:p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                          <Users className="size-4 sm:size-5 mx-auto mb-1 sm:mb-2 text-[#00d4ff]" />
                          <div className="text-[10px] sm:text-xs font-mono text-white/60 uppercase tracking-wider">Team Size</div>
                          <div className="font-mono font-semibold text-xs sm:text-sm">{featuredEvent.teamSize}</div>
                        </div>

                        <div className="text-center p-2 sm:p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                          <Trophy className="size-4 sm:size-5 mx-auto mb-1 sm:mb-2 text-[#00d4ff]" />
                          <div className="text-[10px] sm:text-xs font-mono text-white/60 uppercase tracking-wider">Fee</div>
                          <div className="font-mono font-semibold text-xs sm:text-sm">{featuredEvent.fee}</div>
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

                    <div className="relative h-48 sm:h-64">
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
                        <Terminal className="size-12 sm:size-20 text-[#00d4ff]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}



        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto px-2">
          <div className="inline-flex p-1 rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 min-w-max">
            <button
              onClick={() => setActiveTab('game')}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${
                activeTab === 'game' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#00ffff]">//</span> game
            </button>
            <button
              onClick={() => setActiveTab('coding')}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${
                activeTab === 'coding' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#a855f7]">//</span> coding
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${
                activeTab === 'hardware' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#ec4899]">//</span> hardware
            </button>
            <button
              onClick={() => setActiveTab('prompting')}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${
                activeTab === 'prompting' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="text-[#fbbf24]">//</span> prompting
            </button>

          </div>
        </div>


        {/* Event Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {filteredEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}

                className="relative aspect-[3/4] sm:aspect-[3/4] [perspective:1000px] cursor-pointer"
                onClick={() => toggleFlip(event.id)}
                onMouseEnter={() => handleMouseEnter(event.id)}
                onMouseLeave={() => handleMouseLeave(event.id)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: (flippedCard === event.id || hoveredCard === event.id) ? 'rotateY(180deg)' : undefined,
                }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: (flippedCard === event.id || hoveredCard === event.id) ? 'rotateY(180deg)' : undefined,
                  }}
                >
                  {/* Front Side: Event Poster */}
                  <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden bg-[#0a0a0f]" style={{ backfaceVisibility: 'hidden' }}>
                    <img
                      src={event.imagePath || "/event/blitz.png"}
                      alt={event.title}
                      className="w-full h-full object-contain object-center bg-[#0a0a0f] transition-transform duration-500"
                    />
                    {/* Tap to flip hint - only show on mobile */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white text-[10px] font-mono md:hidden">
                      Tap to flip
                    </div>
                  </div>


                  {/* Back Side: Event Details */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                      {/* Terminal header */}
                      <div className="flex items-center gap-1 px-3 py-2 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5 hidden md:flex">
                        <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                        <div className="font-mono text-[10px] text-[#00d4ff] ml-2 truncate">
                          <span className="text-[#00ffff]">$</span> ./events/{event.id}
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 overflow-y-auto h-[calc(100%-40px)]">
                        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${event.gradient} mb-2 hidden md:inline-flex`}>
                          <Icon className="size-4 sm:size-5 text-white" />
                        </div>

                        <h3 className="text-sm sm:text-base font-bold mb-1 font-mono text-[#00d4ff]">{event.title}</h3>
                        <p className="text-white/70 text-[10px] sm:text-xs mb-3 leading-tight line-clamp-2">{event.description}</p>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-1 mb-3 hidden md:grid">
                          <div className="text-center p-1 rounded bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                            <Clock className="size-3 mx-auto mb-0.5 text-[#00d4ff]" />
                            <div className="text-[9px] font-mono text-white/60">{event.duration}</div>
                          </div>
                          <div className="text-center p-1 rounded bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                            <Users className="size-3 mx-auto mb-0.5 text-[#00d4ff]" />
                            <div className="text-[9px] font-mono text-white/60">{event.teamSize}</div>
                          </div>
                          <div className="text-center p-1 rounded bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                            <Trophy className="size-3 mx-auto mb-0.5 text-[#00d4ff]" />
                            <div className="text-[9px] font-mono text-white/60">{event.fee}</div>
                          </div>
                        </div>

                        {/* View Details Button */}
                        <Link 
                          to={`/events/${event.id}`}
                          className="block w-full py-2 px-3 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-lg text-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-[#00d4ff] font-mono text-xs flex items-center justify-center gap-1">
                            <span className="text-[#00ffff]">$</span>
                            view_details()
                            <ChevronRight className="size-3 md:inline hidden" />
                          </span>
                        </Link>

                        {/* Tap to flip back hint */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 text-[9px]">
                          Tap to flip back
                        </div>
                      </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
