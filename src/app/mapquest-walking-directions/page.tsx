'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function WalkingDirectionsPage() {
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Mapquest Walking Directions
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              In this world of Mapquest walking directions, where you can do anything through your mobile phone when it's connected to the internet, You can order food, clothes, footwear, hair styling stuff, and many more things which are very useful to you on a daily basis. But besides these facilities, there are some disadvantages to have things done through this kind of process. For that Mapquest walking directions can help you to get these things done by your own for your better health.
            </p>

            <div className="my-6 flex justify-center">
              <figure className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Image 
                  src="/images/Mapquest-walking-directions.png" 
                  alt="Mapquest Walking Directions map showing a pedestrian route"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/e6f7ff/0069c2?text=Walking+Directions';
                  }}
                />
                <figcaption className="bg-gray-50 p-3 text-sm text-gray-600 text-center">
                  Mapquest walking directions interface
                </figcaption>
              </figure>
            </div>

            <p className="text-gray-600 mb-6">
              The best maps provider, Mapquest Walking Directions shows you the easiest and the nearest path that you can follow to reach out to your destination. As we imagine that you want to go for some shopping, and you want to find the nearest store to you like Gucci, Levi, Tommy Hilfiger, Supreme, Peter England, etc. Then you should use this website for getting the easiest route towards the store or a mall. This was a case 1, Now let's move on to case 2. As I have said above that how mapquest walking directions can help you to maintain your health and fitness, here is the second option. If you decide to find a fitness center or a gym, which is nearest to your home or you want someplace where you can meditate like a garden or public park, Mapquest Driving Directions which is pollution free for that mapquest walking directions can also help you. You can go on your own on your legs. You can find these places on it and do some exercise and jogging to get some healthful air and happy morning.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How to get the Mapquest walking directions?
            </h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
              <li>To get the walking directions, you need to open the official website of Mapquest.</li>
              <li>Now, you will see the menu option at the left upper corner of your window.</li>
              <li>Open the menu.</li>
              <li>Now, choose 'Get Directions' to get the Mapquest Walking Directions.</li>
              <li>You have to find the walking sign beside the car icon.</li>
              <li>Click on that walking icon.</li>
              <li>Fill the starting point from where you want to start your walk and the stopping point where you will stop.</li>
            </ol>

            <div className="my-6 flex justify-center">
              <figure className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Image 
                  src="/images/Mapquest-Walking-Directions-Settings.png" 
                  alt="Mapquest Walking Directions settings panel"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/e6f7ff/0069c2?text=Walking+Settings';
                  }}
                />
                <figcaption className="bg-gray-50 p-3 text-sm text-gray-600 text-center">
                  Walking directions settings options
                </figcaption>
              </figure>
            </div>

            <p className="text-gray-600 mb-6">
              It will create a map on the mapquest walking directions map window, which will create a line for the starting point and the ending point. This can help you to do things on your own and can help you keep yourself healthy and safe from diseases. We wish you happy feet or a happy walk towards your healthy life.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
              <p className="text-blue-700">
                <strong>Health Tip:</strong> Walking just 30 minutes a day can significantly improve your cardiovascular health, boost your mood, and help manage weight. Using Mapquest's walking directions to find scenic routes or nearby parks can make daily walks more enjoyable.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Mapquest Directions
                  </Link>
                  <span className="text-gray-500"> - Get turn-by-turn navigation</span>
                </li>
                <li>
                  <Link href="/mapquest-route-planner" className="text-blue-600 hover:text-blue-800">
                    Mapquest Route Planner
                  </Link>
                  <span className="text-gray-500"> - Create multi-stop routes</span>
                </li>
                <li>
                  <Link href="/tips-for-travelers" className="text-blue-600 hover:text-blue-800">
                    Travel Tips
                  </Link>
                  <span className="text-gray-500"> - Essential advice for travelers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Script id="walking-directions-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Get Mapquest Walking Directions",
            "description": "Step-by-step guide for using Mapquest Walking Directions to find pedestrian routes",
            "totalTime": "PT3M",
            "tool": {
              "@type": "HowToTool",
              "name": "Web Browser"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Open Mapquest",
                "text": "Open the official website of Mapquest",
                "url": "https://mapsdirectionsdriving.com"
              },
              {
                "@type": "HowToStep",
                "name": "Find Menu",
                "text": "Look for the menu option at the left upper corner of your window"
              },
              {
                "@type": "HowToStep",
                "name": "Open Menu",
                "text": "Click to open the menu"
              },
              {
                "@type": "HowToStep",
                "name": "Get Directions",
                "text": "Choose 'Get Directions' to access walking directions"
              },
              {
                "@type": "HowToStep",
                "name": "Select Walking Mode",
                "text": "Find and click on the walking icon beside the car icon"
              },
              {
                "@type": "HowToStep",
                "name": "Enter Locations",
                "text": "Enter your starting point and destination"
              },
              {
                "@type": "HowToStep",
                "name": "View Route",
                "text": "View your walking route on the map"
              }
            ]
          }
        `}
      </Script>
    </main>
  );
} 