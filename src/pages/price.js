import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import ImageCarousel from "../app/components/imageCarousel";
import "../styles/price.css";

const Price = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const changeLanguage = (lang) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, undefined, { locale: lang });
  };

  const titles = [
    {
      title: t("price.CarouselTitle1", { defaultMessage: "The Best Prices for Your Goals" }),
      text: t("price.CarouselText1", { defaultMessage: "Find the best deals tailored to your needs." }),
    },
    {
      title: t("price.CarouselTitle2", { defaultMessage: "Default Title 2" }),
      text: t("price.CarouselText2", { defaultMessage: "Default Text 2" }),
    },
    {
      title: t("price.CarouselTitle3", { defaultMessage: "Default Title 3" }),
      text: t("price.CarouselText3", { defaultMessage: "Default Text 3" }),
    },
    {
      title: t("price.CarouselTitle4", { defaultMessage: "Default Title 4" }),
      text: t("price.CarouselText4", { defaultMessage: "Default Text 4" }),
    },
  ];

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
        <div className="carouselOverlayWrapper">
          <ImageCarousel text={titles} />
        </div>

        {/* Upper container */}
        <section className="upper-container">
          <img src="/images/price1.png" alt={t("price.ImageAltText", { defaultMessage: "Descriptive Alt Text" })} className="responsive-image" />
          <h1>{t("price.PageTitle", { defaultMessage: "MaxxGym" })}</h1>
          <p>{t("price.PageDescription", { defaultMessage: "Find the best deals tailored to your needs." })}</p>
        </section>
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

export default Price;
