"use client"; // Marking this as a client component
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import emailjs from "@emailjs/browser"; // Updated EmailJS import
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import "../styles/fitness.css";
import ImageCarousel from "../app/components/imageCarousel";
import CommentCarousel from "../app/components/commentCarousel";
import Image from "next/image";

export default function Fitnes() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const formRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    if (typeof window !== "undefined") {
      emailjs.init("4seHCGovjmExB5X_K"); // Replace with your actual EmailJS public key
    }
  }, []);

  // Scroll to form section
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
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
        // Reset form fields using e.target
        e.target.reset();
      } else {
        alert(t("form.errorMessage", "An error occurred while sending your message."));
      }
    } catch (error) {
      console.error("EmailJS Error:", error); // Log detailed error
      alert(t("form.errorMessage", "An error occurred while sending your message."));
    }
  };

  const titles = [
    {
      title: t("fitness.CarouselTitle1"),
      text: t("fitness.CarouselText1"),
    },
    {
      title: t("fitness.CarouselTitle2"),
      text: t("fitness.CarouselText2"),
    },
    {
      title: t("fitness.CarouselTitle3"),
      text: t("fitness.CarouselText3"),
    },
    {
      title: t("fitness.CarouselTitle4"),
      text: t("fitness.CarouselText4"),
    },
  ];

  const sections = [
    {
      id: "section1",
      title: t("sections.section1.title"),
      text: t("sections.section1.text"),
      text2: t("sections.section1.text2"),
      image: "/images/fitnes1.png",
    },
    {
      id: "section2",
      title: t("sections.section2.title"),
      text: t("sections.section2.text"),
      text2: t("sections.section2.text2"),
      image: "/images/fitnes2.png",
    },
    {
      id: "section3",
      title: t("sections.section3.title"),
      text: t("sections.section3.text"),
      text2: t("sections.section3.text2"),
      image: "/images/fitnes3.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="carouselOverlayWrapper">
        {/* Pass handleScrollToForm to ImageCarousel */}
        <ImageCarousel text={titles} handleScrollToForm={handleScrollToForm} />
      </div>
      <main>
        {sections.map((section, index) => (
          <section
            key={section.id}
            className={`fitness-section ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="fitness-text">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.text2 && <p>{section.text2}</p>}
              {index === 1 && (
                <button className="cta-button" onClick={handleScrollToForm}>
                  {t("form.button", "Join Now")}
                </button>
              )}
            </div>
            <div className="fitness-image">
              <Image src={section.image} alt={section.title} width={500} height={500} />
            </div>
          </section>
        ))}

        {/* Hero Section */}
        <section className="hero-section">
          <Image
            src="/images/trening8.png"
            alt={t("fitness.heroImageAlt", "Fitness Hero Image")}
            fill
            style={{ objectFit: "cover" }}
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1>{t("fitness.heroTitle", "Achieve Your Fitness Goals")}</h1>
            <p>{t("fitness.heroText", "Find the right fitness program tailored to you.")}</p>
            <ul className="text-lines">
              <li>{t("fitness.line1", "State-of-the-art equipment for all fitness levels.")}</li>
              <li>{t("fitness.line2", "Expert trainers to guide you every step of the way.")}</li>
              <li>{t("fitness.line3", "Flexible workout schedules that fit your life.")}</li>
              <li>{t("fitness.line4", "A supportive community to keep you motivated.")}</li>
              <li>{t("fitness.line5", "Programs tailored to your specific goals.")}</li>
              <li>{t("fitness.line6", "Experience the difference at MaxxGym.")}</li>
            </ul>
            <button className="cta-button" onClick={handleScrollToForm}>
              {t("fitness.heroButton", "Join Now")}
            </button>
          </div>
        </section>

        {/* Down Section */}
        <section className="down-section">
          <div className="down-text">
            <h1>{t("down.heroTitle", "Over 30 years of fitness expertise, reflected in our professionalism and unwavering support for your journey.")}</h1>
            <p>{t("down.heroText", "Find the right fitness program tailored to you.")}</p>
            <p>{t("down.heroText2", "Find the right fitness program tailored to you.")}</p>
            <button className="cta-button" onClick={handleScrollToForm}>
              {t("form.button", "Join Now")}
            </button>
          </div>
          <div className="down-image">
            <Image
              src="/images/fitnes3.png"
              alt={t("down.heroImageAlt", "Fitness Hero Image")}
              width={500}
              height={500}
              className="heroDown-image"
            />
          </div>
        </section>

        {/* Left Photo Section */}
        <section className="left-photo-section">
          <div className="left-photo-image">
            <Image
              src="/images/trening5.png"
              alt={t("leftPhoto.heroImageAlt", "Left Aligned Fitness Image")}
              width={500}
              height={500}
              className="heroLeft-image"
            />
          </div>
          <div className="left-photo-text">
            <h1>{t("leftPhoto.heroTitle", "Empower Your Fitness Journey With Us")}</h1>
            <p>{t("leftPhoto.heroText", "Discover personalized plans to achieve your fitness goals.")}</p>
            <p>{t("leftPhoto.heroText2", "We provide everything to ensure your fitness journey starts in the MAXXImal way.")}</p>
            <ul className="offer-list">
              <li>{t("leftPhoto.bulletText1", "FREE introductory personal training session")}</li>
              <li>{t("leftPhoto.bulletText2", "FREE introductory training program")}</li>
              <li>{t("leftPhoto.bulletText3", "FREE protein shake after your first session")}</li>
            </ul>
            <p>{t("leftPhoto.heroText3", "All to ensure your fitness journey starts at its MAXXimum.")}</p>
            <button className="cta-button" onClick={handleScrollToForm}>
              {t("form.button", "Join Now")}
            </button>
          </div>
        </section>

        {/* Comment Section */}
        <section className="comment-section">
          <CommentCarousel />
        </section>

        {/* Form Section */}
        <section ref={formRef} className="fitnes-signin">
          <h2>{t("form.title", "Join MaxxGym Today")}</h2>
          <p>{t("form.description", "Sign up to access personalized training programs and expert guidance.")}</p>
          <form onSubmit={handleFormSubmit} className="signin-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("form.inputs.name", "Your Full Name*")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t("form.inputs.email", "Your Email Address*")}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t("form.inputs.message", "Tell us about your goals")}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              {t("form.button", "Get Started")}
            </button>
            <p className="form-privacy">
              <span>🔒</span> {t("form.privacy", "We value your privacy and never share your data.")}
            </p>
          </form>
        </section>
      </main>
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