"use client"; // Marking this as a client component
import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import "../styles/fitnes.css"; // Path to the page's CSS
import ImageCarousel from "../app/components/imageCarousel";
import CommentCarousel from "../app/components/commentCarousel";

export default function Fitnes() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const changeLanguage = (lang) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, undefined, { locale: lang });
  };

  const titles = [
    {
      title: t("fitness.CarouselTitle1", { defaultMessage: "The Best Prices for Your Goals" }),
      text: t("fitness.CarouselText1", { defaultMessage: "Find the best deals tailored to your needs." }),
    },
    {
      title: t("fitness.CarouselTitle2", { defaultMessage: "Default Title 2" }),
      text: t("fitness.CarouselText2", { defaultMessage: "Default Text 2" }),
    },
    {
      title: t("fitness.CarouselTitle3", { defaultMessage: "Default Title 3" }),
      text: t("fitness.CarouselText3", { defaultMessage: "Default Text 3" }),
    },
    {
      title: t("fitness.CarouselTitle4", { defaultMessage: "Default Title 4" }),
      text: t("fitness.CarouselText4", { defaultMessage: "Default Text 4" }),
    },
  ];

  const sections = [
    {
      id: "section1",
      title: t("sections.section1.title"),
      text: t("sections.section1.text"),
      image: "/images/fitnes1.png",
    },
    {
      id: "section2",
      title: t("sections.section2.title"),
      text: t("sections.section2.text"),
      image: "/images/fitnes2.png",
    },
    {
      id: "section3",
      title: t("sections.section3.title"),
      text: t("sections.section3.text"),
      image: "/images/fitnes3.png",
    },
  ];

  const handleScrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="carouselOverlayWrapper">
        <ImageCarousel text={titles} handleScrollToForm={handleScrollToForm} />
      </div>
      <main>
        {/* Language Switcher */}
        <div className="language-buttons">
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("de")}>Deutsch</button>
          <button onClick={() => changeLanguage("it")}>Italiano</button>
          <button onClick={() => changeLanguage("sl")}>Slovenščina</button>
        </div>

  {/* Dynamic Sections */}
  {sections.map((section, index) => (
          <section key={section.id} id={section.id} className={`fitnes-section ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="fitnes-text">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              <button className="fitnes-button" onClick={handleScrollToForm}>
                {t("form.button_consultation")}
              </button>
            </div>
            <div className="fitnes-image">
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        ))}

        <CommentCarousel t={t} />

        {/* Sign-in Form Section */}
        <section id="form-section" className="fitnes-signin">
          <h2>{t("form.title")}</h2>
          <p>{t("form.description")}</p>
          <form className="signin-form">
            <div className="form-group">
              <input type="text" placeholder={t("form.inputs.name")} required />
            </div>
            <div className="form-group">
              <input type="email" placeholder={t("form.inputs.email")} required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder={t("form.inputs.phone")} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder={t("form.inputs.address")} required />
            </div>
            <button type="submit" className="form-submit">
              {t("form.button_submit")}
            </button>
            <p className="form-privacy">
              <span>🔒</span> {t("form.privacy")}
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Correctly handle server-side props for localization
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
