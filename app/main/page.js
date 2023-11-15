import React from "react";
import mainStyles from "./main.module.css";
import styles from "../page.module.css";
import BackgroundImg from "../Components/BackgroundImg/BackgroundImg";
import { TeamData } from "../Components/TeamData/TeamData";
const main = () => {
  return (
    <div className={`${styles.mainData}`}>
      <BackgroundImg mainStyles={mainStyles} />
      <TeamData mainStyles={mainStyles} />
    </div>
  );
};
export default main;
