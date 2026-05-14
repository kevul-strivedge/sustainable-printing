import { InputProps } from "@/src/types/input.types";

const Input = ({
  label,
  required,
  className,
  labelClassName,
  inputClassName,
  wrapperClassName,
  ...rest
}: InputProps) => {
  return (
    <div
      className={`flex flex-col gap-2 ${wrapperClassName || ""} ${className || ""}`}
    >
      {label && (
        <label
          className={`text-[#292560] font-medium text-lg ${labelClassName || ""}`}
        >
          {label}
          {required && <span className="text-red-600 ms-1 text-xl">*</span>}
        </label>
      )}
      <input
        required={required}
        className={`border border-[#C4C4C4] rounded-lg px-3 py-4 text-sm outline-none focus:border-5 focus:border-[#4CCC88] transition ${inputClassName || ""}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
