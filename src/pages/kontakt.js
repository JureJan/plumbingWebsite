"use client";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import "../styles/kontakt.css";
import ImageCarousel from "../app/components/imageCarousel";


export default function Kontakt() {
  const titles = [
    {title:"Najboljše kontakte za tvoje cilje", text:"Najdi najboljše ponudbe prilagojene tvojim potrebam."}, 
    {title:"test", text: "trest2"},
    {title:"tfdest", text: "tredfst2"},
    {title:"jdfjdf", text:"sdfsd"}];
    //const intl = useIntl();
  return (
    <>
      <Navbar />
      <div className="carouselOverlayWrapper">
        <ImageCarousel text={titles} />
      </div>

      <main className="contact-page">
        {/* Contact Header Section */}
        <section className="contact-header">
          <h1>Kontakt</h1>
          <p>
            MAXXGYM Ljubljana, Dunajska cesta 270, 1000 Ljubljana
          </p>
          <p>
            Telefon: <a href="tel:+38659041900">0590 41 900</a> | Email:{" "}
            <a href="mailto:info@maxxgym.si">info@maxxgym.si</a>
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <h2>Prijavi se na MAXXGYM novice</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Ime in Priimek*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Naslov*" required />
            </div>
            <button type="submit" className="submit-button">
              Prijava
            </button>
          </form>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h2>Kje nas najdete?</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.7056391447286!2d14.516582176026992!3d46.09684459100629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532de74794911%3A0xefec253f7062f643!2sMAXXGYM%20Ljubljana!5e0!3m2!1sen!2ssi!4v1734949388134!5m2!1sen!2ssi"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
