import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import styles from "../styles/services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const { t } = useTranslation("common");

  const services = [
    {
      title: t("services.plumbing", { defaultMessage: "Plumbing Installations & Repairs" }),
      description: t("services.plumbing_desc", { defaultMessage: "From leaky faucets to full pipe replacements, we handle it all." }),
      image: "/images/plumbing.jpg",
    },
    {
      title: t("services.heating", { defaultMessage: "Heating System Maintenance" }),
      description: t("services.heating_desc", { defaultMessage: "Ensure your heating system is working efficiently all year round." }),
      image: "/images/heating.jpg",
    },
    {
      title: t("services.cleaning", { defaultMessage: "Drain & Sewer Cleaning" }),
      description: t("services.cleaning_desc", { defaultMessage: "We clear blocked drains and ensure smooth water flow." }),
      image: "/images/cleaning.jpg",
    },
    {
      title: t("services.handyman", { defaultMessage: "Handyman Services" }),
      description: t("services.handyman_desc", { defaultMessage: "General repairs, installations, and small construction jobs." }),
      image: "/images/handyman.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.servicesPage}>
        <h1>{t("services.title", { defaultMessage: "Our Services" })}</h1>
        <p>{t("services.subtitle", { defaultMessage: "Reliable and affordable solutions for all your needs." })}</p>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <Image src={service.image} alt={service.title} className={styles.serviceImage} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h2>{t("services.cta_title", { defaultMessage: "Need a Service?" })}</h2>
          <p>{t("services.cta_text", { defaultMessage: "Get in touch with our experts today!" })}</p>
          <Link href="/contact" className={styles.ctaButton}>{t("services.cta_button", { defaultMessage: "Contact Us" })}</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Services;
