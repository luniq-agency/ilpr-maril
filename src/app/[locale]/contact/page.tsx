import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactForm from '@/src/components/ContactForm';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('Contact');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <main>
      <section>
        <div style={{ height: '2rem' }} />
        <div className="content row mobile-column gap-l align-start">
          <div className="column full-width">
            <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
            <span>{t('intro')}</span>
          </div>
          <div style={{ width: '100%', maxWidth: 400 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
