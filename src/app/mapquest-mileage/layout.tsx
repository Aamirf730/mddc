import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MapQuest Mileage Calculator | Plan Trips & Estimate Costs',
  description: 'Calculate driving distances and fuel costs with MapQuest\'s Mileage Calculator. Get accurate distance calculations and plan your journey with confidence.',
  keywords: 'mapquest mileage calculator, trip distance calculator, fuel cost calculator, driving distance, route planner, gas cost estimator',
  metadataBase: new URL('https://mapsdirectionsdriving.com'),
  alternates: {
    canonical: '/mapquest-mileage',
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
    title: 'MapQuest Mileage Calculator | Plan Trips & Estimate Costs',
    description: 'Plan your journey with accurate distance calculations and fuel cost estimates using MapQuest\'s trusted Mileage Calculator.',
    url: 'https://mapsdirectionsdriving.com/mapquest-mileage',
    siteName: 'Maps Driving',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MapQuest Mileage Calculator | Plan Trips & Estimate Costs',
    description: 'Calculate distances and estimate fuel costs for your trips with MapQuest\'s reliable calculator.',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
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
            "url": "https://mapsdirectionsdriving.com/mapquest-mileage",
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