import { ChevronDown } from "lucide-react";
import { SelectProps } from "@/src/types/select.types";

const Select = ({
  label,
  required,
  options,
  placeholder,
  className,
  labelClassName,
  selectClassName,
  wrapperClassName,
  ...rest
}: SelectProps) => {
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

      <div className="relative">
        <select
          required={required}
          className={`w-full appearance-none text-[#292560] border-2 border-[#c4c4c41a] rounded-lg px-6 py-4 text-md font-medium outline-none focus:border-5 focus:border-[#4CCC88] transition bg-[#c4c4c41a] ${selectClassName || ""}`}
          {...rest}
        >
          {placeholder && (
            <option value="" selected>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom chevron icon */}
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
          size={20}
          strokeWidth={3.5}
        />
      </div>
    </div>
  );
};

export default Select;
