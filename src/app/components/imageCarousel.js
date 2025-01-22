"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";
import styles from "../../styles/imagecarousel.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const ImageCarousel = ({ text, handleScrollToForm }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    duration: 800,
    slides: { perView: 1 },
    mode: "free-snap",
    drag: true, // Enable dragging for desktop
    rubberband: true, // Ensure smoother dragging experience
    touch: true, // Enable touch gestures for mobile
    slideChanged: (slider) => setCurrentIndex(slider.track.details.rel),
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (instanceRef.current) instanceRef.current.next();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [instanceRef]);

  const router = useRouter();
  const { pathname } = router;

  const handleButtonClick = () => {
    const pagesWithForm = ["/guidedExercises", "/personalTraining", "/contact", "/fitness"];
    if (pagesWithForm.includes(pathname)) {
      if (typeof handleScrollToForm === "function") {
        handleScrollToForm();
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    } else {
      router.push("/fitness");
    }
  };

  const images = [
    "/images/hero2.png",
    "/images/hero6.jpg",
    "/images/hero4.jpg",
    "/images/hero5.jpg",
  ];

  return (
    <div className={styles.carouselWrapper}>
      {/* Keen Slider */}
      <div ref={sliderRef} className={`keen-slider ${styles.carouselContainer}`}>
        {images.map((src, index) => (
          <div key={index} className={`keen-slider__slide ${styles.slide}`}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={2560}
              height={1319}
              className={styles.image}
              priority
            />
          </div>
        ))}
      </div>

      {/* Overlay for Titles, Text, and Button */}
      <div className={styles.overlay}>
        <h1 className={styles.title}>{text[currentIndex]?.title}</h1>
        <p className={styles.description}>{text[currentIndex]?.text}</p>
        <button className={styles.carouselButton} onClick={handleButtonClick}>
          PRIDRUŽI SE NAM
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => instanceRef.current?.prev()}
      >
        <span className={styles.arrowIcon}>←</span>
      </button>
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
