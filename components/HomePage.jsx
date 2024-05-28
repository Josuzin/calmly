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
            {caraSelecionada && (
              <div className="porra-mood-direita">
                <div className="porra-mood-image">
                  <img src="https://www.gazetadigital.com.br/storage/webdisco/2019/03/29/1200x900/c875c5e289bd5093f016383d52f9a6a2.jpg" />
                </div>
                <div className="porra-mood-song">
                  <AudioPlayer
                    showJumpControls={false}
                    showDownloadProgress={false}
                    controls
                    autoPlay
                    src={
                      caraSelecionada === "happy"
                        ? "/musics/music1.mp3"
                        : caraSelecionada === "angry"
                        ? "/musics/music2.mp3"
                        : caraSelecionada === "sad"
                        ? "/musics/music3.mp3"
                        : caraSelecionada === "stressed"
                        ? "/musics/music4.mp3"
                        : caraSelecionada === "calm" && "/musics/music5.mp3"
                    }
                  />
                </div>
              </div>
            )}
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
                  {/* <div classNameName="ellipse"> */}
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
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="porra-chat-box">
              {/* <div className="porra-top-chat-box"> */}
              {/* <div className="porra-therapist-box">
                                      <h1 className="porra-therapist">My Therapist</h1>
                                  </div>
                                  <div className="porra-icon">
                                      <a href="" className="porra-click-expand"><i className="fa-solid fa-expand"></i></a>
                                  </div>
                              </div>
                              <div className="porra-middle-chat-box">
                                  <div className="porra-first-msg">
                                      <div className="porra-chat-icon">
                                          <img src="/images/chat.png" alt="chat" className="porra-chat-photo"/>
                                      </div>
                                      <div className="porra-de-msg">
                                          <p className="porra-chat-says">
                                              Hello my friend, how are you feeling today?
                                          </p>
                                      </div>
                                  </div>
                                      <div className="porra-user-msg-fim">
                                          <div className="porra-user-msg">
                                              <p className="porra-user-msg-content">
                                                  I’m tired!
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              <div className="porra-send-box">
                                  <div className="porra-send-flex">
                                      <input type="text" className="porra-send-input"/>
                                      <button className="porra-send-btn">
                                          <i className="fa-solid fa-arrow-up"></i>
                                      </button>
                                  </div> */}
              <Chatbox />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
