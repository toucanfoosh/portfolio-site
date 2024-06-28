import Head from "next/head";

export const metadata = {
  title: "Daniel Wu",
  description: "Daniel Wu's personal website",
  openGraph: {
    images: [
      {
        url: "https://media.discordapp.net/attachments/959320945133248512/1231434803945934848/toucanfish.png?ex=6636f208&is=66247d08&hm=a54386b9f48ca8964b19ace10203b28853967b9ba8a7d02a0fa1017e0e27c30e&=&format=webp&quality=lossless&width=1402&height=1402",
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="Daniel Wu" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image:url"
          content={metadata.openGraph.images[0].url}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image:url"
          content={metadata.openGraph.images[0].url}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
