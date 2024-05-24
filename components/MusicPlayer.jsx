import { useState, useRef } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStart = () => {
    audioRef.current.currentTime = 0;
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);  
    }
  };
  return (
    <div>
        <audio ref={audioRef} src="/music.mp3" />
        <button onClick={handleRestart}>Restart</button>
    </div>
  )
};

export default MusicPlayer