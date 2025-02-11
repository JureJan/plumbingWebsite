import { Html, Head, Main, NextScript } from 'next/document';
import { i18n } from '../../next-i18next.config.js';

export default function Document() {
  return (
    <Html lang={i18n.defaultLocale}>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
