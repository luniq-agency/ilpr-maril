import Image from 'next/image';
import styles from './TeamCard.module.css';

interface Props {
  image: string;
  name: string;
  role: string;
}

export function TeamCard(props: Props) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={props.image} alt="" width={270} height={180} />
      <div className={styles.cardContent}>
        <h3 className="quote-author">{props.name}</h3>
        <span className={styles.role}>{props.role}</span>
      </div>
    </div>
  );
}
