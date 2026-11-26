import styles from './SettingButton.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export default function SettingButton({
  children,
  onClick,
  disabled,
}: ButtonProps) {
  <button className={styles.button} onClick={onClick} disabled={disabled}>
    {children}
  </button>;
}
