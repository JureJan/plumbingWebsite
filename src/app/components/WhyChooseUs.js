import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/whychooseus.module.css";
import Image from "next/image";

const WhyChooseUs = () => {
  const { t } = useTranslation("common");

  const reasons = [
    {
      title: t("whychooseus.experience", { defaultMessage: "Years of Experience" }),
      description: t("whychooseus.experience_desc", {
        defaultMessage: "Our team consists of certified professionals with extensive experience.",
      }),
      icon: "/images/experience.png",
    },
    {
      title: t("whychooseus.affordable", { defaultMessage: "Affordable Pricing" }),
      description: t("whychooseus.affordable_desc", {
        defaultMessage: "We offer high-quality services at the most competitive prices.",
      }),
      icon: "/images/affordable.png",
    },
    {
      title: t("whychooseus.fastservice", { defaultMessage: "Fast & Reliable Service" }),
      description: t("whychooseus.fastservice_desc", {
        defaultMessage: "We guarantee timely repairs and installations to avoid inconvenience.",
      }),
      icon: "/images/fastService.png",
    },
    {
      title: t("whychooseus.quality", { defaultMessage: "Guaranteed Quality" }),
      description: t("whychooseus.quality_desc", {
        defaultMessage: "We use only top-quality materials and ensure a lasting result.",
      }),
      icon: "/images/quality.png",
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <h2>{t("whychooseus.title", { defaultMessage: "Why Choose Us?" })}</h2>
      <div className={styles.reasonsList}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.reasonItem}>
            <Image src={reason.icon} alt={reason.title} className={styles.icon} />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
