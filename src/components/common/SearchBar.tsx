import React, { ChangeEvent, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import SearchIcon from '../icons/SearchIcon';
import Button from './Button';

interface SearchBarProps {
  inputValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  inputValue,
  onInputChange,
  onSubmit,
}) => {
  const t = useTranslations('Index');

  return (
    <form
      className="px-2 py-3 w-full flex items-center bg-white dark:bg-semiDark mt-9 rounded-xl shadow-lg"
      onSubmit={onSubmit}
    >
      <SearchIcon className="w-9 h-9 text-blue-600" />
      <input
        type="text"
        name="gitUser"
        className="bg-transparent border-none focus:outline-none font-normal text-sm ml-2 w-full dark:text-white dark:placeholder-white placeholder-blue-400"
        placeholder={t('searchPlaceholder')}
        value={inputValue}
        onChange={onInputChange}
      />
      <Button
        type="submit"
        className="py-3 px-6 bg-blue-600 capitalize text-white font-bold text-base border-none ml-2 rounded-xl"
      >
        {t('search')}
      </Button>
    </form>
  );
};

export default SearchBar;
