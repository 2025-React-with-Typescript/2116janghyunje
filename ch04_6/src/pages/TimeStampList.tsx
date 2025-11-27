import type { FC } from "react";
import TimeStampItem from "./TimeStampItem";
export type TimeStampListProps = {
  list: string[];
};
const TimeStampList: FC<TimeStampListProps> = ({ list }) => {
  const items = list.map((it) => (
    <li>
      <TimeStampItem time={it} />
    </li>
  ));
  return <ul>{items}</ul>;
};
export default TimeStampList;
