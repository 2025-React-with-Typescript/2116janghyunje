import { useState, useCallback } from "react";
import TimeStampList from "./TimeStampList";
import { TimeContext } from "../contexts/TimeContext";
export default function TimeStamp() {
  const [list, setList] = useState<string[]>([]);
  const onAdd = useCallback(() => {
    setList((list) => [...list, new Date().toISOString()]);
  }, []);
  const onDelete = useCallback((time: string) => {
    setList((list) => list.filter((it) => it !== time));
  }, []);
  return (
    <section className="mt-4">
      <h2 className="font-bold text-5xl text-center">TimeStamp</h2>
      <div className="mt-4">
        <TimeContext.Provider value={{ onDelete: onDelete }}>
          <button onClick={onAdd} className="btn btn-primary">
            Add
          </button>
          <TimeStampList list={list} />
        </TimeContext.Provider>
      </div>
    </section>
  );
}
