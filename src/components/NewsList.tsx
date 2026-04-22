import type { News } from '../types/Database';
import styles from './News.module.css';
import { ENDPOINTS } from '../app/api/endpoints';
import NewsCard from './NewsCard';

async function getNews(): Promise<News[]> {
  const url = new URL(`${process.env.JETADMIN_API_URL}${ENDPOINTS.BLOG}`);
  url.searchParams.set('organization__in', process.env.ORGANIZATION_ID!);
  url.searchParams.set('status__in', 'published');

  console.log(url);
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.JETADMIN_API_KEY}`,
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return Array.isArray(data) ? data : (data.results ?? []);
}

export default async function NewsList() {
  const news = await getNews();

  return (
    <div className={styles.grid}>
      {news?.map((n, i) => (
        <NewsCard
          key={i}
          category={n.category}
          title={n.title}
          slug={n.slug}
          thumbnail={n.thumbnail}
        />
      ))}
    </div>
  );
}
