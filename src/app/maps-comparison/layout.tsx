import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yahoo Maps vs Google Maps | In-Depth Feature Comparison',
  description: 'Discover the key differences between Yahoo Maps and Google Maps for driving directions, features, and usability. Find the best mapping service for your navigation needs.',
  keywords: 'yahoo maps vs google maps, maps comparison, navigation comparison, driving directions comparison, online maps comparison',
  metadataBase: new URL('https://mapsdirectionsdriving.com'),
  alternates: {
    canonical: '/yahoo-maps-vs-google-maps',
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
    title: 'Yahoo Maps vs Google Maps | In-Depth Feature Comparison',
    description: 'Side-by-side comparison of Yahoo Maps and Google Maps features, coverage, and navigation capabilities. Choose the best service for your needs.',
    url: 'https://mapsdirectionsdriving.com/yahoo-maps-vs-google-maps',
    siteName: 'Maps Driving',
    type: 'article',
    locale: 'en_US',
    publishedTime: new Date().toISOString(),
    authors: ['Maps Driving Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yahoo Maps vs Google Maps | Feature Comparison',
    description: 'Compare key features of Yahoo Maps and Google Maps to find your ideal navigation service.',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 