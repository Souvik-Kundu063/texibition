import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

import ScrollToTop from './components/ScrollToTop';
import { NavigationFuturistic } from './components/NavigationFuturistic';
import { MobileBackButton } from './components/MobileBackButton';
import { Footer } from './components/Footer';
import { MerchPopup } from './components/MerchPopup';
import { FloatingMerchButton } from './components/FloatingMerchButton';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Events = lazy(() => import('./pages/Events').then(module => ({ default: module.Events })));
const EventDetails = lazy(() => import('./pages/EventDetails').then(module => ({ default: module.EventDetails })));
const Schedule = lazy(() => import('./pages/Schedule').then(module => ({ default: module.Schedule })));
const CodeOfConduct = lazy(() => import('./pages/CodeOfConduct').then(module => ({ default: module.CodeOfConduct })));
const Sponsors = lazy(() => import('./pages/Sponsors').then(module => ({ default: module.Sponsors })));
const Team = lazy(() => import('./pages/Team').then(module => ({ default: module.default || module.Team })));
const EventGallery = lazy(() => import('./pages/EventGallery').then(module => ({ default: module.default })));
const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ default: module.FAQ })));

// Loading skeleton component
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#00d4ff]/30 border-t-[#00d4ff] rounded-full animate-spin" />
        <p className="text-white/50 font-mono text-sm">Loading...</p>
      </div>
    </div>
  );
}

// Component to handle MerchPopup visibility based on current route
function MerchPopupManager() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  // Update key when route changes to reset popup state
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [location.pathname]);

  // Determine page type and delay based on route
  const isHomePage = location.pathname === '/';
  const isEventDetailsPage = location.pathname.startsWith('/events/');

  // Random delay between 3-5 seconds for home page
  const randomDelay = isHomePage ? Math.floor(Math.random() * 2000) + 3000 : 3000;
  const delay = isEventDetailsPage ? 2000 : randomDelay;
  const pageType = isEventDetailsPage ? 'event-details' : 'home';

  return (
    <MerchPopup
      key={key}
      delay={delay}
      pageType={pageType}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0f]">
        <NavigationFuturistic />
        <MobileBackButton />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/event-gallery" element={<EventGallery />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Suspense>
        <Footer />
        
        {/* Google Maps Section - Under the footer */}
        <div className="bg-[#0a0a0f] py-6 sm:py-8">
          <div className="w-full">
            <div className="font-mono text-[#00d4ff] mb-2 sm:mb-3 text-xs text-center">
              <span className="text-[#00ffff]">//</span> Venue_Location
            </div>
            <div className="w-full h-48 sm:h-80 lg:h-96 px-2 sm:px-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.852044655517!2d88.4888183!3d22.7200285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3b53262d6fb%3A0x6de83f3e669205e0!2sBrainware%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brainware University Location"
                className="rounded-xl lg:rounded-2xl"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href="https://www.google.com/maps/dir//Brainware+University,+398,+Ramkrishnapur+Rd,+near+Jagadighata+Market,+Barasat,+Kolkata,+West+Bengal+700125/@22.7200285,88.4888183,4085m/data=!3m2!1e3!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39f8a3b53262d6fb:0x6de83f3e669205e0!2m2!1d88.4998499!2d22.7320243?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#00d4ff] hover:text-[#a855f7] text-xs sm:text-sm transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="bg-[#0a0a0f] border-t border-[#00d4ff]/20 py-4 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © 2026 Texibition. Built by the Tech Club Team
          </p>
        </div>
        
        <MerchPopupManager />
        <FloatingMerchButton />
      </div>
    </BrowserRouter>
  );
}
