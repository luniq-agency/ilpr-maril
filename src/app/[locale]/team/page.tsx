import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { TeamCard } from '@/src/components/TeamCard';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Team');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Team');
  const paragraphs = t.raw('paragraphs') as string[];

  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/team.webp"
        cta={t('cta')}
        target="#team"
      />
      <section id="team">
        <div className="content max-w-1000">
          <div className="column">
            <h2>{t('intro-h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div style={{ height: '3rem' }} />
            <div className="column align-center">
              <span className="tag">{t('team-tag')}</span>
              <h2 style={{ textAlign: 'center' }}>{t('team-h2')}</h2>
            </div>
            <div style={{ height: '3rem' }} />
            <div className="grid columns-three gap-xl">
              <TeamCard name="Semun Oguz" role="CEO" image="/semun-oguz.png" />
              <TeamCard name="Semun Oguz" role="CEO" image="/semun-oguz.png" />
              <TeamCard name="Semun Oguz" role="CEO" image="/semun-oguz.png" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
