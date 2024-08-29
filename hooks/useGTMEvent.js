import { useCallback } from 'react';

const useGTMEvent = () => {
  const pushEvent = useCallback((eventName, eventParams = {}) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  }, []);

  return pushEvent;
};

export default useGTMEvent;