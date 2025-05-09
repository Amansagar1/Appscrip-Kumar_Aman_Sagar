import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appscrip | Project - Kumar Aman Sagar",
  description: "Appscrip-project created by Kumar Aman Sagar.",
  keywords: "Appscrip, Next.js, React, Web Development, App Development, Mobile Apps, Software Solutions, Kumar Aman Sagar, Appscrip-project, Kumar Aman Sagar",
  authors: [{ name: "Kumar Aman Sagar", url: "https://myresumewebpage-github-io-4iks.vercel.app/" }],
  openGraph: {
    title: "Appscrip | Kumar Aman Sagar",
    description: " Appscrip-project created by Kumar Aman Sagar.",
    url: "https://appscrip.com", 
    siteName: "Appscrip",
    images: [
      {
        url: "https://appscrip.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Appscrip Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appscrip | Kumar Aman Sagar",
    description: "Appscrip-project created by Kumar Aman Sagar.",
    creator: "", 
    images: ["https://appscrip.com/twitter-card.jpg"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <Suspense>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}
