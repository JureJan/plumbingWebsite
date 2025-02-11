import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import styles from "../../styles/service.module.css";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ContactForm from "@/app/components/ContactForm";
import Testimonials from "@/app/components/TestimonialsComponent";

const MenjavaCevi = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title={t("seo.menjavaCeviTitle")}
        description={t("seo.menjavaCeviDescription")}
        canonical="https://hitriservis.si/services/menjavaCevi"
      />

      <Navbar />

      <main className={styles.servicePage}>
        <h1>{t("menjavaCevi.title")}</h1>
        <p>{t("menjavaCevi.description")}</p>

        <h2>{t("common.whyChooseUs")}</h2>
        <ul>
          <li>✅ {t("common.fastService")}</li>
          <li>✅ {t("common.experiencedTechnicians")}</li>
          <li>✅ {t("common.bestPrice")}</li>
          <li>✅ {t("common.guarantee")}</li>
        </ul>

        <h2>{t("menjavaCevi.services")}</h2>
        <ul>
          <li>🔹 {t("menjavaCevi.service1")}</li>
          <li>🔹 {t("menjavaCevi.service2")}</li>
          <li>🔹 {t("menjavaCevi.service3")}</li>
        </ul>

        <h2>{t("common.contactUsNow")}</h2>
        <p>{t("common.contactText")}</p>

        <ContactForm />

        <h2>{t("common.faq")}</h2>
        <details>
          <summary>{t("faq.howLongPipeReplacement")}</summary>
          <p>{t("faq.howLongPipeReplacementAnswer")}</p>
        </details>

        <details>
          <summary>{t("faq.isGuaranteed")}</summary>
          <p>{t("faq.isGuaranteedAnswer")}</p>
        </details>

        <Testimonials />
      </main>

      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"]))},
});

export default MenjavaCevi;
