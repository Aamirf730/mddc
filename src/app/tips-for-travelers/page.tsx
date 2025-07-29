'use client';

import { Car, MapPin, Coffee, AlertTriangle, Package, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function TipsPage() {
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Tips for Road Trips and Travelers
        </h1>

        <div className="space-y-8">
          {/* Road Trip Tips Section */}
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Using MapQuest can enhance your road trip planning. Here are a few tips. For detailed information about our mapping services, check out our{' '}
              <Link href="/yahoo-maps-vs-google-maps" className="text-blue-600 hover:text-blue-700">
                comparison with Google Maps
              </Link>.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <Coffee className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Plan Rest Stops</h2>
                    <p className="text-gray-600">
                      On a long drive, you'll likely need breaks for fuel, food, or sightseeing. MapQuest allows you to search for gas stations, restaurants, or hotels along your route. Use our{' '}
                      <Link href="/mapquest-mileage-calculator" className="text-blue-600 hover:text-blue-700">
                        Mileage Calculator
                      </Link>{' '}
                      to estimate distances between stops and plan your breaks efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Have a Backup Map</h2>
                    <p className="text-gray-600">
                      While digital navigation is convenient, it's wise to have a backup plan. Download offline maps or keep a paper map as a backup. Check out{' '}
                      <a href="https://www.nhtsa.gov/road-safety" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        NHTSA's Road Safety Guidelines
                      </a>{' '}
                      for more safety tips, and visit{' '}
                      <a href="https://www.weather.gov/safety/travel" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        National Weather Service
                      </a>{' '}
                      for travel weather updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Stay Aware of Conditions</h2>
                    <p className="text-gray-600">
                      Check weather and road conditions before and during your trip. MapQuest provides real-time traffic updates to help you avoid delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tips for Delivery Drivers and Business Travel</h2>
            <p className="text-gray-600 mb-6">
              MapQuest is also popular among delivery drivers, sales reps, and others who need to navigate to many addresses in one trip. If you're using MapQuest for work driving:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <Package className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Optimize Multi-Stop Routes</h2>
                    <p className="text-gray-600">
                      Enter all your stops into MapQuest and use the Optimize feature to find the most efficient order. You can include up to 26 stops in one route. If you have more than that in a single day, break them into two routes (e.g. morning and afternoon) to stay within the limit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <Navigation className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Use the App for Navigation</h2>
                    <p className="text-gray-600">
                      When making many stops, use the MapQuest mobile app for guided navigation. It will seamlessly take you from one stop to the next without you having to constantly input addresses, making your delivery run smoother. Plus, you'll get real-time traffic updates for each leg of the journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <Car className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Be Flexible and Safe</h2>
                    <p className="text-gray-600">
                      If a new delivery comes up or traffic forces a change, you can easily add a stop or reorder your route in MapQuest. Take a minute to pull over and update your plan. The ability to quickly adjust will keep your schedule on track – just remember to make changes safely when you're not in motion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
              <p className="text-gray-600">
                MapQuest provides the tools to chart your course effectively, whether you're on a cross-country road trip or a daily delivery circuit. By leveraging its features like multi-stop optimization and live traffic updates, you can confidently find the best routes and reach all your destinations smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 