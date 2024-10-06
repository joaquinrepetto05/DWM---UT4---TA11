import React from 'react';

const TimerDisplay = ({ seconds }) => {
  return (
    <div>
      <h1>Temporizador</h1>
      <p>Segundos: {seconds}</p>
    </div>
  );
};

export default TimerDisplay;