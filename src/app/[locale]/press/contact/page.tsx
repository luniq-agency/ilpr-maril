import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PressContactBox from '@/src/components/PressContactBox';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('PressContact');
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
  const t = await getTranslations('PressContact');
  return (
    <main>
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <div />
        <div className="content  gap-l" style={{ maxWidth: 1000 }}>
          <div className="column full-width">
            <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
            <span>{t('intro')}</span>
          </div>
          <div className="column full-width gap-l">
            <PressContactBox
              name={t('contact-1-name')}
              role={t('contact-1-role')}
              image={t('contact-1-image')}
              email={t('contact-1-email')}
            />
            <PressContactBox
              name={t('contact-2-name')}
              role={t('contact-2-role')}
              image={t('contact-2-image')}
              email={t('contact-2-email')}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
