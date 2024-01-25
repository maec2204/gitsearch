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

interface InfoCardProps {
  data?: GitUser;
  isLoading: boolean;
  error: any;
  locale: string;
}

function InfoCard({ data = octocat, isLoading, error, locale }: InfoCardProps) {
  const t = useTranslations('Index');
  return (
    <>
      {isLoading ? (
        <div className="w-full h-full bg-white shadow-md rounded-xl mt-10 p-8 pb-12">
          <Loading />
        </div>
      ) : (
        <div className="w-full bg-white shadow-md rounded-xl mt-10 p-8 pb-12">
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
          <img
            alt="desktop-avatar"
            className="hidden w-28 h-28 rounded-full md:block"
            src={data.avatar_url}
          />
          <div className="w-full">
            <div className="flex items-center gap-5">
              <img
                src={data.avatar_url}
                alt="avatar"
                className="w-16 h-16 rounded-full md:hidden"
              />
              <div className="w-full">
                <div>
                  <h2 className="font-bold text-lg leading-6 text-darkBlue capitalize">
                    {data.name}
                  </h2>
                  <h3 className="font-normal text-sm leading-5 text-electric dark:text-electric">
                    {data.login}
                  </h3>
                </div>
                <p className="font-normal text-sm leading-5 text-newGray mt-2">
                  {dateParser(data.created_at)}
                </p>
              </div>
            </div>
            <p className="font-normal text-sm leading-6  mt-8">{data.bio}</p>
            <div className="w-full rounded-md h-20 flex justify-center items-center bg-lightBg  mt-6 space-x-8 dark:bg-dark">
              <div className="text-center">
                <h3 className="font-normal text-xs leading-4 text-darkSky capitalize">
                  {t('repositories')}
                </h3>
                <h3 className="font-bold text-lg leading-6 mt-2">
                  {data.public_repos}
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-normal text-xs leading-4 text-darkSky capitalize">
                  {t('followers')}
                </h3>
                <h3 className="font-bold text-lg leading-6 mt-2">
                  {data.followers}
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-normal text-xs leading-4 text-darkSky capitalize">
                  {t('following')}
                </h3>
                <h3 className="font-bold text-lg leading-6 mt-2">
                  {data.following}
                </h3>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:w-full">
              <UserSocial
                Icon={LocationIcon}
                text={data.location}
                iconClassName="w-3.5 h-5"
                textClassName="font-normal text-sm leading-5 text-darkSky absolute top-0 left-8"
              />
              <UserSocial
                Icon={LinkIcon}
                text={data.blog}
                href="#"
                iconClassName="w-5 h-5"
                textClassName="font-normal text-sm leading-5 text-darkSky absolute top-0 left-8 no-underline"
              />
              <UserSocial
                Icon={TwitterIcon}
                text={data.twitter_username || ''}
                iconClassName="w-5 h-5"
                textClassName="font-normal text-sm leading-5 text-darkSky absolute top-0 left-8"
              />
              <UserSocial
                Icon={CompanyIcon}
                text={data.company}
                iconClassName="w-5 h-5"
                textClassName="font-normal text-sm leading-5 text-darkSky absolute top-0 left-8"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoCard;
