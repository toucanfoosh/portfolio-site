import { Metadata } from "next";
import Head from "next/head";

const metaDescription = "AFTER DARK by Daniel Wu out everywhere May 4th";
const baseURL = "https://www.toucanfish.com";
const bannerURL = "/site-banner.png";
const bannerAlt = "AFTER DARK EP cover";

export const metadata: Metadata = {
  title: "Daniel Wu",
  description: metaDescription,
  metadataBase: new URL(baseURL),
  openGraph: {
    title: "Daniel Wu",
    description: metaDescription,
    type: "website",
    url: "https://www.toucanfish.com",
    locale: "en_US",
    siteName: "Daniel Wu",
    images: [
      {
        url: bannerURL,
        alt: bannerAlt,
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@toucanfoosh",
    description: metaDescription,
    images: {
      url: bannerURL,
      alt: bannerAlt,
      type: "image/png",
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon_io/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon_io/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon_io/favicon.ico"
          type="image/ico"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/apple-touch-icon.png"
          sizes="any"
        />
        <link
          rel="android-chrome"
          href="/favicon_io/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="android-chrome"
          href="/favicon_io/android-chrome-512x512.png"
          sizes="512x512"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
