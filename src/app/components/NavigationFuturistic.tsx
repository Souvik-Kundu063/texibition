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
      if (window.innerWidth >= 768) {
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
      {/* Glowing background effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-30 hidden sm:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.08) 0%, rgba(168, 85, 247, 0.04) 30%, transparent 70%)`,
        }}
      />
      
      {/* Spacer for fixed nav */}
      <div className="h-16 sm:h-20" />
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#00d4ff]/30 shadow-2xl shadow-[#00d4ff]/10'
            : 'bg-[#0a0a0f]/90 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo and University Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-4 group">
              {/* BWU Logo */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <img 
                    src="/images/texibitionlogo.png" 
                    alt="Brainware University" 
                    className="h-10 sm:h-12 md:h-16 w-auto"
                  />
                </motion.div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative"
                >
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_self"
                      rel="noopener noreferrer"
                      className="relative group px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg overflow-hidden cursor-pointer"
                    >
                      {/* Background glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/10 to-[#ec4899]/10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Border effect */}
                      <motion.div
                        className="absolute inset-0 border border-[#a855f7]/40 rounded-lg"
                        whileHover={{ 
                          borderColor: '#a855f7',
                          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
                        }}
                      />
                      
                      <span
                        className={`relative z-10 text-xs xl:text-sm font-medium transition-colors text-[#a855f7] group-hover:text-[#ec4899]`}
                      >
                        {link.name}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="relative group px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-[#a855f7]/5"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Border effect */}
                      <motion.div
                        className="absolute inset-0 border border-[#00d4ff]/20 rounded-lg"
                        whileHover={{ 
                          borderColor: '#00d4ff',
                          boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)'
                        }}
                      />
                      
                      <span
                        className={`relative z-10 text-xs xl:text-sm font-medium transition-colors ${
                          isActive(link.path)
                            ? 'text-[#00d4ff]'
                            : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {link.name}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive(link.path) && (
                        <motion.div
                          layoutId="futuristicActive"
                          className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-[#00d4ff] rounded-full transform -translate-x-1/2"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
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
              >
                <Link
                  to="/events"
                  className="relative px-3 xl:px-4 py-1.5 border border-[#00d4ff] bg-[#00d4ff]/10 rounded-lg skew-x-[-10deg] overflow-hidden group block hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-shadow duration-300"
                >
                  <span className="relative z-10 font-['Space_Grotesk'] font-bold text-[#00d4ff] block skew-x-[10deg] uppercase tracking-wider text-xs">
                    Register
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 sm:p-3 text-white hover:text-[#00d4ff] transition-colors relative"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-[#00d4ff]/10 rounded-lg"
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
              

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-[#00d4ff]/20"
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
                    className="block px-4 py-3 rounded-lg transition-colors text-base text-[#a855f7] hover:text-[#ec4899] hover:bg-[#a855f7]/10"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors text-base ${
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
      </motion.nav>
    </>
  );
}

