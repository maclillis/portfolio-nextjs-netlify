import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CookieConsent from "react-cookie-consent";
import Head from 'next/head';
import '@styles/globals.scss';

function Application({ Component, pageProps }) {

  const [trackingAllowed, setTrackingAllowed] = useState(false);

  const loadGoogleTagManager = () => {
    if (!window.dataLayer) {
      // Initialize the dataLayer
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());

      // Create and inject the Google Tag Manager script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-KBM4GQT9`; // Replace with your GTM ID
      script.async = true;
      document.head.appendChild(script);
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('trackingAllowed');
    if (consent === 'true') {
      setTrackingAllowed(true);
      loadGoogleTagManager(); // Load GTM if consent was already given
    }
  }, []);

  const handleAcceptCookies = () => {
    setTrackingAllowed(true);
    loadGoogleTagManager(); // Load GTM after user consent
    localStorage.setItem('trackingAllowed', 'true');
  };

  return (
  <NextUIProvider>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      {/* Cookie Consent Banner */}
      <CookieConsent
        buttonText="Godkänn"
        declineButtonText="Avböj"
        enableDeclineButton
        disableStyles={true}
        location={"bottom"}
        buttonClasses="button_base button_primary consent_button_yes"
        buttonWrapperClasses="button_wrap flex"
        containerClasses="cookie_consent_wrap flex fixed items-center w-full justify-center py-4 flex-col lg:flex-row"
        declineButtonClasses="button_base btn_external flex justify-center items-center consent_button_no"
        contentClasses="content_container flex justify-center mb-4 px-4 lg:mb-0 lg:px-0 lg:me-12"
        onAccept={handleAcceptCookies}
        onDecline={() => localStorage.setItem('trackingAllowed', 'false')}
      >
        <p className="consent_text">Den här webbplatsen använder sig av kakor (cookies) för att förbättra webbupplevelsen.</p>
      </CookieConsent>

      {/* Insert the GTM <noscript> fallback for users without JavaScript */}
      {trackingAllowed && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-KBM4GQT9`} // Replace with your GTM ID
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      )}
      <Component {...pageProps} />
  </NextUIProvider>
  );
}

export default Application
