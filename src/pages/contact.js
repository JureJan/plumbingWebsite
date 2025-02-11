"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import emailjs from "@emailjs/browser";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const { t } = useTranslation("common");
  const formRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  useEffect(() => {
    if (typeof window !== "undefined") {
      emailjs.init("4seHCGovjmExB5X_K"); // Replace with your actual EmailJS public key
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      phone: formData.get("phone"),
      service: formData.get("service"),
    };

    if (!templateParams.name || !templateParams.email || !templateParams.message) {
      setStatusMessage(t("form.validationError", "Please fill out all required fields."));
      setStatusType("error");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_h9tgu0l", // Your EmailJS service ID
        "template_uuzq0uy", // Your EmailJS template ID
        templateParams,
        "4seHCGovjmExB5X_K" // Your EmailJS user ID (public key)
      );

      if (response.status === 200) {
        setStatusMessage(t("contact.formSuccessMessage", "Your message was sent successfully!"));
        setStatusType("success");
        formRef.current.reset();
      } else {
        setStatusMessage(t("form.errorMessage", "An error occurred while sending your message."));
        setStatusType("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage(t("form.errorMessage", "An error occurred while sending your message."));
      setStatusType("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.contactPage}>
        <h1>{t("contact.title", "Contact Us")}</h1>
        <p>{t("contact.subtitle", "Reach out for plumbing, handyman, or cleaning services.")}</p>

        <form className={styles.contactForm} ref={formRef} onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder={t("contact.formNamePlaceholder", "Your Name*")} required />
          <input type="email" name="email" placeholder={t("contact.formEmailPlaceholder", "Your Email*")} required />
          <input type="text" name="phone" placeholder={t("contact.formPhonePlaceholder", "Your Phone (optional)")} />
          <select name="service">
            <option value="">{t("contact.formServicePlaceholder", "Select a Service")}</option>
            <option value="plumbing">{t("services.plumbing", "Plumbing Installations & Repairs")}</option>
            <option value="heating">{t("services.heating", "Heating System Maintenance")}</option>
            <option value="cleaning">{t("services.cleaning", "Drain & Sewer Cleaning")}</option>
            <option value="handyman">{t("services.handyman", "Handyman Services")}</option>
          </select>
          <textarea name="message" placeholder={t("contact.formMessagePlaceholder", "Your Message*")} required></textarea>
          <button type="submit">{t("contact.formSubmitButton", "Send Message")}</button>
          {statusMessage && <p className={`${styles.statusMessage} ${styles[statusType]}`}>{statusMessage}</p>}
        </form>
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

export default Contact;
