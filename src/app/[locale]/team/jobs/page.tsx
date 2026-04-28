import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import JobsList from '@/src/components/JobsList';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('Jobs');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function JobsPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Jobs');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/locations.png"
        cta={t('cta')}
        target="#jobs"
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
            <p>{t('p-5')}</p>
          </div>
        </div>
      </section>
      <section id="jobs" className="section-alternative">
        <div className="content">
          <span className="tag">{t('jobs-tag')}</span>
          <h2>{t('jobs-h2')}</h2>
          <div style={{ height: '2.5rem' }} />
          <JobsList />
        </div>
      </section>
    </main>
  );
}
