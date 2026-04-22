import styles from './Card.module.css';

interface Props {
  body: string;
  image: string;
  title: string;
}

export default function LocationCard(props: Props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="" />
      <div className={styles.cardContent}>
        <h3 style={{ textAlign: 'center', marginBottom: 8 }}>{props.title}</h3>
        <p style={{ textAlign: 'center', marginBlockEnd: 0 }}>{props.body}</p>
      </div>
    </div>
  );
}
