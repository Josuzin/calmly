"use client";
import Link from "next/link";
import styles from "../styles/HomePageCalm.css";
import SideBar from "./SideBar";
import Chatboxcalm from "./Chatboxcalm";
import Moods from "./Mood"
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import MeditationTracker from "./MeditationTracker";

export default function HomePage({handleMood}) {
  const [caraSelecionada, selecionarCara] = useState("happy");

  function handleChangeMood(num) {
    handleMood(num)
    return
  }

  return (
    <div className="page-main-main-calm">
      <SideBar />
      <div className="porra-page-flex-box">
        <section className="porra-main-content-box">
          <div className="porra-para-flex">
          <div className="porra-mood-box-calm">
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
                <div className="porra-phrase-box-calm">
                  <p className="porra-phrase">
                    "Be the energy you wish to attract.”
                  </p>
                </div>
                <MeditationTracker/>
              </div>
              <div className="porra-chat-box">
              <Chatboxcalm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
