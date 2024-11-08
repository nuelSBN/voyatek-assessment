export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value: string;
  label: string;
  onChange: (value: string) => void;
}
