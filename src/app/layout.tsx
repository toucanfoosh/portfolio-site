import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Daniel Wu",
  description: "🔥🔥🔥 Fire Website 🔥🔥🔥\n✅ You should hire this guy ✅",
  metadataBase: new URL("https://www.toucanfish.com"),
  openGraph: {
    title: "Daniel Wu",
    description: "🔥🔥🔥 Fire Website 🔥🔥🔥\n✅ You should hire this guy ✅",
    type: "website",
    url: "https://www.toucanfish.com",
    locale: "en_US",
    siteName: "Daniel Wu",
    images: [
      {
        url: new URL("https://ibb.co/qxWf4G7"),
        alt: "A toucanfish",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@toucanfoosh",
    description: "🔥🔥🔥 Fire Website 🔥🔥🔥\n✅ You should hire this guy ✅",
    images: {
      url: new URL("https://ibb.co/qxWf4G7"),
      alt: "A toucanfish",
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
