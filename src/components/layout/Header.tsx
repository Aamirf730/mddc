'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm" role="banner">
      <nav className="px-0 py-4" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <img 
                src="/images/logo.png"
                alt="Maps Driving Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-2xl font-bold text-gray-900">Mapquest Directions - Maps and Driving Routes Online</h1>
            </Link>

            {/* Hamburger menu button */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    href="/mapquest-route-planner" 
                    className={`text-sm font-medium ${
                      pathname === '/mapquest-route-planner' 
                        ? 'text-blue-600' 
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Mapquest Route Planner
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/mapquest-mileage-calculator" 
                    className={`text-sm font-medium ${
                      pathname === '/mapquest-mileage-calculator' 
                        ? 'text-blue-600' 
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    MapQuest Mileage
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/mapquest-route-planner" 
                  className={`text-sm font-medium block ${
                    pathname === '/mapquest-route-planner' 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mapquest Route Planner
                </Link>
              </li>
              <li>
                <Link 
                  href="/mapquest-mileage-calculator" 
                  className={`text-sm font-medium block ${
                    pathname === '/mapquest-mileage-calculator' 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  MapQuest Mileage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
} 