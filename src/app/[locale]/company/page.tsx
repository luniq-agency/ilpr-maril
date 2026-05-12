import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import LinkBlock from '@/src/components/LinkBlock';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Company');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function CompanyPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Company');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/ilpr-maril-letter-head.png"
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
            <p>{t('p-3')}</p>
            <div style={{ height: '1.5rem' }} />
            <div className="column gap-s">
              <LinkBlock text="Unsere Geschichte" target="/company/history" />
              <LinkBlock text="Unsere Vision" target="/team/vision" />
              <LinkBlock text="Jobs" target="/team/jobs" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-alternative">
        <div className="content" style={{ maxWidth: 800 }}>
          <div className="column">
            <h2>{t('approach-h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            <p>{t('approach-p-1')}</p>
            <p>{t('approach-p-2')}</p>
            <p>{t('approach-p-3')}</p>
            <p>{t('approach-p-4')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
