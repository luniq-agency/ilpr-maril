import Link from 'next/link';
import styles from './News.module.css';
import type { News } from '../types/Database';

export default function NewsCard(news: News) {
  return (
    <Link href={`/news/${news.slug}`}>
      <div className={styles.card}>
        <img src={news.thumbnail} className={styles.thumbnail} />
        <div className={styles.cardContent}>
          <div className={styles.metaRow}>
            <span className={styles.meta}>{news.category}</span>
            <span className={styles.meta}></span>
          </div>
          <h3 className={styles.headline}>{news.title}</h3>
          <button className={styles.button}>Mehr Lesen</button>
        </div>
      </div>
    </Link>
  );
}
