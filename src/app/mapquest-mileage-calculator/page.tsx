'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const MapQuestCalculator = dynamic(() => import('@/components/MapQuestCalculator'), {
  ssr: false
});

export default function MapQuestMileageCalculator() {
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          MapQuest Mileage Calculator: Your Ultimate Trip Planning Tool
        </h1>

        {/* Calculator Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <MapQuestCalculator />
        </div>

        <div className="prose prose-blue max-w-none space-y-6">
          <p className="text-gray-600">
            MapQuest's Mileage Calculator is an essential tool for anyone planning a road trip, managing business travel, or calculating fuel costs. Whether you're planning a cross-country adventure or optimizing your delivery routes, this comprehensive guide will help you make the most of MapQuest's distance calculation features. For additional travel planning resources, check out our{' '}
            <Link href="/tips-for-travelers" className="text-blue-600 hover:text-blue-700">
              Tips for Travelers
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Understanding MapQuest's Mileage Calculator</h2>
          
          <p className="text-gray-600">
            The MapQuest Mileage Calculator is more than just a distance measurement tool. It's a comprehensive planning assistant that helps you:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Calculate precise distances between multiple locations</li>
            <li>Estimate fuel costs based on your vehicle's efficiency</li>
            <li>Plan optimal routes for multi-stop journeys</li>
            <li>Find convenient rest stops and points of interest along your route</li>
            <li>Track mileage for business expense reports</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Key Features and Benefits</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Accurate Distance Calculations:</h3>
              <p className="text-gray-600">
                MapQuest uses up-to-date mapping data to provide accurate distance calculations along actual driving routes, not just straight-line distances. This ensures you get realistic estimates for your journey. Compare this with other mapping services in our{' '}
                <Link href="/yahoo-maps-vs-google-maps" className="text-blue-600 hover:text-blue-700">
                  detailed comparison guide
                </Link>.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Multi-Stop Route Planning:</h3>
              <p className="text-gray-600">
                Add up to 26 stops in a single route and let MapQuest optimize the order for maximum efficiency. This feature is particularly valuable for delivery drivers and sales representatives who need to visit multiple locations in one day.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Fuel Cost Estimation:</h3>
              <p className="text-gray-600">
                Input your vehicle's fuel efficiency (MPG) and current gas prices to get an estimate of fuel costs for your trip. This helps with budgeting and comparing different route options. Check current fuel prices on{' '}
                <a href="https://gasprices.aaa.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  AAA Gas Prices
                </a>{' '}
                and learn about fuel efficiency at{' '}
                <a href="https://www.fueleconomy.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  FuelEconomy.gov
                </a>.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">How to Use the Mileage Calculator Effectively</h2>

          <ol className="list-decimal pl-6 space-y-4 text-gray-600">
            <li>
              <span className="font-medium text-gray-900">Enter Locations:</span>
              {' '}Start by entering your starting point and destination. For multi-stop trips, use the "Add Stop" feature to include additional locations.
            </li>
            <li>
              <span className="font-medium text-gray-900">Choose Route Options:</span>
              {' '}Select your preferences for highways, toll roads, and other routing options to get the most relevant distance calculation.
            </li>
            <li>
              <span className="font-medium text-gray-900">Review Alternative Routes:</span>
              {' '}MapQuest often provides multiple route options. Compare them to find the best balance of distance, time, and road conditions.
            </li>
            <li>
              <span className="font-medium text-gray-900">Calculate Fuel Costs:</span>
              {' '}Use the fuel cost calculator by entering your vehicle's MPG and local gas prices for accurate trip expense estimation.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Tips for Business Users</h2>

          <div className="space-y-4">
            <p className="text-gray-600">
              For business users, MapQuest's Mileage Calculator offers several valuable features:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Export trip data for expense reports and reimbursement claims</li>
              <li>Save frequently used routes for quick access</li>
              <li>Track mileage for tax deduction purposes</li>
              <li>Optimize delivery routes to save time and fuel</li>
            </ul>

            <p className="text-gray-600">
              Business travelers can combine these features with our{' '}
              <Link href="/tips-for-travelers" className="text-blue-600 hover:text-blue-700">
                travel tips
              </Link>
              {' '}for more efficient journey planning.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Making the Most of Your Trip Planning</h2>

          <p className="text-gray-600">
            Whether you're planning a family vacation, managing a delivery fleet, or tracking business travel expenses, MapQuest's Mileage Calculator is an invaluable tool. By providing accurate distance calculations, fuel cost estimates, and route optimization features, it helps you make informed decisions about your travel plans.
          </p>

          <p className="text-gray-600">
            Remember to consider factors like traffic patterns, road conditions, and potential detours when planning your route. MapQuest's real-time traffic updates and alternative route suggestions can help you navigate around delays and keep your journey on schedule.
          </p>
        </div>
      </div>
    </main>
  );
} 