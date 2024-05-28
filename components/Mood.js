import React, { useState } from 'react';
import '../styles/HomePage.css';
import "../styles/HomePageHappy.css"
import "../styles/HomePageSad.css"
import "../styles/HomePageAngry.css"
import "../styles/HomePageStressed.css"
import "../styles/HomePageCalm.css"

const Moods = ({handleChangeMood}) => {
  const [theme, setTheme] = useState('../styles/HomePage.css');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
    
  return (
    <div className={`porra-carinhas ${theme}`}>
      <div className="porra-happy">
        <div className="porra-happy-box">
          <a
            className="porra-happy-click"
            onClick={() => handleChangeMood(1)}
          >
            <img
              src="/images/happy.png"
              alt="happy"
              className="porra-happy-icon"
            />
          </a>
        </div>
        <div className="porra-happy-word">
          <a
            className="porra-happy-theme"
            onClick={() => handleChangeMood(1)}
          >
            Happy
          </a>
        </div>
      </div>
      <div className="porra-sad">
        <div className="porra-sad-box">
          <a
            className="porra-sad-click"
            onClick={() => handleChangeMood(2)}
          >
            <img
              src="/images/sad.png"
              alt="sad"
              className="porra-sad-icon"
            />
          </a>
        </div>
        <div className="porra-sad-word">
          <a
            className="porra-sad-theme"
            onClick={() => handleChangeMood(2)}
          >
            Sad
          </a>
        </div>
      </div>
      <div className="porra-angry">
        <div className="porra-angry-box">
          <a
            className="porra-angry-click"
            onClick={() => handleChangeMood(3)}
          >
            <img
              src="/images/angry.png"
              alt="angry"
              className="porra-angry-icon"
            />
          </a>
        </div>
        <div className="porra-angry-word">
          <a
            className="porra-angry-theme"
            onClick={() => handleChangeMood(3)}
          >
            Angry
          </a>
        </div>
      </div>
      <div className="porra-stressed">
        <div className="porra-stressed-box">
          <a
            className="porra-stressed-click"
            onClick={() => handleChangeMood(4)}
          >
            <img
              src="/images/stressed.png"
              alt="stressed"
              className="porra-stressed-icon"
            />
          </a>
        </div>
        <div className="porra-stressed-word">
          <a
            className="porra-stressed-theme"
            onClick={() => handleChangeMood(4)}
          >
            Stressed
          </a>
        </div>
      </div>
      <div className="porra-calm">
        <div className="porra-calm-box">
          <a
            className="porra-calm-click"
            onClick={() => handleChangeMood(5)}
          >
            <img
              src="/images/calm.png"
              alt="calm"
              className="porra-calm-icon"
            />
          </a>
        </div>
        <div className="porra-calm-word">
          <a
            className="porra-calm-theme"
            onClick={() => handleChangeMood(5)}
          >
            Calm
          </a>
        </div>
      </div>
    </div>
  );
};

export default Moods;
