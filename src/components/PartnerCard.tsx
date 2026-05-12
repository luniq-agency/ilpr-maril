import Image from 'next/image';
import styles from './Card.module.css';
import Link from 'next/link';

interface Props {
  body: string;
  image: string;
  inverted?: boolean;
  solid?: boolean;
  title: string;
  href: string;
}

export function PartnerCard(props: Props) {
  return (
    <Link href={props.href} target="_blank">
      <div className={props.solid ? styles.cardSolid : styles.card}>
        <Image
          className={props.inverted ? styles.inverted : styles.imageContain}
          src={props.image}
          alt=""
          width={270}
          height={180}
        />
        <div className={styles.cardContent}>
          <h3 style={{ textAlign: 'center', marginBottom: 8, fontSize: '1.5rem' }}>
            {props.title}
          </h3>
          <span style={{ textAlign: 'center' }}>{props.body}</span>
        </div>
      </div>
    </Link>
  );
}
