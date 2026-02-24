import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Zap, Cpu, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export function NavigationFuturistic() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    // { name: 'Schedule', path: '/schedule' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/event-gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Merch', path: 'https://cozzon.in/shop/product/texibition-2k26-official-tee', isExternal: true },
    { name: 'Code of Conduct', path: '/code-of-conduct' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Glowing background effect - Desktop only */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.08) 0%, rgba(168, 85, 247, 0.04) 30%, transparent 70%)`,
        }}
      />
      
      {/* Mobile: Spacer for fixed nav */}
      <div class="h-16 lg:hidden" />
      
      {/* Mobile: Standalone hamburger button - round, right corner, no navbar box */}
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 text-white hover:text-[#00d4ff] transition-colors bg-[#0a0a0f]/80 backdrop-blur-md rounded-full border border-white/20"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </motion.div>
      </motion.button>

      {/* Desktop Navigation - Full navbar container */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-2 sm:top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-xl sm:rounded-2xl hidden lg:block ${
          isScrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20'
            : 'bg-white/10 backdrop-blur-xl border border-white/20'
        }`}
      >
        <div className="px-2 sm:px-3 lg:px-3 xl:px-4 2xl:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14 lg:h-14 xl:h-16 2xl:h-16">

            {/* Desktop Navigation - Centered */}
            <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-1.5 xl:gap-2 overflow-x-auto no-scrollbar">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative flex-shrink-0 flex items-center"
                >
                {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_self"
                      rel="noopener noreferrer"
                      className="relative group px-1 sm:px-1.5 lg:px-1.5 py-1 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <span
                        className={`relative z-10 text-[10px] sm:text-xs lg:text-xs xl:text-sm font-medium transition-colors text-[#a855f7] group-hover:text-[#ec4899] whitespace-nowrap block uppercase`}
                      >
                        {link.name}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="relative group px-1 sm:px-1.5 lg:px-1.5 py-1 rounded-lg overflow-hidden flex items-center"
                    >
                      <span
                        className={`relative z-10 text-[10px] sm:text-xs lg:text-xs xl:text-sm font-medium transition-colors whitespace-nowrap block uppercase ${
                          isActive(link.path)
                            ? 'text-[#00d4ff]'
                            : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {link.name}
                      </span>
                      
                      {/* Active indicator - positioned after text, not affecting layout */}
                      {isActive(link.path) && (
                        <span className="ml-1 inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#00d4ff] rounded-full align-middle translate-y-0.5"></span>
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex-shrink-0 flex items-center"
              >
                <Link
                  to="/events"
                  className="relative px-3 sm:px-4 py-1.5 border border-[#00d4ff] bg-[#00d4ff]/10 rounded-lg skew-x-[-10deg] overflow-hidden group block hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-shadow duration-300"
                >
                  <span className="relative z-10 font-['Space_Grotesk'] font-bold text-[#00d4ff] block skew-x-[10deg] uppercase tracking-wider text-[10px] sm:text-xs whitespace-nowrap">
                    Register
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Full screen overlay menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed top-16 left-0 right-0 z-40 overflow-hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-[#00d4ff]/20"
      >
        <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.05 }}
              >
                {link.isExternal ? (
                  <a
                    href={link.path}
                    target="_self"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg transition-colors text-base text-[#a855f7] hover:text-[#ec4899] hover:bg-[#a855f7]/10 uppercase"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors text-base uppercase ${
                      isActive(link.path)
                        ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -20,
              }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              <Link
                to="/events"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 bg-[#00d4ff]/10 border border-[#00d4ff] text-[#00d4ff] font-['Space_Grotesk'] font-bold text-center uppercase tracking-wider hover:bg-[#00d4ff]/20 transition-all"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
      </motion.div>
    </>
  );
}

