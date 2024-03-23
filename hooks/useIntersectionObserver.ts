import { useCallback, useEffect, useRef } from "react";

interface Props extends IntersectionObserverInit {
  onIntersect: IntersectionObserverCallback;
}

const DEFAULT_THRESHOLD = 1.0;

const useIntersectionObserver = <T extends HTMLElement>({
  root,
  rootMargin = "0px",
  threshold = DEFAULT_THRESHOLD,
  onIntersect,
}: Props) => {
  const ref = useRef<T | null>(null);
  const callback = useCallback<IntersectionObserverCallback>(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect([entry], observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef === null) return;

    const observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [root, rootMargin, callback, threshold, ref]);

  return ref;
};

export default useIntersectionObserver;
