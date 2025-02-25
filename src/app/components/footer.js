import styles from "../../styles/footer.module.css";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={styles.footer}>
      <section>
        <div className={styles.container}>
          {/* Contact Information */}
          <div className={styles.contactSection}>
            <h2>{t("footer.contact")}</h2>
            <p className={styles.name}>ELLA&apos;S</p>
            <p className={styles.phone}>
              {t("footer.phone")}{" "}
              <a href="tel:+38668604553">+386 68 604 553</a>
            </p>
            <p className={styles.email}>
              <a href="mailto:uhan.ellas@gmail.com">uhan.ellas@gmail.com</a>
            </p>
          </div>

     
          <div className={styles.companySection}>
            {/* <div className={styles.logoWrapper}>
              <Image
                src="/images/ellasFooter.png"
                alt="Plumbing Services Logo"
                width={320}
                height={120}
                className={styles.ellasLogo}
                priority
              />
            </div> */}
            <h1>{t("footer.title")}</h1>
            <p>{t("footer.text")}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.bottomText}>
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
