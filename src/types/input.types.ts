// types/input.types.ts

import React from "react";

export interface ButtonType {
  label: string;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  wrapperClassName?: string;
}
