import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="sv">
        <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#CBA6DD" />
        <link rel="apple-touch-icon" href="../../assets/favicon/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="../../assets/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="../../assets/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="../../assets/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="../../assets/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="../../assets/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="../../assets/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="../../assets/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="../../assets/favicon/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="../../assets/favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="../../assets/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="../../assets/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="../../assets/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="../../assets/favicon/favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="Marcus Liljehammar's Portfolio"/>
        <meta name="msapplication-TileColor" content="#271932" />
        <meta name="msapplication-TileImage" content="../../assets/favicon/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="../../assets/favicon/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="../../assets/favicon/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="../../assets/favicon/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="../../assets/favicon/mstile-310x310.png" />

        <link rel="preload" href="../../assets/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="../../assets/fonts/Inter-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="../../assets/fonts/Inter-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="../../assets/fonts/Inter-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="../../assets/fonts/Inter-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        </Head>
        <body className="h-full">
          <Main className="h-full" />
          <NextScript className="h-full" />
        </body>
      </Html>
    );
  }
}

export default AppDocument;