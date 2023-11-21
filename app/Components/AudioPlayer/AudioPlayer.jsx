"use client";
import styles from "./AudioPlayer.module.css";
import img from "../../../public/images/image_2.png";
import { PLayer } from "./PLayer";
const AudioPlayer = () => {
 
  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <div className={`${styles.audioParent} d-flex align-items-center`}>
      <PLayer
          imgSrc={img.src}
          audioSrc={"/leva-eternity-149473.mp3"}
          />
      </div>
    </div>
  );
};
export default AudioPlayer;
