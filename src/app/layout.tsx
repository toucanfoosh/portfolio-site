import Head from "next/head";

export const metadata = {
  title: "Daniel Wu",
  description: "Daniel Wu's personal website",
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
      </Head>
      <body>{children}</body>
    </html>
  );
}
