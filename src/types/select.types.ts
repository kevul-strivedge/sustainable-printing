// types/select.types.ts

export interface SelectOptionType {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOptionType[];
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  wrapperClassName?: string;
}