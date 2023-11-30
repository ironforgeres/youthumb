// Import necessary modules and styles
import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

// Define the MyApp component
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {/* Set up default SEO metadata */}
      <DefaultSeo
        title="TikTok Video Downloader"
        description="Download TikTok videos easily with our downloader."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "TikTok Video Downloader",
          description: "Download TikTok videos easily with our downloader.",
          site_name: "TikTok Video Downloader",
          images: [
            {
              url: "https://your-website-url.com/your-thumbnail-image.jpg",
              width: 1200,
              height: 630,
              alt: "Your Thumbnail Image Alt Text",
            },
          ],
        }}
        twitter={{
          handle: '@YourTwitterHandle',
          site: '@YourTwitterHandle',
          cardType: 'summary_large_image',
        }}
      />

      {/* Render the main component */}
      <Component {...pageProps} />
    </Fragment>
  );
}

// Export the component
export default MyApp;
