"use client";

import { useRouter } from "next/navigation";
import ImageCarousel from "./components/imageCarousel";
import Schedule from "./components/schedule";
import HoverImageComponent from "./components/hoverImageComponent";
import BmiCalculator from "./components/bmicalculator";

export default function Home() {
  const titles = [
    { title: "Najboljše cene za tvoje cilje", text: "Najdi najboljše ponudbe prilagojene tvojim potrebam." },
    { title: "test", text: "trest2" },
    { title: "tfdest", text: "tredfst2" },
    { title: "jdfjdf", text: "sdfsd" },
  ];

  const router = useRouter();

  const navigateToFitness = () => {
    router.push("/fitnes");
  };

  return (
    <main>
      <ImageCarousel text={titles} handleButtonClick={navigateToFitness} />
      <div className="carouselOverlay">
        <h1></h1>
        <p></p>
      </div>
      <Schedule />
      <HoverImageComponent />
      <BmiCalculator />
    </main>
  );
}
