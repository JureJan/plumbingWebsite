"use client"; // Marking this as a client component

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import "../styles/osebni-trening.css"; // Path to the page's CSS
import Image from "next/image";
import ImageCarousel from "../app/components/imageCarousel";

export default function OsebniTrening() {
  const titles = [
    {title:"Najboljše cene za tvoje cilje", text:"Najdi najboljše ponudbe prilagojene tvojim potrebam."}, 
    {title:"test", text: "trest2"},
    {title:"tfdest", text: "tredfst2"},
    {title:"jdfjdf", text:"sdfsd"}];
    
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
        <ImageCarousel text={titles} />

      </div>
      <main>
        {/* Page Title */}
        <section className="page-title">
          <h1>Osebni Trening</h1>
          <p>Prijavi se na osebni trening in dosezi svoje cilje.</p>
        </section>

        {/* Repeatable Sections */}
        {[...Array(7)].map((_, index) => (
          <section key={index} className="training-section">
            <div className="section-content">
              <Image
                src={`/images/maxx-vadbe-${index + 1}.jpg`}
                alt={`Osebni Trening ${index + 1}`}
                width={80}
                height={80}
              />
              <h2>Program {index + 1}</h2>
              <p>
                Opis programa {index + 1}. Tukaj lahko dodate podrobnosti o programu, kako poteka,
                kaj vključuje in komu je namenjen.
              </p>
            </div>

            {/* Button to Scroll to Form */}
            <button className="section-button" onClick={handleScrollToForm}>
              PRIJAVI SE NA BREZPLAČNI POSVET
            </button>
          </section>
        ))}

        {/* Sign-up Form Section */}
        <section id="form-section" className="form-section">
          <h2>PRIJAVI SE NA BREZPLAČNI POSVET</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Ime in Priimek*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Naslov*" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Telefonska Številka*" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Povej nam nekaj o sebi*" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              PRIJAVI SE NA BREZPLAČNI POSVET
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
