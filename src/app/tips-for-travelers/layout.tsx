import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Tips | Smart Guide for Road Trips & Delivery Drivers',
  description: 'Practical tips for road trips and delivery drivers using MapQuest. Learn to plan rest stops, optimize routes, and navigate efficiently for both leisure and business travel.',
  keywords: 'travel tips, road trip planning, delivery driver tips, mapquest navigation, route optimization, travel guide',
  metadataBase: new URL('https://mapsdirectionsdriving.com'),
  alternates: {
    canonical: '/tips-for-travelers',
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
    title: 'Travel Tips | Smart Guide for Road Trips & Delivery Drivers',
    description: 'Expert advice for road trips and delivery drivers. Master route planning, rest stops, and efficient navigation using MapQuest.',
    url: 'https://mapsdirectionsdriving.com/tips-for-travelers',
    siteName: 'Maps Driving',
    type: 'article',
    locale: 'en_US',
    publishedTime: new Date().toISOString(),
    authors: ['Maps Driving Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Tips | Smart Guide for Road Trips & Delivery Drivers',
    description: 'Proven tips for road trips and delivery drivers. Master route planning and navigation strategies.',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};

export default function TipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 