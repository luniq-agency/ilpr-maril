import styles from './Timeline.module.css';

interface Props {
  body: string;
  image: string;
  title: string;
  year: string;
}

export default function TimelineItem(props: Props) {
  const bgImage = `url${props.image}`;
  return (
    <div className={styles.wrapper} style={{ backgroundImage: bgImage }}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}
