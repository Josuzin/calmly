"use client";
import Link from "next/link";
import styles from "../styles/HomePageHappy.css";
import SideBar from "./SideBar";
import Chatboxhappy from "./Chatboxhappy";
import Moods from "./Mood";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useEffect, useState } from "react";
import MeditationTracker from "./MeditationTracker";

export default function HomePage({ handleMood }) {
  const [caraSelecionada, selecionarCara] = useState("happy");

  function handleChangeMood(num) {
    handleMood(num);
    return;
  }

  return (
    <div className="page-main-main-happy">
      <SideBar />
      <div className="porra-page-flex-box">
        <section className="porra-main-content-box">
          <div className="porra-para-flex">
            <div className="porra-mood-box-happy">
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
                    <img className="happy-gif" src="/images/happy.gif" />
                  </div>
                  <div className="porra-mood-song">
                    <AudioPlayer
                      showJumpControls={false}
                      showDownloadProgress={false}
                      controls
                      autoPlay
                      src={
                        caraSelecionada === "happy"
                          ? "/musics/happy.mp3"
                          : caraSelecionada === "angry"
                          ? "/musics/angry.mp3"
                          : caraSelecionada === "sad"
                          ? "/musics/sad.mp3"
                          : caraSelecionada === "stressed"
                          ? "/musics/stressed.mp3"
                          : caraSelecionada === "calm" && "/musics/calm.mp3"
                      }
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="porra-sec-div">
              <div className="porra-track-box">
                <div className="porra-phrase-box-happy">
                  <p className="porra-phrase">
                    "Be the energy you wish to attract.”
                  </p>
                </div>
                <MeditationTracker />
              </div>
              <div className="porra-chat-box">
                <Chatboxhappy />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
