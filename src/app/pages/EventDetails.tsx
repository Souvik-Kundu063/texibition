import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';

interface EventFlowItem {
  time: string;
  activity: string;
}

interface Coordinator {
  name: string;
  email: string;
  phone: string;
}

interface EventData {
  title: string;
  description: string;
  duration: string;
  teamSize: string;
  fee: string;
  category: string;
  day: string;
  time: string;
  rules: string[];
  eligibility: EventFlowItem[];
  flow?: EventFlowItem[];
  coordinators: Coordinator[];
  imagePath?: string;
  registerLink: string;
}

const eventData: Record<string, EventData> = {
  'xibit': {
    title: 'Xibit',
    description: 'Xibit is a time-bound hackathon where teams are challenged with real-world problem statements revealed on the spot. Participants must brainstorm innovative ideas, plan their solution, and build a working prototype within the given time limit. The event focuses on creativity, problem-solving approach, feasibility, impact, and execution rather than pure coding complexity. Teams are free to choose their own tech stack and methodology, making Xibit ideal for developers, designers, and innovators who thrive under pressure and enjoy building practical solutions.',
    duration: '8 hours',
    teamSize: '4 members max',
    fee: 'Free',
    category: 'coding',
    day: '11th March 2026',
    time: '9-4',
    rules: [
      'Teams must consist of 2-4 members',
      'All team members must be college students',
      'Solutions must be coded during the event period',
      'Use of pre-existing code is not allowed',
      'Submissions must be made before the deadline',
      'All code submissions must include documentation',
    ],
    eligibility: [
      { time: '', activity: 'Team-based coding challenge' },
      { time: '', activity: 'Multiple algorithmic problems to solve' },
      { time: '', activity: 'Time-based evaluation and judging' },
    ],
    coordinators: [
      { name: 'SAYANTANI DUTTA', email: 'sayantanidutta.work@gmail.com', phone: '+91 9477518897' },
      { name: 'DEBASIS KHAMARI', email: 'debasiskhamari7@gmail.com', phone: '+91 9064906396' },
    ],
    imagePath: '/event/xihibit.jpg',
    registerLink: 'https://the-xibit.devfolio.co/'
  },
  'free-fire': {
    title: 'Free Fire',
    description: 'Free Fire is an action-packed battle royale tournament where squads compete for survival and dominance. Teams will drop into the battlefield, loot resources, and engage in intense combat while coordinating strategies in real time. Smart positioning, teamwork, and quick decision-making are crucial to reaching the final zone. Only the most tactical and disciplined squads will emerge victorious in this high-adrenaline gaming showdown.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '₹300 per team',
    category: 'game',
    day: '11th March 2026',
    time: '9-4',
    rules: [
      'Each squad must have exactly 5 members',
      'All players must have their own accounts',
      'Use of emulators is strictly prohibited',
      'Custom headshots and character outfits are allowed',
      'Lag-switching or any form of cheating results in disqualification',
      'Teams must report 15 minutes before their match',
    ],
    eligibility: [
      { time: '', activity: 'Team-based knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide finalists' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'Ankush Khan', email: 'khanankush483@gmail.com', phone: '+91 9064336298' },
      { name: 'PRABHAT KR ROUTH', email: 'prabhatkrrouth@gmail.com', phone: '+91 9332165957' },
    ],
    imagePath: '/event/freefire.jpg',
    registerLink: 'https://forms.gle/7uAwujMWLzXVqX519'
  },
  'bgmi': {
    title: 'BGMI',
    description: 'BGMI is a competitive battle royale gaming event where squads fight for the ultimate Chicken Dinner. Played on classic maps like Erangel, this event emphasizes team coordination, strategy, map awareness, and clutch gameplay. Every match demands smart rotations, effective communication, and calm execution under pressure, making it a must-participate event for serious mobile gamers.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '₹300 per team',
    category: 'game',
    day: '11th March 2026',
    time: '9-4',
    rules: [
      'Each squad must have exactly 5 members',
      'All players must have valid BGMI accounts',
      'Official tournament mode will be used',
      'Third-party applications or mods are prohibited',
      'Disconnection during match results in immediate elimination',
      'Teams must follow fair play guidelines',
    ],
    eligibility: [
      { time: '', activity: 'Team-based knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide finalists' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'ABHIK CHATTERJEE', email: 'abhikchatterjee879@gmail.com', phone: '+91 9733549955' },
      { name: 'PRITAM GHORAI', email: 'pritamghorai2006@gmail.com', phone: '+91 9382932972' },
    ],
    imagePath: '/event/pubg.jpg',
    registerLink: 'https://forms.gle/LHJmfoF3U9LUmtwB6'
  },
  'pes': {
    title: 'PES',
    description: 'PES is a 1v1 football gaming championship designed for players who want to showcase their virtual football skills. Participants compete in fast-paced matches where tactical awareness, precise controls, and quick reactions determine the outcome. Each match tests a player\'s ability to adapt strategies on the fly, making the competition intense, exciting, and highly engaging.',
    duration: '7 hours',
    teamSize: '1 person',
    fee: '₹50 per person',
    category: 'game',
    day: '11th March 2026',
    time: '9-4',
    rules: [
      'Each match is played in 1v1 format',
      'Full match duration will be followed',
      'Both players can select their preferred teams',
      'Custom tactics and formations are allowed',
      'Glitch exploits will result in disqualification',
      'Winner is decided by goals scored or penalty shootout',
    ],
    eligibility: [
      { time: '', activity: 'Team-based knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide finalists' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'AVIRUP GHOSH', email: 'avirupghosh751@gmail.com', phone: '+91 7003357906' },
    ],
    imagePath: '/event/pes.jpg',
    registerLink: 'https://forms.gle/eAU9gmLh7xAWevQi8'
  },
  'the-blitz': {
    title: 'The Blitz',
    description: 'The Blitz is a fast-paced chess tournament where players compete under strict time constraints. With limited time on the clock, participants must rely on instinct, strategy, and sharp tactical awareness. This event tests both chess knowledge and mental agility, rewarding players who can think fast, stay focused, and capitalize on opponents\' mistakes.',
    duration: '5 hours',
    teamSize: '1 person',
    fee: '₹50 per person',
    category: 'game',
    day: '12th March 2026',
    time: '10-3',
    rules: [
      'Individual participation only',
      'Tournament follows knockout format',
      'Each match has a strict time limit',
      'No practice time during tournament',
      'Decision of judges is final',
      'Technical issues on player side result in loss',
    ],
    eligibility: [
      { time: '', activity: 'Individual knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide winner' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'SOHAM GHOSH', email: 'sohamghosh1762@gmail.com', phone: '+91 6290187678' },
    ],
    imagePath: '/event/chess.jpg',
    registerLink: 'https://forms.gle/Z9eGfvSSxYrKFVTC9'
  },
  'valorant': {
    title: 'Valorant',
    description: 'Valorant is a 5v5 tactical FPS tournament that blends precise gunplay with strategic agent abilities. Teams must coordinate attacks, defend sites, and execute well-planned strategies to outplay their opponents. Communication, map control, and teamwork are critical for success. From clutch rounds to coordinated team plays, this event delivers high-intensity competitive action.',
    duration: '5 hours',
    teamSize: '5 members max',
    fee: '₹300 per team',
    category: 'game',
    day: '11th & 12th March 2026',
    time: '9-4',
    rules: [
      'Each team must have minimum 5 players',
      'Official competitive ruleset will be followed',
      'Use of any third-party software is banned',
      'Players must use their own accounts',
      'Lag-switching or cheating results in team disqualification',
      'Map veto system will be used',
    ],
    eligibility: [
      { time: '', activity: 'Team-based knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide finalists' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'DEEP CHATTERJEE', email: 'deeparduino@gmail.com', phone: '+91 6291661608' },
      { name: 'ABHISHEK BANERJEE', email: 'abhishekbaner5@gmail.com', phone: '+91 8642019746' },
    ],
    imagePath: '/event/valorant.jpg',
    registerLink: 'https://forms.gle/RzqZLTttyhC9xN3Z8'
  },
  'the-blusters': {
    title: 'The Blusters',
    description: 'The Blusters is an individual coding competition that focuses on logical thinking and programming fundamentals. Participants will solve a series of coding challenges within a fixed time frame using any programming language of their choice. The event rewards clarity of thought, accuracy, and efficient problem-solving, making it perfect for solo coders who want to test and prove their skills independently.',
    duration: '2 hours',
    teamSize: '1 person',
    fee: 'Free',
    category: 'coding',
    day: '12th March 2026',
    time: '11-1',
    rules: [
      'Individual participation only',
      'Participants can use any programming language',
      'Internet access for documentation only',
      'Plagiarism results in immediate disqualification',
      'All solutions must be submitted before deadline',
      'Judges decision is final',
    ],
    eligibility: [
      { time: '', activity: 'Individual coding rounds' },
      { time: '', activity: 'Multiple problem sets to solve' },
      { time: '', activity: 'Results announced after evaluation' },
    ],
    coordinators: [
      { name: 'SANCHITA KANDAR', email: 'sanchita.kandar1971@gmail.com', phone: '+91 9339483883' },
      { name: 'RITESH SINGH', email: 'muqadarkasikandar03@gmail.com', phone: '+91 8905485844' },
    ],
    imagePath: '/event/bluster.jpg',
    registerLink: 'https://forms.gle/CW46TPXuBZXPiwUy9'
  },
  'the-architect': {
    title: 'The Architect',
    description: 'The Architect is an open-innovation hardware challenge where participants design and present their own hardware models or prototypes. There is no fixed problem statement, allowing complete creative freedom. Participants must explain the concept, working principle, and real-world application of their design. This event encourages hands-on engineering, innovation, and practical thinking.',
    duration: '3 hours',
    teamSize: '5 members max',
    fee: '₹500 per team',
    category: 'hardware',
    day: '12th March 2026',
    time: '11-2',
    rules: [
      'Teams can have 2-5 members',
      'Basic components will be provided',
      'Additional components must be requested',
      'Design must be completed during event time',
      'Safety protocols must be followed',
      'Working prototype is required for submission',
    ],
    eligibility: [
      { time: '', activity: 'Team-based hardware challenge' },
      { time: '', activity: 'Build and test prototype' },
      { time: '', activity: 'Demonstration and evaluation' },
    ],
    coordinators: [
      { name: 'MOUPRIYA KUNDU', email: 'moupriyakundu139@gmail.com', phone: '+91 9832986918' },
      { name: 'ROUNAK BHANJA', email: 'rounak2002bhanja@gmail.com', phone: '+91 9830052068' },
    ],
    imagePath: '/event/architect.jpg',
    registerLink: 'https://forms.gle/AVxpiBS2BYVh6bv96'
  },
  'the-prompters': {
    title: 'The Prompters',
    description: 'The Prompters is an AI prompt-engineering challenge where participants craft precise and creative prompts to guide AI models toward accurate outputs. Given a task or reference image, participants must design prompts that produce the closest possible result. This event tests creativity, clarity of instruction, and understanding of how AI systems interpret and respond to prompts.',
    duration: '3 hours',
    teamSize: '2 members max',
    fee: '₹120 per team',
    category: 'prompting',
    day: '12th March 2026',
    time: '11-2',
    rules: [
      'Teams can have 1-2 members',
      'Only provided AI tools can be used',
      'Prompt engineering techniques encouraged',
      'Creativity and optimization are key',
      'Documentation of prompts required',
      'Final output must be presented',
    ],
    eligibility: [
      { time: '', activity: 'Team-based AI prompting challenge' },
      { time: '', activity: 'Multiple challenge rounds' },
      { time: '', activity: 'Presentations and evaluation' },
    ],
    coordinators: [
      { name: 'SENJUTI MONDAL', email: 'senjutim3@gmail.com', phone: '+91 7501558111' },
      { name: 'NEEL DAS', email: 'neeldas0032@gmail.com', phone: '+91 7384007265' },
    ],
    imagePath: '/event/prompters.jpg',
    registerLink: 'https://forms.gle/7zf3BnWwPMoNCiba8'
  },
};

export function EventDetails() {
  const { id } = useParams();

  const isXibit = id === 'xibit';

  useEffect(() => {
    if (isXibit) {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }
  }, [isXibit]);

  const event = eventData[id as string] || {
    title: 'Event Not Found',
    description: 'The requested event could not be found.',
    duration: 'N/A',
    teamSize: 'N/A',
    fee: 'N/A',
    category: 'unknown',
    day: 'N/A',
    time: 'N/A',
    rules: [],
    eligibility: [],
    flow: [],
    coordinators: [],
    registerLink: 'https://forms.google.com',
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-10 md:pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/events">
          <motion.button
            whileHover={{ x: -5 }}
            className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-5" />
            Back to Events
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Event Poster - On top for mobile, right side for desktop */}
            <div className="order-1 lg:order-2 w-full lg:w-1/3">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#00d4ff]/30 shadow-lg shadow-[#00d4ff]/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 z-10" />
                <img
                  src={event.imagePath || '/event/EVENTPOSTER.jpeg'}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text Content - Below poster for mobile, left side for desktop */}
            <div className="order-2 lg:order-1 flex-1">
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                {event.title}
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-6 md:mb-8">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {event.title === 'Xibit' && (
                  <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
                    <div className="text-sm text-white/60">Duration</div>
                    <div className="text-lg md:text-xl font-bold">{event.duration}</div>
                  </div>
                )}
                <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
                  <div className="text-sm text-white/60">Date</div>
                  <div className="text-lg md:text-xl font-bold">{event.day}</div>
                </div>
                <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
                  <div className="text-sm text-white/60">Team Size</div>
                  <div className="text-lg md:text-xl font-bold">{event.teamSize}</div>
                </div>
                <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
                  <div className="text-sm text-white/60">Fee</div>
                  <div className="text-lg md:text-xl font-bold">{event.fee}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Register CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Ready to Participate?</h3>
              {/* {isXibit ? (
                <div
                  className="apply-button w-full"
                  data-hackathon-slug="the-xibit"
                  data-button-theme="dark"
                  style={{ height: '44px' }}
                ></div> 
              ) : ( */}
              <>
                <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">Register now via Google Forms</p>
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button
                    className="relative w-full px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-[#a855f7]/20 border border-[#a855f7] font-['Space_Grotesk'] font-bold text-[#a855f7] hover:bg-[#a855f7]/30 transition-colors duration-300 group inline-flex items-center justify-center gap-2 md:gap-3"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >

                    <span className="text-sm md:text-base tracking-wider">REGISTER_NOW</span>
                    <ArrowRight className="size-4 md:size-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </>
              {/* )} */}
            </motion.div>

            {/* Event Coordinators - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:hidden p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Event Coordinators</h3>
              <div className="space-y-3 md:space-y-4">
                {event.coordinators.map((coordinator: Coordinator, index: number) => (
                  <div key={index} className="p-3 md:p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                    <div className="font-semibold text-sm md:text-base mb-2">{coordinator.name}</div>
                    <div className="space-y-1">
                      <a
                        href={`mailto:${coordinator.email}`}
                        className="flex items-center gap-2 text-xs md:text-sm text-white/70 hover:text-[#00d4ff] transition-colors"
                      >
                        <Mail className="size-3 md:size-4" />
                        {coordinator.email}
                      </a>
                      <a
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center gap-2 text-xs md:text-sm text-white/70 hover:text-[#00d4ff] transition-colors"
                      >
                        <Phone className="size-3 md:size-4" />
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Event Format */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 md:p-8 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Event Format</h2>
              <ul className="space-y-2 md:space-y-3">
                {event.eligibility.map((item: EventFlowItem, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 md:size-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-white/70">{item.activity}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Rules */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 md:p-8 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Rules & Guidelines</h2>
              <ul className="space-y-2 md:space-y-3">
                {event.rules.map((rule: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 md:size-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-white/70">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">
            {/* Event Coordinators - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Event Coordinators</h3>
              <div className="space-y-3 md:space-y-4">
                {event.coordinators.map((coordinator: Coordinator, index: number) => (
                  <div key={index} className="p-3 md:p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                    <div className="font-semibold text-sm md:text-base mb-2">{coordinator.name}</div>
                    <div className="space-y-1">
                      <a
                        href={`mailto:${coordinator.email}`}
                        className="flex items-center gap-2 text-xs md:text-sm text-white/70 hover:text-[#00d4ff] transition-colors"
                      >
                        <Mail className="size-3 md:size-4" />
                        {coordinator.email}
                      </a>
                      <a
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center gap-2 text-xs md:text-sm text-white/70 hover:text-[#00d4ff] transition-colors"
                      >
                        <Phone className="size-3 md:size-4" />
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
