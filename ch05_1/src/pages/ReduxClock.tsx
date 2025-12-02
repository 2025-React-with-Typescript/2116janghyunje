import { useSelector, useDispatch } from "react-redux";
import type { AppState } from "../store/AppState";
import { useInterval } from "../hooks";
export default function ReduxClock() {
  const today = useSelector<AppState, Date>((state) => state.today);
  const dispatch = useDispatch();
  useInterval(() => dispatch({ type: "setToday", today: new Date() }));
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">ReduxClock</h2>
      <div className="mt-4">{today.toLocaleTimeString()}</div>
      <div className="mt-4">{today.toLocaleDateString()}</div>
    </section>
  );
}
