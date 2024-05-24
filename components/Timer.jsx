'use client';
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0 && isRunning) {
      setIsRunning(false); // Stop the timer when it reaches 0
    }
  }, [seconds, isRunning]);

  const handleStartPause = () => {
    if (!isRunning && seconds === 0 && selectedTime > 0) {
      setSeconds(selectedTime * 60);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setSelectedTime(0);
  };

  const handleSelectTime = (value) => {
    setSelectedTime(value);
    setSeconds(value * 60); // Update the timer immediately
  };

  return (
    <div>
      <h1>Timer: {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</h1>
      
      {!isRunning && (
        <div className="time-selection">
          <button onClick={() => handleSelectTime(3)}>3 minutos</button>
          <button onClick={() => handleSelectTime(5)}>5 minutos</button>
          <button onClick={() => handleSelectTime(10)}>10 minutos</button>
          <button onClick={() => handleSelectTime(15)}>15 minutos</button>
          <button onClick={() => handleSelectTime(20)}>20 minutos</button>
          <button onClick={() => handleSelectTime(30)}>30 minutos</button>
        </div>
      )}

      <button onClick={handleStartPause}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
