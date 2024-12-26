// components/ImageCarousel.js
"use client";
import Image from 'next/image'
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import styles from "../styles/ImageCarousel.module.css";

const ImageCarousel = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        duration: 800,
        slides: { perView: 1 },
        mode: "free-snap",
    });

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const autoplay = setInterval(() => {
            if (instanceRef.current) instanceRef.current.next();
        }, 5000);
        return () => clearInterval(autoplay);
    }, [instanceRef]);

    const images = [
        "/images/inverterHero.jpg"
    ];
   

    return (
        <div className={styles.carouselWrapper}>
            {/* <div ref={sliderRef} className={`keen-slider ${styles.carouselContainer}`}>
                {images.map((src, index) => (
                    <div key={index} className={`keen-slider__slide ${styles.slide}`}>
                        <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </div> */}
            <Image src={images[0]} alt={`Three phase inverter from Fox ess`} width={2560} height={1319} className={styles.image} priority={true} />
            {/* Left Arrow */}
            <button
                ref={prevRef}
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={() => instanceRef.current?.prev()}
            >
                <span className={styles.arrowIcon}>←</span>
            </button>

            {/* Right Arrow */}
            <button
                ref={nextRef}
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={() => instanceRef.current?.next()}
            >
                <span className={styles.arrowIcon}>→</span>
            </button>
        </div>
    );
};

export default ImageCarousel;