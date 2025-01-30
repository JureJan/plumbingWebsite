"use client";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import ImageCarousel from "../app/components/imageCarousel";
import CommentCarousel from "../app/components/commentCarousel";
import "../styles/personalTraining.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

export default function PersonalTraining() {
  const formRef = useRef(null); // This will reference the <form> element
  const router = useRouter();
  const { t } = useTranslation("common");

  // Initialize EmailJS
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
      phone: formData.get("phone") || "N/A", // Optional phone
      message: formData.get("message"),
    };

    // Validate required fields
    if (!templateParams.name || !templateParams.email || !templateParams.message) {
      alert(t("form.validationError", "Please fill out all required fields."));
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
        alert(t("form.successMessage", "Your message was sent successfully!"));
        // Manually reset form fields
        if (formRef.current) {
          formRef.current.elements.name.value = "";
          formRef.current.elements.email.value = "";
          formRef.current.elements.phone.value = "";
          formRef.current.elements.message.value = "";
        }
      } else {
        alert(t("form.errorMessage", "An error occurred while sending your message."));
      }
    } catch (error) {
      console.error("EmailJS Error:", error); // Log the error for debugging
      alert(t("form.errorMessage", "An error occurred while sending your message."));
    }
  };

  const titles = [
    {
      title: t("personal.trainingCarouselTitle1"),
      text: t("personal.trainingCarouselText1"),
    },
    {
      title: t("personal.trainingCarouselTitle2"),
      text: t("personal.trainingCarouselText2"),
    },
    {
      title: t("personal.trainingCarouselTitle3"),
      text: t("personal.trainingCarouselText3"),
    },
    {
      title: t("personal.trainingCarouselTitle4"),
      text: t("personal.trainingCarouselText4"),
    },
  ];

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="carousel-container">
        <ImageCarousel text={titles} handleScrollToForm={handleScrollToForm} />
      </div>
      <main>
        {/* Section 1 */}
        <section className="hero-section">
          <Image
            src="/images/trening2.png"
            alt={t("personal.trainingHeroImageAlt")}
            fill
            style={{ objectFit: "cover" }}
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1>{t("personal.trainingHeroTitle")}</h1>
            <p>{t("personal.trainingHeroText")}</p>
            <button className="cta-button" onClick={handleScrollToForm}>
              {t("personal.trainingSignUpButton")}
            </button>
          </div>
        </section>

        {/* Section 2 */}
        <section className="info-section">
          <div className="info-left">
            <h2>{t("personal.trainingInfoTitle1")}</h2>
            <ul>
              <li>{t("personal.trainingInfoPoint1")}</li>
              <li>{t("personal.trainingInfoPoint2")}</li>
              <li>{t("personal.trainingInfoPoint3")}</li>
            </ul>
          </div>
          <div className="info-right">
            <Image
              src="/images/trening3.png"
              alt={t("personal.trainingInfoImageAlt1")}
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="reverse-info-section">
          <div className="info-left">
            <Image
              src="/images/trening4.png"
              alt={t("personal.trainingInfoImageAlt2")}
              width={500}
              height={500}
            />
          </div>
          <div className="info-right">
            <h2>{t("personal.trainingInfoTitle2")}</h2>
            <p>{t("personal.trainingInfoText2")}</p>
            <button className="cta-button" onClick={handleScrollToForm}>
              {t("personal.trainingSignUpButton")}
            </button>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bullet-section">
          <Image
            src="/images/fitnes1.png"
            alt={t("personal.trainingBulletBackgroundAlt")}
            fill
            style={{ objectFit: "cover" }}
            className="background-image"
          />
          <div className="bullet-overlay">
            <h2>{t("personal.trainingBulletTitle")}</h2>
            <ul>
              <li>
                <h3>{t("personal.trainingBulletPoint1Title")}</h3>
                <p>{t("personal.trainingBulletPoint1Text")}</p>
              </li>
            </ul>
            <button className="cta-button" onClick={handleScrollToForm}>
              {t("personal.trainingSignUpButton")}
            </button>
          </div>
        </section>

        {/* Section 5 */}
        <CommentCarousel />

  {/* Section 6 - Form Section */}
  <section id="form-section" className="form-section">
          <h2>{t("personal.trainingFormSectionTitle")}</h2>
          <form ref={formRef} onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("personal.trainingFormNamePlaceholder")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t("personal.trainingFormEmailPlaceholder")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t("personal.trainingFormPhonePlaceholder")}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t("personal.trainingFormMessagePlaceholder")}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button">
              {t("personal.trainingFormSubmitButton")}
            </button>
          </form>
        </section>      </main>
      <Footer />
    </>
  );
}

// Server-side translations
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});