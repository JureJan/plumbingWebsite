import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/testimonials.module.css";

const Testimonials = () => {
  const { t } = useTranslation("common");

  const reviews = [
    {
      name: "John D.",
      feedback: t("testimonials.john", {
        defaultMessage: "Fantastic service! Quick response and excellent workmanship. Highly recommended!",
      }),
      rating: 5,
    },
    {
      name: "Anna M.",
      feedback: t("testimonials.anna", {
        defaultMessage: "Professional and affordable. Fixed my plumbing issue in no time!",
      }),
      rating: 5,
    },
    {
      name: "Michael K.",
      feedback: t("testimonials.michael", {
        defaultMessage: "Reliable team, arrived on time and did an outstanding job. Will use again!",
      }),
      rating: 4.5,
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>{t("testimonials.title", { defaultMessage: "What Our Clients Say" })}</h2>
      <div className={styles.testimonialsList}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.testimonialItem}>
            <p className={styles.testimonialText}>&quot;{review.feedback}&quot;</p>
            <h4 className={styles.testimonialName}>- {review.name}</h4>
            <div className={styles.testimonialRating}>⭐ {review.rating} / 5</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
