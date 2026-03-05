import { useState, useEffect } from 'react';

interface RegistrationStatus {
  isOpen: boolean;
  eventSpecificOpen?: boolean;
}

// Events that remain open until March 9th, 2026
const eventsOpenUntilMarch9 = ['valorant', 'the-architect'];

export function useRegistrationStatus(eventId?: string): RegistrationStatus {
  const generalDeadline = new Date('2026-03-05T23:59:59').getTime();
  const specialDeadline = new Date('2026-03-09T23:59:59').getTime();

  const [status, setStatus] = useState<RegistrationStatus>(() => {
    const now = new Date().getTime();
    const isSpecialEvent = eventId && eventsOpenUntilMarch9.includes(eventId);
    const deadline = isSpecialEvent ? specialDeadline : generalDeadline;
    const difference = deadline - now;
    return { 
      isOpen: difference > 0,
      eventSpecificOpen: isSpecialEvent ? difference > 0 : undefined
    };
  });

  useEffect(() => {
    const isSpecialEvent = eventId && eventsOpenUntilMarch9.includes(eventId);
    const deadline = isSpecialEvent ? specialDeadline : generalDeadline;
    const timeUntilDeadline = deadline - new Date().getTime();

    if (timeUntilDeadline <= 0) {
      setStatus({ 
        isOpen: false,
        eventSpecificOpen: isSpecialEvent ? false : undefined
      });
      return;
    }

    const timeout = setTimeout(() => {
      setStatus({ 
        isOpen: false,
        eventSpecificOpen: isSpecialEvent ? false : undefined
      });
    }, timeUntilDeadline);

    return () => clearTimeout(timeout);
  }, [eventId]);

  return status;
}
