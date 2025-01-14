import React, { useState, useEffect } from 'react';
import TimerDisplay from '../TimerDisplay';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <TimerDisplay seconds={seconds} />;
};

export default Timer;