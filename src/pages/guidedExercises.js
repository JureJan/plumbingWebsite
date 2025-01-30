"use client"; // Marking this as a client component

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import emailjs from "@emailjs/browser";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Schedule from "../app/components/schedule"; // Import the Schedule component
import ImageCarousel from "../app/components/imageCarousel";
import Image from "next/image";
import "../styles/guidedExercises.css"; // Path to the page's CSS

export default function GuidedExercises() {
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
      alert(t("guided.exercisesFormErrorMessage", "Please fill out all required fields."));
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
        alert(
          t(
            "guided.exercisesFormSuccessMessage",
            "Your message was sent successfully!"
          )
        );
        // Manually reset form fields
        if (formRef.current) {
          formRef.current.elements.name.value = "";
          formRef.current.elements.email.value = "";
          formRef.current.elements.phone.value = "";
          formRef.current.elements.message.value = "";
        }
      } else {
        alert(
          t(
            "guided.exercisesFormErrorMessage",
            "An error occurred while sending your message. Please try again."
          )
        );
      }
    } catch (error) {
      console.error("EmailJS Error:", error); // Log detailed error
      alert(
        t(
          "guided.exercisesFormErrorMessage",
          "An error occurred while sending your message. Please try again."
        )
      );
    }
  };

  const handleScroll = (id) => {
    if (id === "imageCarousel") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titles = [
    {
      title: t("guided.exercisesCarouselTitle1"),
      text: t("guided.exercisesCarouselText1"),
    },
    {
      title: t("guided.exercisesCarouselTitle2"),
      text: t("guided.exercisesCarouselText2"),
    },
    {
      title: t("guided.exercisesCarouselTitle3"),
      text: t("guided.exercisesCarouselText3"),
    },
    {
      title: t("guided.exercisesCarouselTitle4"),
      text: t("guided.exercisesCarouselText4"),
    },
  ];

  const programs = [
    {
      id: "cardio",
      title: t("guided.cardioTitle"),
      description: t("guided.cardioDescription"),
      benefits: t("guided.cardioBenefits", { returnObjects: true }),
      videoLink: "https://www.youtube.com/embed/JWaZk-lZ_iY",
      image: "/images/maxxCardio.jpg",
    },
    {
      id: "bodypump",
      title: t("guided.bodyPumpTitle"),
      description: t("guided.bodyPumpDescription"),
      benefits: t("guided.bodyPumpBenefits", { returnObjects: true }),
      videoLink: "https://www.youtube.com/embed/RSZqko1s0f8",
      image: "/images/maxxBodyPump.jpg",
    },
    {
      id: "bodystep",
      title: t("guided.bodyStepTitle"),
      description: t("guided.bodyStepDescription"),
      benefits: t("guided.bodyStepBenefits", { returnObjects: true }),
      videoLink: "https://www.youtube.com/embed/h0YpmnVN5Pk",
      image: "/images/maxxBodyStep.jpg",
    },
    {
      id: "bodyattack",
      title: t("guided.bodyAttackTitle"),
      description: t("guided.bodyAttackDescription"),
      benefits: t("guided.bodyAttackBenefits", { returnObjects: true }),
      videoLink: "https://www.youtube.com/embed/7VAChqy78oc",
      image: "/images/maxxBodyattack.jpg",
    },
    {
      id: "bootcamp",
      title: t("guided.bootCampTitle"),
      description: t("guided.bootCampDescription"),
      benefits: t("guided.bootCampBenefits", { returnObjects: true }),
      image: "/images/maxxBootcamp.jpg",
    },
    {
      id: "pilates",
      title: t("guided.pilatesTitle"),
      description: t("guided.pilatesDescription"),
      benefits: t("guided.pilatesBenefits", { returnObjects: true }),
      image: "/images/maxxPilates.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div id="imageCarousel" className="carouselOverlayWrapper">
        <ImageCarousel text={titles} handleScrollToForm={handleScrollToForm} />
      </div>
      <main>
        {/* Schedule Section */}
        <section className="schedule-section">
          <Schedule />
        </section>

        {/* Logos Section */}
        <section className="logos-section">
          <h2>{t("guided.sectionTitle")}</h2>
          <div className="logos-container">
            {programs.map((program, index) => (
              <button
                key={index}
                className="logo-button"
                onClick={() => handleScroll(program.id)}
              >
                <Image
                  src={`/images/maxx-vadbe-${index + 1}.jpg`}
                  alt={`Logo ${index + 1}`}
                  width={80}
                  height={80}
                />
              </button>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="programs-section">
          {programs.map((program) => (
            <div key={program.id} id={program.id} className="program-card">
              <Image
                src={program.image}
                alt={program.title}
                width={800}
                height={400}
              />
              <div className="text-content">
                <div className="left-text">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
              </div>
              {program.videoLink && (
                <div className="video-container">
                  <iframe
                    src={program.videoLink}
                    title={program.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <button className="section-button" onClick={handleScrollToForm}>
                {t("guided.formButton")}
              </button>
            </div>
          ))}
        </section>

        {/* Sign-up Form Section */}
        <section id="form-section" className="form-section">
          <h2>{t("guided.formTitle")}</h2>
          <form ref={formRef} onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("guided.formNamePlaceholder")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t("guided.formEmailPlaceholder")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t("guided.formPhonePlaceholder")}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t("guided.formMessagePlaceholder")}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              {t("guided.formSubmitButton")}
            </button>
          </form>
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