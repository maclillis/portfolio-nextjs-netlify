import { useCallback } from 'react';

const useGTMClickHandlers = (buttonNames) => {
  const handlers = {};

  buttonNames.forEach((buttonName) => {
    handlers[buttonName] = useCallback(() => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'button_click',
          button_name: buttonName,
        });
      }
    }, [buttonName]);
  });

  return handlers;
};

export default useGTMClickHandlers;