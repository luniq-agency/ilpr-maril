import Link from 'next/link';

interface Props {
  text: string;
  target: string;
  size?: 'small' | 'medium' | 'large';
}

export function ButtonPrimary(props: Props) {
  return (
    <Link href={props.target}>
      <button className={`button-primary ${props.size}`}>{props.text}</button>
    </Link>
  );
}

export function ButtonSecondary(props: Props) {
  return (
    <Link href={props.target}>
      <button className={`button-secondary ${props.size}`}>{props.text}</button>
    </Link>
  );
}
