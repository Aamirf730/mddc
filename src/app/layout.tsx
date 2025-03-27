import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Maps Driving Directions",
    default: "Maps Driving Directions - Get Turn-by-Turn Navigation & Route Planning",
  },
  description: "Get accurate driving, walking, and cycling directions with Yahoo Maps. Find the best routes, turn-by-turn navigation, real-time traffic updates, and interactive maps for any destination.",
  metadataBase: new URL("https://mapsdirectionsdriving.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mapsdirectionsdriving.com",
    siteName: "Maps Driving Directions",
    images: [
      {
        url: "/yahoo-maps-driving-directions.webp",
        width: 1200,
        height: 630,
        alt: "Maps Driving Directions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yahoomaps",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: 'google-site-verification=1234567890',
  },
  other: {
    'msvalidate.01': '9D8842ACF6F1B85171E74442F7DB195E',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msvalidate.01" content="9D8842ACF6F1B85171E74442F7DB195E" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link 
          rel="stylesheet" 
          href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" 
          precedence="default"
        />
        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="afterInteractive"
          data-ad-client="ca-pub-5759052465937199"
          crossOrigin="anonymous"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5D9VPL9LH5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5D9VPL9LH5');
          `}
        </Script>
        <meta name="google-site-verification" content="google-site-verification=1234567890" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:px-8" role="main">
            {children}
          </main>
          <Footer />
        </div>
        <Script 
          src="https://js.api.here.com/v3/3.1/mapsjs-core.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://js.api.here.com/v3/3.1/mapsjs-service.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://js.api.here.com/v3/3.1/mapsjs-ui.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js" 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
