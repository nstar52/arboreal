import React from "react";
import audio from "../assets/AQ_Take.mp3"

const song = new Audio(audio);

const Player = (props) => {
    if (song.pause()) {
        song.play();
      } else {
        song.pause()
        song.currentTime = null;
      }

  return (
    <>
    </>
  );
};

export default Player;
