import { createContext } from "react";
type ContextType = {
  onDelete: null | ((time: string) => void);
};
const defaultContextValue: ContextType = {
  onDelete: null,
};
export const TimeContext = createContext<ContextType>(defaultContextValue);
