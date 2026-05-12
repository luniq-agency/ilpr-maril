import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PressContactForm } from '@/src/components/ContactForm';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Press');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function PressPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Press');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/press.jpg"
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
            <p>{t('p-4')}</p>
            <div style={{ height: '1.5rem' }} />
            <PressContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
