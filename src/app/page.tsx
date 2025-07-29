'use client';

import { useState, useEffect } from 'react';
import { Car, PersonStanding, Bike } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import DirectionsForm from '@/components/DirectionsForm';
import DirectionsList from '@/components/DirectionsList';
import type { DirectionsResult, RouteResult } from '@/types/maps';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [directions, setDirections] = useState<DirectionsResult | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [transportMode, setTransportMode] = useState<string>('car');
  const [currentRoute, setCurrentRoute] = useState<{ from: string; to: string } | null>(null);
  const [map, setMap] = useState<any>(null);
  const [platform, setPlatform] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    const getUserLocationFromIP = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.latitude && data.longitude) {
          const location = {
            lat: data.latitude,
            lng: data.longitude
          };
          return location;
        }
        throw new Error('Invalid location data from IP');
      } catch {
        return { lat: 20, lng: 0 };
      }
    };

    const initMap = async () => {
      try {
        const location = await getUserLocationFromIP();

        if (!window.H || !window.H.service || !window.H.service.Platform) {
          throw new Error('HERE Maps SDK not loaded properly');
        }

        const apiKey = process.env.NEXT_PUBLIC_HERE_API_KEY;
        if (!apiKey) {
          // Instead of throwing an error, show a user-friendly message
          setMapError('Map functionality requires a HERE Maps API key. Please contact the administrator to configure the API key.');
          setIsMapLoading(false);
          return;
        }

        const platform = new window.H.service.Platform({
          apikey: apiKey
        });
        setPlatform(platform);

        const defaultLayers = platform.createDefaultLayers();
        const mapElement = document.getElementById('map');

        if (!mapElement) {
          throw new Error('Map container not found');
        }

        const mapInstance = new window.H.Map(
          mapElement,
          defaultLayers.vector.normal.map,
          {
            center: { lat: location.lat, lng: location.lng },
            zoom: 12,
            pixelRatio: window.devicePixelRatio || 1
          }
        );

        // Enable map interaction
        new window.H.mapevents.Behavior(
          new window.H.mapevents.MapEvents(mapInstance)
        );

        // Create UI components
        window.H.ui.UI.createDefault(mapInstance, defaultLayers);

        // Add user location marker
        const marker = new window.H.map.Marker(location);
        mapInstance.addObject(marker);

        if (isMounted) {
          setMap(mapInstance);
          setIsMapLoading(false);
          setMapError(null);
        }

        // Handle window resize
        const resizeHandler = () => mapInstance.getViewPort().resize();
        window.addEventListener('resize', resizeHandler);

        return () => {
          window.removeEventListener('resize', resizeHandler);
          if (mapInstance) {
            mapInstance.dispose();
          }
        };
      } catch (error) {
        if (isMounted) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          setMapError(`Failed to initialize the map: ${errorMessage}. Please refresh the page or check your internet connection.`);
          setIsMapLoading(false);
        }
      }
    };

    // Initialize map after a delay to ensure scripts are loaded
    const timer = setTimeout(initMap, 1000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  const getDirections = async (from: string, to: string) => {
    setCurrentRoute({ from, to });
    setIsLoading(true);
    setMapError(null);

    if (!map || !platform) {
      setMapError('Map is not initialized. Please refresh the page.');
      setIsLoading(false);
      return;
    }

    try {
      const apiKey = process.env.NEXT_PUBLIC_HERE_API_KEY;
      if (!apiKey) {
        setMapError('Map functionality requires a HERE Maps API key. Please contact the administrator to configure the API key.');
        setIsLoading(false);
        return;
      }

      // First, geocode both locations
      const [fromGeocode, toGeocode] = await Promise.all([
        fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(from)}&apiKey=${apiKey}`),
        fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(to)}&apiKey=${apiKey}`)
      ]);

      const [fromData, toData] = await Promise.all([
        fromGeocode.json(),
        toGeocode.json()
      ]);

      if (!fromData.items?.[0] || !toData.items?.[0]) {
        throw new Error('Could not find one or both locations. Please check the addresses and try again.');
      }

      const fromCoords = fromData.items[0].position;
      const toCoords = toData.items[0].position;

      // Calculate route
      const routeResponse = await fetch(
        `https://router.hereapi.com/v8/routes?transportMode=${transportMode}&origin=${fromCoords.lat},${fromCoords.lng}&destination=${toCoords.lat},${toCoords.lng}&return=summary,polyline,actions,instructions&apiKey=${apiKey}`
      );

      const routeData = await routeResponse.json() as RouteResult;

      if (!routeData.routes?.[0]?.sections?.[0]) {
        throw new Error('Could not calculate the route. Please try again.');
      }

      const section = routeData.routes[0].sections[0];
      
      // Format directions
      const formattedDirections: DirectionsResult = {
        distance: `${(section.summary.length / 1609.34).toFixed(1)} miles`,
        duration: `${Math.floor(section.summary.duration / 3600)}:${Math.round((section.summary.duration % 3600) / 60).toString().padStart(2, '0')}`,
        steps: section.actions.map((action) => ({
          instruction: action.instruction,
          distance: action.length / 1609.34
        }))
      };

      setDirections(formattedDirections);

      // Clear existing objects from the map
      map.removeObjects(map.getObjects());

      // Create route line
      const lineString = window.H.geo.LineString.fromFlexiblePolyline(section.polyline);
      const routeLine = new window.H.map.Polyline(lineString, {
        style: { strokeColor: '#1a73e8', lineWidth: 4 }
      });

      // Add markers for start and end points
      const startPoint = new window.H.map.Marker(fromCoords);
      const endPoint = new window.H.map.Marker(toCoords);

      // Add route and markers to the map
      map.addObjects([routeLine, startPoint, endPoint]);

      // Set viewport to show the whole route
      map.getViewModel().setLookAtData({
        bounds: routeLine.getBoundingBox()
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while calculating the route';
      setMapError(errorMessage);
      setDirections(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script id="homepage-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://mapsdirectionsdriving.com",
            "name": "Mapquest Directions - Maps and Driving Routes Online",
            "description": "Get accurate driving directions, calculate distances, and plan your trips with our comprehensive mapping tools.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://mapsdirectionsdriving.com/?from={from}&to={to}"
              },
              "query-input": [
                {
                  "@type": "PropertyValueSpecification",
                  "valueRequired": true,
                  "valueName": "from"
                },
                {
                  "@type": "PropertyValueSpecification",
                  "valueRequired": true,
                  "valueName": "to"
                }
              ]
            },
            "hasPart": [
              {
                "@type": "WebPage",
                "url": "https://mapsdirectionsdriving.com/mapquest-mileage-calculator",
                "name": "MapQuest Mileage Calculator",
                "description": "Calculate trip distances and fuel costs"
              },
              {
                "@type": "WebPage",
                "url": "https://mapsdirectionsdriving.com/tips-for-travelers",
                "name": "Travel Tips",
                "description": "Essential tips for road trips and delivery drivers"
              },
              {
                "@type": "WebPage",
                "url": "https://mapsdirectionsdriving.com/yahoo-maps-vs-google-maps",
                "name": "Maps Comparison",
                "description": "Compare Yahoo Maps and Google Maps features"
              }
            ]
          }
        `}
      </Script>
      <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
        <div className="space-y-6 max-h-[700px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-6 py-1 border-b">
              <button
                onClick={() => {
                  setTransportMode('car');
                  if (currentRoute) getDirections(currentRoute.from, currentRoute.to);
                }}
                className={`flex items-center gap-1 transition-colors px-1 ${
                  transportMode === 'car' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Car className="w-4 h-4" />
                <span className="text-xs">Drive</span>
              </button>
              <button
                onClick={() => {
                  setTransportMode('pedestrian');
                  if (currentRoute) getDirections(currentRoute.from, currentRoute.to);
                }}
                className={`flex items-center gap-1 transition-colors px-1 ${
                  transportMode === 'pedestrian' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <PersonStanding className="w-4 h-4" />
                <span className="text-xs">Walk</span>
              </button>
              <button
                onClick={() => {
                  setTransportMode('bicycle');
                  if (currentRoute) getDirections(currentRoute.from, currentRoute.to);
                }}
                className={`flex items-center gap-1 transition-colors px-1 ${
                  transportMode === 'bicycle' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Bike className="w-4 h-4" />
                <span className="text-xs">Bike</span>
              </button>
            </div>
          </div>
          <DirectionsForm onSubmit={getDirections} isLoading={isLoading} />
          {mapError && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <p className="text-sm text-red-700">{mapError}</p>
              </div>
            </div>
          )}
          <DirectionsList directions={directions} />
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 text-sm">
              Need to calculate trip costs? Try our{' '}
              <Link href="/mapquest-mileage-calculator" className="text-blue-600 hover:text-blue-700">
                MapQuest Mileage Calculator
              </Link>{' '}
              and{' '}
              <Link href="https://mapsdriving-directions.com/" className="text-blue-600 hover:text-blue-700">
                MapQuest Directions
              </Link>{' '}
              to estimate distances and fuel expenses. For navigation tips and route planning strategies, check out our{' '}
              <Link href="/tips-for-travelers" className="text-blue-600 hover:text-blue-700">
                Tips for Travelers
              </Link>{' '}
              guide. Wondering how our service compares? See our comparison with Google Maps.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
          <div id="map" className="w-full h-[700px]"></div>
          {isMapLoading && (
            <div className="absolute inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-700 font-medium">Loading map...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
