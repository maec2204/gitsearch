'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { GitUser } from '@/model';
import { octocat } from '@/static/octocat';
import { dateParser } from '@/util';
import Link from 'next/link';
import Loading from '../common/Loading';
import LocationIcon from '../icons/LocationIcon';
import LinkIcon from '../icons/LinkIcon';
import TwitterIcon from '../icons/TwitterIcon';
import CompanyIcon from '../icons/CompanyIcon';
import UserSocial from './UserSocial';
import ArrowNextIcon from '../icons/ArrowNextIcon';
import CameraIcon from '../icons/CameraIcon';

interface InfoCardProps {
  data?: GitUser | { message: string; documentation_url: string };
  isLoading: boolean;
  error: any;
  locale: string;
}

function InfoCard({ data = octocat, isLoading, error, locale }: InfoCardProps) {
  const t = useTranslations('Index');
  if ('message' in data) {
    return (
      <div className="w-full h-full bg-white dark:bg-semiDark shadow-md rounded-xl mt-10 p-8 pb-12 flex justify-center items-center dark:text-white">
        <div>{t('errorBoundary', { message: data.message })}</div>
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <div className="w-full h-full bg-white dark:bg-semiDark shadow-md rounded-xl mt-10 p-8 pb-12">
          <Loading />
        </div>
      ) : (
        <div className="w-full bg-white dark:bg-semiDark shadow-md rounded-xl mt-10 p-8 pb-12">
          <div className="w-full flex justify-end items-center">
            <Link
              href={`/${locale}/${data.login}`}
              className="flex justify-start items-center w-auto underline text-electric/80"
            >
              <span className="text-sm font-medium ml-2 cursor-pointer">
                {t('seeRepositories')}
              </span>
              <ArrowNextIcon className="w-4 h-4 cursor-pointer" />
            </Link>
          </div>
          <a
            href={data.avatar_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:block relative w-28 h-28"
          >
            <img
              alt="desktop-avatar"
              className="w-28 h-28 rounded-full group-hover:opacity-50 transition-opacity duration-200"
              src={data.avatar_url}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center w-full h-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <CameraIcon className="w-8 h-8" />
            </div>
          </a>
          <div className="w-full">
            <div className="flex items-center gap-5 w-full">
              <a
                href={data.avatar_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block md:hidden relative w-20 h-20"
              >
                <img
                  src={data.avatar_url}
                  alt="avatar"
                  className="w-20 rounded-full group-hover:opacity-50 transition-opacity duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center w-full h-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <CameraIcon className="w-8 h-8" />
                </div>
              </a>

              <div className="w-full">
                <div>
                  <h2 className="font-bold text-lg leading-6 text-darkBlue dark:text-white capitalize">
                    {data.name}
                  </h2>
                  <a
                    href={`https://github.com/${data.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-sm leading-5 text-electric dark:text-electric no-underline"
                  >
                    {data.login}
                  </a>
                </div>
                <p className="font-normal text-sm leading-5 text-newGray mt-2">
                  {dateParser(data.created_at, locale)}
                </p>
              </div>
            </div>
            <p className="font-normal text-sm leading-6 text-darkSky dark:text-white mt-8">
              {data.bio || t('noDescription')}
            </p>
            <div className="w-full rounded-md h-20 flex justify-center items-center bg-lightBg  mt-6 space-x-8 dark:bg-dark">
              <div className="text-center">
                <h3 className="font-normal text-xs leading-4 text-darkSky capitalize">
                  {t('repositories')}
                </h3>
                <h3 className="font-bold text-lg leading-6 mt-2 dark:text-white">
                  {data.public_repos}
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-normal text-xs leading-4 text-darkSky capitalize">
                  {t('followers')}
                </h3>
                <h3 className="font-bold text-lg leading-6 mt-2 dark:text-white">
                  {data.followers}
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-normal text-xs leading-4 text-darkSky capitalize">
                  {t('following')}
                </h3>
                <h3 className="font-bold text-lg leading-6 mt-2 dark:text-white">
                  {data.following}
                </h3>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:w-full">
              <UserSocial
                Icon={LocationIcon}
                text={data.location || t('noData')}
                iconClassName="w-3.5 h-5 dark:text-white"
                textClassName="font-normal text-sm leading-5 text-darkSky dark:text-white absolute top-0 left-8"
              />
              <UserSocial
                Icon={LinkIcon}
                text={data.blog || t('noData')}
                href="#"
                iconClassName="w-5 h-5 dark:text-white"
                textClassName="font-normal text-sm leading-5 text-darkSky dark:text-white absolute top-0 left-8 no-underline"
              />
              <UserSocial
                Icon={TwitterIcon}
                text={data.twitter_username || t('noData')}
                iconClassName="w-5 h-5 dark:text-white"
                textClassName="font-normal text-sm leading-5 text-darkSky dark:text-white absolute top-0 left-8"
              />
              <UserSocial
                Icon={CompanyIcon}
                text={data.company || t('noData')}
                iconClassName="w-5 h-5 dark:text-white"
                textClassName="font-normal text-sm leading-5 text-darkSky dark:text-white absolute top-0 left-8"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoCard;
