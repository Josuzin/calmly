"use client";

import Link from "next/link";
import styles from "../styles/HomePage.css";
import SideBar from "./SideBar";
import Chatbox from "./Chatbox";
import { useEffect, useState } from "react";
import HomePageHappy from "./HomePageHappy";
import Moods from "./Mood";
// import '../styles/HomePage.css';
// import "../styles/HomePageHappy.css"
// import "../styles/HomePageSad.css"
// import "../styles/HomePageAngry.css"
// import "../styles/HomePageStressed.css"
// import "../styles/HomePageCalm.css"
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import MeditationTracker from "./MeditationTracker";

export default function HomePage({ handleMood }) {
  const [caraSelecionada, selecionarCara] = useState("happy");

  const [mood, setMood] = useState(0);
     
  function handleChangeMood(num) {
    handleMood(num);
    return;
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
                <MeditationTracker />
              </div>
              <div className="porra-chat-box">
                <Chatbox />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
