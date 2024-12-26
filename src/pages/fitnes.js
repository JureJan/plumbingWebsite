"use client"; // Marking this as a client component

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import "../styles/fitnes.css"; // Path to the page's CSS
import ImageCarousel from "../app/components/imageCarousel";
import CommentCarousel from "../app/components/commentCarousel"

export default function Fitnes() {
  const titles = [
    { title: "Najboljše cene za tvoje cilje", text: "Najdi najboljše ponudbe prilagojene tvojim potrebam." },
    { title: "Začnite že danes", text: "Dosezite svoje cilje z MaxxGym." },
    { title: "Prilagodljiv urnik", text: "Vadbe za vse starostne skupine." },
    { title: "Prilagodljiv urnik", text: "Vadbe za vse starostne skupine." },

  ];

  const sections = [
    {
      id: "section1",
      title: "Končno fitnes, ki ni nabito poln in nudi veliko možnosti za trening brez motenj in nepotrebnega čakanja",
      text: "Si sit prepolnih fitnes centrov katerih ne moreš nardit efektivnega treninga? Naveličan čakanja na naprave, ker spet nekdo na njej piše SMS? In iščeš prostor kje boš lahko brez motenj nardil trening? MAXXGYM je točno to kaj iščeš in daje ljudem kot si ti možnost okolja za odličen trening brez neprijetnih motenj.",
      image: "/images/fitnes1.png",
    },
     
    {
      id: "section2",
      title: "Premikamo meje tvoje zmogljivosti",
      text: "Pri MaxxGym ni čakanja na naprave in nepotrebnega izgubljanja časa. Omogočamo ti bolj efektivne treninge za dosego tvojih ciljev.",
      image: "/images/fitnes2.png",
    },
    {
      id: "section3",
      title: "Oprema, ki navdihuje",
      text: "Oprema najnovejše generacije, vrhunski trenerji in motivacijski programi te čakajo pri MaxxGym. Postani najboljša verzija sebe!",
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
        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className={`fitnes-section ${index % 2 === 0 ? "reverse" : ""}`}>
            <div className="fitnes-text">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              <button className="fitnes-button" onClick={handleScrollToForm}>
                PRIJAVI SE NA BREZPLAČNI POSVET
              </button>
            </div>
            <div className="fitnes-image">
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        ))}
       <CommentCarousel />
        {/* Sign-in Form Section */}
        <section id="form-section" className="fitnes-signin">
          <h2>Rezerviraj svojo brezplačno vstopnico</h2>
          <p>
            Izogni se običajnim napakam v fitnesu z našo pomočjo in nas 100% BREZPLAČNO
            preizkusi. Izpolni spodnji obrazec za svojo brezplačno vstopnico in nas čim prej obišči.
          </p>
          <form className="signin-form">
            <div className="form-group">
              <input type="text" placeholder="Ime in priimek*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Naslov*" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Telefonska številka*" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Stalni naslov*" required />
            </div>
            <button type="submit" className="form-submit">
              ZAHTEVAJ BREZPLAČNO VSTOPNICO
            </button>
            <p className="form-privacy">
              <span>🔒</span> Spoštujemo tvojo zasebnost in tvojih podatkov nikoli ne bomo delili
              s komer koli brez tvojega privolenja.
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
