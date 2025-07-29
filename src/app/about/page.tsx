'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About Maps Driving Directions
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <p className="text-gray-600">
            Maps Driving Directions is your reliable companion for navigation and route planning. We provide accurate, up-to-date directions and mapping services to help you reach your destination efficiently and safely. Want to see how we compare to other services? Check out our{' '}
            <Link href="/yahoo-maps-vs-google-maps" className="text-blue-600 hover:text-blue-700 font-medium">
              comparison with Google Maps
            </Link>.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to simplify navigation and make travel planning accessible to everyone. Whether you're planning a cross-country road trip, managing daily deliveries, or just finding the quickest route to work, we provide the tools and information you need. For helpful travel tips and route optimization strategies, visit our{' '}
              <Link href="/tips-for-travelers" className="text-blue-600 hover:text-blue-700 font-medium">
                Tips for Travelers
              </Link>{' '}
              page. Learn more about navigation best practices on{' '}
              <a href="https://www.transportation.gov/mission/health/safe-driving-tips" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                US Department of Transportation
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Accurate turn-by-turn directions</li>
              <li>Real-time traffic updates</li>
              <li>Multiple route options</li>
              <li>
                <Link href="/mapquest-mileage-calculator" className="text-blue-600 hover:text-blue-700">
                  Fuel cost calculation
                </Link>
              </li>
              <li>Business travel optimization</li>
              <li>Points of interest along your route</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment</h2>
            <p className="text-gray-600">
              We are committed to providing reliable navigation services while continuously improving our features based on user feedback. Our team works diligently to ensure that you have access to accurate maps, real-time traffic data, and useful travel information. Have questions? Visit our{' '}
              <Link href="/faqs" className="text-blue-600 hover:text-blue-700 font-medium">
                FAQ page
              </Link>{' '}
              for answers to common queries.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-4">
            <p className="text-gray-600">
              We value your privacy and security. Learn more about how we protect your data by reading our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 