import { useState, useEffect, useRef } from "react";

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
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={handlePlayPause} style={{ marginRight: "10px" }}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default MeditationMusicPlayer;