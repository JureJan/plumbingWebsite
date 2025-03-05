// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import { i18n } from '../../next-i18next.config';
import GoogleAnalytics from '../app/components/googleAnalytics';


export default function Document() {

  console.log("ttt", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  return (
    <Html lang={i18n.defaultLocale}>
      <Head>
      {/* {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )} */}
          <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
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