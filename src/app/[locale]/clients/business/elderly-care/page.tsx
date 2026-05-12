import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { ButtonPrimary } from '@/src/components/Button';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ElderlyCare');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function ElderlyCarePage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('ElderlyCare');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/elderly-care.png"
        cta={t('cta')}
        target="#team"
      />
      <section id="team">
        <div className="content" style={{ maxWidth: 800 }}>
          <div className="column">
            <h2>{t('h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            <p>{t('p-1')}</p>
            <p>{t('p-2')}</p>
            <div style={{ height: '1rem' }} />
            <ButtonPrimary text={t('cta-2')} target="/contact" size="medium" />
          </div>
        </div>
      </section>
    </main>
  );
}
