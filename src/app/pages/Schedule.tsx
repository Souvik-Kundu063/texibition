import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

interface ScheduleItem {
  time: string;
  events: { name: string; type: 'technical' | 'gaming'; venue: string }[];
}


const day1Schedule: ScheduleItem[] = [
  {
    time: '09:00 AM',
    events: [
      { name: 'Free Fire - Registration (₹300/team)', type: 'gaming', venue: 'Gaming Zone A' },
      { name: 'BGMI - Registration (₹300/team)', type: 'gaming', venue: 'Gaming Zone B' },
      { name: 'PES - Individual Registration (₹50/person)', type: 'gaming', venue: 'Gaming Zone C' },
    ],
  },
  {
    time: '10:00 AM',
    events: [
      { name: 'The Blitz - Fast Gaming (₹50/person)', type: 'gaming', venue: 'Gaming Zone A' },
      { name: 'Valorant - 5v5 Matches (₹300/team)', type: 'gaming', venue: 'Gaming Zone B' },
    ],
  },
  {
    time: '01:00 PM',
    events: [{ name: 'Lunch Break', type: 'technical', venue: 'Cafeteria' }],
  },
  {
    time: '03:00 PM',
    events: [
      { name: 'Gaming Finals', type: 'gaming', venue: 'Main Stage' },
    ],
  },
  {
    time: '04:00 PM',
    events: [{ name: 'Day 1 Results & Awards', type: 'gaming', venue: 'Main Stage' }],
  },
];


const day2Schedule: ScheduleItem[] = [
  {
    time: '09:00 AM',
    events: [{ name: 'Xibit - Coding Challenge Registration (₹200/team)', type: 'technical', venue: 'Innovation Lab' }],
  },

  {
    time: '11:00 AM',
    events: [
      { name: 'The Blusters - Individual Coding (₹100/person)', type: 'technical', venue: 'Coding Arena' },
      { name: 'The Architect - Hardware Design (₹500/team)', type: 'technical', venue: 'Hardware Lab' },
      { name: 'The Prompters - AI Prompting (₹120/team)', type: 'technical', venue: 'AI Lab' },
    ],
  },
  {
    time: '01:00 PM',
    events: [{ name: 'Lunch Break', type: 'technical', venue: 'Cafeteria' }],
  },
  {
    time: '02:00 PM',
    events: [
      { name: 'Technical Events Progress & Preparation', type: 'technical', venue: 'Various Labs' },
    ],
  },
  {
    time: '04:00 PM',
    events: [{ name: 'Technical Events Submission Deadline', type: 'technical', venue: 'Lab Complex' }],
  },

  {
    time: '06:00 PM',
    events: [{ name: 'Grand Finale & Prize Distribution', type: 'technical', venue: 'Main Stage' }],
  },
];

export function Schedule() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm">
            <span className="text-[#00ffff]">$</span> ls schedule/
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            schedule.json
          </h1>
          <div className="font-code text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            <span className="text-[#a855f7]">const</span> schedule = <span className="text-[#00ffff]">[</span><br/>
            <span className="ml-2 sm:ml-4 text-white/80">'day1': gaming_events,</span><br/>
            <span className="ml-2 sm:ml-4 text-white/80">'day2': technical_events</span><br/>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[#ec4899] to-[#f43f5e]">
                <Calendar className="size-5 sm:size-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Day 1</h2>
                <p className="text-white/60 text-sm sm:text-base">February 27, 2026 - Gaming Day</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ec4899] to-[#f43f5e]" />
              
              <div className="space-y-4 sm:space-y-6">
                {day1Schedule.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative pl-12 sm:pl-20"
                  >
                    <div className="absolute left-0 p-2 sm:p-3 rounded-xl bg-[#ec4899]/20 border border-[#ec4899]/30 backdrop-blur-sm">
                      <Clock className="size-4 sm:size-5 text-[#ec4899]" />
                    </div>
                    
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#ec4899]/5 to-[#f43f5e]/5 border border-[#ec4899]/30 backdrop-blur-sm">
                      <div className="text-base sm:text-lg font-bold text-[#ec4899] mb-3 sm:mb-4">{item.time}</div>
                      <div className="space-y-2 sm:space-y-3">
                        {item.events.map((event, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div className="text-sm sm:text-base">
                              <div className="font-semibold mb-0.5">{event.name}</div>
                              <div className="text-white/60 text-xs sm:text-sm">{event.venue}</div>
                            </div>
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs ${
                              event.type === 'gaming'
                                ? 'bg-[#ec4899]/20 text-[#ec4899]'
                                : 'bg-[#00d4ff]/20 text-[#00d4ff]'
                            }`}>
                              {event.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#a855f7]">
                <Calendar className="size-5 sm:size-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Day 2</h2>
                <p className="text-white/60 text-sm sm:text-base">February 28, 2026 - Technical Day</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] to-[#a855f7]" />
              
              <div className="space-y-4 sm:space-y-6">
                {day2Schedule.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative pl-12 sm:pl-20"
                  >
                    <div className="absolute left-0 p-2 sm:p-3 rounded-xl bg-[#00d4ff]/20 border border-[#00d4ff]/30 backdrop-blur-sm">
                      <Clock className="size-4 sm:size-5 text-[#00d4ff]" />
                    </div>
                    
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm">
                      <div className="text-base sm:text-lg font-bold text-[#00d4ff] mb-3 sm:mb-4">{item.time}</div>
                      <div className="space-y-2 sm:space-y-3">
                        {item.events.map((event, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <div className="text-sm sm:text-base">
                              <div className="font-semibold mb-0.5">{event.name}</div>
                              <div className="text-white/60 text-xs sm:text-sm">{event.venue}</div>
                            </div>
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs ${
                              event.type === 'gaming'
                                ? 'bg-[#ec4899]/20 text-[#ec4899]'
                                : 'bg-[#00d4ff]/20 text-[#00d4ff]'
                            }`}>
                              {event.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
