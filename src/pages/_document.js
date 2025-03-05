// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import { i18n } from '../../next-i18next.config';
import GoogleAnalytics from '../app/components/googleAnalytics';


export default function Document() {

  console.log("ttt", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  return (
    <Html lang={i18n.defaultLocale}>
      <Head>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
        <meta charSet="UTF-8" />
        {/* Add other global head elements here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}