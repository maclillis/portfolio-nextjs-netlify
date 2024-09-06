import { useState, useEffect } from 'react';

export const useGoogleTagManager = () => {
  const [isGtmLoaded, setIsGtmLoaded] = useState(false);

  const loadGoogleTagManager = () => {
    if (!window.dataLayer && !isGtmLoaded) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-KBM4GQT9`;
      script.async = true;
      document.head.appendChild(script);

      setIsGtmLoaded(true);
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('trackingAllowed');
    if (consent === 'true') {
      loadGoogleTagManager();
    }
  }, []);

  return { loadGoogleTagManager };
};



