import { useEffect, useState } from 'react';
import { useDebounce } from '.';

const useHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const debounce = useDebounce();

  useEffect(() => {
    const resizeHandler = () =>
      debounce(() => setHeight(window.innerHeight), 500);

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  });
  return height;
};

export default useHeight;
