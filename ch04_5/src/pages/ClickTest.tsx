import { useRef, useCallback } from "react";
export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = useCallback(() => inputRef.current?.click(), []);
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">ClickTest</h2>
      <div className="flex items-center justify-center mt-4">
        <button className="mr-4 btn btn-primary" onClick={onClick}>
          ClickMe
        </button>
        <input ref={inputRef} type="file" accept="image/*" />
      </div>
    </section>
  );
}
