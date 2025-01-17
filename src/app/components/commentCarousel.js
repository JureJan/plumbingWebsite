"use client";

import React, { useState } from "react";
import styles from "../../styles/commentCarousel.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const CommentCarousel = () => {
  const { t } = useTranslation("common");
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselWrapper}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/images/hero4.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Left Arrow */}
      <div className={`${styles.arrow} ${styles.left}`} onClick={handlePrev}>
        ←
      </div>

      {/* Comment Content */}
      <div className={styles.commentContent}>
        <h2 className={styles.title}>{comments[currentIndex].title}</h2>
        <p className={styles.text}>{comments[currentIndex].text}</p>
        <p className={styles.author}>- {comments[currentIndex].author}</p>
      </div>

      {/* Right Arrow */}
      <div className={`${styles.arrow} ${styles.right}`} onClick={handleNext}>
        →
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {comments.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CommentCarousel;
