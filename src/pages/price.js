"use client";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import ImageCarousel from "../app/components/imageCarousel";
import "../styles/price.css";

export default function Price() {
  const titles = [
    {title:"Najboljše cene za tvoje cilje", text:"Najdi najboljše ponudbe prilagojene tvojim potrebam."}, 
    {title:"testcena", text: "trest2cena"},
    {title:"tfdestce", text: "tredfst2ce"},
    {title:"jdfjdf", text:"sdfsd"}];
  return (
    <>
      <Navbar />
      <div className="carouselOverlayWrapper">
        <ImageCarousel text={titles} />


      </div>
      <main>
        {/* Upper container */}
        <section className="upper-container">
          <img src="/images/price1.png" alt="Descriptive Alt Text" className="responsive-image" />
          <h1>MaxxGym</h1>
          <p>Find the best deals tailored to your needs.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
