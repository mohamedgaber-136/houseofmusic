import Navigation from "./Components/Navigation/Navigation";
import styles from "./page.module.css";
// import artistImg from "../app/Images/Artist_Image.png";
import ArtistCard from "./Components/ArtistCard/ArtistCard";
import image_0 from "../public/images/image_0.png";
import image_1 from "../public/images/image_1.png";
import image_2 from "../public/images/image_2.png";
import image_3 from "../public/images/image_3.png";
import image_4 from "../public/images/image_4.png";
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
      {/* ----------------------------- Main ----------------------------- */}
      <Navigation />
      <main className={` bg-dark  d-flex flex-column  align-items-center ${styles.mainData}`}>
        <h2
          className={` d-flex justify-content-center align-items-center text-center text-light ${styles.heading}`}
        >
          Popular
        </h2>

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
    </>
  );
}
