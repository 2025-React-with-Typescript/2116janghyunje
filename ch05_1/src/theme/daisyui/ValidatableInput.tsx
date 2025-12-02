import { useImperativeHandle, useRef, forwardRef } from "react";
import type { ReactInputProps } from "./Input";
// 검증이 성공하면 [true, value]
// 실패하면 [false, message]
export type ValidatableInputMethods = {
  validate: () => [boolean, string];
};
// 지정한 타입의 Ref 를 별도로 받기 위해 forwardRef 로 컴포넌트 생성
export const ValidatableInput = forwardRef<
  ValidatableInputMethods,
  ReactInputProps
>(({ className: _className, type, ...inputProps }, methodRef) => {
  const className = ["input", _className].join(" ");
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    methodRef,
    () => ({
      validate: (): [boolean, string] => {
        const value = inputRef.current?.value;
        console.log(value);
        if (!value || !value.length) return [false, "입력한 내용이 없습니다."];
        switch (type) {
          case "email": {
            const regEx: RegExp =
              /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            const valid = regEx.test(value);
            return valid ? [true, value] : [false, "이메일 양식이 아닙니다."];
          }
        }
        return [false, "컴포넌트 타입이 유효하지 않습니다."];
      },
    }),
    [type]
  );
  return <input ref={inputRef} {...inputProps} className={className} />;
});
