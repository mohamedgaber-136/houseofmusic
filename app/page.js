import Image from "next/image";
import styles from "./page.module.css";
// import artistImg from "../app/Images/Artist_Image.png";
import ArtistCard from "./Components/ArtistCard/ArtistCard";

import image_0 from "../public/images/image_0.png";
import image_1 from "../public/images/image_1.png";
import image_2 from "../public/images/image_2.png";
import image_3 from "../public/images/image_3.png";
import image_4 from "../public/images/image_4.png";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

// pages/index.js

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const list = [
    { image: image_0, name: "Evolve" },
    { image: image_1, name: "Cybergirl" },
    { image: image_2, name: "When we all" },
    { image: image_3, name: "Lover" },
    { image: image_4, name: "Cyberpunk" },
  ];
  return (
    <>
      {/* ----------------------------- Header ----------------------------- */}
      <header className="bg-dark text-light d-flex justify-content-center align-items-center">
        {/* <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={100}
          height={30}
          // priority
        /> */}
        <h2
          className={` d-flex justify-content-center align-items-center text-center ${styles.heading}`}
        >
          Popular
        </h2>
      </header>

      {/* ----------------------------- Main ----------------------------- */}
      <main className=" bg-dark min-vh-100 d-flex justify-content-center align-items-center">
        <div className=" d-flex flex-column gap-5 p-3">
          {list.map((item, index) => (
            <ArtistCard
              key={`atrist-${index}`}
              imageSrc={item.image}
              name={item.name}
            />
          ))}
        </div>
      </main>
      <div>
        <FontAwesomeIcon
          icon={faSearch}
          style={{ fontSize: 100, color: "blue" }}
        />
      </div>
    </>
  );
}
