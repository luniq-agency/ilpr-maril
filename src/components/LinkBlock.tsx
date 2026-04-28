import { Link } from '../i18n/navigation';
import styles from './LinkBlock.module.css';

interface Props {
  target: string;
  text: string;
}

export default function LinkBlock(props: Props) {
  return (
    <Link href={props.target as any}>
      <div className={styles.wrapper}>
        <img src="/icons/arrow-right-circle.svg" width={24} height={24} alt="" />
        {props.text}
      </div>
    </Link>
  );
}
