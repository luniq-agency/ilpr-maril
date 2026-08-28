import styles from './Research.module.css';

interface Props {
  author: string;
  headline: string;
  thumbnail: string;
}

export default function ResearchCard({ author, headline, thumbnail }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.cardThumbnail} src={thumbnail || '/banks.jpg'} />
      <h3 className={styles.cardHeadline}>{headline}</h3>
      <span className={styles.cardMeta}>{author}</span>
    </div>
  );
}
