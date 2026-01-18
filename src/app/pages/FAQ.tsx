import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Mail, Instagram, MessageCircle } from 'lucide-react';

const faqs = [
  {

    question: 'When is TEXIBITION 2K26?',


    answer: 'TEXIBITION 2K26 will be held on March 11-12, 2026.',
  },
  {
    question: 'Who can participate?',

    answer: 'TEXIBITION 2K26 is open to all college students. You can participate individually or in teams, depending on the event requirements.',
  },
  {
    question: 'How do I register?',
    answer: 'Registration is done through Google Forms. Visit the Register page, select your events, and fill out the respective forms.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Yes, there is a nominal registration fee that varies by event. Details will be provided in the registration forms.',
  },
  {
    question: 'Can I participate in multiple events?',
    answer: 'Yes! You can register for multiple events as long as their timings don\'t clash. Check the schedule page for timing details.',
  },
  {
    question: 'What should I bring to the event?',
    answer: 'Bring your college ID, laptop (for technical events), chargers, and enthusiasm! Specific requirements will be mentioned in event details.',
  },
  {
    question: 'Are there prizes for winners?',
    answer: 'Yes! We have exciting cash prizes and certificates for winners across all events. Prize details are mentioned on the Events page.',
  },
  {
    question: 'Can teams have members from different colleges?',
    answer: 'Absolutely! Cross-college teams are encouraged. It\'s a great way to network and collaborate with students from other institutions.',
  },
  {
    question: 'What if I can\'t attend on both days?',
    answer: 'You can participate in events on either day. Day 1 is for gaming events and Day 2 for technical events.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs sm:text-sm">
            <span className="text-[#00ffff]">$</span> cat faq.json
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-mono">
            faq.json
          </h1>
          <div className="font-code text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-4">
            <span className="text-[#a855f7]">const</span> faqs = <span className="text-[#00ffff]">[</span><br/>
            <span className="text-white/80 ml-2 sm:ml-4">'event_info', 'registration', 'rules'</span><br/>
            <span className="text-[#00ffff]">]</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">

            <div className="font-mono text-[#00d4ff] mb-4 sm:mb-6 text-xs sm:text-sm">
              <span className="text-[#00ffff]">//</span> faq_questions.js
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-mono text-[#00d4ff]">FAQ_Questions</h2>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-[#a855f7]/5 border border-[#00d4ff]/30 backdrop-blur-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-[#00d4ff]/5 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="size-4 sm:size-5 text-[#00d4ff]" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/70 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm sticky top-24"
            >

              <div className="font-mono text-[#00d4ff] mb-4 sm:mb-6 text-xs sm:text-sm">
                <span className="text-[#00ffff]">$</span> ./contact.js
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-mono text-[#00d4ff]">contact.js</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:techclub@brainwareuniversity.ac.in"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#a855f7]">
                    <Mail className="size-4 sm:size-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-white/60">Email</div>
                    <div className="font-semibold text-xs sm:text-sm">techclub@brainwareuniversity.ac.in</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#a855f7]">
                    <MessageCircle className="size-4 sm:size-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-white/60">WhatsApp</div>
                    <div className="font-semibold text-xs sm:text-sm">+91 7718427880</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/texibition2k26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#a855f7]">
                    <Instagram className="size-4 sm:size-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-white/60">Instagram</div>
                    <div className="font-semibold text-xs sm:text-sm">@texibition2k26</div>
                  </div>
                </a>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/20">
                <p className="text-xs sm:text-sm text-white/70 text-center">
                  Have more questions? Feel free to reach out!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
