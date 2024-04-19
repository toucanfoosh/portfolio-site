export const metadata = {
  title: "Daniel Wu's Portfolio Site",
  description: "Daniel Wu's Portfolio Site",
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
