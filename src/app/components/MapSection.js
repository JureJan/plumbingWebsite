// src/app/components/MapSection.js
import styles from "../styles/MapSection.module.css";

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <iframe
        title="Company Location"
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.526987048796!2d14.778953676851143!3d46.0812336960364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764aebf5643b9d9%3A0x9c8aabc1097dba4!2sKresni%C5%A1ki%20vrh%2049%2C%201281%20Kresnice%2C%20Slovenia!5e0!3m2!1sen!2sus!4v1707743154840!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}