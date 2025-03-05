// pages/_app.js
import { appWithTranslation } from "next-i18next";
import GoogleAnalytics from '../app/components/googleAnalytics';
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);