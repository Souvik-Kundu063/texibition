import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Trophy, CheckCircle2, Mail, Phone } from 'lucide-react';

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
  flow: EventFlowItem[];
  coordinators: Coordinator[];
}

const eventData: Record<string, EventData> = {
  'xibit': {
    title: 'Xibit',
    description: 'The ultimate coding challenge where teams compete to solve complex algorithmic problems under time pressure.',
    duration: '7 hours',
    teamSize: '4 members max',
    fee: '₹200 per team',
    category: 'coding',
    day: 'Day 2',
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
    flow: [
      { time: '09:00 AM', activity: 'Registration & Team Formation' },
      { time: '09:30 AM', activity: 'Problem Statement Release' },
      { time: '10:00 AM', activity: 'Coding Challenge Begins' },
      { time: '01:00 PM', activity: 'Lunch Break' },
      { time: '04:00 PM', activity: 'Submission Deadline' },
      { time: '04:30 PM', activity: 'Code Review & Judging' },
      { time: '06:00 PM', activity: 'Results & Prize Distribution' },
    ],
    coordinators: [
      { name: 'Rahul Sharma', email: 'rahul@techfest.com', phone: '+91 98765 43210' },
      { name: 'Priya Patel', email: 'priya@techfest.com', phone: '+91 98765 43211' },
    ],
  },
  'free-fire': {
    title: 'Free Fire',
    description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory in the most intense gaming tournament.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '₹300 per team',
    category: 'game',
    day: 'Day 1',
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
    flow: [
      { time: '09:00 AM', activity: 'Team Registration & Verification' },
      { time: '09:30 AM', activity: 'Warm-up Matches' },
      { time: '10:00 AM', activity: 'Group Stage Matches Begin' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '01:30 PM', activity: 'Semi-Finals' },
      { time: '03:00 PM', activity: 'Grand Finals' },
      { time: '04:00 PM', activity: 'Prize Distribution' },
    ],
    coordinators: [
      { name: 'Amit Kumar', email: 'amit@techfest.com', phone: '+91 98765 43220' },
      { name: 'Sneha Gupta', email: 'sneha@techfest.com', phone: '+91 98765 43221' },
    ],
  },
  'bgmi': {
    title: 'BGMI',
    description: 'Battle royale gaming at its finest. Compete in squads for ultimate victory in this tactical shooter championship.',
    duration: '7 hours',
    teamSize: '5 members max',
    fee: '₹300 per team',
    category: 'game',
    day: 'Day 1',
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
    flow: [
      { time: '09:00 AM', activity: 'Team Registration & Account Verification' },
      { time: '09:30 AM', activity: 'Practice Session' },
      { time: '10:00 AM', activity: 'Group Stage Matches' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '01:30 PM', activity: 'Knockout Stage' },
      { time: '03:00 PM', activity: 'Finals' },
      { time: '04:00 PM', activity: 'Prize Distribution' },
    ],
    coordinators: [
      { name: 'Rohan Singh', email: 'rohan@techfest.com', phone: '+91 98765 43230' },
      { name: 'Anjali Verma', email: 'anjali@techfest.com', phone: '+91 98765 43231' },
    ],
  },
  'pes': {
    title: 'PES',
    description: 'Pro Evolution Soccer championship. Show your football gaming skills in intense 1v1 matches and prove you are the ultimate champion.',
    duration: '7 hours',
    teamSize: '1 person',
    fee: '₹50 per team',
    category: 'game',
    day: 'Day 1',
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
    flow: [
      { time: '09:00 AM', activity: 'Player Registration' },
      { time: '09:30 AM', activity: 'Group Stage Matches Begin' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Quarter Finals' },
      { time: '02:30 PM', activity: 'Semi Finals' },
      { time: '03:30 PM', activity: 'Grand Finals' },
      { time: '04:00 PM', activity: 'Prize Distribution' },
    ],
    coordinators: [
      { name: 'Vikram Patel', email: 'vikram@techfest.com', phone: '+91 98765 43240' },
      { name: 'Meera Reddy', email: 'meera@techfest.com', phone: '+91 98765 43241' },
    ],
  },
  'the-blitz': {
    title: 'The Blitz',
    description: 'Fast-paced gaming tournament that tests your reflexes and strategy. Quick thinking wins the day in this adrenaline-pumping challenge.',
    duration: '5 hours',
    teamSize: '1 person',
    fee: '₹50 per person',
    category: 'game',
    day: 'Day 1',
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
    flow: [
      { time: '10:00 AM', activity: 'Player Registration' },
      { time: '10:30 AM', activity: 'Round 1 - Quick Fire Matches' },
      { time: '11:30 AM', activity: 'Round 2 - Quarter Finals' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Semi Finals' },
      { time: '02:00 PM', activity: 'Grand Finals' },
      { time: '03:00 PM', activity: 'Prize Distribution' },
    ],
    coordinators: [
      { name: 'Arjun Nair', email: 'arjun@techfest.com', phone: '+91 98765 43250' },
      { name: 'Pooja Sharma', email: 'pooja@techfest.com', phone: '+91 98765 43251' },
    ],
  },
  'valorant': {
    title: 'Valorant',
    description: 'Tactical FPS action. Show your aim and strategy in intense 5v5 matches. Precision and teamwork are the keys to victory.',
    duration: '5 hours',
    teamSize: '5 members max',
    fee: '₹300 per team',
    category: 'game',
    day: 'Day 1',
    time: '10-3',
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
    flow: [
      { time: '10:00 AM', activity: 'Team Registration & Setup' },
      { time: '10:30 AM', activity: 'Map Selection & Warm-up' },
      { time: '11:00 AM', activity: 'Group Stage Matches' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Semi Finals' },
      { time: '02:00 PM', activity: 'Grand Finals' },
      { time: '03:00 PM', activity: 'Prize Distribution' },
    ],
    coordinators: [
      { name: 'Karthik Menon', email: 'karthik@techfest.com', phone: '+91 98765 43260' },
      { name: 'Riya Kapoor', email: 'riya@techfest.com', phone: '+91 98765 43261' },
    ],
  },
  'the-blusters': {
    title: 'The Blusters',
    description: 'Individual coding challenge. Solve programming problems and showcase your logical thinking in this intense solo competition.',
    duration: '2 hours',
    teamSize: '1 person',
    fee: '₹100 per student',
    category: 'coding',
    day: 'Day 2',
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
    flow: [
      { time: '11:00 AM', activity: 'Registration & System Setup' },
      { time: '11:15 AM', activity: 'Problem Statement Distribution' },
      { time: '11:30 AM', activity: 'Coding Challenge Begins' },
      { time: '12:30 PM', activity: 'Submission Deadline' },
      { time: '12:45 PM', activity: 'Code Review' },
      { time: '01:00 PM', activity: 'Results & Prize Distribution' },
    ],
    coordinators: [
      { name: 'Sanjay Rao', email: 'sanjay@techfest.com', phone: '+91 98765 43270' },
      { name: 'Lakshmi Iyer', email: 'lakshmi@techfest.com', phone: '+91 98765 43271' },
    ],
  },
  'the-architect': {
    title: 'The Architect',
    description: 'Hardware design and build challenge. Create innovative hardware solutions and bring your engineering concepts to life.',
    duration: '3 hours',
    teamSize: '5 members max',
    fee: '₹500 per team',
    category: 'hardware',
    day: 'Day 2',
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
    flow: [
      { time: '11:00 AM', activity: 'Team Registration & Kit Distribution' },
      { time: '11:30 AM', activity: 'Problem Statement & Design Brief' },
      { time: '12:00 PM', activity: 'Hardware Building Begins' },
      { time: '01:00 PM', activity: 'Lunch Break' },
      { time: '01:30 PM', activity: 'Testing & Refinement' },
      { time: '02:00 PM', activity: 'Final Demonstration' },
      { time: '02:30 PM', activity: 'Results & Prize Distribution' },
    ],
    coordinators: [
      { name: 'Pradeep Krishnan', email: 'pradeep@techfest.com', phone: '+91 98765 43280' },
      { name: 'Anitha Das', email: 'anitha@techfest.com', phone: '+91 98765 43281' },
    ],
  },
  'robo-race': {
    title: 'Robo Race',
    description: 'Autonomous robot racing challenge. Test your robotics and programming skills in this ultimate engineering competition.',
    duration: '5 hours',
    teamSize: '4 members max',
    fee: '₹400 per team',
    category: 'hardware',
    day: 'Day 1',
    time: '10-3',
    rules: [
      'Teams must have 2-4 members',
      'Pre-built autonomous robots allowed',
      'Robot must fit in specified dimensions',
      'Batteries and power sources must be safe',
      'Track rules must be followed strictly',
      'Collision with other robots is prohibited',
    ],
    eligibility: [
      { time: '', activity: 'Team-based robot racing' },
      { time: '', activity: 'Qualifying and knockout rounds' },
      { time: '', activity: 'Track inspection and testing' },
    ],
    flow: [
      { time: '10:00 AM', activity: 'Team Registration & Robot Inspection' },
      { time: '10:30 AM', activity: 'Track Walk & Rules Briefing' },
      { time: '11:00 AM', activity: 'Qualifying Rounds' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Semi Finals' },
      { time: '02:00 PM', activity: 'Grand Finals' },
      { time: '03:00 PM', activity: 'Prize Distribution' },
    ],
    coordinators: [
      { name: 'Naveen Kumar', email: 'naveen@techfest.com', phone: '+91 98765 43290' },
      { name: 'Divya Murugan', email: 'divya@techfest.com', phone: '+91 98765 43291' },
    ],
  },
  'the-prompters': {
    title: 'The Prompters',
    description: 'AI prompting challenge. Create the most effective prompts for AI systems and showcase the art of human-AI collaboration.',
    duration: '3 hours',
    teamSize: '2 members max',
    fee: '₹120 per team',
    category: 'prompting',
    day: 'Day 2',
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
    flow: [
      { time: '11:00 AM', activity: 'Registration & Tool Introduction' },
      { time: '11:30 AM', activity: 'Challenge 1: Basic Prompting' },
      { time: '12:00 PM', activity: 'Challenge 2: Creative Optimization' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '01:00 PM', activity: 'Final Challenge: Complex Scenarios' },
      { time: '01:45 PM', activity: 'Presentations' },
      { time: '02:00 PM', activity: 'Results & Prize Distribution' },
    ],
    coordinators: [
      { name: 'Shreya Ghosh', email: 'shreya@techfest.com', phone: '+91 98765 43300' },
      { name: 'Madhavan Pillai', email: 'madhavan@techfest.com', phone: '+91 98765 43301' },
    ],
  },
  'ideathon': {
    title: 'Ideathon',
    description: 'Innovation presentation challenge. Present your innovative ideas to judges and compete for the best startup concept.',
    duration: '6 hours',
    teamSize: '3 members max',
    fee: '₹100 per team',
    category: 'presentation',
    day: 'Day 2',
    time: '10-4',
    rules: [
      'Teams can have 1-3 members',
      'Ideas must be original and feasible',
      'Presentation time: 5-7 minutes per team',
      'Q&A session: 3-5 minutes',
      'Slides and prototypes encouraged',
      'Market analysis and business model required',
    ],
    eligibility: [
      { time: '', activity: 'Team-based innovation challenge' },
      { time: '', activity: 'Idea generation and development' },
      { time: '', activity: 'Pitch presentations to judges' },
    ],
    flow: [
      { time: '10:00 AM', activity: 'Registration & Team Briefing' },
      { time: '10:30 AM', activity: 'Idea Generation Session' },
      { time: '11:30 AM', activity: 'Development & Preparation' },
      { time: '01:00 PM', activity: 'Lunch Break' },
      { time: '02:00 PM', activity: 'Pitch Presentations Begin' },
      { time: '03:30 PM', activity: 'Q&A & Judging' },
      { time: '04:00 PM', activity: 'Results & Prize Distribution' },
    ],
    coordinators: [
      { name: 'Harish Babu', email: 'harish@techfest.com', phone: '+91 98765 43310' },
      { name: 'Kavitha Raj', email: 'kavitha@techfest.com', phone: '+91 98765 43311' },
    ],
  },
};

export function EventDetails() {
  const { id } = useParams();

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
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
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
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
            {event.title}
          </h1>
          <p className="text-xl text-white/70 mb-8">{event.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
              <Clock className="size-6 text-[#00d4ff] mb-2" />
              <div className="text-sm text-white/60">Duration</div>
              <div className="text-xl font-bold">{event.duration}</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
              <Users className="size-6 text-[#00d4ff] mb-2" />
              <div className="text-sm text-white/60">Team Size</div>
              <div className="text-xl font-bold">{event.teamSize}</div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30">
              <Trophy className="size-6 text-[#00d4ff] mb-2" />
              <div className="text-sm text-white/60">Fee</div>
              <div className="text-xl font-bold">{event.fee}</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Rules */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Rules & Guidelines</h2>
              <ul className="space-y-3">
                {event.rules.map((rule: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <span className="text-white/70">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Event Format */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Event Format</h2>
              <ul className="space-y-3">
                {event.eligibility.map((item: EventFlowItem, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#00d4ff] shrink-0 mt-0.5" />
                    <span className="text-white/70">{item.activity}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Event Flow */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Event Flow</h2>
              <div className="space-y-4">
                {event.flow.map((item: EventFlowItem, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-10 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      {index < event.flow.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-[#00d4ff] to-[#a855f7] my-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-sm text-[#00d4ff] font-semibold mb-1">{item.time}</div>
                      <div className="text-white/70">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Register CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24 p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Ready to Participate?</h3>
              <p className="text-white/70 mb-6">Register now via Google Forms</p>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-xl font-semibold hover:shadow-xl hover:shadow-[#00d4ff]/50 transition-shadow"
                >
                  Register via Google Form
                </motion.button>
              </a>
            </motion.div>

            {/* Coordinators */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Event Coordinators</h3>
              <div className="space-y-4">
                {event.coordinators.map((coordinator: Coordinator, index: number) => (
                  <div key={index} className="p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                    <div className="font-semibold mb-2">{coordinator.name}</div>
                    <div className="space-y-1">
                      <a
                        href={`mailto:${coordinator.email}`}
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-[#00d4ff] transition-colors"
                      >
                        <Mail className="size-4" />
                        {coordinator.email}
                      </a>
                      <a
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-[#00d4ff] transition-colors"
                      >
                        <Phone className="size-4" />
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

