// _document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add external stylesheets or other head elements here */}
          <link rel="stylesheet" href="https://your-website-url.com/external.css" />

          {/* Set up metadata for social sharing */}
          <meta property="og:title" content="TikTok Video Downloader" />
          <meta property="og:description" content="Download TikTok videos easily with our downloader." />
          <meta property="og:image" content="https://your-website-url.com/your-thumbnail-image.jpg" />
          <meta property="og:url" content="https://your-website-url.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YourTwitterHandle" />
          <meta name="twitter:creator" content="@YourTwitterHandle" />
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
