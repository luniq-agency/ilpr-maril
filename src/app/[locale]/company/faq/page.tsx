import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Accordion, AccordionTab } from 'primereact/accordion';
import LinkBlock from '@/src/components/LinkBlock';
import { useTranslations } from 'next-intl';
import { linkify } from '@/src/actions/utils';
import Link from 'next/link';

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

  const FAQ_COUNT = 101;

  const faqs = Array.from({ length: FAQ_COUNT }, (_, i) => {
    const n = i + 1;
    const linkKey = `faq-${n}-link`;
    const labelKey = `faq-${n}-link-label`;

    return {
      question: t(`faq-${n}-q`),
      answer: t(`faq-${n}-a`),
      link: t.has(linkKey) ? t(linkKey) : undefined,
      label: t.has(labelKey) ? t(labelKey) : undefined,
    };
  });

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
              {faqs.map((f, i) => (
                <AccordionTab
                  header={f.question}
                  key={i}
                  headerClassName="faq-header"
                  style={{ marginBottom: 8 }}
                >
                  <span>{linkify(f.answer)}</span>
                  {f.link && (
                    <Link className="faq-link" href={f.link}>
                      {f.label}{' '}
                    </Link>
                  )}
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
