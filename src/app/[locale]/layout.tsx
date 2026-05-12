import type { Metadata } from 'next';
import LenisProvider from '@/src/components/LenisProvider';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { getMessages, setRequestLocale } from 'next-intl/server';
import '../globals.css';
import ConditionalLayout from '@/src/components/ConditionalLayout';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'ILPR Maril',
  description: 'ILPR Maril',
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LenisProvider>
            <ConditionalLayout>{children}</ConditionalLayout>
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
