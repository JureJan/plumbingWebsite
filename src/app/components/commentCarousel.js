"use client";

import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../styles/commentCarousel.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const CommentCarousel = () => {
  const { t } = useTranslation("common");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (instanceRef.current) instanceRef.current.next();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [instanceRef]);

  const comments = [
    {
      title: t("comments.1.title"),
      text: t("comments.1.text"),
      author: t("comments.1.author"),
    },
    {
      title: t("comments.2.title"),
      text: t("comments.2.text"),
      author: t("comments.2.author"),
    },
    {
      title: t("comments.3.title"),
      text: t("comments.3.text"),
      author: t("comments.3.author"),
    },
    {
      title: t("comments.4.title"),
      text: t("comments.4.text"),
      author: t("comments.4.author"),
    },
    {
      title: t("comments.5.title"),
      text: t("comments.5.text"),
      author: t("comments.5.author"),
    },
    {
      title: t("comments.6.title"),
      text: t("comments.6.text"),
      author: t("comments.6.author"),
    },
  ];



  return (
    <div className={styles.carouselWrapper}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/images/hero4.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>


      {/* Keen Slider */}
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {comments.map((comment, index) => (
          <div key={index} className={`keen-slider__slide ${styles.slide}`}>
            <div className={styles.commentContent}>
              <h2 className={styles.title}>{comment.title}</h2>
              <p className={styles.text}>{comment.text}</p>
              <p className={styles.author}>- {comment.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {instanceRef.current?.track?.details && (
        <>
          <Arrow
            left
            onClick={() => instanceRef.current?.prev()}
            disabled={currentIndex === 0}
          />
          <Arrow
            onClick={() => instanceRef.current?.next()}
            disabled={
              currentIndex ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}

      {/* Navigation Dots */}
      {instanceRef.current?.track?.details && (
        <div className={styles.dots}>
          {comments.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

function Arrow({ left, onClick, disabled }) {
  return (
    <></>
    // <svg
    //   onClick={onClick}
    //   className={`${styles.arrow} ${left ? styles.left : styles.right} ${
    //     disabled ? styles.disabled : ""
    //   }`}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    // >
    //   {left ? (
    //     <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    //   ) : (
    //     <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    //   )}
    // </svg>
  );
}

export default CommentCarousel;
