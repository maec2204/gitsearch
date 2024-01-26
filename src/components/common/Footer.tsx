import React from 'react';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('Index');
  return (
    <footer className="text-center text-darkBlue dark:text-white py-4 mt-8">
      <p>{t('copyright')}</p>
      <p>{t('createdBy', { user: 'maec220' })}</p>
      <a
        href="https://www.linkedin.com/in/moisesescudero/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-darkBlue dark:text-white underline"
      >
        LinkedIn
      </a>
    </footer>
  );
}

export default Footer;
