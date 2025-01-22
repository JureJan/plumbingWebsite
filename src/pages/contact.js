"use client";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import "../styles/contact.css";
import ImageCarousel from "../app/components/imageCarousel";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import CommentCarousel from "@/app/components/commentCarousel";

export default function Contact() {
  const { t } = useTranslation("common");
  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    emailjs
      .send("service_oi2poff", "template_0z4khdp", templateParams)
      .then(() => {
        alert(t("contact.formSuccessMessage"));
      })
      .catch(() => {
        alert(t("contact.formErrorMessage"));
      });
  };

  const titles = [
    {
      title: t("contact.carouselTitle1", "Default Title 1"),
      text: t("contact.carouselText1", "Default Text 1"),
    },
    {
      title: t("contact.carouselTitle2", "Default Title 2"),
      text: t("contact.carouselText2", "Default Text 2"),
    },
    {
      title: t("contact.carouselTitle3", "Default Title 3"),
      text: t("contact.carouselText3", "Default Text 3"),
    },
    {
      title: t("contact.carouselTitle4", "Default Title 4"),
      text: t("contact.carouselText4", "Default Text 4"),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="carouselOverlayWrapper">
        <ImageCarousel text={titles} />
      </div>

      <main className="contact-page">
        {/* Contact Header Section */}
        <section className="contact-header">
          <h1>{t("contact.headerTitle", "Kontakt")}</h1>
          <p>{t("contact.address", "MAXXGYM Ljubljana, Dunajska cesta 270, 1000 Ljubljana")}</p>
          <p>
            {t("contact.phone", "Telefon")}:{" "}
            <a href="tel:+38659041900">0590 41 900</a> |{" "}
            {t("contact.email", "Email")}:{" "}
            <a href="mailto:info@maxxgym.si">info@maxxgym.si</a>
          </p>
        </section>


        {/* Contact Form Section */}
        <section className="contact-form-section">
          <h2>{t("contact.newsletterTitle", "Prijavi se na MAXXGYM novice")}</h2>
          <form className="contact-form" ref={formRef} onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("contact.formNamePlaceholder", "Ime in Priimek*")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t("contact.formEmailPlaceholder", "Email Naslov*")}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              {t("contact.formSubmitButton", "Prijava")}
            </button>
          </form>
        </section>

        <CommentCarousel />


        {/* Map Section */}
        <section className="map-section">
          <h2>{t("contact.mapTitle", "Kje nas najdete?")}</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.7056391447286!2d14.516582176026992!3d46.09684459100629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532de74794911%3A0xefec253f7062f643!2sMAXXGYM%20Ljubljana!5e0!3m2!1sen!2ssi!4v1734949388134!5m2!1sen!2ssi"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

