
"use client";
// import { motion } from "framer-motion";

// export default function Hero(){
//   return (
//     <section className="h-screen bg-primary text-white flex items-center justify-center text-center">
//       <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Mona School</h1>
//         <p className="mb-6">Raising Future Leaders</p>
//         <button className="bg-accent text-black px-6 py-3 rounded">Enroll Now</button>
//       </motion.div>
//     </section>
//   )
// }



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
                    <Link className="btn_main" href="/enroll">
                      <FaCirclePlus
                        style={{
                          color: "#fff1a8",
                          fontSize: "18px",
                          marginRight: "10px",
                        }}
                      />{" "}
                      <Link href="/contact#contact-form" className="btn_main-txt">{btn}</Link>
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

