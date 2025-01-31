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
            <button className="logo-button" onClick={() => handleScroll("cardio")}>
              <Image src="/images/maxx-vadbe-1.jpg" alt="Logo 1" width={80} height={80} />
            </button>
            <button className="logo-button" onClick={() => handleScroll("bodypump")}>
              <Image src="/images/maxx-vadbe-2.jpg" alt="Logo 2" width={80} height={80} />
            </button>
            <button className="logo-button" onClick={() => handleScroll("bodystep")}>
              <Image src="/images/maxx-vadbe-3.jpg" alt="Logo 3" width={80} height={80} />
            </button>
            <button className="logo-button" onClick={() => handleScroll("bodyattack")}>
              <Image src="/images/maxx-vadbe-4.jpg" alt="Logo 4" width={80} height={80} />
            </button>
            <button className="logo-button" onClick={() => handleScroll("bootcamp")}>
              <Image src="/images/maxx-vadbe-5.jpg" alt="Logo 5" width={80} height={80} />
            </button>
            <button className="logo-button" onClick={() => handleScroll("pilates")}>
              <Image src="/images/maxx-vadbe-6.jpg" alt="Logo 6" width={80} height={80} />
            </button>
          </div>
        </section>

{/* Programs Section */}
<div className="programs-section">
  {/* Cardio Program */}
  <section id="cardio" className="program-card">
    <Image src="/images/maxxCardio.jpg" alt="Cardio" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.cardioLeftText")}</p>
        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.cardioBullet1")}</li>
            <li>{t("guided.cardioBullet2")}</li>
            <li>{t("guided.cardioBullet3")}</li>
            <li>{t("guided.cardioBullet4")}</li>
          </ul>
        </div>
      </div>
      <div className="lower-section">
        <h3>{t("guided.lowerTitle")}</h3>
        <p>{t("guided.cardioLowerText")}</p>
      </div>
    </div>
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/JWaZk-lZ_iY"
        title="Cardio"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>

    {/* GRIT Athletic Program */}
    <section id="grit-athletic" className="program-card">
    <Image src="/images/maxxAthletic.jpg" alt="GRIT Athletic" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.gritAthleticLeftText")}</p>
        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.gritAthleticBullet1")}</li>
            <li>{t("guided.gritAthleticBullet2")}</li>
            <li>{t("guided.gritAthleticBullet3")}</li>
            <li>{t("guided.gritAthleticBullet4")}</li>
          </ul>
        </div>
      </div>
      <div className="lower-section">
        <h3>{t("guided.lowerTitle")}</h3>
        <p>{t("guided.gritAthleticLowerText")}</p>
      </div>
    </div>
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/example-grit-athletic-video"
        title="GRIT Athletic"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>

    {/* GRIT Strength Program */}
    <section id="grit-strength" className="program-card">
    <Image src="/images/maxxStrength.jpg" alt="GRIT Strength" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.gritStrengthLeftText")}</p>
        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.gritStrengthBullet1")}</li>
            <li>{t("guided.gritStrengthBullet2")}</li>
            <li>{t("guided.gritStrengthBullet3")}</li>
            <li>{t("guided.gritStrengthBullet4")}</li>
          </ul>
        </div>
      </div>
      <div className="lower-section">
        <h3>{t("guided.lowerTitle")}</h3>
        <p>{t("guided.gritStrengthLowerText")}</p>
      </div>
    </div>
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/example-grit-strength-video"
        title="GRIT Strength"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>

  {/* BodyPump Program */}
  <section id="bodypump" className="program-card">
    <Image src="/images/maxxBodyPump.jpg" alt="BodyPump" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.bodyPumpLeftText")}</p>
        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.bodyPumpBullet1")}</li>
            <li>{t("guided.bodyPumpBullet2")}</li>
            <li>{t("guided.bodyPumpBullet3")}</li>
            <li>{t("guided.bodyPumpBullet4")}</li>
          </ul>
        </div>
      </div>
      <div className="lower-section">
        <h3>{t("guided.lowerTitle")}</h3>
        <p>{t("guided.bodyPumpLowerText")}</p>
        <h3>{t("guided.lowerTitle2")}</h3>
        <p>{t("guided.bodyPumpLowerText2")}</p>

      </div>
    </div>
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/RSZqko1s0f8"
        title="BodyPump"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>

  {/* BodyStep Program */}
  <section id="bodystep" className="program-card">
    <Image src="/images/maxxBodyStep.jpg" alt="BodyStep" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.bodyStepLeftText")}</p>
        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.bodyStepBullet1")}</li>
            <li>{t("guided.bodyStepBullet2")}</li>
            <li>{t("guided.bodyStepBullet3")}</li>
            <li>{t("guided.bodyStepBullet4")}</li>
          </ul>
        </div>
      </div>
      <div className="lower-section">
        <h3>{t("guided.lowerTitle2")}</h3>
        <p>{t("guided.bodyStepLowerText")}</p>
        <h3>{t("guided.bodyStepLowerTitle2")}</h3>
        <p>{t("guided.bodyStepLowerText2")}</p>
      </div>
    </div>
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/h0YpmnVN5Pk"
        title="BodyStep"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>

  {/* BodyAttack Program */}
  <section id="bodyattack" className="program-card">
    <Image src="/images/maxxBodyattack.jpg" alt="BodyAttack" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.bodyAttackLeftText")}</p>
        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.bodyAttackBullet1")}</li>
            <li>{t("guided.bodyAttackBullet2")}</li>
            <li>{t("guided.bodyAttackBullet3")}</li>
            <li>{t("guided.bodyAttackBullet4")}</li>
          </ul>
        </div>
      </div>
      <div className="lower-section">
        <h3>{t("guided.lowerTitle2")}</h3>
        <p>{t("guided.bodyAttackLowerText")}</p>
        <h3>{t("guided.bodyAttackLowerTitle2")}</h3>
        <p>{t("guided.bodyAttackLowerText2")}</p>
      </div>
    </div>
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/7VAChqy78oc"
        title="BodyAttack"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>

  {/* Bootcamp Program */}
  <section id="bootcamp" className="program-card">
    <Image src="/images/maxxBootcamp.jpg" alt="Bootcamp" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.bootCampLeftText")}</p>
        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.bootCampBullet1")}</li>
            <li>{t("guided.bootCampBullet2")}</li>
            <li>{t("guided.bootCampBullet3")}</li>
            <li>{t("guided.bootCampBullet4")}</li>
          </ul>
        </div>
      </div>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>

  {/* Pilates Program */}
  <section id="pilates" className="program-card">
    <Image src="/images/maxxPilates.jpg" alt="Pilates" width={800} height={400} />
    <div className="parent-div">
      <div className="upper-section">
        <div className="left-column">
          <p>{t("guided.pilatesLeftText")}</p>
          <p>{t("guided.pilatesLeftText2")}</p>
          <p>{t("guided.pilatesLeftText3")}</p>

        </div>
        <div className="right-column">
          <ul>
            <li>{t("guided.pilatesBullet1")}</li>
            <li>{t("guided.pilatesBullet2")}</li>
            <li>{t("guided.pilatesBullet3")}</li>
            <li>{t("guided.pilatesBullet4")}</li>
            <li>{t("guided.pilatesBullet5")}</li>

          </ul>
        </div>
      </div>
      <div className="lower-section">
        <h3>{t("guided.pilatesLowerTitle")}</h3>
        <p>{t("guided.pilatesLowerText")}</p>
        <p>{t("guided.pilatesLowerText2")}</p>
        <p>{t("guided.pilatesLowerText3")}</p>
        <p>{t("guided.pilatesLowerText4")}</p>
        <h3>{t("guided.pilatesLowerTitle2")}</h3>
        <p>{t("guided.pilatesLowerText5")}</p>



      </div>
    </div>
    <button className="section-button" onClick={handleScrollToForm}>
      {t("guided.formButton")}
    </button>
  </section>
</div>
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