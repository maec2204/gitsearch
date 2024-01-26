import React from 'react';
import { Repository } from '@/model';
import { useTranslations } from 'next-intl';
import RepositoryStatistic from './RepositoryStatistic';
import Link from 'next/link';
import ArrowBackIcon from '../icons/ArrowBackIcon';

interface RepositoryCardProps {
  data: Repository[] | { message: string; documentation_url: string };
}

function RepositoryCard({ data }: RepositoryCardProps) {
  const t = useTranslations('Index');

  if ('message' in data) {
    return (
      <div className="md:w-1/2 w-full h-full flex-col bg-white dark:bg-semiDark dark:text-white shadow-md rounded-xl mt-10 p-8 pb-12 flex justify-center items-center">
        <div className="w-full flex justify-end items-center">
          <Link
            href={'/'}
            className="flex justify-start items-center w-auto underline text-electric/80"
          >
            <ArrowBackIcon className="w-4 h-4 cursor-pointer" />
            <span className="text-sm font-medium ml-2 cursor-pointer">
              {t('goBackToSearch')}
            </span>
          </Link>
        </div>
        <div>{t('errorBoundary', { message: data.message })}</div>
      </div>
    );
  }

  if (Array.isArray(data) && data.length === 0) {
    return (
      <div className="md:w-1/2 w-full h-full flex-col bg-white dark:bg-semiDark dark:text-white shadow-md rounded-xl mt-10 p-8 pb-12 flex justify-center items-center">
        <div className="w-full flex justify-end items-center">
          <Link
            href={'/'}
            className="flex justify-start items-center w-auto underline text-electric/80"
          >
            <ArrowBackIcon className="w-4 h-4 cursor-pointer" />
            <span className="text-sm font-medium ml-2 cursor-pointer">
              {t('goBackToSearch')}
            </span>
          </Link>
        </div>
        <div>{t('noRepositories')}</div>
      </div>
    );
  }

  return (
    <div className="md:w-1/2 w-full h-full bg-white dark:bg-semiDark shadow-md rounded-xl mt-10 p-8 pb-12">
      <div className="w-full flex justify-end items-center">
        <Link
          href={'/'}
          className="flex justify-start items-center w-auto underline text-electric/80"
        >
          <ArrowBackIcon className="w-4 h-4 cursor-pointer" />
          <span className="text-sm font-medium ml-2 cursor-pointer">
            {t('goBackToSearch')}
          </span>
        </Link>
      </div>
      {data.map((repo) => (
        <div key={repo.id} className="mb-6">
          <h2 className="font-bold text-lg leading-6 text-darkBlue dark:text-white capitalize">
            {repo.name}
          </h2>
          <a
            href={`https://github.com/${repo.full_name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal no-underline text-sm leading-5 text-electric dark:text-electric"
          >
            {repo.full_name}
          </a>
          <p className="font-normal text-sm leading-5 text-newGray mt-2">
            {repo.description}
          </p>
          <div className="w-full rounded-md h-20 flex justify-center items-center bg-lightBg mt-6 space-x-8 dark:bg-dark">
            <RepositoryStatistic
              title={t('stars')}
              count={repo.stargazers_count}
            />
            <RepositoryStatistic title={t('forks')} count={repo.forks_count} />
            <RepositoryStatistic
              title={t('openIssues')}
              count={repo.open_issues_count}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RepositoryCard;
