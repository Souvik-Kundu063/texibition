


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { NavigationFuturistic } from './components/NavigationFuturistic';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { EventDetails } from './pages/EventDetails';
import { Schedule } from './pages/Schedule';
import { CodeOfConduct } from './pages/CodeOfConduct';
import { Sponsors } from './pages/Sponsors';
import { Team } from './pages/Team';
import { FAQ } from './pages/FAQ';

export default function App() {
  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
  );
}
