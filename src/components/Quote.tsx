import Image from 'next/image';

interface Props {
  text: string;
}

export default function Quote(props: Props) {
  return (
    <div className="quote-wrapper">
      <Image src="/quotation.png" width={34} className="quotation-top" alt="" />
      <span className="quote-text">
        {props.text} <Image src="/quotation.png" width={34} className="quotation-bottom" alt="" />
      </span>
    </div>
  );
}
