import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import styles from "../styles/home.module.css";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ImageCarousel from "@/app/components/imageCarousel";
import ServicesOverview from "@/app/components/ServicesOverview";
import ContactForm from "@/app/components/ContactForm";
import Testimonials from "@/app/components/TestimonialsComponent";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import CTASection from "@/app/components/CTASection";

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const changeLanguage = (lang) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, undefined, { locale: lang });
  };

  const carouselContent = [
    {
      title: t("home.CarouselTitle1"),
      text: t("home.CarouselText1"),
    },
    {
      title: t("home.CarouselTitle2"),
      text: t("home.CarouselText2"),
    },
    {
      title: t("home.CarouselTitle3"),
      text: t("home.CarouselText3"),
    },
    {
      title: t("home.CarouselTitle4"),
      text: t("home.CarouselText4"),
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles["home-page"]}>



        {/* Image Carousel */}
        <ImageCarousel text={carouselContent} />


        {/* Services Overview */}
        <ServicesOverview />

       {/* Call To Action Section */}
       <CTASection />

        {/* Why Choose Us */}
        <WhyChooseUs />
        

        {/* Testimonials */}
        <Testimonials />


        {/* Contact Form */}
        <ContactForm />
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
