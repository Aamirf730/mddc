'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function RoutePlannerPage() {
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Mapquest Route Planner
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              The worlds top most maps service provider on this globe which facilitates you with Mapquest route planner which can help you to create your own route planner, in which you can have multiple stops and for making it more shorter your route then allow them to re-order stops on your route. Like, if you want to travel from your home to a city mall or something, you can create your route to there and add multiple stops like a gas station, wallmart, etc. Now, once you allow them to re-order your route they will automatically arrange the line of route planner that which place comes first in your way, in the Mapquest driving directions towards your mall.
            </p>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Image 
                  src="/images/Mapquest-Route-Planner-point.png" 
                  alt="Mapquest Route Planner Example showing routes with multiple points"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <figcaption className="bg-gray-50 p-3 text-sm text-gray-600 text-center">
                  Mapquest Route Planner with multiple destination points
                </figcaption>
              </figure>
              
              <figure className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Image 
                  src="/images/Mapquest-Route-Planner-Settings.png" 
                  alt="Mapquest Route Planner Settings for customizing your route"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <figcaption className="bg-gray-50 p-3 text-sm text-gray-600 text-center">
                  Route settings and customization options
                </figcaption>
              </figure>
            </div>

            <p className="text-gray-600 mb-6">
              As we have shown in the image, That the starting point is Blanket, TX and a stop between is Comanche, TX while the stopping point is Sidney, TX. The Mapquest route planner also helps you to avoid seasonal roads, toll roads, highways, ferries, timed restricted and country borders. You can also convert the distance from miles to kilometers by just allowing it in the route settings. These things may help you a lot while traveling from someplace to another. Cause, when we enter in the different city from ours, they follow different rule and regulations. We can also get the Mapquest walking directions of another city as well as ours. It can help you to find the best area for jogging which is near to you and fitness centers, gyms, etc.
            </p>

            <p className="text-gray-600 mb-6">
              The mapquest route planner also facilitates you with its copy/paste program. In which you just have to copy an address given to you or created by you in the Route planner copy/paste options. You have to open it and paste the copied address in the given blank space and click on the get directions button. It will show you the directions towards the pasted address from your current location.
            </p>

            <p className="text-gray-600 mb-6">
              You may also like the Import option of Mapquest route planner, Which allows you to import the files of addresses that you may have downloaded from your email or someone has sent you or maybe you have created it by your own. Open the Import option Drag the file or click on Browse option, But remember it only allows .xls, .xlsx, .CVS files only that you can import. Once you have imported then it will show you the directions of the places that had been written in your files from your location. It can help you a lot.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How mapquest route planner can help you?
            </h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
              <li>Open the Mapquest driving directions official webpage from Google maps or directly.</li>
              <li>You will see a menu option at the left upper corner.</li>
              <li>Open that menu, and click on Mapquest ROUTE PLANNER.</li>
              <li>Once you have opened it, you find three options 'Line by line' 'Copy/Paste' 'Import'.</li>
              <li>Choose among these easy option to get your Mapquest route planner ready to go.</li>
            </ol>

            <p className="text-gray-600 mb-6">
              The mapquest help you with many things on the journey with family, friends or as a couple. Use it before leaving your home while going on a trip or something which will make sure that you have completely known about everything about the Mapquest Route planner the world easiest road trip planner for anyone, because of it free of cost. We wish you a happy journey, Stay blessed.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
              <p className="text-blue-700">
                <strong>Pro Tip:</strong> Create and save your frequently used routes to save time on future trips. You can easily access them from your account dashboard.
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
                  <Link href="/mapquest-mileage-calculator" className="text-blue-600 hover:text-blue-800">
                    Mapquest Mileage Calculator
                  </Link>
                  <span className="text-gray-500"> - Calculate trip distances and fuel costs</span>
                </li>
                <li>
                  <Link href="/tips-for-travelers" className="text-blue-600 hover:text-blue-800">
                    Travel Tips
                  </Link>
                  <span className="text-gray-500"> - Essential advice for road trips</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Script id="route-planner-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Use Mapquest Route Planner",
            "description": "Step-by-step guide to creating custom routes with multiple stops using Mapquest Route Planner",
            "totalTime": "PT5M",
            "tool": {
              "@type": "HowToTool",
              "name": "Web Browser"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Navigate to Mapquest",
                "text": "Open the Mapquest driving directions official webpage",
                "url": "https://mapsdirectionsdriving.com",
                "image": "/images/Mapquest-Route-Planner-point.png"
              },
              {
                "@type": "HowToStep",
                "name": "Find Route Planner",
                "text": "Click on the menu option at the left upper corner",
                "url": "https://mapsdirectionsdriving.com/mapquest-route-planner"
              },
              {
                "@type": "HowToStep",
                "name": "Select Route Planner",
                "text": "Open the menu and click on Mapquest ROUTE PLANNER"
              },
              {
                "@type": "HowToStep",
                "name": "Choose Input Method",
                "text": "Select one of the three options: 'Line by line', 'Copy/Paste', or 'Import'"
              },
              {
                "@type": "HowToStep",
                "name": "Create Your Route",
                "text": "Enter your starting point, destinations, and any stops in between"
              }
            ]
          }
        `}
      </Script>
    </main>
  );
} 