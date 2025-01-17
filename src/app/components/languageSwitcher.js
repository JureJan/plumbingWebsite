import React from 'react';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lang) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, undefined, { locale: lang });
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>
      <button onClick={() => changeLanguage('it')}>Italiano</button>
      <button onClick={() => changeLanguage('sl')}>Slovenščina</button>
    </div>
  );
};

export default LanguageSwitcher;
