import Image from 'next/image';
import styles from './Card.module.css';

interface Props {
  body: string;
  image: string;
  title: string;
}

export function ProjectCard(props: Props) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={props.image} alt="" width={270} height={180} />
      <div className={styles.cardContent}>
        <h3 style={{ textAlign: 'center', marginBottom: 8, fontSize: '1.5rem' }}>{props.title}</h3>
        <span style={{ textAlign: 'center' }}>{props.body}</span>
      </div>
    </div>
  );
}
