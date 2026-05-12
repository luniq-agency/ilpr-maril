import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ButtonPrimary } from '@/src/components/Button';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('BusinessModel');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function BusinessModelPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('BusinessModel');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/business-model.jpg"
        cta={t('cta')}
        target="#historie"
      />
      <section>
        <div className="content max-w-800">
          <div className="column">
            <h2>{t('h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            <p>{t('p-1')}</p>
            <p>{t('p-2')}</p>
            <p>{t('p-3')}</p>
            <p>{t('p-4')}</p>
            <div style={{ height: '1rem' }} />
            <ButtonPrimary text={t('cta-1')} target="/contact" size="medium" />
          </div>
        </div>
      </section>
    </main>
  );
}
