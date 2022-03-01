import "./textfield.styles.scss";
interface TextFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "text" | "number";
}

export const TextField: (props: TextFieldProps) => JSX.Element = ({
  onChange,
  value,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      className="text-field"
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};
