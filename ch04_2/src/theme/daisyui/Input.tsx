import { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type InputProps = ReactInputProps & {};
export const Input: FC<InputProps> = ({ className: _className, ...props }) => {
  const className = ["input", _className].join(" ");
  return <input className={className} {...props} />;
};
