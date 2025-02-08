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

                  {/* Down Section */}
                  <section className="down-section">
                    <div className="down-text">
                      <h1>{t("personal.heroTitle", "Over 30 years of fitness expertise, reflected in our professionalism and unwavering support for your journey.")}</h1>
                      <p>{t("personal.heroText", "Find the right fitness program tailored to you.")}</p>
                      <p>{t("personal.heroText2", "Find the right fitness program tailored to you.")}</p>
                      <p>{t("personal.heroText3", "Find the right fitness program tailored to you.")}</p>

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
                      <h1>{t("personal.leftPhotoHeroTitle", "Empower Your Fitness Journey With Us")}</h1>
                      <p>{t("personal.leftPhotoHeroText", "Discover personalized plans to achieve your fitness goals.")}</p>
                      <p>{t("personal.leftPhotoHeroText2", "We provide everything to ensure your fitness journey starts in the MAXXImal way.")}</p>
                      <p>{t("personal.leftPhotoHeroText3", "We provide everything to ensure your fitness journey starts in the MAXXImal way.")}</p>
                      <button className="cta-button" onClick={handleScrollToForm}>
                        {t("form.button", "Join Now")}
                      </button>
                    </div>
                  </section>
        
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
    {/* <p>{t("personal.trainingHeroText")}</p> */}

    {/* Bullet Points */}
    <ul className="bullet-points">
      <li><h2>{t("personal.trainingBulletPoint1")}</h2><p>{t("personal.trainingBulletText1")}</p></li>
      <li><h2>{t("personal.trainingBulletPoint2")}</h2><p>{t("personal.trainingBulletText2")}</p></li>
      <li><h2>{t("personal.trainingBulletPoint3")}</h2><p>{t("personal.trainingBulletText3")}</p></li>
      <li><h2>{t("personal.trainingBulletPoint4")}</h2><p>{t("personal.trainingBulletText4")}</p></li>
      <li><h2>{t("personal.trainingBulletPoint5")}</h2><p>{t("personal.trainingBulletText5")}</p></li>
    </ul>

    {/* Submit Button */}
    <div className="cta-button-container">
      <button className="cta-button" onClick={handleScrollToForm}>
        {t("personal.trainingSignUpButton")}
      </button>
    </div>
  </div>
</section>


 {/* Down Section */}
  <section className="down-section">
  <div className="down-text">
  <h1>{t("personal.downHeroTitle", "Over 30 years of fitness expertise, reflected in our professionalism and unwavering support for your journey.")}</h1>
   <p>{t("personal.downHeroText", "Find the right fitness program tailored to you.")}</p>
      <p>{t("personal.downHeroText2", "Find the right fitness program tailored to you.")}</p>
    <p>{t("personal.downHeroText3", "Find the right fitness program tailored to you.")}</p>
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
       <h1>{t("leftPhoto.heroTitle4", "Empower Your Fitness Journey With Us")}</h1>
        <p>{t("personal.leftHeroText", "Discover personalized plans to achieve your fitness goals.")}</p>
          <p>{t("personal.leftHeroText2", "We provide everything to ensure your fitness journey starts in the MAXXImal way.")}</p>
          <p>{t("personal.leftHeroText3", "All to ensure your fitness journey starts at its MAXXimum.")}</p>
         <button className="cta-button" onClick={handleScrollToForm}>
       {t("form.button", "Join Now")}
   </button>
    </div>
    </section>


                          
{/* Section 1 */}
<section className="hero-section">
  <Image
    src="/images/trening1.png"
    alt={t("personal.trainingHeroImageAlt")}
    fill
    style={{ objectFit: "cover" }}
    className="hero-image"
  />
  <div className="hero-overlay">
    <h1>{t("personal.trainingHeroTitle7")}</h1>
    
    {/* 5 Squares Section */}
    <div className="square-container">
      <div className="square">
        <h2>{t("personal.trainingSquareTitle1")}</h2>
        <p>{t("personal.trainingSquareText1")}</p>
      </div>
      <div className="square">
        <h2>{t("personal.trainingSquareTitle2")}</h2>
        <p>{t("personal.trainingSquareText2")}</p>
      </div>
      <div className="square">
        <h2>{t("personal.trainingSquareTitle3")}</h2>
        <p>{t("personal.trainingSquareText3")}</p>
      </div>
      <div className="square">
        <h2>{t("personal.trainingSquareTitle4")}</h2>
        <p>{t("personal.trainingSquareText4")}</p>
      </div>
      <div className="square">
        <h2>{t("personal.trainingSquareTitle5")}</h2>
        <p>{t("personal.trainingSquareText5")}</p>
      </div>
    </div>

    <button className="cta-button" onClick={handleScrollToForm}>
      {t("personal.trainingSignUpButton")}
    </button>
  </div>
</section>

{/* Section 4 */}
<section className="bullet-section">
  {/* Image on Top */}
  <div className="image-container">
    <Image
      src="/images/certificate.png"
      alt={t("personal.trainingBulletBackgroundAlt")}
      width={200} // Adjust width as needed
      height={200} // Adjust height as needed
      style={{ objectFit: "cover" }}
    />
  </div>

  {/* Centered Content */}
  <div className="centered-content">
    {/* Title */}
    <h2>{t("personal.trainingBulletTitle6")}</h2>

    {/* Text */}
    <p>{t("personal.trainingBulletPoint1Text")}</p>
    <p>{t("personal.trainingBulletPoint2Text")}</p>
  </div>
      {/* Submit Button */}
      <button className="cta-button" onClick={handleScrollToForm}>
      {t("personal.trainingSignUpButton")}
    </button>
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