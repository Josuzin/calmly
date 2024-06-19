"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import MeditationMusicPlayer from "../../components/MeditationMusicPlayer";
import "../../styles/MeditationMuscle.css";

const MeditationDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [meditation, setMeditation] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const fetchMeditation = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/meditations/${id}`);
          const data = await response.json();
          setMeditation(data);
        } catch (error) {
          console.error("Error fetching meditation:", error);
        }
      }
    };

    fetchMeditation();
  }, [id]);

  if (!meditation) return <div>Loading...</div>;

  const handlePlayAudio = () => {
    setShowPlayer(true);
  };

  return (
    <div className="medi-page-body">
      <SideBar />
      <div className="med-page-wrapper">
        <nav className="med-navbar">{/* Navbar content if any */}</nav>
        <section className="med-content-box">
          <div className="med-content-left">
            <div className="med-goback-nd-pic">
              <a href="">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
              <Link href={"/meditation"}>
                <p className="med-back">Back</p>
              </Link>
            </div>
            <div className="med-pic">
              <img
                src={meditation.imgSrc}
                alt="med cover"
                className="med-cover"
              />
            </div>
          </div>
          <div className="med-middle-content">
            <div className="med-progressive-title">
              <h1 className="med-title">{meditation.title}</h1>
            </div>
            <div className="med-guide-text">
              <p className="med-text-read">{meditation.content}</p>
            </div>
            <div className="med-btn-audio">
              <button className="med-btn" onClick={handlePlayAudio}>
                Play audio
              </button>
            </div>
            {showPlayer && <MeditationMusicPlayer src={meditation.audioSrc} />}
          </div>
          <div className="med-content-right">
            <div className="med-tracker">{/* Tracker content if any */}</div>
            <div className="med-btn-last">
              <Link href={"/meditation"}>
                <button className="med-btn-done">Done</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeditationDetail;
