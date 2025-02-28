"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/services.module.css";
import Image from "next/image";

const ServicesOverview = () => {
  const { t } = useTranslation("common");

  const services = [
    {
      title: t("services.plumbing", {
        defaultMessage: "Plumbing Installations & Repairs",
      }),
      description: t("services.plumbing_desc", {
        defaultMessage:
          "Professional plumbing solutions, from leak repairs to full pipe installations.",
      }),
      image: "/images/plumbing.jpg",
    },
    {
      title: t("services.heating", {
        defaultMessage: "Heating System Maintenance",
      }),
      description: t("services.heating_desc", {
        defaultMessage:
          "Efficient heating system installation, repair, and maintenance.",
      }),
      image: "/images/heating.jpg",
    },
    {
      title: t("services.cleaning", {
        defaultMessage: "Drain & Sewer Cleaning",
      }),
      description: t("services.cleaning_desc", {
        defaultMessage:
          "Prevent blockages and ensure smooth water flow with professional cleaning.",
      }),
      image: "/images/cleaning.jpg",
    },
    {
      title: t("services.handyman", {
        defaultMessage: "Handyman Services",
      }),
      description: t("services.handyman_desc", {
        defaultMessage:
          "General repairs, installations, and small-scale construction work.",
      }),
      image: "/images/handyman.jpg",
    },
  ];

  return (
    <section className={styles.servicesPage}>
      <h2 className={styles.title}>
        {t("services.title", { defaultMessage: "Our Services" })}
      </h2>
      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <Image
              src={service.image}
              alt={service.title}
              width={260}
              height={150}
            />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
