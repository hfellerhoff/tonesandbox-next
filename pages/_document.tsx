import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans&display=swap'
            rel='stylesheet'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <script
            async
            defer
            src='https://stats.tonesandbox.com/latest.js'
          ></script>
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
