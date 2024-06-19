import React from "react";

const MeditationMusicPlayer = ({ src }) => {
  return (
    <audio controls>
      <source src={src} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MeditationMusicPlayer;
