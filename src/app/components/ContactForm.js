"use client";

import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "next-i18next";
import styles from "../../styles/contact.module.css";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = t("contact.error_name", { defaultMessage: "Name is required" });
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = t("contact.error_email", { defaultMessage: "Email is required" });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = t("contact.error_email_invalid", { defaultMessage: "Invalid email format" });
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = t("contact.error_message", { defaultMessage: "Message is required" });
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSuccessMessage(
          t("contact.success_message", { defaultMessage: "Your message has been sent successfully!" })
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage(t("contact.error_sending", { defaultMessage: "Error sending message. Try again later." }));
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSuccessMessage(t("contact.error_sending", { defaultMessage: "Error sending message. Try again later." }));
    }
  };

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.contactTitle}>{t("contact.title", { defaultMessage: "Get in Touch" })}</h2>
      <p className={styles.contactSubtitle}>
        {t("contact.subtitle", { defaultMessage: "Need help? Send us a message and we'll get back to you!" })}
      </p>

      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className={styles.formGroup}>
          <label htmlFor="name">{t("contact.name", { defaultMessage: "Your Name" })}</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className={styles.formGroup}>
          <label htmlFor="email">{t("contact.email", { defaultMessage: "Your Email" })}</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        {/* Message Field */}
        <div className={styles.formGroup}>
          <label htmlFor="message">{t("contact.message", { defaultMessage: "Your Message" })}</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          {t("contact.send_button", { defaultMessage: "Send Message" })}
        </button>

        {/* Success Message */}
        {successMessage && <p className={styles.statusMessage}>{successMessage}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
