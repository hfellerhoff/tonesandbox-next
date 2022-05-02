import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans&display=swap'
            rel='stylesheet'
          />
          {process.env.VERCEL_ENV === 'production' ? (
            <script
              async
              defer
              data-website-id='e0135a7d-bd11-40a4-b153-336bccac133b'
              src='https://umami.henryfellerhoff.com/umami.js'
            ></script>
          ) : (
            <></>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
