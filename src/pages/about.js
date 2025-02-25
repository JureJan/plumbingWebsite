import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Head from "next/head"; // Importing the Head component for meta tags
import styles from "../styles/about.module.css";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar />
      {/* Use Head component to update metadata */}
      <Head>
        <title>{t("about.page_title", { defaultMessage: "About Us - Plumbing and Handyman Services" })}</title>
        <meta
          name="description"
          content={t("about.page_description", { defaultMessage: "Providing high-quality, reliable, and affordable plumbing and handyman services for years. Our expert team ensures customer satisfaction." })}
        />
      </Head>

      <main className={styles.aboutPage}>
        <h1>{t("about.title", { defaultMessage: "About Us" })}</h1>
        <p>{t("about.subtitle", { defaultMessage: "Providing high-quality plumbing and handyman services for years." })}</p>

        {/* Company Story */}
        <section className={styles.companyStory}>
          <h2>{t("about.story_title", { defaultMessage: "Our Story" })}</h2>
          <p>
            {t("about.story_text", {
              defaultMessage:
                "We started as a small team of skilled plumbers and handymen, growing into a trusted company serving hundreds of clients. Our focus has always been on reliability, affordability, and customer satisfaction. We pride ourselves on being reliable, affordable, and delivering high-quality work.",
            })}
          </p>
        </section>

        {/* Our Values */}
        <section className={styles.valuesSection}>
          <h2>{t("about.values_title", { defaultMessage: "Our Values" })}</h2>
          <ul>
            <li>✅ {t("about.value1", { defaultMessage: "Customer Satisfaction First" })}</li>
            <li>🔧 {t("about.value2", { defaultMessage: "High-Quality Workmanship" })}</li>
            <li>🚀 {t("about.value3", { defaultMessage: "Fast & Reliable Service" })}</li>
            <li>🌿 {t("about.value4", { defaultMessage: "Environmentally Friendly Practices" })}</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h2>{t("about.cta_title", { defaultMessage: "Need Professional Plumbing Services?" })}</h2>
          <p>
            {t("about.cta_text", {
              defaultMessage: "Contact us today to get a free quote and expert assistance. We offer reliable, affordable, and professional plumbing and handyman services.",
            })}
          </p>
          <a href="/contact" className={styles.ctaButton}>
            {t("about.cta_button", { defaultMessage: "Contact Us" })}
          </a>
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

export default About;
