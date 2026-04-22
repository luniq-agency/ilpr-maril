import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Timeline } from '@/src/components/ui/timeline';

const data = [
  {
    title: '2020',
    backgroundImage: `url("/maril-hotel.jpeg")`,
    content: (
      <div className="row gap-xl">
        <div className="column">
          <h2>Eröffnung</h2>
          <p>Das erste Maril Hotel wird in Didim, Türkei, eröffnet.</p>
          <p></p>
        </div>
      </div>
    ),
  },
  {
    title: '2026',
    backgroundImage: `url("/ilpr-maril-letter-head.png")`,
    content: (
      <div className="column gap-s">
        <h2>ILPR Maril</h2>
        <p>Die ILPR Maril wird gegründet.</p>
      </div>
    ),
  },
  {
    title: '2027',
    backgroundImage: `url("/maril-barrierefreies-resort.jpeg")`,
    content: (
      <div className="column">
        <h2>Neues Projekt</h2>
        <p>Die geplante Eröffnung für unser neues, barriefreies Resortin Didim.</p>
      </div>
    ),
  },
];
type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('History'); // z.B. messages/{locale}.json -> Meta.title / Meta.description

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function HistoryPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('History');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/history.jpg"
        cta={t('cta')}
        target="#historie"
      />
      <section style={{ padding: 0 }}>
        <Timeline data={data} />
      </section>
    </main>
  );
}
