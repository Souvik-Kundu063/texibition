
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-4 sm:py-6 relative border-t border-[#00d4ff]/20 bg-[#0a0a0f]">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="col-span-3 lg:col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-2 sm:mb-3 text-xs">
              <span className="text-[#00ffff]">//</span> Fest_info
            </div>
            <h3 className="text-base sm:text-lg font-bold font-mono text-[#00d4ff] mb-2 sm:mb-3">TEXIBITION 2K26</h3>
            <p className="text-white/60 text-[10px] sm:text-sm leading-relaxed">
              The ultimate tech experience bringing together innovation, gaming, and hardware challenges.
            </p>
          </div>

          <div className="col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-2 sm:mb-3 text-xs">
              <span className="text-[#00ffff]">//</span> Event_info
            </div>
            <div className="space-y-1 sm:space-y-2 text-[10px] sm:text-sm text-white/60">
              <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2">
                <Calendar className="size-3 sm:size-4 text-[#00d4ff]" />
                <span>MAR 11-12, 2026</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2">
                <MapPin className="size-3 sm:size-4 text-[#00d4ff]" />
                <span>Brainware University</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2">
                <Users className="size-3 sm:size-4 text-[#00d4ff]" />
                <span>5000+ Participants</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-2 sm:mb-3 text-xs">
              <span className="text-[#00ffff]">//</span> Quick_links
            </div>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { label: 'Events', path: '/events' },
                { label: 'Schedule', path: '/schedule' },
                { label: 'Team', path: '/team' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Official Merch', path: 'https://cozzon.in/shop/product/cozzon-duo-snack-match-tee', isExternal: true },
                { label: 'Code of Conduct', path: '/code-of-conduct' },
              ].map((link) => (
                <li key={link.path}>
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_self"
                      rel="noopener noreferrer"
                      className="text-[#a855f7] hover:text-[#ec4899] transition-colors text-[10px] sm:text-sm group flex items-center justify-center sm:justify-start gap-1 sm:gap-2"
                    >
                      <span className="text-[#ec4899] opacity-100 transition-opacity">$</span>
                      <span className="group-hover:translate-x-1 transition-transform">{link.label.toLowerCase().replace(/ /g, '_')}</span>
                    </a>
                  ) : (
                    <Link to={link.path} className="text-white/60 hover:text-[#00d4ff] transition-colors text-[10px] sm:text-sm group flex items-center justify-center sm:justify-start gap-1 sm:gap-2">
                      <span className="text-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity">$</span>
                      <span className="group-hover:translate-x-1 transition-transform">{link.label.toLowerCase().replace(/ /g, '_')}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-2 sm:mb-3 text-xs">
              <span className="text-[#00ffff]">//</span> Contact
            </div>
            <div className="space-y-1 sm:space-y-2 text-[10px] sm:text-sm text-white/60">
              <a href="mailto:techclub@brainwareuniversity.ac.in" className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 hover:text-[#00d4ff] transition-colors group">
                <Mail className="size-3 sm:size-4 group-hover:animate-pulse" />
                <span className="hidden xs:inline">techclub@brainwareuniversity.ac.in</span>
                <span className="xs:hidden">Tech Club</span>
              </a>
              <a href="mailto:souvikkundu7718@gmail.com" className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 hover:text-[#00d4ff] transition-colors group">
                <Mail className="size-3 sm:size-4 group-hover:animate-pulse" />
                <span className="hidden sm:inline">souvikkundu7718@gmail.com</span>
                <span className="sm:hidden">Contact</span>
              </a>
              <a href="tel:+917718427880" className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 hover:text-[#00d4ff] transition-colors group">
                <span className="text-[#00d4ff] group-hover:text-white transition-colors">#</span>
                <span>+91 7718427880</span>
              </a>
            </div>
          </div>
        </div>

        {/* University and Tech Club Section */}
        <div className="border-t border-[#00d4ff]/20 pt-4 sm:pt-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-2 gap-2 sm:gap-6 items-center">
            {/* University Section */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-2 sm:gap-3">
              <img
                src="/images/bwulogo.png"
                alt="Brainware University"
                className="h-10 sm:h-14 w-auto"
              />
            </div>

            {/* Tech Club Section */}
            <div className="flex flex-col items-end justify-center gap-2 sm:gap-3">
              <div className="text-center sm:text-right">
                <p className="text-[#00d4ff] font-mono text-[10px] sm:text-xs mb-1">ORGANISED BY</p>
              </div>
              <img
                src="/images/techclub-iic.png"
                alt="Tech Club IIC"
                className="h-8 sm:h-12 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#00d4ff]/20 pt-4 sm:pt-5 text-center">
          <div className="font-mono text-[#00d4ff] mb-1 text-[12px] sm:text-xs">
            <span className="text-[#00ffff]">//</span> copyright_notice
          </div>
          <p className="text-white/60 text-[12px]">
            © 2026 Texibition. Built by the Tech Club Team
          </p>
        </div>
      </div>
    </footer>
  );
}
