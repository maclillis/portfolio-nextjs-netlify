import { useCallback } from 'react';

const useGTMClickHandler = (buttonName) => {
  return useCallback(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_name: buttonName,
      });
    }
  }, [buttonName]);
};

export default useGTMClickHandler;