import { useState, useEffect, useRef } from "react";
import styles from "../styles/MeditationMusicPlayer.css";

const MeditationMusicPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="med-muscle-controls">
      <audio ref={audioRef} src={src} />
      <button className="med-muscle-btns" onClick={handlePlayPause} style={{ marginRight: "10px" }}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button className="med-muscle-btns" onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default MeditationMusicPlayer;