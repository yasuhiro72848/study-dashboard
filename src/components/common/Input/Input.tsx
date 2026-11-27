import styles from './Input.module.css';

type TextInputProps = {
  type: 'text';
  value: string;
  onChange: (value: string) => void;
};

type NumberInputProps = {
  type: 'number';
  value: number;
  onChange: (value: number) => void;
};

type DateInputProps = {
  type: 'date';
  value: string;
  onChange: (value: string) => void;
};

type CheckboxInputProps = {
  type: 'checkbox';
  checked: boolean;
  onChange: (value: boolean) => void;
};

type InputProps =
  | TextInputProps
  | NumberInputProps
  | DateInputProps
  | CheckboxInputProps;

export default function Input(props: InputProps) {
  if (props.type === 'text') {
    return (
      <input
        type="text"
        className={styles.textInput}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    );
  }

  if (props.type === 'number') {
    return (
      <input
        type="number"
        className={styles.numberInput}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    );
  }

  if (props.type === 'date') {
    return (
      <input
        type="date"
        className={styles.dateInput}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    );
  }

  if (props.type === 'checkbox') {
    return (
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
      />
    );
  }

  const exhaustiveCheck: never = props;
  return exhaustiveCheck;
}
