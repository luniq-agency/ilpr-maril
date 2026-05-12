import path from 'path';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Disclaimer');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function DisclaimerPage({ params }: PageProps) {
  const { locale } = await params;

  const filePath = path.join(process.cwd(), 'src/content/disclaimer', `${locale}.mdx`);
  const source = await readFile(filePath, 'utf-8');

  setRequestLocale(locale);
  const t = await getTranslations('Disclaimer');
  return (
    <main>
      <section style={{ paddingTop: '10rem' }}>
        <div className="content align-left max-w-800">
          <h1 style={{ textAlign: 'left' }}>{t('h1')}</h1>
          <div className="spacer-m" />
          <MDXRemote source={source} />
        </div>
      </section>
    </main>
  );
}
