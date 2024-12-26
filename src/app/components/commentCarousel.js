"use client";

import React, { useState } from "react";
import styles from "../../styles/commentCarousel.module.css";
import Image from "next/image";

const CommentCarousel = () => {
  const comments = [
    {
      title: "Še nisi prepričan?",
      text: "Best fitness v Lj. Zelo profesionalno in dostopno osebje. Lastnik pomaga vsem v telovadnici ne glede kdo si!",
      author: "Klemen Tušek",
    },
    {
      title: "Najboljša telovadnica!",
      text: "Vse naprave so vedno na voljo, čist prostor in super vzdušje.",
      author: "Ana Novak",
    },
    {
      title: "Super rezultati!",
      text: "V samo 3 mesecih sem dosegel cilje, ki sem jih prej sanjal leta!",
      author: "Marko Kovač",
    },
    {
      title: "Strokovno osebje!",
      text: "Trenerji so zelo prijazni in vedno pripravljeni pomagati.",
      author: "Eva Petek",
    },
    {
      title: "Priporočam vsem!",
      text: "Najboljša investicija, ki sem jo naredil zase!",
      author: "Miha Zupan",
    },
    {
      title: "Vedno motiviran!",
      text: "Vadba v MaxxGym je postala moja rutina zaradi odličnega vzdušja.",
      author: "Tina Jernej",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
