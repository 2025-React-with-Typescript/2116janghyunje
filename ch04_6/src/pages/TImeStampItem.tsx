import { useCallback, useContext, type FC } from "react";
import { TimeContext } from "../contexts/TimeContext";
export type TimeStampItemProps = {
  time: string;
};
const TimeStampItem: FC<TimeStampItemProps> = ({ time }) => {
  const { onDelete } = useContext(TimeContext);
  const onClick = useCallback(() => {
    if (onDelete) onDelete(time);
  }, [onDelete, time]);
  return (
    <button onClick={onClick} className="btn btn-xs mb-1">
      {time}
    </button>
  );
};
export default TimeStampItem;
