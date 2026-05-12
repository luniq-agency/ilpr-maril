import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Team');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function CsrPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('CSR');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/csr.png"
        cta={t('cta')}
        target="#werte"
      />
      <section className="section-with-image" id="werte">
        <div className="content-box-with-image">
          <div className="content-box-left">
            <div className="column" style={{ maxWidth: 800 }}>
              <h2>{t('h2')}</h2>
              <div style={{ height: '1.5rem' }} />
              <p>{t('p-1')}</p>
              <p>{t('p-2')}</p>
              <p>{t('p-3')}</p>
              <p>{t('p-4')}</p>
            </div>
          </div>
          <div className="image-container" style={{ width: '100%' }}>
            <Image
              src="/verantwortung-csr.jpg"
              fill={true}
              alt="Verantwortung"
              className="image-right"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
