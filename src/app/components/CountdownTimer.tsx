import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FlippingDigit } from './FlippingDigit';

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
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 xl:gap-16">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group flex flex-col items-center"
        >
          <div className="relative text-center">
            <div className="mb-1 sm:mb-2 flex justify-center">
              <FlippingDigit value={unit.value} />
            </div>
            <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
