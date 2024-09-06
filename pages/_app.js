import { NextUIProvider, Link } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useGoogleTagManager } from '../hooks/useGoogleTagManager';
import CookieConsent from "react-cookie-consent";
import { setCookieConsent, getCookieConsent } from '../hooks/cookieConsent';
import UserActivityMonitor from '../utils/UserActivityMonitor'

import Head from 'next/head';
import '@styles/globals.scss';

function Application({ Component, pageProps }) {

const [userHasConsented, setUserHasConsented] = useState(false);

useEffect(() => {
  setUserHasConsented(getCookieConsent());

  if (typeof window !== 'undefined') {
    // Initialize Google Consent Mode
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'consent_init',
      'ad_storage': 'denied',     // Default state is 'denied'
      'analytics_storage': 'denied',
    });
  }
}, []);

const { loadGoogleTagManager } = useGoogleTagManager();

  const handleAcceptCookies = () => {
    setCookieConsent(true);
    setUserHasConsented(true);

    if (typeof window !== 'undefined') {
      // Update Google Consent Mode on acceptance
      window.dataLayer.push({
        'event': 'consent_update',
        'ad_storage': 'granted',       // User accepted cookies
        'analytics_storage': 'granted',
      });
    }

    //Loads GTM from Hook.
    loadGoogleTagManager();
  };

  const handleDeclineCookies = () => {
    setCookieConsent(false);
    setUserHasConsented(false);

    if (typeof window !== 'undefined') {
      // Update Google Consent Mode on rejection
      window.dataLayer.push({
        'event': 'consent_update',
        'ad_storage': 'denied',       // User declined cookies
        'analytics_storage': 'denied',
      });
    }
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
        location={"none"}
        buttonClasses="button_base button_primary consent_button_yes"
        buttonWrapperClasses="button_wrap flex"
        containerClasses="cookie_consent_wrap flex fixed items-center w-full justify-center py-2 md:py-4 flex-col lg:flex-row"
        declineButtonClasses="button_base btn_external flex justify-center items-center consent_button_no"
        contentClasses="content_container flex justify-center px-6 md:px-2 lg:px-0"
        style={{
          background: "rgba(0, 0, 0, 0.35)", 
          color: "white",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          zIndex: 9999, 
          flexDirection: "column",
          padding: "40px",
          textAlign: "left",
        }}
        onAccept={handleAcceptCookies}
        onDecline={handleDeclineCookies}
      >
        <h3 className="consent_heading">Hallå där! 👋🏻</h3>
          <p className="consent_text px-0 lg:px-6 pb-2 md:pb-4 lg:pb-6">Den här webbplatsen använder sig av kakor (cookies) för att samla in information om hur webbplatsen används och förbättra användar-upplevelsen. För mer information, <Link href="/integritetspolicy">läs min Integritetspolicy</Link>.</p>
      </CookieConsent>

      {/* Insert the GTM <noscript> fallback for users without JavaScript */}
      {userHasConsented && process.env.NODE_ENV === 'production' && (
        <>
        <UserActivityMonitor />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-KBM4GQT9`} // Replace with your GTM ID
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        </>
      )}
      <Component {...pageProps} />
  </NextUIProvider>
  );
}

export default Application
