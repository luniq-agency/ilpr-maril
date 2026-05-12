import { Button } from 'primereact/button';
import styles from './JobCard.module.css';
import { Link } from '@/src/i18n/routing';

interface Props {
  location: string;
  date: Date;
  excerpt: string;
  headline: string;
  body: string;
  cta: string;
  slug: string;
}

const formatDate = (date: Date | string) => {
  const formattedDate = new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));

  return formattedDate;
};

export default function JobCard(props: Props) {
  return (
    <Link className={styles.wrapper} href={`/job/${props.slug}` as any}>
      <div className={styles.row}>
        <span className={styles.meta}>{props.location}</span>
        <span className={styles.meta}>{formatDate(props.date)}</span>
      </div>
      <h3 className={styles.headline}>{props.headline}</h3>
      {props.excerpt ? (
        <span className={styles.excerpt}>{props.excerpt}</span>
      ) : (
        <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: props.body }}></div>
      )}
      <Button className={styles.button}>{props.cta}</Button>
    </Link>
  );
}
