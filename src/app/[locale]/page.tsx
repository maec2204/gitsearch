import React from 'react';
import { getLocale } from 'next-intl/server';
import SearchSectionWrapper from '@/components/common/SearchSectionWrapper';

async function SearchUserPage() {
  const locale = await getLocale();
  return <SearchSectionWrapper locale={locale} />;
}

export default SearchUserPage;
