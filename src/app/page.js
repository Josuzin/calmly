"use client";

import Image from "next/image";
import LoginForm from "../../pages/loginform";
import SideBar from "../../components/SideBar";
import HomePage from "../../components/HomePage";
import MeditationPage from "../../components/MeditationPage";
import Timer from "../../components/Timer";
import Chatbox from "../../components/Chatbox";
import FirstPage from "../../components/FirstPage";
import Profile from "../../components/Profile";
import MeditationMuscle from "../../components/MeditationMuscle";
import Journaling from "../../components/Journaling";
import ChatPage from "../../components/ChatPage";
import HomePageHappy from "../../components/HomePageHappy";
import HomePageSad from "../../components/HomePageSad";
import HomePageAngry from "../../components/HomePageAngry";
import HomePageStressed from "../../components/HomePageStressed";
import HomePageCalm from "../../components/HomePageCalm";
import ChatPageHappy from "../../components/ChatPageHappy";
import ChatPageSad from "../../components/ChatPageSad";
import ChatPageAngry from "../../components/ChatPageAngry";
import ChatPageStressed from "../../components/ChatPageStressed";
import ChatPageCalm from "../../components/ChatPageCalm";
import JournalingNotes from "../../components/JournalingNotes";
import CreateAcc from "../../components/CreateAcc";
import Toggle from "../../components/Toggle";
import { useState } from "react";
import MeditationTracker from "../../components/MeditationTracker";

export default function Home() {
  const [mood, setMood] = useState(0);

  function handleMood(num) {
    setMood(num);
  }

  return (
    <>
      {/* {
    mood === 0 ? <HomePage handleMood={handleMood} />
      : mood === 1 ? <HomePageHappy handleMood={handleMood}/>
        : mood === 2 ? <HomePageSad handleMood={handleMood}/>
          : mood === 3 ? <HomePageAngry handleMood={handleMood}/>
            : mood === 4 ? <HomePageStressed handleMood={handleMood}/>
              : mood === 5 ? <HomePageCalm handleMood={handleMood} />
                : <HomePage handleMood={handleMood} />} */}
      <HomePageCalm/>
    </>
  );
}
