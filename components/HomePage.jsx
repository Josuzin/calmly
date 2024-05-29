"use client";

import Link from "next/link";
import styles from "../styles/HomePage.css";
import SideBar from "./SideBar";
import Chatbox from "./Chatbox";
import { useEffect, useState } from "react";
import HomePageHappy from "./HomePageHappy"
import Moods from "./Mood";
// import '../styles/HomePage.css';
// import "../styles/HomePageHappy.css"
// import "../styles/HomePageSad.css"
// import "../styles/HomePageAngry.css"
// import "../styles/HomePageStressed.css"
// import "../styles/HomePageCalm.css"

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function HomePage({handleMood}) {
  const [caraSelecionada, selecionarCara] = useState("happy");

  function handleChangeMood(num) {
    handleMood(num)
    return
  }

  return (
    <div className="page-main-main">
    <SideBar />
    <div className="porra-page-flex-box">
      <section className="porra-main-content-box">
        <div className="porra-para-flex">
          <div className="porra-mood-box">
            <div className="porra-mood-esquerda">
              <div className="porra-whats-your-mood">
                <h1 className="porra-mood-title">
                  What’s your mood
                  <br />
                  today?
                </h1>
              </div>
                  <Moods handleChangeMood={handleChangeMood} />
            </div>
          </div>
          <div className="porra-sec-div">
            <div className="porra-track-box">
              <div className="porra-phrase-box">
                <p className="porra-phrase">
                  "Be the energy you wish to attract.”
                </p>
              </div>
              <div className="porra-track">
                <div className="porra-medi-track">
                  <h3 className="porra-tracker-title">Meditation Tracker</h3>
                </div>
                <div className="porra-circle">
                  <div className="porra-green-face">
                    <img
                      src="/images/chill.png"
                      alt="chill"
                      className="porra-green"
                    />
                  </div>
                  <div className="porra-days">
                    <h4 className="porra-days-text">22 days</h4>
                  </div>
                  <div className="porra-streak">
                    <h5 className="porra-streak-text">streak</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="porra-chat-box">
              <Chatbox/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
