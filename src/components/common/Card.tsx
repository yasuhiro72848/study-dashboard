type CardProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
};

export default function Card({ children }: CardProps) {
  return <div>{children}</div>;
}
