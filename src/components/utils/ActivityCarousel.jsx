"use client"
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { activitySlide } from "@/data/data";
import "../styles/program.css";

import useEmblaCarousel from "embla-carousel-react";

const ActivityCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 4000})]);
  return (
    <section className="program__section">
        <div className="program__container container">
          {/* <div className="embla embla-main" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide flex">
                slide 1
              </div>
              <div className="embla__slide flex">
                slide 2
              </div>
              <div className="embla__slide flex">
                slide 3
              </div>
            </div>
          </div> */}

      </div>
        {activitySlide.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="slide-card">

              {slide.type === "image" && (
                <>
                  <Image src={slide.src} alt="" className="slide-image" />
                  <div className="caption">{slide.caption}</div>
                </>
              )}

              {slide.type === "title" && (
                <div className="title-slide">
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                </div>
              )}

            </div>
          </div>
))}
    </section>
  )
}

export default ActivityCarousel