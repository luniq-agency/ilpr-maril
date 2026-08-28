import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { TeamCard } from '@/src/components/TeamCard';
import ResearchCard from '@/src/components/research/ResearchCard';
import Column from '@/src/components/layout/Column';
import Grid from '@/src/components/layout/Grid';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ScientificResearch');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function ScientificResearchPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('ScientificResearch');
  const paragraphs = t.raw('paragraphs') as string[];

  return (
    <main>
      <HeroSection
        backgroundPosition="center center 40%"
        headline={t('h1')}
        intro={t('intro')}
        image="/team/maril-ilpr-team-group.jpeg"
        cta={t('cta')}
        target="#research"
      />
      <section id="research">
        <div className="content max-w-1000">
          <div className="column">
            <h2>{t('intro-h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div style={{ height: '3rem' }} />
            <div className="column align-center">
              <span className="tag">{t('tag')}</span>
              <h2 style={{ textAlign: 'center' }}>{t('h2')}</h2>
            </div>
            <div style={{ height: '3rem' }} />
            <Column gap={64}>
              <Column>
                <h3>{t('category-1-name')}</h3>
                <Grid columns={3}>
                  <ResearchCard
                    author="Bhasker Amatya, Fary Khan"
                    headline={t('paper-1-name')}
                    thumbnail="/banks.jpg"
                  />
                  <ResearchCard
                    author="Michele Antonelli, Davide Donelli"
                    headline={t('paper-2-name')}
                    thumbnail="/banks.jpg"
                  />
                </Grid>
              </Column>
              <Column>
                <h3>{t('category-2-name')}</h3>
                <Grid columns={3}>
                  <ResearchCard
                    author="Carmela Protano, Mario Fontana, Andrea De Giorgi, et al."
                    headline={t('paper-3-name')}
                    thumbnail="/banks.jpg"
                  />
                  <ResearchCard
                    author="P. L. Bernard, G. Ninot, N. Raffort, B. Aliaga et al."
                    headline={t('paper-4-name')}
                    thumbnail="/banks.jpg"
                  />
                </Grid>
              </Column>
              <Column>
                <h3>{t('category-3-name')}</h3>
                <Grid columns={3}>
                  <ResearchCard
                    author="Emanuela Resta, Madia Lozupone, Preethymol Peter, Lucia Brunone et al."
                    headline={t('paper-5-name')}
                    thumbnail="/banks.jpg"
                  />
                  <ResearchCard
                    author="Elisabetta Ferrara, Manela Scaramuzzino, Giovanna Murmura, Gianmaria D'Addazio, Bruna Sinjari"
                    headline={t('paper-6-name')}
                    thumbnail="/banks.jpg"
                  />
                </Grid>
              </Column>
              <Column>
                <h3>{t('category-4-name')}</h3>
                <Grid columns={3}>
                  <ResearchCard
                    author="GEKA"
                    headline={t('paper-7-name')}
                    thumbnail="/banks.jpg"
                  />
                  <ResearchCard
                    author="Günal Bilek"
                    headline={t('paper-8-name')}
                    thumbnail="/banks.jpg"
                  />
                </Grid>
              </Column>
              <Column>
                <h3>{t('category-5-name')}</h3>
                <Grid columns={3}>
                  <ResearchCard
                    author="Bhasker Amatya, Fary Khan"
                    headline={t('paper-9-name')}
                    thumbnail="/banks.jpg"
                  />
                  <ResearchCard
                    author="World Travel & Tourism Council"
                    headline={t('paper-10-name')}
                    thumbnail="/banks.jpg"
                  />
                </Grid>
              </Column>
              <Column>
                <h3>{t('category-6-name')}</h3>
                <Grid columns={3}>
                  <ResearchCard
                    author="James Botwell"
                    headline={t('paper-11-name')}
                    thumbnail="/banks.jpg"
                  />
                  <ResearchCard
                    author="Vereinte Nationen"
                    headline={t('paper-12-name')}
                    thumbnail="/banks.jpg"
                  />
                </Grid>
              </Column>
            </Column>
          </div>
        </div>
      </section>
    </main>
  );
}
