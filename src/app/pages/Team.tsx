import { motion } from 'motion/react';
import { Users } from 'lucide-react';

const team = [
  { name: 'Rahul Sharma', role: 'Event Head' },
  { name: 'Priya Patel', role: 'Technical Head' },
  { name: 'Arjun Kumar', role: 'Gaming Head' },
  { name: 'Sneha Reddy', role: 'Sponsorship Head' },
  { name: 'Vikram Singh', role: 'Marketing Head' },
  { name: 'Ananya Iyer', role: 'Logistics Head' },
  { name: 'Karthik Menon', role: 'Web Development' },
  { name: 'Divya Nair', role: 'Design Head' },
  { name: 'Rohan Gupta', role: 'PR Head' },
  { name: 'Meera Shah', role: 'Content Head' },
  { name: 'Aditya Joshi', role: 'Finance Head' },
  { name: 'Shreya Das', role: 'Hospitality Head' },
];

export function Team() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-4">
            <span className="text-[#00ffff]">$</span> ls team/
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            team.json
          </h1>
          <div className="font-code text-white/60 text-lg max-w-2xl mx-auto">
            <span className="text-[#a855f7]">const</span> team = <span className="text-[#00ffff]">[</span><br/>
            <span className="ml-4 text-white/80">'developers', 'designers', 'organizers'</span><br/>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/0 to-[#a855f7]/0 group-hover:from-[#00d4ff]/10 group-hover:to-[#a855f7]/10 transition-all duration-300" />
                
                <div className="relative z-10 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#a855f7] flex items-center justify-center">
                    <Users className="size-10 text-white" />
                  </div>
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-white/60">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
