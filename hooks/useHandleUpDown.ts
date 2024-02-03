import { KeyboardEvent, useEffect, useState } from 'react';

const useHandleUpDown = (len: number, enterFn: () => void) => {
  const [focusIndex, setFocusIndex] = useState(-1);

  const moveFocus = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    switch (e.key) {
      case 'ArrowUp':
        setFocusIndex((pre) => (pre <= 0 ? len - 1 : pre - 1));
        break;
      case 'ArrowDown':
        setFocusIndex((pre) => (pre >= len - 1 ? 0 : pre + 1));
        break;
      case 'Enter':
        enterFn();
        break;
      default:
    }
  };

  useEffect(() => {
    if (focusIndex !== -1) {
      const element = document.querySelector(
        `.list${focusIndex}th`,
      ) as HTMLElement;
      element.focus();
    }
  }, [focusIndex]);

  return { focusIndex, setFocusIndex, moveFocus };
};

export default useHandleUpDown;
