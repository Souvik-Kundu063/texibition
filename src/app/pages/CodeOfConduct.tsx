
import { motion } from 'motion/react';
import { Shield, Users, AlertTriangle, Scale, CheckCircle } from 'lucide-react';

export function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-4">
            <span className="text-[#00ffff]">$</span> cat code_of_conduct.md
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            Code of Conduct
          </h1>
          <div className="font-code text-white/60 text-lg max-w-2xl mx-auto">
            <span className="text-[#a855f7]">const</span> conduct = <span className="text-[#00ffff]">{'{'}
            </span><br/>
            <span className="ml-4 text-white/80">respect: true,</span><br/>
            <span className="ml-4 text-white/80">fairness: true,</span><br/>
            <span className="ml-4 text-white/80">safety: 'priority'</span><br/>
            <span className="text-[#00ffff]">{'}'}</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5">
              <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <div className="font-mono text-xs text-[#00d4ff] ml-2">
                <span className="text-[#00ffff]">$</span> ./conduct/introduction.md
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/80 leading-relaxed">
                All participants, volunteers, and attendees of TEXIBITION are expected to follow this Code of Conduct to ensure a safe, fair, and respectful environment.
              </p>
            </div>
          </motion.div>

          {/* General Conduct */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5">
              <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <div className="font-mono text-xs text-[#00d4ff] ml-2">
                <span className="text-[#00ffff]">$</span> ./conduct/general.js
              </div>
              <div className="ml-auto px-2 py-1 bg-[#00d4ff]/20 text-[#00d4ff] text-xs font-mono rounded">
                GENERAL
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 font-mono text-[#00d4ff]">🔹 General Conduct</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Participants must carry a valid college ID card at all times.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Respect fellow participants, volunteers, judges, organizers, and college property.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Any form of harassment, discrimination, abusive language, or misconduct will not be tolerated.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Follow instructions given by event coordinators and volunteers at all times.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Damage to college property or event equipment will result in immediate disqualification and possible penalties.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Fair Play & Integrity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5">
              <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <div className="font-mono text-xs text-[#00d4ff] ml-2">
                <span className="text-[#00ffff]">$</span> ./conduct/fair_play.js
              </div>
              <div className="ml-auto px-2 py-1 bg-[#00d4ff]/20 text-[#00d4ff] text-xs font-mono rounded">
                FAIR PLAY
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 font-mono text-[#00d4ff]">🔹 Fair Play & Integrity</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Cheating, plagiarism, hacking, or unfair practices in any event are strictly prohibited.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Use only allowed tools, software, and devices as per event rules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Any attempt to manipulate results or influence judges will lead to disqualification.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Safety & Responsibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5">
              <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <div className="font-mono text-xs text-[#00d4ff] ml-2">
                <span className="text-[#00ffff]">$</span> ./conduct/safety.js
              </div>
              <div className="ml-auto px-2 py-1 bg-[#00d4ff]/20 text-[#00d4ff] text-xs font-mono rounded">
                SAFETY
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 font-mono text-[#00d4ff]">🔹 Safety & Responsibility</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Participants are responsible for their personal belongings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>Unsafe behavior during hardware or ground events is strictly prohibited.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>The organizing committee is not responsible for loss or damage of personal items.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Decision Authority */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5">
              <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              <div className="font-mono text-xs text-[#00d4ff] ml-2">
                <span className="text-[#00ffff]">$</span> ./conduct/authority.js
              </div>
              <div className="ml-auto px-2 py-1 bg-[#00d4ff]/20 text-[#00d4ff] text-xs font-mono rounded">
                AUTHORITY
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 font-mono text-[#00d4ff]">🔹 Decision Authority</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>The decision of judges and organizing committee will be final and binding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                  <span>No arguments or disputes will be entertained after final decisions.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
