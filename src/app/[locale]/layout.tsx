import React from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import QueryProvider from '@/components/common/QueryProvider';
import MainHeader from '@/components/common/MainHeader';
import Footer from '@/components/common/Footer';

function ContentLayout({ children }: { children: React.ReactNode }) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <QueryProvider>
        <MainHeader />
        <main className="flex-grow flex justify-center w-full">{children}</main>
        <Footer />
      </QueryProvider>
    </NextIntlClientProvider>
  );
}

export default ContentLayout;
