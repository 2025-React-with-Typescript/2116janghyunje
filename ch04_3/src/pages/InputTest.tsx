import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Title } from "../components";
import { useToggle } from "../hooks";
export default function InputTest() {
  const [value, setValue] = useState<string>("");
  const [checked, toggleChecked] = useToggle(false);
  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue((value) => e.target.value);
  }, []);
  const onChangeChecked = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      toggleChecked();
    },
    [toggleChecked]
  );
  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex justify-center items-center p-4 mt-4">
        <input
          className="input-primary"
          type="text"
          value={value}
          onChange={onChangeValue}
        />
        <input
          className="checkbox checkbox-primary"
          type="checkbox"
          checked={checked}
          onChange={onChangeChecked}
        />
      </div>
    </section>
  );
}
