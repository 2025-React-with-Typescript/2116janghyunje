import { useReducer } from "react";
import type { AppState } from "../store";
import type { SetTodayAction } from "../store/action";
import { useInterval } from "../hooks";
function reducer(state: AppState, action: SetTodayAction) {
  switch (action.type) {
    case "setToday": {
      return { ...state, today: new Date() };
    }
  }
  return state;
}
export default function CopyMe() {
  const [{ today }, dispatch] = useReducer(reducer, { today: new Date() });
  useInterval(() => dispatch({ type: "setToday", today: new Date() }));
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">CopyMe</h2>
      <div className="mt-4">{today.toLocaleTimeString()}</div>
    </section>
  );
}
