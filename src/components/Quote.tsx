interface Props {
  text: string;
}

export default function Quote(props: Props) {
  return (
    <div className="quote-wrapper">
      <img src="/quotation.png" width={34} className="quotation-top" />
      <span className="quote-text">
        {props.text} <img src="/quotation.png" width={34} className="quotation-bottom" />
      </span>
    </div>
  );
}
