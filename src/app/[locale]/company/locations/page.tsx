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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
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
      <section>
        <div className="content">
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
      <section id="locations">
        <div className="content">
          <h2>{t('locations-h2')}</h2>
          <div style={{ height: '1.5rem' }} />
          <div className="grid columns-three gap-l">
            <LocationCard title={t('didim')} body={t('didim-about')} image="" />
            <LocationCard title={t('nice')} body={t('nice-about')} image="" />
            <LocationCard title={t('miami')} body={t('miami-about')} image="" />
          </div>
        </div>
      </section>
    </main>
  );
}
