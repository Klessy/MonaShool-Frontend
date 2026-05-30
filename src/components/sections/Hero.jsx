
"use client";



import { Fade } from "react-slideshow-image";
import { FaCirclePlus } from "react-icons/fa6";
import "react-slideshow-image/dist/styles.css";


import Link from "next/link";
import Image from "next/image";

import "../styles/hero.css";

import { dataSlider } from "@/data/data";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="slide-container">
        <Fade>
          {dataSlider.map((carousels, index) => {
            const { id, title, desc, img, btn } = carousels;
            return (
              <div className="slide" key={id}>
                <div className="slide-image">
                <Image src={img} alt={title} 
                 fill
                 style={{ objectFit: "cover" }}
                 priority/>
                  
                </div>
                <div className="inner-carousel">
                  <div className="hero-con container">
                    <h3 className="hero-p">Montessori Method</h3>
                    <h1 style={{ whiteSpace: "pre-line" }} className="">
                      {title}
                    </h1>
                    <p
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {desc}
                    </p>
                    <Link className="btn_main btn_main-txt" href="/contact#contact-form">
                      <FaCirclePlus
                        style={{
                          color: "#fff1a8",
                          fontSize: "18px",
                          marginRight: "10px",
                        }}
                      />{" "}
                      {btn}
                      {/* <Link href="" className="btn_main-txt">{btn}</Link> */}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </section>
  );
};

export default Hero;

