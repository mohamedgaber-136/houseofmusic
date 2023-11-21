import styles from "./AudioPlayer.module.css";
import React, { useState, useRef, useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";

config.autoAddCss = false;
export const PLayer = ({ audioSrc, imgSrc }) => {
  let audioRef = useRef(null);
  let [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playMusic = () => {
    audioRef.current.play();
    setPlay(true);
  };
  const pauseMusic = () => {
    audioRef.current.pause();
    setPlay(false);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    if (play) {
      const intervalId = setInterval(() => {
        setCurrentTime(audioRef.current.currentTime);
        
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [play]);
  return (
    <div
      className={`${styles.PlayerSection} my-5 d-flex align-items-center gap-2 p-2`}
    >
      <audio
        src={audioSrc}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
      <img src={imgSrc} alt="songImg" />
      {play ? (
        <span className={styles.playBtn}>
          <FontAwesomeIcon
            icon={faPauseCircle}
            style={{ fontSize: 15, color: "grey" }}
            onClick={pauseMusic}
          />
        </span>
      ) : (
        <span className={styles.playBtn}>
          <FontAwesomeIcon
            onClick={playMusic}
            icon={faPlayCircle}
            style={{ fontSize: 15, color: "lightgrey" }}
          />
        </span>
      )}
      <span>{formatTime(currentTime)}/{formatTime(duration)}</span>

      <ProgressBar
        now={formatTime(currentTime)}
        variant="danger"
        max={formatTime(duration)}
        style={{ width: "100%", height: "6px", boxShadow: "0 0 2px 2px grey" }}
      /> 
    </div>
  );
};
