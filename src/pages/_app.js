// pages/_app.js
import { appWithTranslation } from "next-i18next";
import GoogleAnalytics from '../app/components/googleAnalytics';
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);