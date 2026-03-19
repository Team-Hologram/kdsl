import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0A0E27",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "KDramaSL — Coming Soon | K-Drama Streaming App",
  description: "Your ultimate destination for K-Dramas, Asian movies, and exclusive content — anytime, anywhere.",
  openGraph: {
    title: "KDramaSL — Coming Soon | K-Drama Streaming App",
    description: "Your ultimate destination for K-Dramas, Asian movies, and exclusive content — anytime, anywhere.",
    type: "website",
    siteName: "KDramaSL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
