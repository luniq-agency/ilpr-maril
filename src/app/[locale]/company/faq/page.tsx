import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Accordion, AccordionTab } from 'primereact/accordion';
import LinkBlock from '@/src/components/LinkBlock';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('CompanyFAQ');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function CompanyFaq({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('CompanyFAQ');

  const faqItems = [
    {
      q: t('q-1'),
      a: t('a-1'),
    },
    {
      q: t('q-2'),
      a: t('a-2'),
    },
    {
      q: t('q-2'),
      a: t('a-2'),
    },
    {
      q: t('q-2'),
      a: t('a-2'),
    },
    {
      q: t('q-2'),
      a: t('a-2'),
    },
  ];
  return (
    <main style={{ minHeight: '100vh' }}>
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <div />
        <div className="content  gap-l" style={{ maxWidth: 1000 }}>
          <div className="column full-width">
            <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
            <span>{t('intro')}</span>
          </div>
          <div className="column full-width gap-l">
            <Accordion>
              {faqItems.map((f, i) => (
                <AccordionTab
                  header={f.q}
                  key={i}
                  headerClassName="faq-header"
                  style={{ marginBottom: 8 }}
                >
                  <span>{f.a}</span>
                </AccordionTab>
              ))}
            </Accordion>
          </div>
          <div style={{ height: '3rem' }} />
          <div className="column full-width">
            <h2>{t('more-h2')}</h2>
            <span>{t('more-info')}</span>
            <div style={{ height: '1.5rem' }} />
            <div className="column full-width gap-m">
              <LinkBlock text={t('link-contact')} target="/contact" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
