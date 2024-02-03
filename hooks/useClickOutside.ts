import { useEffect, useRef } from 'react';

const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current === null) return;
    const element = ref.current;
    const listener = (e: MouseEvent) => {
      if (element && !element.contains(e.target as Node)) handler();
    };

    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [handler]);

  return ref;
};

export default useClickOutside;
