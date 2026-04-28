import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { TeamCard } from '@/src/components/TeamCard';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('PrivacyPolicy');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('PrivacyPolicy');
  return (
    <main>
      <section style={{ paddingTop: '10rem' }}>
        <div className="content align-left">
          <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
        </div>
      </section>
    </main>
  );
}
