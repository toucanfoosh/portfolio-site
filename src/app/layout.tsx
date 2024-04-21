import Head from "next/head";

export const metadata = {
  title: "Daniel Wu",
  description: "Daniel Wu's personal website",
  openGraph: {
    images: [
      {
        image: "/images/toucanfish.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://www.toucanfish.com",
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
          href="/apple-icon?<generated>"
          type="image/png"
          sizes="any"
        />
        <link
          rel="android-chrome"
          href="/favicon_io/android-chrome-192x192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="android-chrome"
          href="/favicon_io/android-chrome-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="Daniel Wu" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].image}
        />
        <meta property="og:image:width" content="554" />
        <meta property="og:image:height" content="311" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={metadata.openGraph.images[0].image}
        />
        <meta name="twitter:image:type" content="image/jpg" />
        <meta name="twitter:image:width" content="554" />
        <meta name="twitter:image:height" content="311" />
        <meta name="twitter:url" content={metadata.openGraph.url} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
