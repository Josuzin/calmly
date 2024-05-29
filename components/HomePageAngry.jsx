"use client";

import Link from "next/link"
import styles from "../styles/HomePageAngry.css"
import SideBar from "./SideBar"
import Chatboxangry from "./Chatboxangry";
import Moods from "./Mood"
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function HomePage({handleMood}) {
  const [caraSelecionada, selecionarCara] = useState("happy");
    function handleChangeMood(num) {
        handleMood(num)
        return
      }

    return (
        <div className="page-main-main-angry">
            <SideBar />
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
                                <div className="porra-phrase-box-angry">
                                    <p className="porra-phrase">"Be the energy you wish to attract.”</p>
                                </div>
                                <div className="porra-track-angry">
                                <div className="porra-medi-track">
                                    <h3 className="porra-tracker-title">
                                        Meditation Tracker
                                    </h3>
                                </div>
                                    <div className="porra-circle">
                                        {/* <div classNameName="ellipse"> */}
                                            <div className="porra-green-face">
                                                <img src="/images/chill.png" alt="chill" className="porra-green"/>
                                            </div>
                                            <div className="porra-days">
                                                <h4 className="porra-days-text">
                                                    22 days
                                                </h4>
                                            </div>
                                            <div className="porra-streak">
                                                <h5 className="porra-streak-text">
                                                    streak
                                                </h5>
                                            </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="porra-chat-box">
                            <Chatboxangry />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
