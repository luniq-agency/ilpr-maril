import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import LocationCard from '@/src/components/LocationCard';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Locations');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function LocationsPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Locations');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/locations.png"
        cta={t('cta')}
        target="#locations"
      />
      <section id="locations">
        <div className="content max-w-1200">
          <span className="tag">{t('locations-tag')}</span>
          <h2>{t('locations-h2')}</h2>
          <div style={{ height: '3rem' }} />
          <div className="grid columns-three gap-l" style={{ gridTemplateRows: '1fr' }}>
            <LocationCard
              title={t('didim')}
              body={t('didim-about')}
              image="/locations/didim.jpg"
              delay={0.35}
            />
            <LocationCard
              title={t('nice')}
              body={t('nice-about')}
              image="/locations/nice.jpg"
              delay={0.75}
            />
            <LocationCard
              title={t('miami')}
              body={t('miami-about')}
              image="/locations/miami.jpg"
              delay={1.15}
            />
          </div>
        </div>
      </section>
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
    </main>
  );
}
