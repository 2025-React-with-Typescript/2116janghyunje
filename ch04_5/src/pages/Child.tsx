import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type ChildProps = ReactInputProps & {};
export default function Child(props: ChildProps) {
  const { ref, ...restProps } = props;
  return (
    <div>
      <label>
        <span>Child Input</span>
        <input className="input input-primary" ref={ref} {...restProps} />
      </label>
    </div>
  );
}
