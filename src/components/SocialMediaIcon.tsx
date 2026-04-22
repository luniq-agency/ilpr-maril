import Link from 'next/link';

interface Props {
  target: string;
  image: string;
}

export default function SocialMediaIcon(props: Props) {
  return (
    <Link href={props.target} target="_blank">
      <div className="social-media-icon-wrapper">
        <img src={props.image} alt="" width={24} height={24} />
      </div>
    </Link>
  );
}
