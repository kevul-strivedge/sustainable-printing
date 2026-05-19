export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  buttonLabel?: string;
}