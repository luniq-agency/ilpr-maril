import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { jobLoadBySlug } from '@/src/actions/jobs';
import SocialMediaIcon from '@/src/components/SocialMediaIcon';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await jobLoadBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | ILPR Maril`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
    },
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const article = await jobLoadBySlug(slug);
  if (!article) notFound();

  return (
    <main>
      <section style={{ padding: '8rem 0rem 8rem 0rem' }}>
        <div className="content row gap-l">
          <div className="row full-width">
            <div className="column" style={{ maxWidth: 800 }}>
              <h1 className="article-h1">{article.title}</h1>
              <div className="spacer-m" />
              <div dangerouslySetInnerHTML={{ __html: article.description }} />
            </div>
          </div>
          <div className="news-sidebar">
            <div className="column">
              <span>Diesen Job teilen</span>
              <div className="spacer-s" />
              <div className="row">
                <SocialMediaIcon
                  image="/instagram.svg"
                  target={`https://instagram.com/${process.env.INSTAGRAM}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
