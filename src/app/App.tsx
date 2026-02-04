import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ScrollToTop from './components/ScrollToTop';
import { NavigationFuturistic } from './components/NavigationFuturistic';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { EventDetails } from './pages/EventDetails';
import { Schedule } from './pages/Schedule';
import { CodeOfConduct } from './pages/CodeOfConduct';
import { Sponsors } from './pages/Sponsors';
import Team from './pages/Team'; 
import { FAQ } from './pages/FAQ';
import { Footer } from './components/Footer';
import { MerchPopup } from './components/MerchPopup';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        <MerchPopupManager />
      </div>
    </BrowserRouter>
  );
}
