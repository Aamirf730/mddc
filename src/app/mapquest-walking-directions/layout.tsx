import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "Mapquest Walking Directions"
  },
  description: 'Find the easiest and nearest walking paths with Mapquest Walking Directions. Discover healthy routes for fitness, shopping, and daily commutes with turn-by-turn navigation for pedestrians.',
  keywords: 'mapquest walking directions, pedestrian routes, walking maps, walking navigation, fitness routes, nearby locations, walking paths',
  metadataBase: new URL('https://mapsdirectionsdriving.com'),
  alternates: {
    canonical: '/mapquest-walking-directions',
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
    title: 'Mapquest Walking Directions',
    description: 'Discover walking routes to nearby destinations, fitness centers, parks, and shopping areas. Plan your walking journey for health and convenience.',
    url: 'https://mapsdirectionsdriving.com/mapquest-walking-directions',
    siteName: 'Mapquest Directions',
    type: 'article',
    locale: 'en_US',
    publishedTime: new Date().toISOString(),
    authors: ['Mapquest Directions Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mapquest Walking Directions',
    description: 'Find walking-friendly routes to nearby destinations. Plan healthy journeys to shops, parks, and fitness centers using Mapquest Walking Directions.',
  },
  verification: {
    google: 'google-site-verification=1234567890',
  },
};

export default function WalkingDirectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 