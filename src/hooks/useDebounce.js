import { useCallback } from 'react';

const useDebounce = (functionToDebounce, delay) => {
  const debouncedFn = useCallback((...args) => {
    clearTimeout(debouncedFn.timeout);
    debouncedFn.timeout = setTimeout(() => {
      functionToDebounce(...args);
    }, delay);
  });
  [functionToDebounce, delay];

  return debouncedFn;
};

export default useDebounce;
