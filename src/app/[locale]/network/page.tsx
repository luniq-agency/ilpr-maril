import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PartnerCard } from '@/src/components/PartnerCard';

const partners = [
  {
    src: '/partners/woxxgroup.png',
    alt: 'WoxxGroup',
    body: '',
    href: 'https://www.woxxgroup.com/en/markalarimiz/travel',
    inverted: true,
  },
  {
    src: '/partners/booking.svg',
    alt: 'Booking.com',
    body: '',
    href: 'https://booking.com',
  },
  {
    src: '/partners/izmir-airport.png',
    alt: 'Izmir Airport',
    body: '',
    href: 'https://izmirairport.com/ ',
  },
  {
    src: '/partners/hotels-com.svg',
    alt: 'Hotels.com',
    body: '',
    href: 'https://hotels.com',
  },
  {
    src: '/partners/agoda.svg',
    alt: 'Agoda',
    body: '',
    href: '',
  },
  {
    src: '/partners/alltours.svg',
    alt: 'Alltours',
    body: '',
    href: '',
  },
  {
    src: '/partners/otelz.svg',
    alt: 'Otelz',
    body: '',
    href: '',
  },
  {
    src: '/partners/tui.svg',
    alt: 'TUI',
    body: '',
    href: '',
  },
  {
    src: '/partners/12-travel.svg',
    alt: '12 Travel',
    body: '',
    href: '',
  },
];

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Network');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function NetworkPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Network');

  return (
    <main style={{ minHeight: '100vh' }}>
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <div />
        <div className="content  gap-l" style={{ maxWidth: 1000 }}>
          <div className="column full-width">
            <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
            <span>{t('intro')}</span>
            <div style={{ height: '3rem' }} />
            <div className="grid columns-three gap-l">
              {partners.map((p, i) => (
                <PartnerCard
                  body={p.body}
                  key={i}
                  image={p.src}
                  title={p.alt}
                  href={p.href}
                  inverted={p.inverted}
                  solid={true}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
