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
  const t = await getTranslations('Groups');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function GroupsPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Groups');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/groups.png"
        cta={t('cta')}
        target="#about"
      />
      <section id="about">
        <div className="content" style={{ maxWidth: 800 }}>
          <div className="column">
            <h2>{t('h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            <p>{t('p-1')}</p>
            <p>{t('p-2')}</p>
            <p>{t('p-3')}</p>
            <p>{t('p-4')}</p>
            <p>{t('p-5')}</p>
            <div style={{ height: '1.5rem' }} />
            <div className="column gap-s">
              <LinkBlock text={t('link-vision')} target="/team/vision" />
              <LinkBlock text={t('link-contact')} target="/contact/" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
