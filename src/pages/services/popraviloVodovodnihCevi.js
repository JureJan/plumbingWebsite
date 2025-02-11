import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import styles from "../../styles/service.module.css";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ContactForm from "@/app/components/ContactForm";
import Testimonials from "@/app/components/TestimonialsComponent";

const PopraviloVodovodnihCevi = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title={t("seo.popraviloVodovodnihCeviTitle")}
        description={t("seo.popraviloVodovodnihCeviDescription")}
        canonical="https://hitriservis.si/services/popraviloVodovodnihCevi"
      />

      <Navbar />

      <main className={styles.servicePage}>
        <h1>{t("popraviloVodovodnihCevi.title")}</h1>
        <p>{t("popraviloVodovodnihCevi.description")}</p>

        <h2>{t("common.whyChooseUs")}</h2>
        <ul>
          <li>✅ {t("common.fastService")}</li>
          <li>✅ {t("common.experiencedTechnicians")}</li>
          <li>✅ {t("common.bestPrice")}</li>
          <li>✅ {t("common.guarantee")}</li>
        </ul>

        <h2>{t("popraviloVodovodnihCevi.services")}</h2>
        <ul>
          <li>🔹 {t("popraviloVodovodnihCevi.service1")}</li>
          <li>🔹 {t("popraviloVodovodnihCevi.service2")}</li>
          <li>🔹 {t("popraviloVodovodnihCevi.service3")}</li>
        </ul>

        <h2>{t("common.contactUsNow")}</h2>
        <p>{t("common.contactText")}</p>

        <ContactForm />

        <h2>{t("common.faq")}</h2>
        <details>
          <summary>{t("faq.howLongPipeRepair")}</summary>
          <p>{t("faq.howLongPipeRepairAnswer")}</p>
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

export default PopraviloVodovodnihCevi;
