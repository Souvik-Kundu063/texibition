import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.852044655517!2d88.4888183!3d22.7200285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3b53262d6fb%3A0x6de83f3e669205e0!2sBrainware%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

const DIRECTIONS_URL = "https://www.google.com/maps/dir//Brainware+University,+398,+Ramkrishnapur+Rd,+near+Jagadighata+Market,+Barasat,+Kolkata,+West+Bengal+700125/@22.7200285,88.4888183,4085m/data=!3m2!1e3!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39f8a3b53262d6fb:0x6de83f3e669205e0!2m2!1d88.4998499!2d22.7320243?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D";

interface MapViewProps {
  title?: string;
  subtitle?: string;
  showGetDirections?: boolean;
}

export function MapView({ 
  title = "Event Venue", 
  subtitle = "Brainware University, Barasat",
  showGetDirections = true 
}: MapViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Section Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold font-['Orbitron'] text-white uppercase tracking-wider flex items-center justify-center gap-2">
          <MapPin className="size-5 sm:size-6 text-[#a855f7]" />
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/50 text-sm sm:text-base mt-2 font-['Rajdhani']">
            {subtitle}
          </p>
        )}
        <div className="w-16 sm:w-20 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
      </div>

      {/* Map Container */}
      <div className="relative rounded-xl lg:rounded-2xl overflow-hidden" style={{
        border: '1px solid rgba(168,85,247,0.3)',
        boxShadow: '0 0 30px rgba(168,85,247,0.15)'
      }}>
        {/* Map Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/5 to-transparent pointer-events-none" />
        
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="300"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Brainware University Location"
          className="rounded-xl lg:rounded-2xl"
        />
      </div>

      {/* Get Directions Button */}
      {showGetDirections && (
        <div className="mt-4 text-center">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-['Space_Grotesk'] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0.2) 100%)',
              border: '1px solid rgba(168,85,247,0.5)',
              color: '#e9d5ff'
            }}
          >
            <Navigation className="size-4" />
            Get Directions
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default MapView;

