import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { ButtonSecondary } from '../../components/Button';
import type { Metadata } from 'next';
import { TabView, TabPanel } from 'primereact/tabview';
import NewsList from '@/src/components/NewsList';
import Quote from '@/src/components/Quote';
import LocationsMap from '@/src/components/LocationsMap';
import { ProjectCard } from '@/src/components/Card';
import LogoLoop from '@/src/components/LogoLoop';
import Image from 'next/image';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return [
    { locale: 'de' },
    {
      /*{ locale: 'en' },*/
    },
  ];
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Home');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

const logos = [
  {
    src: '/partners/expedia.svg',
    alt: 'Expedia',
    href: '',
  },
  {
    src: '/partners/check-24.svg',
    alt: 'Check24',
    href: '',
  },
  {
    src: '/partners/trivago.svg',
    alt: 'Trivago',
    href: '',
  },
  {
    src: '/partners/hotels-com.svg',
    alt: 'Hotels.com',
    href: 'https://hotels.com',
  },
  {
    src: '/partners/agoda.svg',
    alt: 'Agoda',
    href: '',
  },
  {
    src: '/partners/alltours.svg',
    alt: 'Alltours',
    href: '',
  },
  {
    src: '/partners/otelz.svg',
    alt: 'Otelz',
    href: '',
  },
  {
    src: '/partners/tui.svg',
    alt: 'TUI',
    href: '',
  },
  {
    src: '/partners/12-travel.svg',
    alt: '12 Travel',
    href: '',
  },
];

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Home');

  const bgImage = `url("/maril-ilpr-home-hero.png")`;

  const projects = [
    {
      label: t('apartments'),
      image: '/maril-hotel.jpeg',
      body: t('apartments-location'),
    },
    {
      label: t('old-town'),
      image: '/maril-hotel.jpeg',
      body: t('old-town-location'),
    },
    {
      label: t('hotel-maril'),
      image: '/maril-hotel.jpeg',
      body: t('hotel-maril-location'),
    },
    {
      label: t('new-resort'),
      image: '/maril-hotel.jpeg',
      body: t('new-resort-location'),
    },
    {
      label: t('nice-resort'),
      image: '/maril-hotel.jpeg',
      body: t('nice-resort-location'),
    },
    {
      label: t('miami-resort'),
      image: '/maril-hotel.jpeg',
      body: t('miami-location'),
    },
  ];

  return (
    <main>
      <section className="section-hero" style={{ minHeight: '100vh', backgroundImage: bgImage }}>
        <h1 style={{ color: 'white', zIndex: 4 }}>{t('h1')}</h1>
        <span className="intro" style={{ color: 'white', zIndex: 4 }}>
          {t('subheadline')}
        </span>
        <div style={{ height: '2rem' }} />
        <div style={{ zIndex: 4 }}>
          <ButtonSecondary text={t('hero-cta')} target="#vision" size="large" />
        </div>
      </section>
      <section id="about">
        <div className="content">
          <span className="tag">{t('intro-tag')}</span>
          <h2>{t('intro-h2')}</h2>
          <div style={{ height: '1rem' }} />
          <span className="body-l" style={{ maxWidth: 640, textAlign: 'center' }}>
            {t('intro-text')}
          </span>
        </div>
        <div className="spacer-xl" />
        <TabView style={{ maxWidth: 800 }}>
          <TabPanel header={t('tab-1-label')}>
            <LocationsMap />
          </TabPanel>
          <TabPanel header={t('tab-2-label')}>
            <div className="column gap-m loop-container">
              <LogoLoop logos={logos} logoHeight={40} />
              <LogoLoop logos={logos} logoHeight={40} direction="right" />
              <LogoLoop logos={logos} logoHeight={40} />
              <div className="loop-container-left" />
              <div className="loop-container-right" />
            </div>
          </TabPanel>
          <TabPanel header={t('tab-3-label')}>
            <Image src="/village-people.jpeg" alt="Maril Team" width={900} height={600} />
          </TabPanel>
        </TabView>
      </section>
      <section className="section-alternative" id="vision">
        <div className="content">
          <span className="tag">{t('vision-tag')}</span>
          <span className="quote" style={{ maxWidth: 760, fontSize: '2rem' }}>
            {t('vision-h2')}
          </span>
          <div className="spacer-l" />
          <ButtonSecondary text={t('vision-cta')} target="/team/vision" size="large" />
        </div>
      </section>
      {/*
      <section>
        <div className="content align-left">
          <span className="tag">{t('commitment-tag')}</span>
          <h2>{t('commitment-h2')}</h2>
          <div style={{ height: 32 }} />
          <span className="text-columns">{t('commitment-body')}</span>
        </div>
      </section>
      */}
      <section>
        <div className="content">
          <span className="tag">{t('projects-tag')}</span>
          <h2>{t('projects-h2')}</h2>
          <div style={{ height: '4rem' }} />
          <div className="grid columns-four gap-l">
            {projects.map((p, i) => (
              <ProjectCard key={i} title={p.label} image={p.image} body={p.body} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="content row gap-xl mobile-column" style={{ maxWidth: 1000 }}>
          <Image
            src="/semun-oguz.png"
            alt="Ein Bild zeigt Semun Oguz"
            height={500}
            width={400}
            style={{
              width: '100%',
              maxWidth: 400,
              aspectRatio: '4/5',
              border: '1px solid var(--accent)',
            }}
          />
          <div className="column">
            <Quote text={t('quote-body')} />
            <span className="quote-author">Semun Oguz</span>
            <span>{t('quote-role')}</span>
          </div>
        </div>
      </section>
      <section className="section-alternative">
        <div className="content">
          <span className="tag">{t('news-tag')}</span>
          <h2>{t('news-h2')}</h2>
          <div style={{ height: 32 }} />
          <NewsList />
        </div>
      </section>
    </main>
  );
}
