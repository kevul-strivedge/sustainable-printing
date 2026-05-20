"use client";

import React, { useRef, useState } from "react";
import { FileInputProps } from "@/src/types/fileinput.types";

const FileInput = ({
  label,
  required,
  className,
  labelClassName,
  inputClassName,
  wrapperClassName,
  buttonLabel,
  ...rest
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
    setFocused(false);
    rest.onChange?.(e);
  };

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

      {/* Whole div is clickable */}
      <div
        onClick={() => inputRef.current?.click()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        tabIndex={0}
        className={`w-full flex items-center gap-3 border-2 rounded-md px-6 py-4 bg-[#c4c4c41a] cursor-pointer transition
          ${focused ? "border-[#4CCC88] border-5" : "border-[#c4c4c41a]"}
          ${inputClassName || ""}`}
      >
        {/* Choose file button */}
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          className="border border-gray-400 rounded px-2 py-0.5 text-sm text-black bg-gray-100 hover:bg-gray-200 transition shrink-0 pointer-events-none"
        >
          {buttonLabel || "Choose file"}
        </button>

        {/* File name text */}
        <span className="text-md  text-[#495057] truncate">
          {fileName || "No file chosen"}
        </span>

        {/* Hidden real input */}
        <input
          {...rest}
          ref={inputRef}
          type="file"
          required={required}
          className="hidden"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
