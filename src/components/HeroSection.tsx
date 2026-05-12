import { ButtonSecondary } from './Button';

interface Props {
  headline: string;
  intro: string;
  cta: string;
  image: string;
  target: string;
}

export default function HeroSection(props: Props) {
  const bgImage = `url(${props.image})`;
  return (
    <section className="section-hero" style={{ backgroundImage: bgImage }}>
      <h1 style={{ color: 'white', zIndex: 4 }}>{props.headline}</h1>
      <span
        className="intro"
        style={{
          color: 'white',
          maxWidth: 480,
          textAlign: 'center',
          marginBottom: '1.5rem',
          zIndex: 4,
        }}
      >
        {props.intro}
      </span>
      <div style={{ zIndex: 4 }}>
        <ButtonSecondary text={props.cta} target={props.target} size="medium" />
      </div>
    </section>
  );
}
