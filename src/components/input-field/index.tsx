interface Props {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: string;
  required?: boolean;
}

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  min,
  required = false,
}: Props) => (
  <div>
    <label className="block font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      className="w-full px-3 py-2 border rounded"
      required={required}
    />
  </div>
);

export default InputField;
