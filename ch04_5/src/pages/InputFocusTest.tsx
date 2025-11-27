import { useRef, useEffect } from "react";
import { Title } from "../components";
export default function InputFocusTest() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => inputRef.current?.focus(), []);
  return (
    <section className="mt-4">
      <Title>InputFocusTest</Title>
      <div className="mt-4"></div>
      <input ref={inputRef} className="input input-primary" />
    </section>
  );
}
