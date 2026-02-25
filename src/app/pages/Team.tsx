import { motion } from 'motion/react';
import { Users, Clock, Sparkles, Phone, Mail, User, Gamepad2, Code, Cpu, Lightbulb, Github, Instagram, Linkedin } from 'lucide-react';
import { MapView } from '../components/MapView';

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#a855f7]/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient orb
function AnimatedOrb({ className }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-30 ${className}`}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-64 h-64 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full"
      />
    </div>
  );
}

// Team member card component
function TeamMemberCard({ 
  name, 
  designation, 
  phone, 
  email, 
  icon: Icon,
  imageUrl,
  delay = 0
}: { 
  name: string; 
  designation: string; 
  phone: string; 
  email: string;
  icon?: React.ElementType;
  imageUrl?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-5 sm:p-6 rounded-xl transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(0,255,255,0.2)',
        boxShadow: '0 0 20px rgba(0,212,255,0.1)'
      }}
    >
      {/* Hover Glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(168,85,247,0.1) 100%)',
          boxShadow: '0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(168,85,247,0.2)'
        }}
      />

      <div className="relative z-10">
        {/* Designation Label */}
        <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded text-xs font-['Space_Grotesk'] font-semibold uppercase tracking-wider"
          style={{
            background: 'linear-gradient(90deg, rgba(0,212,255,0.2) 0%, rgba(168,85,247,0.2) 100%)',
            color: '#00d4ff',
            border: '1px solid rgba(0,212,255,0.3)'
          }}
        >
          {designation}
        </div>

        {/* Image and Name Row */}
        <div className="flex items-center gap-4 mb-3 sm:mb-4">
          {imageUrl && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#00d4ff]/50 flex-shrink-0">
              <img 
                src={imageUrl} 
                alt={name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h3 className="text-base sm:text-lg lg:text-xl font-bold font-['Orbitron'] text-white group-hover:text-[#00d4ff] transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <Phone className="size-3 sm:size-4 text-[#a855f7] flex-shrink-0" />
          <a 
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-xs sm:text-sm text-white/70 hover:text-[#00d4ff] transition-colors duration-300 font-['Rajdhani']"
          >
            {phone}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Mail className="size-3 sm:size-4 text-[#a855f7] flex-shrink-0" />
          <a 
            href={`mailto:${email}`}
            className="text-xs sm:text-sm text-white/70 hover:text-[#00d4ff] transition-colors duration-300 font-['Rajdhani'] truncate"
          >
            {email}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Coming Soon Card
function ComingSoonCard({ title, delay = 0 }: { title: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center min-h-[200px]"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0,255,255,0.1)'
      }}
    >
      <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-[#a855f7] mb-3 sm:mb-4" />
      <h3 className="text-lg sm:text-xl font-bold font-['Orbitron'] text-white/60 mb-2">
        {title}
      </h3>
      <p className="text-white/40 text-sm text-center">
        Coming Soon
      </p>
    </motion.div>
  );
}

// Lead Developer Card with Image
function LeadDeveloperCard({ 
  name,
  imageUrl,
  phone, 
  email, 
  github,
  linkedin,
  designation,
  delay = 0
}: { 
  name: string;
  imageUrl: string;
  phone: string; 
  email: string;
  github: string;
  linkedin?: string;
  designation?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-2 sm:p-3 rounded-xl transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(168,85,247,0.2)',
        boxShadow: '0 0 20px rgba(168,85,247,0.1)'
      }}
    >
      {/* Hover Glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)',
          boxShadow: '0 0 30px rgba(168,85,247,0.3), 0 0 60px rgba(236,72,153,0.2)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Round Image */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2 overflow-hidden border-2 border-[#a855f7]/50">
          <img 
            src={imageUrl} 
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="text-sm sm:text-base font-bold font-['Orbitron'] text-white mb-1 sm:mb-2 text-center group-hover:text-[#a855f7] transition-colors duration-300">
          {name}
        </h3>

        {/* Designation */}
        <p className="text-xs text-[#a855f7] mb-2 sm:mb-3 font-['Space_Grotesk'] uppercase tracking-wider">
          {designation || 'Lead Developer'}
        </p>

        {/* Icons Row */}
        <div className="flex items-center gap-3">
          {/* Phone Icon */}
          <a 
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="p-2 rounded-full bg-white/5 hover:bg-[#a855f7]/20 transition-colors duration-300"
            title={phone}
          >
            <Phone className="size-3 sm:size-4 text-[#00d4ff]" />
          </a>

          {/* Email Icon */}
          <a 
            href={`mailto:${email}`}
            className="p-2 rounded-full bg-white/5 hover:bg-[#a855f7]/20 transition-colors duration-300"
            title={email}
          >
            <Mail className="size-3 sm:size-4 text-[#00d4ff]" />
          </a>

          {/* GitHub Icon */}
          <a 
            href={`https://github.com/${github.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-[#a855f7]/20 transition-colors duration-300"
            title={github}
          >
            <Github className="size-3 sm:size-4 text-[#00d4ff]" />
          </a>

          {/* LinkedIn Icon - Only show if linkedin exists */}
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-[#a855f7]/20 transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin className="size-3 sm:size-4 text-[#00d4ff]" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Coordinator Card with Photo (like Subhajit Pathak's card)
function CoordinatorCardWithPhoto({ 
  name, 
  event, 
  phone, 
  email, 
  instagram,
  linkedin,
  imageUrl,
  delay = 0
}: { 
  name: string; 
  event: string;
  phone: string; 
  email: string;
  instagram?: string;
  linkedin?: string;
  imageUrl: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(168,85,247,0.2)',
        boxShadow: '0 0 20px rgba(168,85,247,0.1)'
      }}
    >
      {/* Hover Glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)',
          boxShadow: '0 0 30px rgba(168,85,247,0.3), 0 0 60px rgba(236,72,153,0.2)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Round Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 overflow-hidden border-2 border-[#a855f7]/50">
          <img 
            src={imageUrl} 
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Event Badge */}
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[10px] sm:text-xs font-['Space_Grotesk'] text-[#a855f7] uppercase tracking-wider">
            {event}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-sm sm:text-base font-bold font-['Orbitron'] text-white mb-2 sm:mb-3 text-center group-hover:text-[#a855f7] transition-colors duration-300">
          {name}
        </h3>

        {/* Icons Row */}
        <div className="flex items-center gap-3">
          {/* Phone Icon */}
          <a 
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="p-2 rounded-full bg-white/5 hover:bg-[#a855f7]/20 transition-colors duration-300"
            title={phone}
          >
            <Phone className="size-3 sm:size-4 text-[#00d4ff]" />
          </a>

          {/* Email Icon */}
          <a 
            href={`mailto:${email}`}
            className="p-2 rounded-full bg-white/5 hover:bg-[#a855f7]/20 transition-colors duration-300"
            title={email}
          >
            <Mail className="size-3 sm:size-4 text-[#00d4ff]" />
          </a>

          {/* LinkedIn Icon - Only show if linkedin exists */}
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-[#a855f7]/20 transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin className="size-3 sm:size-4 text-[#00d4ff]" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Section Header Component
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Orbitron'] text-white uppercase tracking-wider">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-sm sm:text-base mt-2 font-['Rajdhani']">
          {subtitle}
        </p>
      )}
      <div className="w-16 sm:w-20 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
    </motion.div>
  );
}

// Team data
const convenorTreasurer = [
  {
    designation: 'Convenor',
    name: 'Mr. Partha Pratim Dasgupta',
    phone: '+91 8961142172',
    email: 'techclub@brainwareuniversity.ac.in',
    imageUrl: 'https://www.brainwareuniversity.ac.in/faculty/Partha_Pratim_Dasgupta_cc9c3f37a6.jpeg'
  },
  {
    designation: 'Treasurer',
    name: 'Dr. Arighna Basak',
    phone: '+91 9433778573',
    email: 'techclub@brainwareuniversity.ac.in',
    imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=sMpxiT8AAAAJ&citpid=3'
  }
];

const leadOrganizers = [
  {
    designation: 'Lead Organizer',
    name: 'Madhusudan Mahatha',
    phone: '+91 6289600599',
    email: 'madhusudanmahatha14@gmail.com',
    linkedin: 'https://www.linkedin.com/in/msmahatha/',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQEyQ6nVflEJCA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723017360521?e=1773273600&v=beta&t=jYLJwtubj1vMtbcoIXyfGlP1KZtQMwraQwOrlZoxt9U'
  },
  {
    designation: 'Lead Organizer',
    name: 'Tushar Daiya',
    phone: '+91 9123720395',
    email: 'tdaiya02@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tushardaiya/',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGrRoKz2ouTnA/profile-displayphoto-scale_400_400/B56ZkoV2D9I4Ag-/0/1757318441726?e=1773273600&v=beta&t=CpuTasogr6_fVlVIcy3h-2xP_g5ElPuv5dFNZ9NgWD4'
  },
  {
    designation: 'Lead Organizer',
    name: 'Souvik Kundu',
    phone: '+91 7718427880',
    email: 'souvikkundu7718@gmail.com',
    linkedin: 'https://www.linkedin.com/in/souvik-kundu-456648301/',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQEwTPlRcDmycg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711857441921?e=1773273600&v=beta&t=elKM2S-aZrRU1l4s_qu77XstgSJYvGLAWzvXe88RizU'
  }
];

const coordinators = [
  // Xibit
  { event: 'Xibit', name: 'Debasis Khamari', phone: '+91 9064906396', email: 'debasiskhamari7@gmail.com', linkedin: 'https://www.linkedin.com/in/debasis-khamari-/', imageUrl: 'https://res.cloudinary.com/debasiskhamari/image/upload/v1771884306/Gemini_Generated_Image_final_q8ih0m.png', icon: Code },
  { event: 'Xibit', name: 'Sayantani Dutta', phone: '+91 9477518897', email: 'sayantanidutta.work@gmail.com', linkedin: 'https://www.linkedin.com/in/sayantani-dutta-43612835a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/624725021_18165360874399732_7320024866604442269_n.webp?_nc_cat=103&ig_cache_key=MzM4MjUxMTQ3NzQxOTg2MjkyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjc1OXg5NDkuc2RyLkMzIn0%3D%3D&_nc_ohc=QsyJb0y93I8Q7kNvwHtWflW&_nc_oc=Adk9zmxUYhNj2ib21yTTGvnT7osLKtyarDhkE2U53qQVEirDRuHJwT7SRhfcJPAoCjU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=wMfkdP601CUNi-R-2bdJUA&oh=00_AfsoDFxyJfsVOyneViTVJG6_UF2F3bwydA8SII68CRoLWA&oe=69A2558E', icon: Code },
  // Blitz
  { event: 'Blitz', name: 'Soham Ghosh', phone: '+91 6290187678', email: 'sohamghosh1762@gmail.com', linkedin: 'https://www.linkedin.com/in/soham-ghosh-464b33253/', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/572887565_17903007393277369_1523609789060724585_n.webp?_nc_cat=108&ig_cache_key=Mzc1ODUwMjkyOTk2MDc4ODk2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzOTF4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=J-HzQegiYl4Q7kNvwFqC1Ef&_nc_oc=AdlC9-y4hW6svlCmVSFu_g5SPyTroECPWBGyog6VL1cEktSOcVGR92B2uVwXkalxuJ0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=Zvl7jLupG2afqcwfgIXopA&oh=00_AftkbGM_WMhz_uAn7yJXznSyaXk3RgcFBC7NJ07BIo2m6Q&oe=69A28673', icon: Lightbulb },
  // PES
  { event: 'PES', name: 'Avirup Ghosh', phone: '+91 7003357906', email: 'avirupghosh751@gmail.com', linkedin: 'https://www.linkedin.com/in/avirup-ghosh-87679b38a?utm_source=share_via&utm_content=profile&utm_medium=member_android', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/625024138_18103269616831304_1142472499321667865_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzUzODE4NjkxMDY1OTQ2NzA1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Sg27fC5aHiIQ7kNvwFpKnS8&_nc_oc=Adm5k36XA8irHj8zb_8bz6lvBVoYYUf3202jWe179Y9o_T5wuKzF8B1re5nD1qdr3gs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=dIGbhFZvrkDyHvaS1o3TAg&oh=00_Aft1KuBnmqvf8R4n-HtGwR4rTWtrRopENRwGxxUHYSYLjw&oe=69A321B8', icon: Gamepad2 },
  // BGMI
  { event: 'BGMI', name: 'Abhik Chatterjee', phone: '+91 9733549955', email: 'abhikchatterjee879@gmail.com', linkedin: 'https://www.linkedin.com/in/codexabhik', imageUrl: 'https://res.cloudinary.com/dyeglgnfd/image/upload/v1771872418/DSC_0337_c9uzra.jpg', icon: Gamepad2 },
  { event: 'BGMI', name: 'Sayan Roy', phone: '+91 9674363753', email: 'roysamirroysamir9998@gmail.com', linkedin: 'https://www.linkedin.com/in/sayan-roy-266046303?utm_source=share_via&utm_content=profile&utm_medium=member_android', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQELwWCeOaaJNw/profile-displayphoto-crop_800_800/B4DZw9Jm2AGQAM-/0/1770552457350?e=1773273600&v=beta&t=XrNxxFy5j7Df0fmAbAknoXF1m1gX2jiv4aYSxjlVH_Q', icon: Gamepad2 },
  // Free Fire
  { event: 'Free Fire', name: 'Ankush Khan', phone: '+91 9064336298', email: 'khanankush483@gmail.com', linkedin: 'https://www.linkedin.com/in/ankush-khan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', imageUrl: 'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/484330602_1154811956189493_7444861704957941689_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=VCIQokTgeVIQ7kNvwFqPKxB&_nc_oc=AdlBkfqOQNBISZTf6k2VBkjUDTKbTivrCxqnySUQiCUoR-fh5piERTf85j9Fp438o-c&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=cqCUSdLJGeSpK6iWqDzg0A&oh=00_AfvWMD8ra64J6cHaDcSdfTp_8mHD3qo8zYMsuZ0E-SKFaw&oe=69A27B7F', icon: Gamepad2 },
  { event: 'Free Fire', name: 'Prabhat Kr Routh', phone: '+91 9332165957', email: 'prabhatkrrouth@gmail.com', linkedin: 'https://www.linkedin.com/in/prabhatkrrouth?utm_source=share_via&utm_content=profile&utm_medium=member_android', imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGh4elQvdbDZg/profile-displayphoto-scale_400_400/B56ZqxkbyOHAAg-/0/1763915712567?e=1773273600&v=beta&t=I1tNDtcPdF4pXC3PlD3tTTB3k_YwLroiY6w5PHEEpBs', icon: Gamepad2 },
  // Valorant
  { event: 'Valorant', name: 'Deep Chatterjee', phone: '+91 6291661608', email: 'deeparduino@gmail.com', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/547774575_18071064155127003_9211367352663487269_n.webp?_nc_cat=104&ig_cache_key=MzcyMTYxODM4MzEwNTU3NjA3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIwLnNkci5DMyJ9&_nc_ohc=CcZVI2D8uLoQ7kNvwFk0V5f&_nc_oc=Adld2zPRnjUvjioeTkDVf2gvKQCKmpCuzx05nAghgGzKKa3oId2kQkPRT2EPOQweikw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=baFfeJj0LrEdyrDD4j8IyQ&oh=00_Aft-7fNlYSR9YE4KTSHNZQH1TheYpeK1qJQPCZVtHrWRww&oe=69A277F0', icon: Gamepad2 },
  { event: 'Valorant', name: 'Abhishek Banerjee', phone: '+91 8642019746', email: 'abhishekbaner5@gmail.com', linkedin: 'https://www.linkedin.com/in/abhishek-banerjee-a96aa08b', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/610315939_18154898002424400_4613162198759539041_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzgwMzUwNTg2ODQ1ODQwNTAwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY4MXg5MTcuc2RyLkMzIn0%3D%3D&_nc_ohc=oMNBCrbQZ5YQ7kNvwEC6CxU&_nc_oc=Admg62fkWHQAfk81Z7r3yeOqTtA07p081SzqI3bdtvnaEP5fzvrBocTJGKapChcbwQ0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=DulPrXGVONizBaD8wcLSaA&oh=00_AftvHhBxP6_u6imMwlM8f-1VP-n2Iyg-3fzRpiKfmsFJtA&oe=69A27CE0', icon: Gamepad2 },
  // Prompters
  { event: 'Prompters', name: 'Senjuti Mondal', phone: '+91 7501558111', email: 'senjutim3@gmail.com', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/559008498_17944222005056915_57550811318062861_n.webp?_nc_cat=103&ig_cache_key=MzczNDQyNDA2MTQzNTc2NzI4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=1hFUFm-cCqcQ7kNvwFm4Oxz&_nc_oc=Adk1T--b7sgFlrerCSw9vlWUKG9-mVCArgarARIufQNFXkME1rd921q0KScF8fLDexM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=8W55z1wIh9KlESTa95xPWg&oh=00_AftgMLbLps6iS1EnJXYbotVeWcYP9NNg9oFuWGpxPjF6YQ&oe=69A289DD', icon: Lightbulb },
  { event: 'Prompters', name: 'Neel Das', phone: '+91 7384007265', email: 'neeldas0032@gmail.com', linkedin: 'https://www.linkedin.com/in/neel-das0032n?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/629529796_18074312927604312_4775551130076923041_n.webp?_nc_cat=107&ig_cache_key=MzgyODg1ODQwMDQ5MTYwMzU0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=EjQAA4EGuNYQ7kNvwFLASBv&_nc_oc=AdkDxvXmjrV82xeL7VQQakM2DXJHVkV_31jsK4UqG5sX2d9RfQHiZiN1tEZoNn1QTdk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=V5Ef0TANMTC8twFPAUs2dQ&oh=00_AfuXZYxaiHjWEqUzrW8u58tq8Dfa6Bu1deWXy37rr3w-YQ&oe=69A25D41', icon: Lightbulb },
  // Bluster
  { event: 'Bluster', name: 'Sanchita Kandar', phone: '+91 9339483883', email: 'sanchita.kandar1971@gmail.com', linkedin: 'https://www.linkedin.com/in/sanchita-kandar-2b8740306?utm_source=share_via&utm_content=profile&utm_medium=member_android', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.75761-15/481371601_18039151619605240_3876552901872997220_n.webp?_nc_cat=101&ig_cache_key=MzU3NDAyMDc4NjcxMTYzODAyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=lK9BzHSZdbEQ7kNvwGSEw5O&_nc_oc=AdkJfC8IVQa5pUXUPVa6kj12EmUDMrwYLYw67fXCwW7Qx6KRz9u5EaNfouo16w_F4Tg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=vfylsAl84GZNz4e8QXHb4A&oh=00_AfvhSYl8r96MFNPa_oxIAi7vBC_Jz1bWNlSlR_eeAzQJ1g&oe=69A257F6', icon: Code },
  { event: 'Bluster', name: 'Ritesh Singh', phone: '+91 8905485844', email: 'muqadarkasikandar03@gmail.com', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/617563681_17898674430365488_790195202893536669_n.webp?_nc_cat=107&ig_cache_key=MzUzNTg3MDcxOTY1NjE0NTUwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=7aUwjhpxMQYQ7kNvwE9OQ_i&_nc_oc=AdlPqat_mlNXl5V8jRZiIeRDfiUw9wJfj5DkYlnZbxCkR6Agj-H0lZ-RuqzVzidZFr8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=cBjU3AR1yXumrpXLHt2LCg&oh=00_AfutC7biagl7KkLsxWT8NA_NF6LPL6CH5M_wD-L1F9RuUg&oe=69A26272', icon: Code },
  // Architect
  { event: 'Architect', name: 'Moupriya Kundu', phone: '+91 9832986918', email: 'moupriyakundu139@gmail.com', imageUrl: 'https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/535855865_18058918955601682_5868388197119785954_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzcwNDI1MDY5MzMyODAwMTcwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTg5Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=14t8Kj61jtQQ7kNvwEPjiZi&_nc_oc=AdmSIZiQ1bsfxtqKsadNUPyWPPMR3zFtX8zQ22GZ3XEEVIUcIT1kgp8IvqII_yAP3Kg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=zvsDL3c0k4U3c6kqiHvQ_Q&oh=00_AfvnSuPjV3wYnwD0YxWYOsBhsNKUd7RFGwtVCZ2vSTsKFA&oe=69A287F8', icon: Cpu },
  { event: 'Architect', name: 'Rounak Bhanja', phone: '+91 9830052068', email: 'rounak2002bhanja@gmail.com', linkedin: 'https://www.linkedin.com/in/rounak-bhanja-7054621b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEi-qtv-nYwZA/profile-displayphoto-scale_400_400/B4DZpVYcs3IEAs-/0/1762369064429?e=1773273600&v=beta&t=FQRYlxAlXdOB1PJYTfFAXlwiLh35OkRzKHy1CKOWlU8', icon: Cpu },
];

// Coordinator Card with event badge
function CoordinatorCard({ 
  name, 
  event, 
  phone, 
  email, 
  instagram,
  icon: Icon,
  delay = 0
}: { 
  name: string; 
  event: string;
  phone: string; 
  email: string;
  instagram?: string;
  icon: React.ElementType;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(168,85,247,0.2)',
        boxShadow: '0 0 15px rgba(168,85,247,0.08)'
      }}
    >
      {/* Hover Glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)',
          boxShadow: '0 0 25px rgba(168,85,247,0.25)'
        }}
      />

      <div className="relative z-10">
        {/* Event Badge */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <Icon className="size-3 sm:size-4 text-[#a855f7]" />
          <span className="text-[10px] sm:text-xs font-['Space_Grotesk'] text-[#a855f7] uppercase tracking-wider">
            {event}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-sm sm:text-base font-bold font-['Orbitron'] text-white mb-2 sm:mb-3 group-hover:text-[#a855f7] transition-colors duration-300">
          {name}
        </h3>

        {/* Phone */}
        <div className="flex items-center gap-2 mb-1">
          <Phone className="size-3 text-[#00d4ff] flex-shrink-0" />
          <a 
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-xs text-white/70 hover:text-[#00d4ff] transition-colors duration-300 font-['Rajdhani']"
          >
            {phone}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 mb-1">
          <Mail className="size-3 text-[#00d4ff] flex-shrink-0" />
          <a 
            href={`mailto:${email}`}
            className="text-xs text-white/70 hover:text-[#00d4ff] transition-colors duration-300 font-['Rajdhani'] truncate"
          >
            {email}
          </a>
        </div>

        {/* Instagram */}
        {instagram && (
          <div className="flex items-center gap-2">
            <Instagram className="size-3 text-[#00d4ff] flex-shrink-0" />
            <a 
              href={`https://instagram.com/${instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/70 hover:text-[#00d4ff] transition-colors duration-300 font-['Rajdhani']"
            >
              {instagram}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0d1525] to-[#0a0f1c]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a855f7]/8 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />
      
      {/* Animated Orbs */}
      <AnimatedOrb className="top-1/4 left-1/4" />
      <AnimatedOrb className="bottom-1/4 right-1/4" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24 relative z-10">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Orbitron'] tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-white via-[#e0e0e0] to-white bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </motion.h1>

          {/* Glowing Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 sm:w-32 lg:w-48 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto font-['Rajdhani']"
          >
            Meet the brilliant minds bringing Texibition 2K26 to life!
          </motion.p>
        </motion.div>

        {/* Convenor & Treasurer Section */}
        <section className="mb-12 sm:mb-16">
          <SectionHeader 
            title="Convenor & Treasurer" 
            subtitle="strategic vision and operational backbone of Texibition 2K26"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {convenorTreasurer.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                designation={member.designation}
                phone={member.phone}
                email={member.email}
                imageUrl={member.imageUrl}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Lead Organizers Section */}
        <section className="mb-12 sm:mb-16">
          <SectionHeader 
            title="Lead Organizers" 
            subtitle="The driving force behind Texibition's success, leading the charge with passion and dedication"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {leadOrganizers.map((member, index) => (
              member.imageUrl ? (
                <CoordinatorCardWithPhoto
                  key={index}
                  name={member.name}
                  event={member.designation}
                  phone={member.phone}
                  email={member.email}
                  linkedin={member.linkedin}
                  imageUrl={member.imageUrl}
                  delay={index * 0.1}
                />
              ) : (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  designation={member.designation}
                  phone={member.phone}
                  email={member.email}
                  delay={index * 0.1}
                />
              )
            ))}
          </div>
        </section>

        {/* Coordinators Section */}
        <section className="mb-12 sm:mb-16">
          <SectionHeader 
            title="Event Coordinators" 
            subtitle="The passionate organizers behind each event, ensuring every detail is perfect for an unforgettable experience"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {coordinators.map((coordinator, index) => (
              coordinator.imageUrl ? (
                <CoordinatorCardWithPhoto
                  key={index}
                  name={coordinator.name}
                  event={coordinator.event}
                  phone={coordinator.phone}
                  email={coordinator.email}
                  linkedin={coordinator.linkedin}
                  imageUrl={coordinator.imageUrl}
                  delay={index * 0.03}
                />
              ) : (
                <CoordinatorCard
                  key={index}
                  name={coordinator.name}
                  event={coordinator.event}
                  phone={coordinator.phone}
                  email={coordinator.email}
                  icon={coordinator.icon}
                  delay={index * 0.03}
                />
              )
            ))}
          </div>
        </section>

        {/* Sponsor Leads Section - Commented Out
        <section className="mb-12 sm:mb-16">
          <SectionHeader 
            title="Sponsor Leads" 
            subtitle="The dedicated team responsible for building strong partnerships and securing support to make Texibition 2K26 a reality"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ComingSoonCard title="Sponsor Lead 1" delay={0} />
            <ComingSoonCard title="Sponsor Lead 2" delay={0.1} />
            <ComingSoonCard title="Sponsor Lead 3" delay={0.2} />
          </div>
        </section>
        */}

        {/* Lead Developers & Designers Section */}
        <section className="mb-12 sm:mb-16">
          <SectionHeader 
            title="Lead Developers & Designers" 
            subtitle="The creative minds crafting the digital experience of Texibition 2K26, from the website to the event app and beyond"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-w-4xl mx-auto justify-items-center">
            {/* Subhajit Pathak */}
            <LeadDeveloperCard
              name="Subhajit Pathak"
              imageUrl="https://instagram.fccu5-1.fna.fbcdn.net/v/t51.82787-15/558975040_17902957881258753_7411388991064470049_n.webp?_nc_cat=109&ig_cache_key=MzczNTE3Mjg2NTY0NjQ2MDkzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=PeOqFklb3FIQ7kNvwFP7j4i&_nc_oc=AdngKNZBWCREO0iERrT_WqqlNBufCOKlQ3ySyE50dwFChENLJHYlmYhSTJ8r5kY3Vis&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu5-1.fna&_nc_gid=YBZ4yILt-qDNry7ZOQ2ohg&oh=00_AfuRUimGePkJvC0RxmjyaD0OoDp9Ca1hAhZiU-pO0qmn3Q&oe=699FEA25"
              phone="+91 9531605804"
              email="subhajitpathak9900@gmail.com"
              github="@SUBHAZIT"
              linkedin="https://www.linkedin.com/in/subhajit-pathak-4820672b1/"
              designation="Lead Developer"
              delay={0.1}
            />
            {/* Arpan Sarkar */}
            <LeadDeveloperCard
              name="Arpan Sarkar"
              imageUrl="https://media.licdn.com/dms/image/v2/D5603AQHNv3m9G0IimQ/profile-displayphoto-shrink_400_400/B56ZYhdy.yGsAk-/0/1744318183872?e=1773273600&v=beta&t=Fm8loQEOYRg5X20Nh05JuteuUh9TwvreJ3syXg2sgu8"
              phone="+91 9800000000"
              email="contact.arpan.sarkar@gmail.com"
              github="@arpan7sarkar"
              linkedin="https://www.linkedin.com/in/arpan7sarkar/"
              designation="Co-Developer"
              delay={0.2}
            />
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-12 sm:mb-16">
          <MapView 
            title="Visit Us" 
            subtitle="Brainware University, Barasat, Kolkata"
          />
        </section>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Side UI Element */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#a855f7]/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default Team;

