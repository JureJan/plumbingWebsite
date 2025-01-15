'server-only';

import { createIntl } from '@formatjs/intl';

export default async function getIntl(locale) {
  return createIntl({
    locale: locale,
    messages: (await import(`../../.next/assets/lang/${locale}.json`)).default
  });
}