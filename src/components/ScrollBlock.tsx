interface Props {
  image: string;
}

export default function ScrollBlock(props: Props) {
  const bgImage = `url(${props.image})`;
  return <section className="section-scroll" style={{ backgroundImage: bgImage }}></section>;
}
