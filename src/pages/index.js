"use client";

import React, { useState } from "react";
import ImageCarousel from "../app/components/imageCarousel";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Schedule from "../app/components/schedule";
import HoverImageComponent from "../app/components/hoverImageComponent";
import BmiCalculator from "../app/components/bmicalculator";
import { FormattedMessage, useIntl, IntlProvider } from 'react-intl';
import { usePathname } from 'next/navigation';
import en from "../../.next/assets/lang/en.json";
import sl from "../../.next/assets/lang/sl.json";
import de from "../../.next/assets/lang/de.json";
import it from "../../.next/assets/lang/it.json";




export default function Home() {
  const getLocaleFromPathname = (pathname) => {
    const segments = pathname.split('/');
    return segments[1] && ["en", "sl", "de", "it"].includes(segments[1]) ? segments[1] : "sl"; // Default to 'sl'
  };
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname);

    const messages = {
      en,
      sl,
      de,
      it,
    };
  const titles = [
    { 
      title: "homeCarouselTitle1", 
      text: "homeCarouselText1" 
    },
    { 
      title: "homeCarouselTitle2", 
      text: "homeCarouselText2" 
    },
    { 
      title: "homeCarouselTitle3", 
      text: "homeCarouselText3" 
    },
    { 
      title: "homeCarouselTitle4", 
      text: "homeCarouselText4" 
    },
  ];

  // const navigateToFitness = () => {
  //   router.push("/fitnes");
  // };

  //const intl = useIntl();

  // const changeLanguage = (lang) => {
  //   const currentPath = window.location.pathname.split('/').slice(2).join('/'); // Remove current locale from URL
  //   router.push(`/${lang}/${currentPath}`);
  //   setLocale(lang);
  // };
  return (
    <>
          <IntlProvider messages={messages} locale={locale}>
              <Navbar />
    <main>
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('de')}>Deutsch</button>
        <button onClick={() => changeLanguage('it')}>Italiano</button>
        <button onClick={() => changeLanguage('sl')}>Slovenščina</button>
      </div>

      {/* <ImageCarousel 
        text={titles.map(({ title, text }) => ({
          title: intl.formatMessage({ id: title }),
          text: intl.formatMessage({ id: text }),
        }))} 
        handleButtonClick={navigateToFitness} 
      />

      <div className="carouselOverlay">
        <h1>{intl.formatMessage({ id: 'homeCarouselTitle1' })}</h1>
        <p>{intl.formatMessage({ id: 'homeCarouselText1' })}</p>
      </div> */}


    
      <Schedule />
      {/* <h1>{intl.formatMessage({ id: 'homeCarouselTitle1' })}</h1> */}
      <HoverImageComponent />
      <BmiCalculator />
    </main>
    <Footer />
    </IntlProvider>
    </>
  );
}