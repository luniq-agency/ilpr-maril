interface Props {
  size: number;
}

export default function DividerBlock({ size }: Props) {
  return <div style={{ height: `${size}rem` }} />;
}
