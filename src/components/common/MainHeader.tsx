'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Button from './Button';
import DarkIcon from '../icons/DarkIcon';
import useDarkMode from '@/hook/useDarkMode';
import LightIcon from '../icons/LightIcon';
import Link from 'next/link';

function MainHeader() {
  const { isDarkMode, toggleTheme } = useDarkMode();
  const t = useTranslations('Index');
  return (
    <div className="w-full flex items-center justify-center mt-[31px]">
      <div className="md:w-1/2 w-full flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl leading-9 dark:text-white">
            gitsearch
          </h1>
        </Link>
        {!isDarkMode ? (
          <Button
            className="font-bold text-sm tracking-[2.5px] leading-4 uppercase"
            rightIcon={<DarkIcon className="w-4 h-4" />}
            onClick={toggleTheme}
          >
            {t('darkMode')}
          </Button>
        ) : (
          <Button
            className="font-bold text-sm text-white tracking-[2.5px] leading-4 uppercase"
            rightIcon={<LightIcon className="w-4 h-4" />}
            onClick={toggleTheme}
          >
            {t('lightMode')}
          </Button>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
