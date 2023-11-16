import React from "react";
import mainStyles from "./main.module.css";
import styles from "../page.module.css";
import BackgroundImg from "../Components/BackgroundImg/BackgroundImg";
import { TeamData } from "../Components/TeamData/TeamData";
import ImagesCarousel from "../Components/ImagesCarousel/ImagesCarousel";
import AudioPlayer from "../Components/AudioPlayer/AudioPlayer";
const main = () => {
  return (
    <div className={`${styles.mainData}`}>
      <BackgroundImg mainStyles={mainStyles} />
      <TeamData mainStyles={mainStyles} />
      <ImagesCarousel />
      <AudioPlayer />
      <AudioPlayer />
    </div>
  );
};
export default main;
