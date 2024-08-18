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
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="../../assets/favicon/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../../assets/favicon/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../../assets/favicon/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../../assets/favicon/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href="../../assets/favicon/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="../../assets/favicon/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="../../assets/favicon/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="../../assets/favicon/apple-touch-icon-152x152.png" />
      <link rel="icon" type="image/png" href="../../assets/favicon/favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="../../assets/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="../../assets/favicon/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="../../assets/favicon/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="../../assets/favicon/favicon-128.png" sizes="128x128" />
      <meta name="application-name" content="&nbsp;"/>
      <meta name="msapplication-TileColor" content="#271932" />
      <meta name="msapplication-TileImage" content="../../assets/favicon/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="../../assets/favicon/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="../../assets/favicon/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="../../assets/favicon/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="../../assets/favicon/mstile-310x310.png" />
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
