'use client';

import { Roboto_Serif } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import { usePathname } from 'next/navigation';
import en from "../../.next/assets/lang/en.json";
import sl from "../../.next/assets/lang/sl.json";
import de from "../../.next/assets/lang/de.json";
import it from "../../.next/assets/lang/it.json";
import { IntlProvider } from 'react-intl';
import ServerIntlProvider from '../components/ServerIntlProvider';


const messages = {
  en,
  sl,
  de,
  it,
};
//const intl = await useIntl(locale, 'home');
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const getLocaleFromPathname = (pathname) => {
  const segments = pathname.split('/');
  return segments[1] && ["en", "sl", "de", "it"].includes(segments[1]) ? segments[1] : "sl"; // Default to 'sl'
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  console.log("asdasdsad")
  return (
    <html lang={locale} className={robotoSerif.className}>
      <body>
      <IntlProvider messages={messages} locale={locale}>
          {children}
          </IntlProvider>

      </body>
    </html>
  );
}
