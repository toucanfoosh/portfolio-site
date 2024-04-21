import Head from "next/head";

export const metadata = {
  title: "Daniel Wu",
  description: "Daniel Wu's personal website",
  openGraph: {
    images: ["/images/toucanfish.jpeg"],
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="Daniel Wu" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0]} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
