'use client';
import React, { useState, useEffect } from "react";
import styles from "/styles/Timer.css";
import SideBar from "./SideBar";

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
      <div class="timer-animation-1"></div>
      <div class="timer-animation-2"></div>
      <div class="timer-animation-3"></div>
      <div class="timer-para-flex">
        
        <nav class="timer-navbar-box"></nav>
        <section class="timer-content-box">

          <div className="timer-h1-box"><h1>Timer</h1>
          </div>
          <div class="timer-animation-box">
            <div class="timer-counting">
              <div class="timer-number-box">
                <span className="timer-number">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          <div class="timer-music-section-box">
            <div class="timer-music-img-box">
              <div class="timer-music-photo-box">
                <img src="timer-music-cover.png" alt="music cover" class="timer-cover-size" />
              </div>
              <div class="timer-music-title-box">
                <div class="timer-music-flex-box">
                  <h2 class="timer-music-title">Tunnel of Love</h2>
                  <h3 class="timer-author-box">Dire Straits</h3>
                </div>
              </div>
            </div>
            <div class="timer-play-btn-box">
              <div class="timer-replay-box">
                <button class="timer-btn-replay">
                  <i class="fa-solid fa-rotate-right"></i>
                </button>
              </div>
              <div class="timer-play-box">
                <button class="timer-btn-play">
                  <i class="fa-solid fa-pause"></i>
                </button>
              </div>
              <div class="timer-pause-box">
                <button class="timer-btn-pause">
                  <i class="fa-solid fa-square"></i>
                </button>
              </div>
            </div>
            <div class="timer-empty"></div>
          </div>
        </section>
        {!isRunning && (
          <div className="time-selection">
            <button onClick={() => handleSelectTime(3)} className="timer-btn-3">3 minutos</button>
            <button onClick={() => handleSelectTime(5)} className="timer-btn-">5 minutos</button>
            <button onClick={() => handleSelectTime(10)} className="timer-btn-10">10 minutos</button>
            <button onClick={() => handleSelectTime(15)} className="timer-btn-15">15 minutos</button>
            <button onClick={() => handleSelectTime(20)} className="timer-btn-20">20 minutos</button>
            <button onClick={() => handleSelectTime(30)} className="timer-btn-30">30 minutos</button>
          </div>
        )}

        <button onClick={handleStartPause}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>


    </div>
  );
}
