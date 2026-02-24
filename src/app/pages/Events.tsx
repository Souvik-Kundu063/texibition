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
  // Gaming Events
   {
    id: 'xibit',
    title: '',
    description: 'The Ultimate Hackathon',
    duration: '8 hours',
    teamSize: '4 members max',
    fee: 'Free',
    category: 'coding',
    day: '11th March 2026',
    time: '9-4',
    icon: Code,
    gradient: 'from-[#00d4ff] to-[#00ffff]',
    featured: true,
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917410/xihibit_zua9al.jpg'
  },
  {
    id: 'free-fire',
    title: '',
    description: 'Free Fire is an action-packed battle royale tournament where squads compete for survival and dominance. Teams will drop into the battlefield, loot resources, and engage in intense combat while coordinating strategies in real time. Smart positioning, teamwork, and quick decision-making are crucial to reaching the final zone. Only the most tactical and disciplined squads will emerge victorious in this high-adrenaline gaming showdown.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '300 per team',
    category: 'game',
    day: '11th March 2026',
    time: '9-4',
    icon: Gamepad2,
    gradient: 'from-[#ec4899] to-[#f43f5e]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917408/freefire_owpfvh.jpg'
  },
  {
    id: 'bgmi',
    title: '',
    description: 'BGMI is a competitive battle royale gaming event where squads fight for the ultimate Chicken Dinner. Played on classic maps like Erangel, this event emphasizes team coordination, strategy, map awareness, and clutch gameplay. Every match demands smart rotations, effective communication, and calm execution under pressure, making it a must-participate event for serious mobile gamers.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '300 per team',
    category: 'game',
    day: '11th March 2026',
    time: '9-4',
    icon: Gamepad2,
    gradient: 'from-[#ec4899] to-[#f43f5e]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917411/pubg_mkwfl8.jpg'
  },
  {
    id: 'pes',
    title: '',
    description: 'PES is a 1v1 football gaming championship designed for players who want to showcase their virtual football skills. Participants compete in fast-paced matches where tactical awareness, precise controls, and quick reactions determine the outcome. Each match tests a player\'s ability to adapt strategies on the fly, making the competition intense, exciting, and highly engaging.',
    duration: '7 hours',
    teamSize: '1 person',
    fee: '50 per person',
    category: 'game',
    day: '11th March 2026',
    time: '9-4',
    icon: Gamepad2,
    gradient: 'from-[#fb923c] to-[#fbbf24]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917409/pes_mkz7xb.jpg'
  },
  {
    id: 'the-blitz',
    title: '',
    description: 'The Blitz is a fast-paced chess tournament where players compete under strict time constraints. With limited time on the clock, participants must rely on instinct, strategy, and sharp tactical awareness. This event tests both chess knowledge and mental agility, rewarding players who can think fast, stay focused, and capitalize on opponents\' mistakes.',
    duration: '5 hours',
    teamSize: '1 person',
    fee: '50 per person',
    category: 'game',
    day: '12th March 2026',
    time: '10-3',
    icon: Zap,
    gradient: 'from-[#f43f5e] to-[#fb923c]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917408/chess_gctpst.jpg'
  },
  {
    id: 'valorant',
    title: '',
    description: 'Valorant is a 5v5 tactical FPS tournament that blends precise gunplay with strategic agent abilities. Teams must coordinate attacks, defend sites, and execute well-planned strategies to outplay their opponents. Communication, map control, and teamwork are critical for success. From clutch rounds to coordinated team plays, this event delivers high-intensity competitive action.',
    duration: '5 hours',
    teamSize: '5 members max',
    fee: '300 per team',
    category: 'game',
    day: '11th March 2026',
    time: '10-3',
    icon: Gamepad2,
    gradient: 'from-[#f43f5e] to-[#fb923c]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917410/valorant_heilzl.jpg'
  },
  // Coding Events
  {
    id: 'the-blusters',
    title: '',
    description: 'The Blusters is an individual coding competition that focuses on logical thinking and programming fundamentals. Participants will solve a series of coding challenges within a fixed time frame using any programming language of their choice. The event rewards clarity of thought, accuracy, and efficient problem-solving, making it perfect for solo coders who want to test and prove their skills independently.',
    duration: '2 hours',
    teamSize: '1 person',
    fee: 'Free',
    category: 'coding',
    day: '12th March 2026',
    time: '11-1',
    icon: Code,
    gradient: 'from-[#00ffff] to-[#a855f7]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917409/bluster_k7v3qk.jpg'
  },
  // Hardware Events
  {
    id: 'the-architect',
    title: '',
    description: 'The Architect is an open-innovation hardware challenge where participants design and present their own hardware models or prototypes. There is no fixed problem statement, allowing complete creative freedom. Participants must explain the concept, working principle, and real-world application of their design. This event encourages hands-on engineering, innovation, and practical thinking.',
    duration: '3 hours',
    teamSize: '5 members max',
    fee: '500 per team',
    category: 'hardware',
    day: '12th March 2026',
    time: '11-2',
    icon: Cpu,
    gradient: 'from-[#a855f7] to-[#ec4899]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917409/architect_glmi2q.jpg'
  },
  // Prompting Event
  {
    id: 'the-prompters',
    title: '',
    description: 'The Prompters is an AI prompt-engineering challenge where participants craft precise and creative prompts to guide AI models toward accurate outputs. Given a task or reference image, participants must design prompts that produce the closest possible result. This event tests creativity, clarity of instruction, and understanding of how AI systems interpret and respond to prompts.',
    duration: '3 hours',
    teamSize: '2 members max',
    fee: '120 per team',
    category: 'prompting',
    day: '12th March 2026',
    time: '11-2',
    icon: Lightbulb,
    gradient: 'from-[#fbbf24] to-[#00d4ff]',
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917410/prompters_fi5vy1.jpg'
  },
];

export function Events() {
  const [activeTab, setActiveTab] = useState<'all' | 'game' | 'coding' | 'hardware' | 'prompting'>('all');

  const filteredEvents = activeTab === 'all' ? events : events.filter(event => event.category === activeTab);
  const featuredEvent = events.find(e => e.featured);

  return (

    <div className="min-h-screen bg-[#0a0a0f] text-white pt-16 sm:pt-24 pb-8 sm:pb-20">
      <div className="container mx-auto px-2 sm:px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 sm:mb-12 lg:mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-1 sm:mb-4 text-xs sm:text-sm">
            <span className="text-[#00ffff]">$</span> ls events/
          </div>
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            events.json
          </h1>

          <div className="font-code text-white/60 text-[10px] sm:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            <span className="text-[#a855f7]">const</span> events = <span className="text-[#00ffff]">[</span>
            <span className="ml-1 sm:ml-4 text-white/80">'game', 'coding', 'hardware', 'prompting'</span>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>


        {/* Tabs */}
        <div className="flex justify-start sm:justify-center mb-4 sm:mb-8 overflow-x-auto px-1 pb-2">
          <div className="inline-flex p-1 rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 min-w-max">
            <button
              onClick={() => setActiveTab('all')}
              className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === 'all' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
                }`}
            >
              <span className="text-[#00ffff]">//</span> all
            </button>
            <button
              onClick={() => setActiveTab('game')}
              className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === 'game' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
                }`}
            >
              <span className="text-[#00ffff]">//</span> game
            </button>
            <button
              onClick={() => setActiveTab('coding')}
              className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === 'coding' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
                }`}
            >
              <span className="text-[#a855f7]">//</span> coding
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === 'hardware' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
                }`}
            >
              <span className="text-[#ec4899]">//</span> hardware
            </button>
            <button
              onClick={() => setActiveTab('prompting')}
              className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === 'prompting' ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white/60 hover:text-white'
                }`}
            >
              <span className="text-[#fbbf24]">//</span> prompting
            </button>

          </div>
        </div>


        {/* Event Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 md:gap-6"
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
                whileHover={{ scale: 1.02 }}

                className="relative cursor-pointer rounded-lg lg:rounded-lg overflow-hidden bg-transparent lg:bg-[#0a0a0f] lg:border border-[#00d4ff]/30"
              >
                {/* Event Image */}
                <img
                  src={event.imagePath || "/event/blitz.png"}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto lg:h-full lg:object-contain object-center bg-transparent lg:bg-[#0a0a0f] transition-transform duration-300"
                />

                {/* Glassmorphism Bottom Section with Event Details */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-3 sm:p-3 flex items-center justify-center gap-2 sm:gap-3 z-10 flex-wrap"
                  style={{
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderTop: '1px solid rgba(0, 212, 255, 0.3)',
                  }}
                >
                  {/* Duration */}
                  <div className="flex items-center gap-1">
                    <Clock className="size-3 sm:size-3 text-[#00d4ff]" />
                    <span className="text-white text-xs sm:text-xs font-mono">{event.duration}</span>
                  </div>
                  
                  <span className="text-white/40 text-[8px]">|</span>
                  
                  {/* Team Size */}
                  <div className="flex items-center gap-1">
                    <Users className="size-3 sm:size-3 text-[#a855f7]" />
                    <span className="text-white text-xs sm:text-xs font-mono">{event.teamSize}</span>
                  </div>
                  
                  <span className="text-white/40 text-[8px]">|</span>
                  
                  {/* Entry Fee */}
                  <div className="flex items-center gap-1">
                    <Trophy className="size-3 sm:size-3 text-[#fbbf24]" />
                    <span className="text-white text-xs sm:text-xs font-mono">{event.fee}</span>
                  </div>
                </div>

                {/* Event Title */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                  <h3 className="text-sm sm:text-base font-bold font-mono text-[#00d4ff] drop-shadow-lg">{event.title}</h3>
                </div>

                {/* REGESTER Glassmorphism Button in Center */}
                <Link
                  to={`/events/${event.id}`}
                  className="absolute inset-0 flex items-center justify-center z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-mono font-bold text-white text-xs sm:text-base"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    VIEW DETAILS
                  </motion.button>
                </Link>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

