import React from "react";
import styles from "./ArtistCard.module.css";
export default function ArtistCard({ imageSrc, name }) {
  return (
    <div className="position-relative">
      <h3 className={`${styles.artistName} fs-1`}>{name}</h3>

      <div className={styles.artistCard}>
        <div
          className={styles.artistImage}
          style={{
            background: `linear-gradient(to right, rgba(212, 212, 212, 0.1),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 1)),url(${imageSrc.src})`,
          }}
        />
      </div>
    </div>
  );
}
