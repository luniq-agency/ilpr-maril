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
  const t = await getTranslations('Buyers');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function BuyersPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Buyers');
  const paragraphs = t.raw('paragraphs') as string[];

  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/real-estate-buyers.png"
        cta={t('cta')}
        target="#team"
      />
      <section id="team">
        <div className="content" style={{ maxWidth: 800 }}>
          <div className="column">
            <h2>{t('h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
