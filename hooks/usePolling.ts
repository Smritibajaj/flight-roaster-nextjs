import { useEffect, useRef } from 'react';

/**
 * Custom hook for polling.
 * 
 * @param fetchApiFunction Function to fetch data which returns a promise.
 * @param interval Polling interval in milliseconds.
 * @param dependencies Dependencies array to control the restart of polling.
 */
const usePolling = (
  fetchApiFunction: () => Promise<void>,
  interval: number,
  dependencies: React.DependencyList = []
): void => {
  const intervalId = useRef<number | null>(null);

  useEffect(() => {
    // Define a function that executes the fetchData function
    const executePoll = async (): Promise<void> => {
      try {
        await fetchApiFunction();
      } catch (error) {
        console.error('Polling error:', error);
      }
    };

    // Start the polling
    intervalId.current = window.setInterval(executePoll, interval);

    // Immediate first call
    executePoll();

    // Cleanup on unmount or dependencies change
    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
      }
    };
  }, [fetchApiFunction, interval, ...dependencies]);
};

export default usePolling;
