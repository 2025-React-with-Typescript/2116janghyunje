import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";
export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0]);
  useEffect(() => {
    setWidthHeight((prev) => [window.innerWidth, window.innerHeight]);
  }, []); 
  useEventListener(window, "resize", () => {
    setWidthHeight((prev) => [window.innerWidth, window.innerHeight]);
  });
  return widthHeight;
};
