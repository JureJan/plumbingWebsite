import React from "react";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import ImageCarousel from "../app/components/imageCarousel";
import Schedule from "../app/components/schedule";
import HoverImageComponent from "../app/components/hoverImageComponent";
import BmiCalculator from "../app/components/bmicalculator";
import CommentCarousel from "@/app/components/commentCarousel";

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const changeLanguage = (lang) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, undefined, { locale: lang });
  };

  const titles = [
    {
      title: t("home.CarouselTitle1", { defaultMessage: "Personalized Approach That Works" }),
      text: t("home.CarouselTitle1", { defaultMessage: "Find the best personalized training for your goals." }),
    },
    {
      title: t("home.CarouselTitle2", { defaultMessage: "Default Title 2" }),
      text: t("home.CarouselText2", { defaultMessage: "Default Text 2" }),
    },
    {
      title: t("home.CarouselTitle3", { defaultMessage: "Default Title 3" }),
      text: t("home.CarouselText3", { defaultMessage: "Default Text 3" }),
    },
    {
      title: t("home.CarouselTitle4", { defaultMessage: "Default Title 4" }),
      text: t("home.CarouselText4", { defaultMessage: "Default Text 4" }),
    },
  ];

  //const changeTo = router.locale === "en" ? "de" : "en";

  return (

    <>
      <Navbar />
      <main>
        {/* Language Switcher */}
        <div className="language-buttons">
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("de")}>Deutsch</button>
          <button onClick={() => changeLanguage("it")}>Italiano</button>
          <button onClick={() => changeLanguage("sl")}>Slovenščina</button>
        </div>

        {/* Image Carousel */}
        <ImageCarousel text={titles} />

        {/* Additional Content
        <div className="carouselOverlay">
          <h1>{t("home.homeCarouselTitle1", { defaultMessage: "Personalized Approach That Works" })}</h1>
          <p>{t("home.CarouselText1", { defaultMessage: "Default Text 1" })}</p>
        </div> */}

        <Schedule />
        <h2>{t("home.CarouselTitle3", { defaultMessage: "Default Title 3" })}</h2>
        <HoverImageComponent />
        <BmiCalculator />
        <CommentCarousel />


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

export default Home;
