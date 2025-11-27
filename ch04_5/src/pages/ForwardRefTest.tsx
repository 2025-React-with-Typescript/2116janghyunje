import { useRef, useCallback } from "react";
//import Child from './Child'
import { Input } from "../theme/daisyui";
export default function CopyMe() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = useCallback(() => {
    console.log(inputRef.current);
    alert(inputRef.current?.value);
  }, []);
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">ForwardRef</h2>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={onClick}>
          Value
        </button>
        {/* <Child ref={inputRef} /> */}
        <Input ref={inputRef} className="input-primary" />
      </div>
    </section>
  );
}
