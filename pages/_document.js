import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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