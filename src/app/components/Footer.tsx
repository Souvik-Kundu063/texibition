
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 relative border-t border-[#00d4ff]/20 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> Fest_info
            </div>
            <h3 className="text-xl font-bold font-mono text-[#00d4ff] mb-4">TEXIBITION 2K26</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              The ultimate tech experience bringing together innovation, gaming, and hardware challenges.
            </p>
          </div>

          <div>
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> Quick_links
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Events', path: '/events' },
                { label: 'Schedule', path: '/schedule' },
                { label: 'Team', path: '/team' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Code of Conduct', path: '/code-of-conduct' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm group flex items-center gap-2">
                    <span className="text-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity">$</span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label.toLowerCase().replace(/ /g, '_')}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> Event_info
            </div>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-[#00d4ff]" />
                <span>MAR 11-12, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-[#00d4ff]" />
                <span>Brainware University</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-[#00d4ff]" />
                <span>5000+ Participants</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-[#00d4ff] mb-4">
              <span className="text-[#00ffff]">//</span> Contact
            </div>
            <div className="space-y-3 text-sm text-white/60">
              <a href="mailto:contact@techfest.com" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors group">
                <Mail className="size-4 group-hover:animate-pulse" />
                <span>techclub@brainwareuniversity.ac.in</span>
              </a>
              <a href="mailto:contact@techfest.com" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors group">
                <Mail className="size-4 group-hover:animate-pulse" />
                <span>souvikkundu7718@gmail.com</span>
              </a>
              <a href="tel:+917718427880" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors group">
                <span className="text-[#00d4ff] group-hover:text-white transition-colors">#</span>
                <span>+91 7718427880</span>
              </a>
            </div>
          </div>
        </div>

        {/* University and Tech Club Section */}
        <div className="border-t border-[#00d4ff]/20 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* University Section */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <img
                src="/images/bwulogo.png"
                alt="Brainware University"
                className="h-16 w-auto"
              />
            </div>

            {/* Tech Club Section */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-4">
              <img
                src="/images/techclub-iic.png"
                alt="Tech Club IIC"
                className="h-14 w-auto "
              />
              <div className="text-center md:text-right">
                <p className="text-[#00d4ff] font-mono text-xs mb-1">ORGANISED BY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00d4ff]/20 pt-8 text-center">
          <div className="font-mono text-[#00d4ff] mb-2 text-xs">
            <span className="text-[#00ffff]">//</span> copyright_notice
          </div>
          <p className="text-white/40 text-xs">
            © 2026 Texibition. Built by the Tech Club Team
          </p>
        </div>
      </div>
    </footer>
  );
}
