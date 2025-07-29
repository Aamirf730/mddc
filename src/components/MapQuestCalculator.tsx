'use client';

import { useState } from 'react';
import { Car, MapPin, Calculator, Clock, DollarSign, Fuel } from 'lucide-react';

export default function MapQuestCalculator() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [mpg, setMpg] = useState('25'); // Default MPG
  const [fuelCost, setFuelCost] = useState('3.50'); // Default fuel cost per gallon
  const [results, setResults] = useState<{
    distance: string;
    time: string;
    totalFuelCost: string;
    gallonsNeeded: string;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateDistance = async () => {
    // Validate inputs
    if (!fromLocation || !toLocation) {
      setError('Please enter both starting location and destination');
      return;
    }

    if (!mpg || isNaN(Number(mpg)) || Number(mpg) <= 0) {
      setError('Please enter a valid MPG value');
      return;
    }

    if (!fuelCost || isNaN(Number(fuelCost)) || Number(fuelCost) <= 0) {
      setError('Please enter a valid fuel cost per gallon');
      return;
    }

    setIsCalculating(true);
    setError(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_HERE_MAPS_API_KEY;
      
      // First, geocode both locations
      const [fromGeocode, toGeocode] = await Promise.all([
        fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(fromLocation)}&apiKey=${apiKey}`),
        fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(toLocation)}&apiKey=${apiKey}`)
      ]);

      const [fromData, toData] = await Promise.all([
        fromGeocode.json(),
        toGeocode.json()
      ]);

      if (!fromData.items?.[0] || !toData.items?.[0]) {
        throw new Error('Could not find one or both locations. Please check the addresses and try again.');
      }

      // Get coordinates
      const fromCoords = fromData.items[0].position;
      const toCoords = toData.items[0].position;

      // Calculate route
      const routeResponse = await fetch(
        `https://router.hereapi.com/v8/routes?transportMode=car&origin=${fromCoords.lat},${fromCoords.lng}&destination=${toCoords.lat},${toCoords.lng}&return=summary&apiKey=${apiKey}`
      );

      const routeData = await routeResponse.json();

      if (!routeData.routes?.[0]?.sections?.[0]?.summary) {
        throw new Error('Could not calculate the route. Please try again.');
      }

      const summary = routeData.routes[0].sections[0].summary;
      
      // Convert meters to miles and seconds to hours/minutes
      const miles = (summary.length / 1609.34).toFixed(1);
      const hours = Math.floor(summary.duration / 3600);
      const minutes = Math.round((summary.duration % 3600) / 60);

      // Calculate fuel needed and cost
      const gallonsNeeded = (Number(miles) / Number(mpg)).toFixed(2);
      const totalFuelCost = (Number(gallonsNeeded) * Number(fuelCost)).toFixed(2);

      setResults({
        distance: `${miles} miles`,
        time: `${hours}:${minutes.toString().padStart(2, '0')}`,
        totalFuelCost: `$${totalFuelCost}`,
        gallonsNeeded: `${gallonsNeeded} gallons`
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while calculating the route');
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Enter Route Details</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">Starting Location</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="from"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter starting address"
              />
            </div>
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">Destination</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="to"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter destination address"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="mpg" className="block text-sm font-medium text-gray-700">Vehicle MPG</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Car className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="mpg"
                  value={mpg}
                  onChange={(e) => setMpg(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="25"
                  min="1"
                />
              </div>
            </div>
            <div>
              <label htmlFor="fuelCost" className="block text-sm font-medium text-gray-700">Fuel Cost/Gallon</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="fuelCost"
                  value={fuelCost}
                  onChange={(e) => setFuelCost(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="3.50"
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={calculateDistance}
            disabled={isCalculating}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <>
                <Clock className="w-5 h-5 mr-2 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Distance
              </>
            )}
          </button>
          {error && (
            <div className="text-red-600 text-sm mt-2">
              {error}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Trip Summary</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Car className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Total Distance</p>
              <p className="text-gray-600">{results?.distance || '-- miles'}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Estimated Time</p>
              <p className="text-gray-600">{results?.time ? `${results.time} hours` : '-- hours -- minutes'}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Fuel className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Fuel Needed</p>
              <p className="text-gray-600">{results?.gallonsNeeded || '-- gallons'}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <DollarSign className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Estimated Fuel Cost</p>
              <p className="text-gray-600">{results?.totalFuelCost || '--'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 