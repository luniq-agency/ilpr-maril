import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PressKitRequest } from '@/src/components/ContactForm';
import { ButtonPrimary } from '@/src/components/Button';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('PressKit');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function PresskitPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('PressKit');
  return (
    <main>
      <section className="hero-section-single">
        <div style={{ height: '2rem' }} />
        <div className="content row mobile-column gap-l align-start" style={{ maxWidth: 1000 }}>
          <div className="column full-width">
            <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
            <p>{t('intro')}</p>
            <p>{t('intro-2')}</p>
            <ButtonPrimary text={t('cta-link')} target="/press/contact" size="small" />
            <div style={{ height: '2rem' }} />
          </div>
          <div style={{ width: '100%', maxWidth: 400 }}>
            <PressKitRequest />
          </div>
        </div>
      </section>
    </main>
  );
}
