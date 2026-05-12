import styles from './News.module.css';
import NewsCard from './NewsCard';
import { postsLoadFrontend } from '../actions/blog';

export default async function NewsList() {
  const news = await postsLoadFrontend();

  return (
    <div className={styles.grid}>
      {news?.map((n, i) => (
        <NewsCard
          body={n.body}
          category={n.category}
          created_at={n.created_at}
          excerpt={n.excerpt}
          id={n.id}
          key={i}
          language={n.language}
          organization={n.organization}
          published_date={n.published_date}
          title={n.title}
          slug={n.slug}
          status={n.status}
          thumbnail={n.thumbnail}
        />
      ))}
    </div>
  );
}
