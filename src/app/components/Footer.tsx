
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Mail, Instagram, Linkedin } from 'lucide-react';

// Custom Discord Icon
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 relative border-t border-[#00d4ff]/30 bg-[#0a0a0f]">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Fest Info Section */}
          <div className="col-span-1 lg:col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs tracking-[0.2em] uppercase">
              <span className="text-[#00ffff]">//</span> Fest_Info
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-mono text-[#00d4ff] mb-3 sm:mb-4 tracking-wider uppercase">
              TEXIBITION 2K26
            </h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs">
              The ultimate tech experience bringing together innovation, gaming, and hardware challenges.
            </p>
          </div>

          {/* Event Info Section */}
          <div className="col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs tracking-[0.2em] uppercase">
              <span className="text-[#00ffff]">//</span> Event_Info
            </div>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <Calendar className="size-4 sm:size-5 text-[#00d4ff] group-hover:scale-110 transition-transform" />
                <span className="tracking-wider uppercase text-white/80">MAR 11-12, 2026</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <MapPin className="size-4 sm:size-5 text-[#00d4ff] group-hover:scale-110 transition-transform" />
                <span className="tracking-wider uppercase text-white/80">BRAINWARE UNIVERSITY</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <Users className="size-4 sm:size-5 text-[#00d4ff] group-hover:scale-110 transition-transform" />
                <span className="tracking-wider uppercase text-white/80">5000+ PARTICIPANTS</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs tracking-[0.2em] uppercase">
              <span className="text-[#00ffff]">//</span> Quick_Links
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: 'Events', path: '/events' },
                { label: 'Team', path: '/team' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Official Merch', path: 'https://cozzon.in/shop/product/texibition-2k26-official-tee', isExternal: true },
                { label: 'Code of Conduct', path: '/code-of-conduct' },
              ].map((link) => (
                <li key={link.path}>
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_self"
                      rel="noopener noreferrer"
                      className="text-[#a855f7] hover:text-[#ec4899] transition-all text-xs sm:text-sm uppercase tracking-wider group flex items-center justify-center sm:justify-start gap-2 sm:gap-3"
                    >
                      <span className="text-[#ec4899] opacity-100 transition-opacity">$</span>
                      <span className="group-hover:translate-x-2 transition-transform group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">{link.label.toUpperCase()}</span>
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-white/70 hover:text-[#00d4ff] transition-all text-xs sm:text-sm uppercase tracking-wider group flex items-center justify-center sm:justify-start gap-2 sm:gap-3"
                    >
                      <span className="text-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity">$</span>
                      <span className="group-hover:translate-x-2 transition-transform group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]">{link.label.toUpperCase()}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#00d4ff] mb-3 sm:mb-4 text-xs tracking-[0.2em] uppercase">
              <span className="text-[#00ffff]">//</span> Contact
            </div>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <a 
                href="mailto:techclub@brainwareuniversity.ac.in" 
                className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 hover:text-[#00d4ff] transition-all group"
              >
                <Mail className="size-4 sm:size-5 group-hover:scale-110 group-hover:animate-pulse transition-transform" />
                <span className="hidden xs:inline uppercase tracking-wider text-white/70 group-hover:text-white">TECHCLUB@BRAINWAREUNIVERSITY.AC.IN</span>
                <span className="xs:hidden uppercase tracking-wider text-white/70 group-hover:text-white">TECH CLUB</span>
              </a>
              <a 
                href="#contact-us" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 hover:text-[#00d4ff] transition-all group cursor-pointer"
              >
                <Users className="size-4 sm:size-5 group-hover:scale-110 group-hover:animate-pulse transition-transform" />
                <span className="uppercase tracking-wider text-white/70 group-hover:text-white">CONTACT US</span>
              </a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="col-span-1 text-center sm:text-left">
            <div className="font-mono text-[#a855f7] mb-3 sm:mb-4 text-xs tracking-[0.2em] uppercase">
              <span className="text-[#c084fc]">//</span> Follow_Us
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/texibition2k26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#ec4899]/20 transition-all duration-300 group"
                title="Instagram"
              >
                <Instagram className="size-5 sm:size-6 text-[#ec4899] group-hover:scale-110 transition-transform" />
              </a>
              {/* Discord */}
              <a 
                href="https://discord.gg/Fga6sYVJ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#5865F2]/20 transition-all duration-300 group"
                title="Discord"
              >
                <DiscordIcon className="size-5 sm:size-6 text-[#5865F2] group-hover:scale-110 transition-transform" />
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/texibition/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn3CZkEEtKlXYF-huMY8l_jveUxWtG1nr25caOMkeWpwupKwXcwtc68WnN1BI_aem_R5Tmxuteijz1YsTMtmeNEg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[#0077b5]/20 transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin className="size-5 sm:size-6 text-[#0077b5] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* University and Tech Club Section */}
        <div className="border-t border-[#00d4ff]/30 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">
            {/* University Section */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4">
              <img
                src="/images/bwulogo.png"
                alt="Brainware University"
                className="h-12 sm:h-16 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Tech Club Section */}
            <div className="flex flex-col items-end justify-center gap-3 sm:gap-4">
              <div className="text-center sm:text-right">
                <p className="text-[#00d4ff] font-mono text-xs tracking-[0.3em] uppercase mb-2">ORGANISED BY</p>
              </div>
              <img
                src="/images/techclub-iic.png"
                alt="Tech Club IIC"
                className="h-10 sm:h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#00d4ff]/30 pt-6 sm:pt-6 text-center">
          <div className="font-mono text-[#00d4ff] mb-2 text-xs tracking-[0.2em] uppercase">
            <span className="text-[#00ffff]">//</span> Copyright_Notice
          </div>
          <p className="text-white/60 text-xs sm:text-sm tracking-wider uppercase">
            © 2026 TEXIBITION. BUILT BY THE TECH CLUB TEAM
          </p>
        </div>
      </div>
    </footer>
  );
}
