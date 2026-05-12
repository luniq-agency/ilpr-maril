import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import BenefitBox from '@/src/components/BenefitBox';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Agencies');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function AgenciesPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Agencies');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/backgrounds/travel-agencies.png"
        cta={t('cta')}
        target="#team"
      />
      <section id="team">
        <div className="content">
          <div className="column">
            <h2>{t('h2')}</h2>
            <div style={{ height: '1.5rem' }} />
            <p>{t('p-1')}</p>
            <p>{t('p-2')}</p>
            <p>{t('p-3')}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <h2>{t('benefits-h2')}</h2>
          <div style={{ height: '3rem' }} />
          <div className="grid columns-two full-width" style={{ gap: '1.5rem' }}>
            {/*<BenefitBox title={t('benefit-1-hl')} body={t('benefit-1-body')} image="" />
            <BenefitBox title={t('benefit-2-hl')} body={t('benefit-2-body')} image="" />*/}
            <BenefitBox
              title={t('benefit-3-hl')}
              body={t('benefit-3-body')}
              image="/icons/travel-insurance.svg"
            />
            <BenefitBox
              title={t('benefit-4-hl')}
              body={t('benefit-4-body')}
              image="/icons/system-integration.svg"
            />
            <BenefitBox
              title={t('benefit-5-hl')}
              body={t('benefit-5-body')}
              image="/icons/account-manager.svg"
            />
            <BenefitBox
              title={t('benefit-6-hl')}
              body={t('benefit-6-body')}
              image="/icons/marketing-package.svg"
            />
            <BenefitBox
              title={t('benefit-7-hl')}
              body={t('benefit-7-body')}
              image="/icons/handshake.svg"
            />
            <BenefitBox
              title={t('benefit-8-hl')}
              body={t('benefit-8-body')}
              image="/icons/loyalty-program.svg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
