import { motion } from 'motion/react';


const PreviousYearGallary = () => {
  return (
    <div>
          {/* Last Year Pictures Section */}
      <section className="py-10 sm:py-12 lg:py-10 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm">
              <span className="text-[#00ffff]">//</span> gallery_2025.js
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
              Gallery_2025
            </h2>
          </motion.div>

          {/* Mobile: Horizontal Scroll Snap Gallery */}
          <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            <div className="flex gap-3">
              {[
                { title: 'Hackathon Finals', desc: 'Teams presenting solutions', icon: Terminal },
                { title: 'Gaming Arena', desc: 'Valorant championships', icon: Gamepad2 },
                { title: 'Hardware Lab', desc: 'Robotics challenge', icon: Cpu },
                { title: 'Award Ceremony', desc: 'Celebrating winners', icon: Trophy },
                { title: 'Team Collab', desc: 'Coding together', icon: Users },
                { title: 'Innovation', desc: 'Cutting-edge projects', icon: Sparkles },
              ].map((item, index) => (
                <motion.div
                  key={`gallery-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  snap-center
                  className="snap-center flex-shrink-0 w-[280px] group relative rounded-xl overflow-hidden border border-[#00d4ff]/30 bg-[#0a0a0f]"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#0a0a0f] to-[#a855f7]/10" />

                  {/* Card Content */}
                  <div className="relative p-4">
                    {/* Icon */}
                    <div className="mb-3">
                      <div className="inline-flex items-center justify-center size-12 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30">
                        <item.icon className="size-6 text-[#00d4ff]" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-1">
                      <div className="font-mono text-sm text-[#00d4ff]">{item.title}</div>
                      <div className="text-xs text-white/60">{item.desc}</div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-5">
            {[
              { title: 'Hackathon Finals', desc: 'Teams presenting their innovative solutions', icon: Terminal },
              { title: 'Gaming Arena', desc: 'Intense Valorant championship matches', icon: Gamepad2 },
              { title: 'Hardware Lab', desc: 'Robotics challenge in action', icon: Cpu },
              { title: 'Award Ceremony', desc: 'Celebrating winners and achievements', icon: Trophy },
              { title: 'Team Collaboration', desc: 'Working together on coding challenges', icon: Users },
              { title: 'Innovation Showcase', desc: 'Displaying cutting-edge projects', icon: Sparkles },
            ].map((image, index) => (
              <motion.div
                key={`desktop-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-video rounded-lg overflow-hidden border border-[#00d4ff]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <image.icon className="size-10 mx-auto mb-2 text-[#00d4ff]" />
                    <div className="font-mono text-sm text-[#00d4ff]">{image.title}</div>
                    <div className="text-sm text-white/60">{image.desc}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PreviousYearGallary
