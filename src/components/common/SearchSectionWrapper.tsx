'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { useQuery } from 'react-query';
import { fetchUser } from '@/app/actions';
import { GitUser } from '@/model';
import SearchBar from './SearchBar';
import InfoCard from '../user/InfoCard';

interface SectionWrapperProps {
  locale: string;
}

function SectionWrapper({ locale }: SectionWrapperProps) {
  const t = useTranslations('Index');
  const [inputValue, setInputValue] = React.useState<string>('');
  const { data, isLoading, error, refetch } = useQuery<GitUser>(
    ['user', inputValue],
    () => fetchUser(inputValue),
    {
      enabled: false,
    }
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
    console.log(data);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return error ? (
    <div className="mt-2 text-red-500">{t('fetchError')}</div>
  ) : (
    <div className="md:w-1/2 w-full h-full">
      <SearchBar
        inputValue={inputValue}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      <InfoCard data={data} isLoading={isLoading} error={error} locale={locale} />
    </div>
  );
}

export default SectionWrapper;
