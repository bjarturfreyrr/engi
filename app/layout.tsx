import type { Metadata } from "next";

// Rót-layoutið er vísvitandi létt: hvert route group sækir sitt eigið CSS og letur,
// svo forsíðan (ny) hlaði ekki Tailwind og leturgerðum gömlu síðnanna.

export const metadata: Metadata = {
  title: "Móar",
  description: "Stafrænar Lausnir",
  openGraph: {
    title: "Móar",
    description: "Stafrænar Lausnir",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Móar",
    description: "Stafrænar Lausnir",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <body>{children}</body>
    </html>
  );
}
