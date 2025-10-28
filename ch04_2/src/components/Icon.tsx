import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";
// html의 span 태그가 사용하는 모든 속성 + name 속성 정의
type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;
export type IconProps = ReactSpanProps & {
  name: string;
};
// props로 전달되는 className 값의 이름을 _className으로 바꿔 받음
export const Icon: FC<IconProps> = ({
  name,
  className: _className,
  ...props
}) => {
  // 전달받은 className에 'material-icons'를 추가함.
  const className = ["material-icons", _className].join(" ");
  return (
    <span className={className} {...props}>
      {name}
    </span>
  );
};
