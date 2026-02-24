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
        <MerchPopupManager />
        <FloatingMerchButton />
      </div>
    </BrowserRouter>
  );
}
