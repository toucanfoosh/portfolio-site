import Head from "next/head";

export const metadata = {
  title: "Daniel Wu",
  description: "🔥🔥🔥 Fire Website 🔥🔥🔥 You should hire this guy 🔥🔥🔥",
  imageUrl:
    "https://cdn.discordapp.com/attachments/959320945133248512/1231518069873049651/toucanfish.png?ex=66373f94&is=6624ca94&hm=f5044fdd5196fb687aeda56e38f793557d955d26b946bacb41741eac8d145e5b&",
  url: "https://www.toucanfish.com",
  locale: "en_US",
  type: "website",
  imageType: "image/png",
  imageWidth: "554",
  imageHeight: "311",
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
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:image:width" content={metadata.imageWidth} />
        <meta property="og:image:height" content={metadata.imageHeight} />
        <meta property="og:image:type" content={metadata.imageType} />
        <meta property="og:locale" content={metadata.locale} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} />
        <meta name="twitter:image:type" content={metadata.imageType} />
        <meta name="twitter:image:width" content={metadata.imageWidth} />
        <meta name="twitter:image:height" content={metadata.imageHeight} />
        <meta name="twitter:url" content={metadata.url} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
