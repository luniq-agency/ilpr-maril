import { ReactNode } from 'react';

interface Props {
  data: ReactNode;
}

export default function ProjectSlider(props: Props) {
  return <div className="grid columns-four">{props.data}</div>;
}
