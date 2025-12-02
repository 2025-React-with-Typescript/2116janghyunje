import type { Actions } from "./action";
import type { AppState } from "./AppState";
const initialState = {
  today: new Date(),
};
export const rootReducer = (
  state: AppState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case "setToday": {
      return { ...state, today: action.today };
    }
  }
  return state;
};
