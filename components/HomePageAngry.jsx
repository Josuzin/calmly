"use client";

import Link from "next/link";
import styles from "../styles/HomePageAngry.css";
import SideBarAngry from "./SideBarAngry";
import Chatboxangry from "./Chatboxangry";
import Moods from "./Mood";
import MotivationalSentence from "./MotivationalSentence";
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import MeditationTracker from "./MeditationTracker";

export default function HomePage({ handleMood }) {
  const [caraSelecionada, selecionarCara] = useState("angry");
  function handleChangeMood(num) {
    handleMood(num);
    return;
  }

  return (
    <div className="page-main-main-angry">
      <SideBarAngry />
      <div className="porra-page-flex-box">
        <section className="porra-main-content-box">
          <div className="porra-para-flex">
            <div className="porra-mood-box-angry">
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
                    <img className="angry-gif" src="/images/angry.gif" />
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
            <div className="porra-sec-div">
              <div className="porra-track-box">
                <div className="porra-phrase-box-angry">
                  <MotivationalSentence />
                </div>
                <MeditationTracker />
              </div>
              <div className="porra-chat-box">
                <Chatboxangry />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
