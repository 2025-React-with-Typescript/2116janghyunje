import type { ChangeEvent } from "react";
import { useMemo, useCallback, useState } from "react";
import { Title, Subtitle } from "../components";
import * as D from "../data";
export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onChange = useCallback(
    (index: number) => () => setSelectedIndex(index),
    []
  );
  const radioInputs = useMemo(
    () =>
      jobTitles.map((value, index) => (
        <label key={index}>
          <input
            type="radio"
            name="higher_jobs"
            checked={index === selectedIndex}
            defaultValue={value}
            onChange={onChange(index)}
          />
          <span>{value}</span>
        </label>
      )),
    [jobTitles, selectedIndex, onChange]
  );
  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="mt-4">
        <Subtitle>{jobTitles[selectedIndex]}</Subtitle>
        <div className="flex justify-center">
          <div className="flex flex-col">{radioInputs}</div>
        </div>
      </div>
    </section>
  );
}
