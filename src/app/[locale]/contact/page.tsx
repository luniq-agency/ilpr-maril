import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactForm from '@/src/components/ContactForm';
import SocialMediaIcon from '@/src/components/SocialMediaIcon';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
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
        <div className="content row mobile-column gap-l align-start" style={{ maxWidth: 1000 }}>
          <div className="column full-width">
            <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
            <span>{t('intro')}</span>
            <div style={{ height: '2rem' }} />
            <div className="column gap-s">
              <div className="row gap-xs">
                <SocialMediaIcon image="/icons/email.svg" target={`mailto:${t('email-address')}`} />
                <span>{t('email-address')}</span>
              </div>
              <div className="row gap-xs">
                <SocialMediaIcon image="/icons/phone.svg" target={`tel:${t('phone-intl')}`} />
                <span>{t('phone')}</span>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', maxWidth: 400 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
