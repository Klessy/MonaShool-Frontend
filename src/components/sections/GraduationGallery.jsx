"use client";

import "../styles/graduationGallery.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { graduationData } from "@/data/data";
import { FaGraduationCap } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import {
    FaChevronLeft,
    FaChevronRight,
    FaXmark
} from "react-icons/fa6";

export default function GraduationGallery() {
    const [selectedYear, setSelectedYear] = useState(0);
    const current = graduationData[selectedYear];
    const [fade, setFade] = useState(false);

const changeYear = (index) => {

    if(index === selectedYear) return;
    setFade(true);
    setTimeout(() => {
        setSelectedYear(index);
        updateTimelineProgress(index);
        setFade(false);
    },200);
};

const updateTimelineProgress = (index) => {
    if (!timelineRef.current) return;
    const total = graduationData.length - 1;
    const percentage = (index / total) * 86;
    timelineRef.current.style.setProperty(
        "--timeline-progress",
        `${percentage}%`
    );
};

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // const [currentImage, setCurrentImage] = useState(0);
    const [currentImage, setCurrentImage] = useState(selectedYear);
    const timelineRef = useRef(null);


    useEffect(() => {
        setCurrentImage(selectedYear);
    }, [selectedYear]);

    useEffect(() => {
        updateTimelineProgress(selectedYear);
    },[]);

    //  const openLightbox = (index) => {
    //     setCurrentImage(index);
    //     setLightboxOpen(true);
    //     };

    const openLightbox = () => {
        setCurrentImage(selectedYear);
        setLightboxOpen(true);
    };
    
        const closeLightbox = () => {
        setLightboxOpen(false);
        };
    
        const nextImage = () => {
    
        setCurrentImage((prev) =>
            prev === graduationData.length - 1
                ? 0
                : prev + 1
            );
        };
    
        const previousImage = () => {
    
        setCurrentImage((prev) =>
            prev === 0
                ? graduationData.length - 1
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

    return (
        <section className="graduation">
            <div className="container">
                <div className="graduation__container">
                    {/* Header */}
                    <div className="graduation__header text-center">
                        <span className="graduationBadge">
                            <FaGraduationCap />
                            Graduation Memories
                        </span>
                        <h2>Celebrating Our Graduates</h2>
                        <p>
                            Every graduation marks the beginning of a new journey.
                            We celebrate the achievements, friendships and beautiful
                            memories created throughout each academic session.
                        </p>
                    </div>
                    {/* Year Navigation */}
                    <div className="graduationTimeline" ref={timelineRef}>
                        {graduationData.map((item, index) => (
                            <div
                                key={item.id}
                                className="timelineItem"
                                onClick={() => changeYear(index)}
                            >
                                <div
                                    className={`timelineDot ${
                                        selectedYear === index ? "activeDot" : ""
                                    }`}
                                >
                                    <span></span>
                                </div>
                                <span
                                    className={`timelineYear ${
                                        selectedYear === index ? "activeTimelineYear" : ""
                                    }`}
                                >
                                    {item.year}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Featured Image */}
                    <div className={`graduationPhotoCard ${fade ? "fadeOut" : "fadeIn"}`}>
                        <div className="graduationImageWrapper">
                            <Image
                                src={current.image}
                                alt={current.session}
                                width={1600}
                                height={1000}
                                className="graduationImage"
                            />
                        </div>
                        <div className="graduationContent">
                            <span className="graduationSession">
                                {current.session}
                            </span>
                            <h3>{current.title}</h3>
                            <p className="graduationCount">
                                🎓 {current.pupils}
                            </p>
                            <blockquote>
                                "{current.quote}"
                            </blockquote>
                            <button className="graduationBtn"
                                onClick={openLightbox}>
                                <FaGraduationCap className="btnIcon" />
                                View Full Photo
                                <HiArrowLongRight className="btnArrow" />
                            </button>
                        </div>
                    </div>
                </div>
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
                        src={graduationData[currentImage].image}
                        alt={graduationData[currentImage].title}
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
                    {graduationData[currentImage].title}
                    </h3>

                    <p>{graduationData[currentImage].session}</p>
                    </div>

                    </div>
                </div>
                )
            }
        </section>

    );

}