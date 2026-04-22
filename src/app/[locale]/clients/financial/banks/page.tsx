import HeroSection from '@/src/components/HeroSection';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import BenefitBox from '@/src/components/BenefitBox';
import { ButtonPrimary } from '@/src/components/Button';
import ScrollBlock from '@/src/components/ScrollBlock';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('Banks');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function BanksPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Banks');
  return (
    <main>
      <HeroSection
        headline={t('h1')}
        intro={t('intro')}
        image="/banks.jpg"
        cta={t('cta')}
        target="#vorteile"
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
            <div style={{ height: '1rem' }} />
            <ButtonPrimary text={t('cta-1')} target="/contact" size="medium" />
          </div>
        </div>
      </section>
      <ScrollBlock image="/banks-2.jpg" />
      <section id="vorteile">
        <div className="content">
          <h2 style={{ marginBottom: 8 }}>{t('benefits-h2')}</h2>
          <span>{t('benefits-intro')}</span>
          <div style={{ height: '3rem' }} />
          <div className="grid columns-two full-width" style={{ gap: '1.5rem' }}>
            <BenefitBox title={t('benefit-1-hl')} body={t('benefit-1-body')} image="" />
            <BenefitBox
              title={t('benefit-2-hl')}
              body={t('benefit-2-body')}
              image="/icons/revenue-split.svg"
              delay={0.5}
            />
            <BenefitBox
              title={t('benefit-3-hl')}
              body={t('benefit-3-body')}
              image="/icons/information.svg"
              delay={1}
            />
            <BenefitBox
              title={t('benefit-4-hl')}
              body={t('benefit-4-body')}
              image="/icons/handshake.svg"
              delay={1.5}
            />
            <BenefitBox
              title={t('benefit-5-hl')}
              body={t('benefit-5-body')}
              image="/icons/handshake.svg"
              delay={2}
            />
            <BenefitBox
              title={t('benefit-6-hl')}
              body={t('benefit-6-body')}
              image="/icons/handshake.svg"
              delay={2.5}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
