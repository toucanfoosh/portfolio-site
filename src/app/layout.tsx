import { Metadata } from "next";
import Head from "next/head";
import ogImage from "../../public/images/site-banner.png";

const metaDescription = "AFTER DARK by Daniel Wu out everywhere May 4th";
const baseURL = "https://www.toucanfish.com";
const bannerURL = ogImage.src;
const bannerHeight = ogImage.height;
const bannerWidth = ogImage.width;
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
        width: bannerWidth,
        height: bannerHeight,
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
      width: bannerWidth,
      height: bannerHeight,
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
      <body>{children}</body>
    </html>
  );
}
