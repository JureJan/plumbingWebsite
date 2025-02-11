import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "../../styles/cta.module.css";

const CTASection = () => {
  const { t } = useTranslation("common");

  return (
    <section className={styles.ctaContainer}>
      <h2 className={styles.ctaTitle}>{t("cta.contact_us")}</h2>
      <p className={styles.ctaDescription}>
        {t("cta.description", {
          defaultMessage: "Need plumbing or handyman services? Contact us today!",
        })}
      </p>
      <div className={styles.ctaButtons}>
        <Link href="/contact">
          <button className={styles.primaryButton}>{t("cta.contact_us")}</button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
