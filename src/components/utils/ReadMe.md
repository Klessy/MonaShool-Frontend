"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { activitySlide } from "@/data/data";
import "../styles/program.css";

const Programs = () => {
  // ✅ stable autoplay instance (IMPORTANT)
  const autoplay = useRef(
    Autoplay({
      delay: 3200,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // ✅ embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  // UI state
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ---------------------------
  // SLIDE TRACKING
  // ---------------------------
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onScroll = () => {
      const progress = emblaApi.scrollProgress();
      setScrollProgress(
        Math.max(0, Math.min(1, progress)) * 100
      );
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);

    // init
    onSelect();
    onScroll();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);

  // ---------------------------
  // AUTOPLAY SAFETY START
  // ---------------------------
  useEffect(() => {
    if (!emblaApi) return;

    const plugin = autoplay.current;

    const start = () => {
      plugin?.play?.();
    };

    start();

    emblaApi.on("reInit", start);

    return () => {
      plugin?.stop?.();
    };
  }, [emblaApi]);

  // ---------------------------
  // NAVIGATION
  // ---------------------------
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  // ---------------------------
  // RENDER
  // ---------------------------
  return (
    <section className="program__section">
      <div className="program__container container">

        {/* HEADER */}
        <div className="program__header">
          <span className="program__tag">
            MONA SCHOOL
          </span>

          <h2>
            Discover Life At Mona School
          </h2>

          <p>
            A visual journey through learning,
            creativity, innovation and memorable experiences.
          </p>
        </div>

        {/* EMBLA */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__viewport">
            <div className="embla__container">

              {activitySlide.map((slide, index) => (
                <div className="embla__slide" key={index}>

                  <div
                    className={`slide-card ${
                      selectedIndex === index ? "is-active" : ""
                    }`}
                  >
                    {/* IMAGE */}
                    <div className="image-wrapper">
                      <Image
                        src={slide.src}
                        alt={slide.caption || "slide"}
                        fill
                        priority={index < 2}
                        className="slide-image"
                      />
                    </div>

                    {/* OPTIONAL TITLE OVERLAY */}
                    {slide.showSection && (
                      <div className="section-overlay">
                        <span>MONA SCHOOL</span>
                        <h3>{slide.section}</h3>
                        <p>{slide.subtitle}</p>
                      </div>
                    )}

                    {/* CAPTION */}
                    {slide.caption && (
                      <div className="caption">
                        {slide.caption}
                      </div>
                    )}
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* NAV BUTTONS */}
          <div className="carousel-nav">
            <button
              className="carousel-btn prev-btn"
              onClick={scrollPrev}
              aria-label="Previous Slide"
            >
              <FiChevronLeft />
            </button>

            <button
              className="carousel-btn next-btn"
              onClick={scrollNext}
              aria-label="Next Slide"
            >
              <FiChevronRight />
            </button>
          </div>

        </div>

        {/* PROGRESS BAR */}
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

      </div>
    </section>
  );
};

export default Programs;