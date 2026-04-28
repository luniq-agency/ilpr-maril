import Image from 'next/image';
import styles from './PressContactBox.module.css';
import Link from 'next/link';
interface Props {
  email: string;
  name: string;
  role: string;
  image: string;
}

export default function PressContactBox(props: Props) {
  return (
    <div className={styles.wrapper}>
      <Image width={200} height={300} alt={props.name} src={props.image} className={styles.image} />
      <div className="column">
        <h3>{props.name}</h3>
        <span>{props.role}</span>
        <Link href={`mailto:${props.email}`} target="_blank" className={styles.link}>
          {props.email}
        </Link>
      </div>
    </div>
  );
}
