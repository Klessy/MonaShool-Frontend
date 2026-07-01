"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { schoolFamily } from "@/data/data";
import "../styles/schoolFamily.css";

import {
    FaArrowLeft,
    FaArrowRight,
    FaUsers,
    FaChevronLeft,
    FaChevronRight,
    FaXmark
} from "react-icons/fa6";


export default function SchoolFamily() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
        skipSnaps: false

    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    };

    const closeLightbox = () => {
    setLightboxOpen(false);
    };

    const nextImage = () => {

    setCurrentImage((prev) =>
        prev === schoolFamily.length - 1
            ? 0
            : prev + 1
        );
    };

    const previousImage = () => {

    setCurrentImage((prev) =>
        prev === 0
            ? schoolFamily.length - 1
            : prev - 1
        );
    };

    useEffect(() => {

    const handleKey = (e) => {
        if (!lightboxOpen) return;
        if (e.key === "Escape") {
            closeLightbox();
        }
        if (e.key === "ArrowRight") {
            nextImage();
        }
        if (e.key === "ArrowLeft") {
            previousImage();
        }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
}, [lightboxOpen]);

    useEffect(() => {
        document.body.style.overflow = lightboxOpen
            ? "hidden"
            : "auto";

    }, [lightboxOpen]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();

    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
}, [emblaApi]);

useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
    };
}, [emblaApi, onSelect]);

    return (

        <section className="schoolFamily">
            <div className="schoolFamily__container">
                {/* <div className="schoolFamily__container"> */}
                    {/* Header */}
                    <div className="schoolFamily__header container">
                        <span className="sectionBadge">
                            <FaUsers />
                            OUR SCHOOL FAMILY
                        </span>
                        <h2>
                            Meet the Dedicated People Behind Mona School
                        </h2>
                        <p>
                            Our passionate educators, administrators and support teams
                            work together to provide a safe, caring and inspiring
                            learning environment where every child can thrive.
                        </p>
                    </div>
                    {/* Navigation */}
                    <div className="familyNavigation">
                        <button
                            className="navBtn"
                            onClick={scrollPrev}
                            aria-label="Previous">
                            <FaArrowLeft />
                        </button>
                        <button
                            className="navBtn"
                            onClick={scrollNext}
                            aria-label="Next">
                            <FaArrowRight />
                        </button>
                    </div>
                    {/* Carousel */}
                    <div
                        className="embla"
                        ref={emblaRef}>
                        <div className="familyEmbla__container">
                    
                            {schoolFamily.map((item, index) => (
                                <div
                                    className="familyEmbla__slide"
                                    key={item.id}>
                                    <article   className={`familyCard ${
                                        index === selectedIndex ? "is-active" : ""
                                    }`}>
                                        <div className="familyImageWrapper"
                                        onClick={() => openLightbox(index)}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={1200}
                                                height={800}
                                                className="familyImage"
                                            />
                                        </div>
                                        <div className="familyContent">
                                            <span className="familyBadge">
                                                {item.badge}
                                            </span>
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <h5>
                                                {item.session}
                                            </h5>
                                            <p>
                                                {item.description}
                                            </p>
                    {/*
                                            <button className="learnMore">
                                                Learn More
                                            </button> */}
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                        <div className="familyDots">
                                {schoolFamily.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => emblaApi?.scrollTo(index)}
                                        className={`familyDot ${
                                            index === selectedIndex
                                                ? "activeDot"
                                                : ""
                                        }`}
                                    />
                                ))}
                        </div>
                    </div>
                {/* </div> */}

            </div>
            
            {
                lightboxOpen && (

                <div
                    className="lightbox"
                    onClick={closeLightbox}
                >
                    <div
                        className="lightboxContent"
                        onClick={(e)=>e.stopPropagation()}
                    >

                    <button
                        className="lightboxClose"
                        onClick={closeLightbox}
                    >
                        <FaXmark />
                    </button>

                    <button
                    className="lightboxPrev"
                    onClick={previousImage}
                    >
                        <FaChevronLeft />
                    </button>

                    <Image
                        src={schoolFamily[currentImage].image}
                        alt={schoolFamily[currentImage].title}
                        width={1600}
                        height={1000}
                        className="lightboxImage"
                    />

                    <button
                        className="lightboxNext"
                        onClick={nextImage}
                    >
                        <FaChevronRight />
                    </button>

                    <div className="lightboxCaption">
                    <h3>
                    {schoolFamily[currentImage].title}
                    </h3>

                    <p>{schoolFamily[currentImage].session}</p>
                    </div>

                    </div>
                </div>

                )
            }
        </section>

    );

}