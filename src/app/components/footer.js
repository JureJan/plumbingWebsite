import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.contactSection}>
          <h2>Kontakt</h2>
          <p className={styles.name}>Grega Uhan Mujič</p>
          <p className={styles.phone}>T: <a href="tel:+38668604553">+386 68 604 553</a></p>
          <p className={styles.email}>
            <a href="mailto:grega.uhan@gmail.com">grega.uhan@gmail.com</a>
          </p>
        </div>

        {/* Company Logo / Brand */}
        <div className={styles.companySection}>
          <h1 className={styles.companyName}>PLUMBING SERVICES</h1>
          <p className={styles.tagline}>Professional & Reliable Solutions</p>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.bottomText}>
        © {new Date().getFullYear()} Plumbing Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
