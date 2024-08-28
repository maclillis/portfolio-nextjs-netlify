import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CookieConsent from "react-cookie-consent";
import Head from 'next/head';
import '@styles/globals.scss';

function Application({ Component, pageProps }) {

  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  const loadGoogleAnalytics = () => {
    if (!window.gtag) {
      // Create and inject the Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-3ET45MQKCB`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-3ET45MQKCB');
      };
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('analyticsAllowed');
    if (consent === 'true') {
      setAnalyticsAllowed(true);
      loadGoogleAnalytics(); // Load GA if consent was already given
    }
  }, []);

  const handleAcceptCookies = () => {
    setAnalyticsAllowed(true);
    loadGoogleAnalytics(); // Load GA after user consent
    localStorage.setItem('analyticsAllowed', 'true');
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
        onDecline={() => localStorage.setItem('analyticsAllowed', 'false')}
      >
        <p className="consent_text">Den här webbplatsen använder sig av kakor (cookies) för att förbättra webbupplevelsen.</p>
      </CookieConsent>
      <Component {...pageProps} />
  </NextUIProvider>
  );
}

export default Application
