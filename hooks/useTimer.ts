import { useEffect, useState } from 'react';

const useTimer = (initTime: { min: number; sec: number }) => {
  const [{ min, sec }, setTimer] = useState(initTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (sec > 0) {
        setTimer((pre) => {
          return { ...pre, sec: pre.sec - 1 };
        });
      } else if (sec === 0) {
        if (min === 0) {
          clearInterval(timerInterval);
        } else {
          setTimer((pre) => {
            return { min: pre.min - 1, sec: 59 };
          });
        }
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  });

  useEffect(() => {
    setTimer(initTime);
  }, [initTime]);

  return { min, sec };
};

export default useTimer;
