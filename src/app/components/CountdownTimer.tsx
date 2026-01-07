import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


export function CountdownTimer() {
  // Set registration deadline to February 19, 2026
  const registrationDeadline = new Date('2026-02-19T23:59:59').getTime();


  const calculateTimeLeft = (): TimeLeft => {
    const difference = registrationDeadline - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#00d4ff]/10 to-[#a855f7]/10 border border-[#00d4ff]/30 backdrop-blur-sm">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 text-center">
              <motion.div
                key={unit.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent mb-2"
              >
                {String(unit.value).padStart(2, '0')}
              </motion.div>
              <div className="text-sm md:text-base text-white/60 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
