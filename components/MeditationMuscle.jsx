"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/MeditationMuscle.css";
import SideBar from "./SideBar";
import Link from "next/link";
import MeditationMusicPlayer from "./MeditationMusicPlayer";

export default function MeditationMuscle() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [meditation, setMeditation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchMeditation(id);
    }
  }, [id]);

  const fetchMeditation = async (meditationId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/guidedMeditations/${meditationId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch meditation data: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setMeditation(data);
    } catch (error) {
      console.error('Error fetching meditation:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayAudio = () => {
    setShowPlayer(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!meditation) return <div>No meditation data available</div>;

  return (
    <div className="medi-page-body">
      <SideBar />
      <div className="med-page-wrapper">
        <nav className="med-navbar">{/* Navbar content if any */}</nav>
        <section className="med-content-box">
          <div className="med-content-left">
            <div className="med-goback-nd-pic">
              <Link href="/meditation">
                <i className="fa-solid fa-chevron-left"></i>
                <p className="med-back">Back</p>
              </Link>
            </div>
            <div className="med-pic">
              <img
                src={meditation.imgSrc || "/images/Rectangle_35.png"}
                alt={meditation.title || "med cover"}
                className="med-cover"
              />
            </div>
          </div>
          <div className="med-middle-content">
            <div className="med-progressive-title">
              <h1 className="med-title">{meditation.title}</h1>
            </div>
            <div className="med-guide-text">
              <p className="med-text-read">{meditation.description}</p>
              <span className="med-ul-title">{meditation.title}:</span>
              <div dangerouslySetInnerHTML={{ __html: meditation.content }} />
            </div>
            <div className="med-btn-audio">
              <button className="med-btn" onClick={handlePlayAudio}>
                Play audio
              </button>
            </div>
            {showPlayer && (
              <MeditationMusicPlayer src={meditation.audioSrc || "/medits/meditation1.mp3"} />
            )}
          </div>
          <div className="med-content-right">
            <div className="med-tracker">{/* Tracker content if any */}</div>
            <div className="med-btn-last">
              <Link href="/meditation">
                <button className="med-btn-done">Done</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
