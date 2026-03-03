import { useState, useEffect } from 'react';

interface RegistrationStatus {
  isOpen: boolean;
}

export function useRegistrationStatus(): RegistrationStatus {
  const registrationDeadline = new Date('2026-03-05T23:59:59').getTime();

  const [status, setStatus] = useState<RegistrationStatus>(() => {
    const difference = registrationDeadline - new Date().getTime();
    return { isOpen: difference > 0 };
  });

  useEffect(() => {
    const timeUntilDeadline = registrationDeadline - new Date().getTime();

    if (timeUntilDeadline <= 0) {
      setStatus({ isOpen: false });
      return;
    }

    const timeout = setTimeout(() => {
      setStatus({ isOpen: false });
    }, timeUntilDeadline);

    return () => clearTimeout(timeout);
  }, []);

  return status;
}
