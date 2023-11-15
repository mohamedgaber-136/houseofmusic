"use client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
config.autoAddCss = false;
function Navigation() {
  let timing;
  let animation;
  let date = new Date();
  let year = date.getFullYear();
  let [closeWindo, setCloseWindow] = useState(false);
  const CloseWindowFunc = () => {
    setCloseWindow(false);
    if (!closeWindo) {
      setCloseWindow(true);
    }
  };
  useEffect(() => {
    timing = setTimeout(() => {
      setCloseWindow(true);
    }, 100);
    return () => clearTimeout(timing);
  }, []);
  useEffect(() => {
    animation = setTimeout(() => {
      Aos.init();
    }, 1000);
    return () => clearTimeout(animation);
  }, []);
  return (
    <div
      className={!closeWindo ? "widthZero navParent" : "widthFull navParent"}
    >
      <Navbar className={bebas.className}>
        {!closeWindo ? (
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 30, color: "white" }}
            onClick={CloseWindowFunc}
          />
        ) : (
          <FontAwesomeIcon
            icon={faClose}
            onClick={CloseWindowFunc}
            style={{ fontSize: 30, color: "white" }}
          />
        )}

        <Container className="align-items-center d-flex justify-content-center ">
          <div
            className="d-flex flex-column justify-content-start textParent  gap-1 "
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <Link className={`navbar-brand  p-0 m-0 popularBrand text-white `} href="#">
              POPULAR
            </Link>
            <Link className="navbar-brand  p-0 m-0 textShadow " href="#">
              HOT
            </Link>
            <Link className="navbar-brand  p-0 m-0 textShadow " href="#">
              RECENT
            </Link>
            <Link className="navbar-brand  p-0 m-0 textShadow " href="#">
              TRENDING
            </Link>
          </div>
        </Container>
        <div className="brands d-flex justify-content-around gap-3 align-items-center  w-100">
          <div className="brandsLogos  d-flex justify-content-center gap-2 align-items-center">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <p className="p-0 m-0 text-white">&copy; {year}</p>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
