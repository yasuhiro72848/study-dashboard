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

type InputProps = TextInputProps | NumberInputProps | DateInputProps;

export default function Input(props: InputProps) {
  if (props.type === 'text') {
    return (
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    );
  }
  if (props.type === 'number') {
    return (
      <input
        type="number"
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    );
  }
  return (
    <input
      type="date"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}
