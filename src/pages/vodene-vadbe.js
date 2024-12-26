"use client"; // Marking this as a client component

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Schedule from "../app/components/schedule"; // Import the Schedule component
import ImageCarousel from "../app/components/imageCarousel";
import "../styles/vodene-vadbe.css"; // Path to the page's CSS
import Image from "next/image";

export default function VodeneVadbe() {
  const titles = [
    { title: "Najboljše cene za tvoje cilje", text: "Najdi najboljše ponudbe prilagojene tvojim potrebam." },
    { title: "Začnite že danes", text: "Dosezite svoje cilje z MaxxGym." },
    { title: "Prilagodljiv urnik", text: "Vadbe za vse starostne skupine." },
  ];

  const programs = [
    {
      id: "cardio",
      title: "Les Mills Grit CARDIO",
      description: "Les Mills GRIT Cardio je 30-minutni visoko-intenzivni intervalni trening (HIIT).",
      benefits: [
        "Povečana srčno-žilna kapaciteta.",
        "Maksimalna poraba kalorij.",
        "Dvig anaerobnega praga.",
        "Super trening za izboljšanje postave.",
      ],
      videoLink: "https://www.youtube.com/embed/JWaZk-lZ_iY",
      image: "/images/maxxCardio.jpg",
    },
    {
      id: "bodypump",
      title: "Les Mills Grit BODYPUMP",
      description: "Program za povečanje moči in oblikovanje mišične mase z utežmi.",
      benefits: [
        "Povečanje mišične mase.",
        "Boljša kondicija.",
        "Tehnike dviganja uteži.",
      ],
      videoLink: "https://www.youtube.com/embed/RSZqko1s0f8",
      image: "/images/maxxBodyPump.jpg",
    },
    {
      id: "bodystep",
      title: "Les Mills Grit BODYSTEP",
      description: "Aerobni trening s stopnicami za izboljšanje koordinacije in kondicije.",
      benefits: [
        "Izboljšanje koordinacije.",
        "Boljša aerobna kondicija.",
        "Zabaven način vadbe.",
      ],
      videoLink: "https://www.youtube.com/embed/h0YpmnVN5Pk",
      image: "/images/maxxBodyStep.jpg",
    },
    {
      id: "bodyattack",
      title: "Les Mills Grit BODYATTACK",
      description: "Intenziven kardio trening z elementi gibanja in eksplozivnih vaj.",
      benefits: [
        "Povečanje eksplozivnosti.",
        "Izboljšanje koordinacije.",
        "Intenziven kardio trening.",
      ],
      videoLink: "https://www.youtube.com/embed/7VAChqy78oc",
      image: "/images/maxxBodyattack.jpg",
    },
    {
      id: "bootcamp",
      title: "Les Mills Grit BOOTCAMP",
      description: "Skupinski trening za celostno izboljšanje moči in kondicije.",
      benefits: [
        "Celostno izboljšanje kondicije.",
        "Zabavna skupinska vadba.",
        "Izboljšanje vzdržljivosti.",
      ],
      image: "/images/maxxBootcamp.jpg",
    },

    {
      id: "pilates",
      title: "Pilates",
      description: "Pilates je vadba za izboljšanje drže, fleksibilnosti in moči jedra.",
      benefits: [
        "Boljša telesna drža.",
        "Izboljšana fleksibilnost.",
        "Krepitev jedra.",
      ],
      image: "/images/maxxPilates.jpg",
    },
  ];

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

  return (
    <>
      <Navbar />
      <div id="imageCarousel" className="carouselOverlayWrapper">
        <ImageCarousel text={titles} />
      </div>
      <main>
        {/* Schedule Section */}
        <section className="schedule-section">
          <Schedule />
        </section>

        {/* Logos Section */}
        <section className="logos-section">
          <h2>NAŠE VODENE VADBE</h2>
          <div className="logos-container">
            {[
              "cardio",
              "bodypump",
              "bodystep",
              "bodyattack",
              "pilates",
              "imageCarousel",
              "bootcamp",
              "imageCarousel",
              "imageCarousel",
            ].map((id, index) => (
              <button
                key={index}
                className="logo-button"
                onClick={() => handleScroll(id)}
              >
                <Image
                  src={`/images/maxx-vadbe-${index + 1}.jpg`}
                  alt={`Logo ${index + 1}`}
                  width={80}
                  height={80}
                />
              </button>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="programs-section">
          {programs.map((program) => (
            <div key={program.id} id={program.id} className="program-card">
              <Image src={program.image} alt={program.title} width={800} height={400} />
              <div className="text-content">
                <div className="left-text">
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
                <ul className="right-list">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              {program.videoLink && (
                <div className="video-container">
                  <iframe
                    src={program.videoLink}
                    title={program.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <button className="section-button" onClick={handleScrollToForm}>
                PRIJAVI SE NA BREZPLAČNI POSVET
              </button>
            </div>
          ))}
        </section>

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
              PRIJAVI SE
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
