import { useRef } from "react";

export function useDebounce<T>(
  callback: (...args: T[]) => void,
  delay: number
): (...args: T[]) => void {
  const timer = useRef<NodeJS.Timeout>();

  let isCalled = false;

  const debouncedCallback = (...args: T[]) => {
    if (!isCalled && !timer.current) {
      isCalled = true;
      callback(...args);
      timer.current = setTimeout(() => {
        isCalled = false;
        clearTimeout(timer.current);
        timer.current = undefined;
      }, delay);
      return;
    } else {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          isCalled = false;
          timer.current = undefined;
        }, delay);
      }
      return;
    }
  };

  return debouncedCallback;
}
