import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode;
  title: string;
  width?: string;
  height?: string;
};

export default function Card({ children, title, width, height }: CardProps) {
  return (
    <div className={styles.card} style={{ width, height }}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
