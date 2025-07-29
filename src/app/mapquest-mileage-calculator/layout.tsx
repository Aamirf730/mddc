import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MapQuest Mileage Calculator | Calculate Trip Distance & Fuel Costs',
  description: 'Calculate driving distances and fuel costs with our free MapQuest mileage calculator. Get accurate distance calculations, plan your journey, and estimate fuel expenses with real-time traffic updates.',
  keywords: 'mapquest mileage calculator, trip distance calculator, fuel cost calculator, driving distance, route planner, gas cost estimator',
  metadataBase: new URL('https://mapsdirectionsdriving.com'),
  alternates: {
    canonical: '/mapquest-mileage-calculator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'MapQuest Mileage Calculator | Calculate Trip Distance & Fuel Costs',
    description: 'Plan your journey with accurate distance calculations and fuel cost estimates using our trusted MapQuest mileage calculator.',
    url: 'https://mapsdirectionsdriving.com/mapquest-mileage-calculator',
    siteName: 'Maps Driving',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MapQuest Mileage Calculator | Calculate Trip Distance & Fuel Costs',
    description: 'Calculate distances and estimate fuel costs for your trips with our reliable calculator.',
  },
  verification: {
    google: 'google-site-verification=1234567890',
  },
};

export default function MapQuestMileageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="mileage-calculator-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "MapQuest Mileage Calculator",
            "description": "Calculate driving distances and estimate fuel costs for your trips",
            "url": "https://mapsdirectionsdriving.com/mapquest-mileage-calculator",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Distance calculation",
              "Fuel cost estimation",
              "Multi-stop route planning",
              "Real-time traffic updates"
            ]
          }
        `}
      </Script>
      {children}
    </>
  );
} 