'use client';

import { Car, Clock } from 'lucide-react';
import type { DirectionsResult } from '@/types/maps';

interface DirectionsListProps {
  directions: DirectionsResult | null;
}

export default function DirectionsList({ directions }: DirectionsListProps) {
  if (!directions) return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="text-gray-600 space-y-4">
        <p>Mapquest directions is a powerful online navigation tool that helps you find the best routes to your destination. Whether you're commuting to work or embarking on a cross-country road trip, Maps' mapping service provides accurate turn-by-turn directions along with real-time traffic updates. With its user-friendly interface and comprehensive features, it offers a reliable way to plan your drives and explore new places.</p>
        
        <p>Getting started with Mapquest directions is simple. Just enter your starting point and destination, and the tool will quickly calculate the optimal route for you. You can view the path on an interactive map and follow detailed driving instructions. Maps will also estimate your travel time based on current traffic conditions, so you know exactly when you'll arrive. The platform is web-based, meaning you can access it from any computer or mobile device browser without needing a separate app. This makes it convenient to get directions on the go or even print them as a backup.</p>

        <h3 className="text-lg font-medium text-gray-900">Key Features of Mapquest directions</h3>

        <p><strong>Real-Time Traffic Updates:</strong> Maps provides live traffic data, allowing you to avoid congested highways, accidents, or road closures. The map highlights traffic slowdowns and suggests alternate routes so you can reach your destination faster and with fewer delays.</p>

        <p><strong>Multiple Route Options:</strong> The service often offers more than one route – such as the fastest vs. shortest path – giving you the flexibility to choose your preferred way. You can even customize your journey by dragging the route line on the map to pass through specific roads or areas.</p>

        <p><strong>Directions for Various Modes:</strong> Maps isn't limited to driving directions. It also supports walking and public transit routes in many locations, making it versatile for different travel needs. Simply select your mode of transportation (driving, walking, etc.) to get tailored directions.</p>

        <p><strong>Local Search & Points of Interest:</strong> Integrated local business listings help you find points of interest along your route. You can easily locate nearby restaurants, gas stations, hotels, and more directly on the map, ensuring you have everything you need during your trip without switching to another app.</p>

        <p><strong>Satellite View and Map Imagery:</strong> Need a clearer view of the area? Maps offers a satellite imagery mode for a bird's-eye perspective. In some regions, you may even access street-level imagery to virtually preview your route. These visual tools help you familiarize yourself with landmarks and intersections before you drive.</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="w-5 h-5 text-blue-600" />
            <span className="text-gray-900 font-medium">Total Distance:</span>
            <span className="text-gray-600">{directions.distance}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-gray-900 font-medium">Duration:</span>
            <span className="text-gray-600">{directions.duration} hours</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Turn-by-Turn Directions</h3>
          <ol className="space-y-4">
            {directions.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                  {index + 1}
                </span>
                <div className="ml-3">
                  <p className="text-gray-900">{step.instruction}</p>
                  <p className="text-sm text-gray-500">{typeof step.distance === 'number' ? step.distance.toFixed(1) : step.distance} miles</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
} 