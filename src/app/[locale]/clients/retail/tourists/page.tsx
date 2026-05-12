import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Tourists');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function TouristsPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Tourists');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/tourists.png"
        cta={t('cta')}
        target="#team"
      />
      <section id="team">
        <div className="content">
          <div className="column" style={{ maxWidth: 800 }}>
            <h2>{t('h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            <p>{t('p-1')}</p>
            <p>{t('p-2')}</p>
            <p>{t('p-3')}</p>
            <p>{t('p-4')}</p>
            <p>{t('p-5')}</p>
            <p>{t('p-6')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
