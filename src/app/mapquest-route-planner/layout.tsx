import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "Mapquest Route Planner"
  },
  description: 'Plan your journey with Mapquest Route Planner. Create custom routes with multiple stops, reorder stops for efficiency, and optimize travel time. Free trip planning tool with options to avoid tolls, highways, and more.',
  keywords: 'mapquest route planner, multi-stop route planner, trip planner, mapquest driving directions, travel planner, road trip planner, custom routes',
  metadataBase: new URL('https://mapsdirectionsdriving.com'),
  alternates: {
    canonical: '/mapquest-route-planner',
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
    title: 'Mapquest Route Planner',
    description: 'Plan efficient journeys with multiple stops using Mapquest Route Planner. Easily reorder stops, avoid tolls, and customize your route for optimal travel.',
    url: 'https://mapsdirectionsdriving.com/mapquest-route-planner',
    siteName: 'Mapquest Directions',
    type: 'article',
    locale: 'en_US',
    publishedTime: new Date().toISOString(),
    authors: ['Mapquest Directions Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mapquest Route Planner',
    description: 'Create optimized travel routes with multiple stops. Reorder stops for efficiency and customize your journey with the free Mapquest Route Planner.',
  },
  verification: {
    google: 'google-site-verification=1234567890',
  },
};

export default function RoutePlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 