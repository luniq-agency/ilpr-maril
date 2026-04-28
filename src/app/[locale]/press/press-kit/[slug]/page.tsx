import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ENDPOINTS } from '@/src/app/api/endpoints';
import Link from 'next/link';

interface Article {
  id: number;
  description: string;
  publish_date: string;
  slug: string;
  title: string;
  body: string;
  status: string;
  active: boolean;
  organization: string;
  thumbnail: string;
}

async function getArticle(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${process.env.JETADMIN_API_URL}${ENDPOINTS.BLOG}?slug__in=${slug}&organization__in=${process.env.ORGANIZATION_ID!}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.JETADMIN_API_KEY}`,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  const article = data.results?.[0];

  return article ?? null;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.JETADMIN_API_URL}${ENDPOINTS.JOBS}`, {
    headers: {
      Authorization: `Bearer ${process.env.JETADMIN_API_KEY}`,
    },
  });
  const data = await res.json();

  if (!data.results) return [];

  return data.results.map((article: Article) => ({
    slug: String(article.slug), // explizit als String
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
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
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <section>
        <article>
          <div
            className="column"
            style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}
          >
            <img src={article.thumbnail} className="article-thumbnail" />
            <div className="row gap-xs" style={{ marginBottom: '0.5rem' }}>
              <Link href="/news">
                <span style={{ fontWeight: 400 }}>News</span>
              </Link>
              <span>•</span>
              <span style={{ color: 'black' }}>{article.title}</span>
            </div>
            <h1 className="article-h1">{article.title}</h1>
            <div className="row gap-xs"></div>
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        </article>
      </section>
    </main>
  );
}
