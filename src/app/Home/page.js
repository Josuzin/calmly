"use client";
import HomePage from "../../../components/HomePage";
import HomePageHappy from "../../../components/HomePageHappy";
import HomePageSad from "../../../components/HomePageSad";
import HomePageAngry from "../../../components/HomePageAngry";
import HomePageStressed from "../../../components/HomePageStressed";
import HomePageCalm from "../../../components/HomePageCalm";
import { useState } from "react";


export default function Home() {
  const [mood, setMood] = useState(0);

  function handleMood(num) {
    setMood(num);
  }

  return (
    <>
      {
    mood === 0 ? <HomePage handleMood={handleMood} />
      : mood === 1 ? <HomePageHappy handleMood={handleMood}/>
        : mood === 2 ? <HomePageSad handleMood={handleMood}/>
          : mood === 3 ? <HomePageAngry handleMood={handleMood}/>
            : mood === 4 ? <HomePageStressed handleMood={handleMood}/>
              : mood === 5 ? <HomePageCalm handleMood={handleMood} />
                : <HomePage handleMood={handleMood} />}
    </>
  );
}