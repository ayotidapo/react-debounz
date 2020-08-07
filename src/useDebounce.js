import { useState, useEffect } from "react";

function useDebounce(value, delayTime) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
export default useDebounce;
