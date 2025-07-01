import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [debounce, setDebouce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouce(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
}
