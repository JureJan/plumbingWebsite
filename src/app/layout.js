// src/app/layout.js

"use client"; // Marking as a client component

import { Roboto_Serif } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

// Load Roboto Serif font
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoSerif.className}>
      <body>
        <Navbar />
        {children} {/* Main content */}
        <Footer />
      </body>
    </html>
  );
}
