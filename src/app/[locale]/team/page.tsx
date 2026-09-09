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
        backgroundPosition="center center 40%"
        headline={t('h1')}
        intro={t('intro')}
        image="/team/maril-ilpr-team-group.jpeg"
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
              <TeamCard
                bio={t('team-bio-1')}
                name="Semun Oguz"
                role={t('team-role-1')}
                image="/semun-oguz.png"
              />
              <TeamCard
                bio={t('team-bio-2')}
                name="Demir Bilal"
                role={t('team-role-2')}
                image="/team/demir-bilal.jpeg"
              />
              <TeamCard
                bio={t('team-bio-3')}
                name="Gülcin Yildiz"
                role={t('team-role-3')}
                image="/team/yildiz-guelcin.jpeg"
              />
              <TeamCard
                bio={t('team-bio-4')}
                name="Tülay Kücüklü"
                role={t('team-role-4')}
                image="/team/kuecueklue-tuelay.jpeg"
              />
              <TeamCard
                bio={t('team-bio-5')}
                name="Ahmet Parlak"
                role={t('team-role-5')}
                image="/team/parlak-ahmat.jpeg"
              />
              <TeamCard
                bio={t('team-bio-6')}
                name="Orhan Kilicoglu"
                role={t('team-role-6')}
                image="/team/kilicoglu-orhan.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
