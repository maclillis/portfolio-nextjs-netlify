import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CookieConsent from "react-cookie-consent";
import Script from 'next/script';
import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';
import '@styles/globals.scss';


function Application({ Component, pageProps }) {

  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  const handleAcceptCookies = () => {
    setAnalyticsAllowed(true);
  };

  useEffect(() => {
    if (analyticsAllowed && process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3ET45MQKCB');
    }
  }, [analyticsAllowed]);

  return (
  <NextUIProvider>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <>
      {analyticsAllowed && (
        <>
          {/* Google Analytics Script */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-3ET45MQKCB`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3ET45MQKCB'); // Replace with your GA Measurement ID
            `}
          </Script>
        </>
      )}
      </>
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
        onAccept={() => {
          handleAcceptCookies();
          localStorage.setItem('analyticsAllowed', 'true');
        }}
        onDecline={() => {
          localStorage.setItem('analyticsAllowed', 'false');
        }}
      >
        <p className="consent_text">Den här webbplatsen använder sig av kakor (cookies) för att förbättra webbupplevelsen.</p>
      </CookieConsent>
      <Component {...pageProps} />
  </NextUIProvider>
  );
}

export default Application
