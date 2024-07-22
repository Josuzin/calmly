"use client";
import Link from "next/link";
import styles from "../styles/HomePageCalm.css";
import SideBarCalm from "./SideBarCalm";
import Chatboxcalm from "./Chatboxcalm";
import Moods from "./Mood";
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import MeditationTracker from "./MeditationTracker";
import MotivationalSentence from "./MotivationalSentence";

export default function HomePage({ handleMood }) {
  const [caraSelecionada, selecionarCara] = useState("calm");

  function handleChangeMood(num) {
    handleMood(num);
    return;
  }

  return (
    <div className="page-main-main-calm">
      <SideBarCalm />
      <div className="porra-page-flex-box">
        <div className="porra-main-content-box">
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
                    <img className="calm-gif" src="/images/calm.webp" />
                  </div>
                  <div className="porra-mood-song">
                    <AudioPlayer
                      showJumpControls={false}
                      showDownloadProgress={false}
                      controls
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
          </div>
          <div className="porra-sec-div">
            <div className="porra-track-box">
              <div className="porra-phrase-box-calm">
                <MotivationalSentence />
              </div>
              <MeditationTracker />
            </div>
            <div className="porra-chat-box">
              <Chatboxcalm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
