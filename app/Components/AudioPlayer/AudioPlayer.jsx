"use client";
import styles from "./AudioPlayer.module.css";
import React, { useState, useEffect, useRef } from "react";
const AudioPlayer = () => {
  let audioRef = useRef();
  const playMusic = () => {
    audioRef.current.play();
  };
  const pauseMusic = () => {
    audioRef.current.pause();
  };
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <div className={`${styles.audioParent}`}>
        <audio
          ref={audioRef}
          src="/leva-eternity-149473.mp3"
          type="audio/mpeg"
        />
      </div>
      <button onClick={playMusic}>click</button>
      <button onClick={pauseMusic}>pause</button>
    </div>
  );
};
export default AudioPlayer;
