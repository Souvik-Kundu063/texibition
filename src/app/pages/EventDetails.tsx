import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import { useRegistrationStatus } from '../hooks/useRegistrationStatus';

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
      { name: 'DEBASIS KHAMARI', email: 'debasiskhamari7@gmail.com', phone: '+91 9064906396' },
      { name: 'SAYANTANI DUTTA', email: 'sayantanidutta.work@gmail.com', phone: '+91 9477518897' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917410/xihibit_zua9al.jpg',
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
      "1. Event Format",
      "Team Structure: 4 Main Players + 1 Substitute (4+1).",
      "Match Types: Battle Royale (BR) + Clash Squad (CS).",
      "Qualification/Elimination based on overall match performance.",
      "Official Custom Rooms will be used.",
      "Room ID & Password shared before matches.",
      "BR Mode: Limited Ammo enabled.",
      "CS Mode: Skills & Loadouts OFF; Grenades & Smokes not allowed (Limited Ammo).",
      "2. Rules & Regulations",
      "Only Mobile Free Fire accounts allowed (No Emulator/PC).",
      "VPN, hacks, scripts, macros, and third-party apps are strictly banned.",
      "Cheating/unfair play leads to immediate team disqualification.",
      "Late entry may result in walkover.",
      "BR scoring based on placement + kills.",
      "All maps must be downloaded beforehand.",
      "Players must maintain sportsmanship.",
      "Coordinators’ decisions are final and binding.",
    ],
    eligibility: [
      { time: '', activity: 'Team-based knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide finalists' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'PRABHAT KR ROUTH', email: 'prabhatkrrouth@gmail.com', phone: '+91 9332165957' },
      { name: 'Ankush Khan', email: 'khanankush483@gmail.com', phone: '+91 9064336298' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917408/freefire_owpfvh.jpg',
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
      "1. Event Format",
      "Mode: Classic (TPP).",
      "Map: Erangel Only.",
      "Squad: 4 Main Players + 1 Optional Substitute.",
      "Tournament Structure:",
      "Qualifiers: 2 Matches",
      "Semi-Finals: 3 Matches",
      "Grand Finals: 2–3 Matches",
      "Minimum 2 players required in lobby to start.",
      "Substitution allowed only between matches.",
      "Room ID/Password shared 10 minutes before match.",
      "Reporting Time: 30 minutes before match.",
      "Match Gap: 15 minutes between matches.",
      "Scoring System:",
      "1st: 15 points, 2nd: 10 points, 3rd: 5 points.",
      "1 Kill = 1 Point.",
      "Tie-Breaker: Total Chicken Dinners > Total Finishes > Last Match Placement.",
      "2. Rules & Regulations",
      "Account Level must be 30+.",
      "Rank must be Gold I or above.",
      "Mobile devices only (No tablets, iPads, emulators, triggers).",
      "Registered IGN & Character ID must be used.",
      "Zero tolerance for GFX tools, hacks, teaming, or exploits.",
      "Screen recordings/screenshots may be requested.",
      "Only admins allowed as spectators.",
      "Late arrival → No slot reservation.",
      "Organizers’ decisions are final and binding.",
    ],
    eligibility: [
      { time: '', activity: 'Team-based knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide finalists' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'ABHIK CHATTERJEE', email: 'abhikchatterjee879@gmail.com', phone: '+91 9733549955' },
      { name: 'SAYAN ROY', email: 'roysamirroysamir9998@gmail.com', phone: '+91 9674363753' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917411/pubg_mkwfl8.jpg',
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
      "1. Event Format",
      "Mode: Offline / Local Multiplayer.",
      "Format: Single Elimination (Knockout).",
      "One-on-One matches.",
      "Match Duration: 10 minutes (5 min each half).",
      "Finals: 12 minutes (optional).",
      "Extra Time & Penalties: From Quarter-Finals onwards (or Finals only).",
      "Reporting Time: 10 minutes before match.",
      "2. Rules & Regulations",
      "Valid College ID mandatory.",
      "One registration per participant.",
      "No substitution after registration.",
      "No custom patches, cheats, or mods allowed.",
      "Pausing without permission may lead to disqualification.",
      "Abusive language/misconduct not tolerated.",
      "Disconnection: First half → Match restart; After halftime → Score continued.",
      "Intentional disconnection → Disqualification.",
      "Late reporting → Walkover.",
      "Referee/Organizer decisions are final.",
    ],
    eligibility: [
      { time: '', activity: 'Team-based knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide finalists' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'AVIRUP GHOSH', email: 'avirupghosh751@gmail.com', phone: '+91 7003357906' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917409/pes_mkz7xb.jpg',
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
      "1. Event Format",
      "Format: Knockout. Individual Event.",
      "Time Control: 5 minutes per player (Blitz).",
      "Chess clock mandatory.",
      "Pairings announced before each round.",
      "Colors (White/Black) allotted during event.",
      "Winning: 1 point, Draw: 0.5 each, Loss: 0 points.",
      "Tie-break: Blitz tie-breaker, Armageddon game.",
      "2. Rules & Regulations",
      "Standard FIDE Chess Rules will apply.",
      "Touch-move rule strictly enforced.",
      "Illegal Moves: First → Warning, Second → Loss of game.",
      "Silence must be maintained.",
      "No cheating or external assistance.",
      "No arguments with arbiter/opponent. No distractions.",
      "Must report 15 minutes before start.",
      "Late arrival may result in forfeiture.",
      "No food near boards (except water).",
      "Players encouraged to bring own chessboard.",
      "Arbiter/Organizing Committee decision is final.",
    ],
    eligibility: [
      { time: '', activity: 'Individual knockout rounds' },
      { time: '', activity: 'Multiple rounds to decide winner' },
      { time: '', activity: 'Room ID & password shared before matches' },
    ],
    coordinators: [
      { name: 'SOHAM GHOSH', email: 'sohamghosh1762@gmail.com', phone: '+91 6290187678' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917408/chess_gctpst.jpg',
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
      "1. Event Format",
      "Mode: Spike Rush.",
      "Team Composition: 5 Main Players (No mid-match substitutions).",
      "Format: Knockout (Single Elimination).",
      "Matches played as per official Spike Rush settings.",
      "Reporting Time: Teams must report before scheduled match time.",
      "Match lobby created and managed by organizers.",
      "Team must have full roster ready before match start.",
      "Match start time is strict; no delay for late players.",
      "2. Rules & Regulations",
      "Only registered players are allowed to participate.",
      "No account sharing allowed.",
      "Use of cheats, scripts, third-party software strictly prohibited.",
      "Glitch abuse results in disqualification.",
      "Players must maintain sportsmanship and discipline.",
      "Pausing without valid reason/admin approval is not allowed.",
      "Disconnection: Short technical pause allowed (Organizer decision).",
      "Repeated/intentional disconnection → Disqualification.",
      "Organizer/Admin decisions are final.",
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
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917410/valorant_heilzl.jpg',
    registerLink: 'https://forms.gle/RzqZLTttyhC9xN3Z8'
  },
  'the-blusters': {
    title: 'The Blusters',
    description: 'The Blusters is an individual coding competition that focuses on logical thinking and programming fundamentals. Participants will solve a series of coding challenges within a fixed time frame using any programming language of their choice. The event rewards clarity of thought, accuracy, and efficient problem-solving, making it perfect for solo coders who want to test and prove their skills independently. The competition consists of two phases - an online qualifier round and offline on-campus rounds.',
    duration: '2 Hours (Online Qualifier)',
    teamSize: '1 person',
    fee: 'Free',
    category: 'coding',
    day: '5th & 12th March 2026',
    time: 'Online: 6:00 PM - 8:00 PM | Offline: 10:00 AM - 2:00 PM',
    rules: [
      "Phase 1: Online Qualifier Round",
      "Date: 5th March 2026 | Time: 6:00 PM – 8:00 PM | Platform: GeeksforGeeks",
      "Duration: 2 Hours | Total Questions: 5 (2 Easy, 2 Medium, 1 Hard)",
      "Individual participation only. All registered participants will compete in the online qualifier.",
      "Based on overall ranking, the Top 60 participants will be shortlisted for the Offline Rounds.",
      "Ranking will be decided by score and time penalty (as per GeeksforGeeks contest rules).",
      "Shortlisted participants will receive an official confirmation email with complete details regarding the offline round.",
      "Phase 2: Offline Rounds (On-Campus)",
      "Date: 12th March 2026 | Venue: Brainware University, Barasat | Platform: GeeksforGeeks (using registered accounts)",
      "Only the Top 60 shortlisted participants from the Online Qualifier are eligible.",
      "Important Reporting Instructions",
      "Selected participants must report to the venue before 10:30 AM.",
      "The contest will begin strictly at 11:00 AM. No late entry will be allowed under any circumstances.",
      "Participants must carry: Valid College ID & Their GFG login credentials.",
      "Offline Round 1: Time: 11:00 AM – 12:00 PM | Participants: 60 | Questions: 3 (1 Easy, 2 Medium)",
      "Top 30 participants will qualify for the Final Round.",
      "Offline Round 2 (Final Round): Time: 01:00 PM – 02:00 PM | Participants: 30 | Questions: 3 (1 Easy, 1 Medium, 1 Hard)",
      "Winners will be decided based on performance in this round.",
      "Important Rules & Regulations",
      "Individual participation only.",
      "Same GeeksforGeeks account must be used for all rounds.",
      "PCs and internet will be provided for offline rounds.",
      "Personal laptops, mobile phones, and smart devices are strictly prohibited during offline rounds.",
      "Internet access is restricted to the contest platform only.",
      "Plagiarism or code copying will result in immediate disqualification.",
      "Multiple account usage is strictly prohibited.",
      "All submissions must be completed within the given time limit.",
      "Judges' decision will be final and binding.",
    ],
    eligibility: [
      { time: '5th March 2026, 6:00 PM', activity: 'Phase 1: Online Qualifier Round on GeeksforGeeks' },
      { time: '12th March 2026, 11:00 AM', activity: 'Phase 2: Offline Round 1 (Top 60 participants)' },
      { time: '12th March 2026, 1:00 PM', activity: 'Phase 2: Final Round (Top 30 participants)' },
    ],
    coordinators: [
      { name: 'SANCHITA KANDAR', email: 'sanchita.kandar1971@gmail.com', phone: '+91 9339483883' },
      { name: 'RITESH SINGH', email: 'muqadarkasikandar03@gmail.com', phone: '+91 8905485844' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917409/bluster_k7v3qk.jpg',
    registerLink: 'https://forms.gle/CW46TPXuBZXPiwUy9'
  },
  'the-architect': {
    title: 'The Architect',
    description: 'The Architect is an open-innovation hardware challenge where participants design and present their own hardware models or prototypes. There is no fixed problem statement, allowing complete creative freedom. Participants must explain the concept, working principle, and real-world application of their design. This event encourages hands-on engineering, innovation, and practical thinking. Teams build any hardware-based working model and demonstrate it live before judges.',
    duration: '3 hours',
    teamSize: '5 members max',
    fee: '₹500 per team',
    category: 'hardware',
    day: '12th March 2026',
    time: '10:00 AM - 2:00 PM',
    rules: [
      "Open Innovation Hardware Challenge.",
      "Teams build any hardware-based working model.",
      "Design, build, and test prototype.",
      "Live demonstration and explanation before judges.",
      "Evaluation based on innovation, practicality, and execution.",
      "Open to students from any department.",
      "Participants must report within the scheduled time (late entry not allowed).",
      "University will provide only space, tables, seating, and electricity.",
      "Teams must bring their own components, tools, and required materials.",
      "Only a working prototype will be evaluated.",
      "Teams must clearly explain problem statement, solution, and technical implementation.",
      "Unsafe designs or hazardous setups will not be allowed.",
      "Formal dress code must be followed (no jeans, caps, or sunglasses).",
      "Judges' decision will be final and binding.",
    ],
    eligibility: [
      { time: '12th March 2026, 11:00 AM', activity: 'Hardware model building and design' },
      { time: '12th March 2026, 12:00 PM', activity: 'Live demonstration before judges' },
      { time: '12th March 2026, 1:00 PM', activity: 'Evaluation and result announcement' },
    ],
    coordinators: [
      { name: 'MOUPRIYA KUNDU', email: 'moupriyakundu139@gmail.com', phone: '+91 9832986918' },
      { name: 'ROUNAK BHANJA', email: 'rounak2002bhanja@gmail.com', phone: '+91 9830052068' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917409/architect_glmi2q.jpg',
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
    time: '9-2',
    rules: [
      "Sections compete separately. Strict time limits.",
      "Late submissions not accepted.",
      "No official Wi-Fi provided (Use own internet).",
      "Internet must be used strictly for competition.",
      "Bring own devices (laptops/mobiles) with tools pre-installed.",
      "Eliminated teams must leave auditorium.",
      "Judges’ decisions are final.",
      "Evaluation: Software tools + manual judging.",
      "Plagiarism/unfair means → Immediate disqualification.",
      "Silence and discipline must be maintained.",
      "Anti-cheating policy strictly enforced.",
    ],
    eligibility: [
      { time: '', activity: "Round 1: Search-Based Image Challenge (Non-qualifying elimination)." },
      { time: '', activity: "Round 2: Technical Search Challenge (Top players qualify)." },
      { time: '', activity: "Round 3: Creative AI-Based Challenge (Judges decide winners)." },
    ],
    coordinators: [
      { name: 'SENJUTI MONDAL', email: 'senjutim3@gmail.com', phone: '+91 7501558111' },
      { name: 'NEEL DAS', email: 'neeldas0032@gmail.com', phone: '+91 7384007265' },
    ],
    imagePath: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771917410/prompters_fi5vy1.jpg',
    registerLink: 'https://forms.gle/7zf3BnWwPMoNCiba8'
  },
};

export function EventDetails() {
  const { id } = useParams();
  const { isOpen: isRegistrationOpen } = useRegistrationStatus();

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
        
        {/* YT video embed */}
        {isXibit && (
          <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col justify-center my-5">
            <h2 className="text-lg md:text-xl text-white/70 font-bold mb-6 text-center">
             Complete Registration Guide for Xibit
            </h2>
          
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/Si2js_7otno?rel=0&modestbranding=1"
                title="Xibit Hackathon Registration Guide"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
      )}

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Register CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                {isRegistrationOpen ? 'Ready to Participate?' : 'Registration Closed'}
              </h3>
              {/* {isXibit ? (
                <div
                  className="apply-button w-full"
                  data-hackathon-slug="the-xibit"
                  data-button-theme="dark"
                  style={{ height: '44px' }}
                ></div> 
              ) : ( */}
              <>
                {isRegistrationOpen ? (
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
                ) : (
                  <button
                    disabled
                    className="relative w-full px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-gray-600/20 border border-gray-500 font-['Space_Grotesk'] font-bold text-gray-400 cursor-not-allowed inline-flex items-center justify-center gap-2 md:gap-3"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <span className="text-sm md:text-base tracking-wider">REGISTRATION_CLOSED</span>
                  </button>
                )}
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
                {event.rules.map((rule: string, index: number) => {
                  const isHeader = /^\d+\./.test(rule);
                  return isHeader ? (
                    <li key={index} className="pt-4 first:pt-0 pb-2">
                      <h3 className="text-lg font-bold text-[#00d4ff]">{rule}</h3>
                    </li>
                  ) : (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 md:size-5 text-[#00d4ff] shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-white/70">{rule}</span>
                    </li>
                  );
                })}
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