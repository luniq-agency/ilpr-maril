import Image from 'next/image';
import styles from './Card.module.css';

interface Props {
  body: string;
  image: string;
  title: string;
}

export default function LocationCard(props: Props) {
  return (
    <div className={styles.card}>
      <Image src={props.image} alt={props.title} />
      <div className={styles.cardContent}>
        <h3 style={{ textAlign: 'center', marginBottom: 8 }}>{props.title}</h3>
        <p style={{ textAlign: 'center', marginBlockEnd: 0 }}>{props.body}</p>
      </div>
    </div>
  );
}
