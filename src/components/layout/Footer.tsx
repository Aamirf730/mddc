'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t w-full relative mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="px-4 sm:px-0">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/mapquest-mileage-calculator" className="text-base text-gray-500 hover:text-gray-900">
                  MapQuest Mileage Calculator
                </Link>
              </li>
              <li>
                <Link href="/tips-for-travelers" className="text-base text-gray-500 hover:text-gray-900">
                  Travel Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="px-4 sm:px-0">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/yahoo-maps-vs-google-maps" className="text-base text-gray-500 hover:text-gray-900">
                  Yahoo Maps vs Google Maps
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-base text-gray-500 hover:text-gray-900">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="px-4 sm:px-0">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-400 text-center">
            © {currentYear} Maps Driving Directions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 