import React from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import QueryProvider from '@/components/common/QueryProvider';
import MainHeader from '@/components/common/MainHeader';

function ContentLayout({ children }: { children: React.ReactNode }) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <QueryProvider>
        <MainHeader />
        {children}
      </QueryProvider>
    </NextIntlClientProvider>
  );
}

export default ContentLayout;
