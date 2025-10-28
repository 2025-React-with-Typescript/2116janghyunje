import { useMemo, useCallback } from "react";
import { Title } from "../components";
import * as D from "../data";
export default function Callback() {
  const onClick = useCallback(
    (name: string) => () => alert(`${name} clicked`),
    []
  );
  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <button
            key={index}
            onClick={onClick(name)}
            className="btn btn-primary btn-wide btn-xs"
          >
            {name}
          </button>
        )),
    [onClick]
  );
  return (
    <section className="mt-4">
      <Title>HighOrderCallback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </section>
  );
}
