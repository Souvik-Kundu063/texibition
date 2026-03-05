import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FlippingDigit } from './FlippingDigit';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Events that remain open until March 9th, 2026
const eventsOpenUntilMarch9 = ['valorant', 'the-architect'];

interface CountdownTimerProps {
  eventId?: string;
}

export function CountdownTimer({ eventId }: CountdownTimerProps) {
  // If it's a special event (Valorant or The Architect), use March 9th deadline
  // Otherwise use March 5th deadline
  const isSpecialEvent = eventId && eventsOpenUntilMarch9.includes(eventId);
  const deadline = isSpecialEvent 
    ? new Date('2026-03-09T23:59:59').getTime()
    : new Date('2026-03-05T23:59:59').getTime();


  const calculateTimeLeft = (): TimeLeft => {
    const difference = deadline - new Date().getTime();

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
  }, [eventId]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start gap-1 sm:gap-2 lg:gap-3 xl:gap-4 px-1 sm:px-2 overflow-hidden">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group flex flex-col items-center"
        >
          <div className="relative text-center w-full overflow-hidden bg-[#0a0a0f]/50 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-white/10">
            <div className="mb-0.5 flex justify-center items-center">
              <FlippingDigit value={unit.value} />
            </div>
            <div className="text-[8px] sm:text-[10px] text-white/60 uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
