'use client';

export default function FAQs() {
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Can I use Yahoo Maps on my mobile device?
            </h2>
            <p className="text-gray-600">
              Yes. Yahoo Maps is accessible on mobile devices through your web browser. There isn't a widely-used dedicated Yahoo Maps app, but you can simply open the Yahoo Maps website (or a navigation site that offers Yahoo Maps services) in your smartphone's browser to get directions. The mobile web interface provides the same driving directions features, allowing you to search for locations, get turn-by-turn routes, and view maps on the go.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Does Yahoo Maps provide real-time traffic updates?
            </h2>
            <p className="text-gray-600">
              Absolutely. Yahoo Maps includes real-time traffic information in many areas. It will display current traffic conditions such as congestion, accidents, or road work on the map. When you request driving directions, Yahoo Maps takes traffic into account to adjust your estimated travel time and may suggest alternate routes to avoid heavy traffic whenever possible. Keep in mind that traffic coverage can depend on the region – major cities tend to have more detailed live traffic data on Yahoo Maps.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Can I add multiple stops or customize my route on Yahoo Maps?
            </h2>
            <p className="text-gray-600">
              Yes, you can customize routes on Yahoo Maps. The platform allows you to add multiple destinations to a single trip by using the "Add Location" feature when getting directions. This way, you can plan a route with several stops. Additionally, Yahoo Maps lets you adjust your route manually – for example, you can click and drag the route line on the map to take a different road or go through a particular area, and it will recalculate the directions accordingly. These features help you tailor your journey to include pit stops or scenic routes as needed.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              How do I calculate mileage and fuel costs using MapQuest?
            </h2>
            <p className="text-gray-600">
              MapQuest automatically calculates the total mileage of your trip when you use its Directions feature. To get your mileage, just enter your starting point and destination (plus any stops) on the MapQuest Directions or Route Planner page. It will display the total distance of your trip. For fuel cost, MapQuest doesn't directly give a dollar amount, but you can figure it out easily: take the total miles and divide by your vehicle's miles-per-gallon (MPG) to estimate the number of gallons you'll use, then multiply that by the current gas price. For example, if your trip is 150 miles and your car gets 30 MPG, that's about 5 gallons of gas; at $3 per gallon, the trip would cost roughly $15 in fuel. MapQuest also offers an option to apply the IRS mileage reimbursement rate (for U.S. users), which can help if you're calculating mileage for business expenses.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Is MapQuest free to use for driving directions?
            </h2>
            <p className="text-gray-600">
              Yes, MapQuest is free for getting maps and driving directions. You can use MapQuest's website or mobile app at no charge to plan routes, view maps, and get turn-by-turn navigation. The core features – including the mileage calculator, live traffic updates, and multi-stop route planning – are available to all users without any fees. (MapQuest only charges for certain professional services like high-volume API access, which isn't something the average user needs to worry about.)
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Which is better for driving directions, Yahoo Maps or Google Maps?
            </h2>
            <p className="text-gray-600">
              Both Yahoo Maps and Google Maps will get you from point A to B, but there are some differences. Google Maps is more popular and generally offers more advanced features – it has extremely detailed maps worldwide, Street View imagery for many locations, extensive business listings, and very frequent updates. Yahoo Maps, on the other hand, provides the essential navigation functions and can be a solid alternative if you prefer a simpler interface or want to use Yahoo's services. If you just need straightforward directions and like the Yahoo interface, Yahoo Maps can serve you well. However, for the most up-to-date maps, broader global coverage, and extra tools (like public transit info or indoor maps), Google Maps has the edge. Ultimately, the "better" choice depends on your needs: casual drivers may find Yahoo Maps perfectly adequate, while power-users often lean toward Google Maps for its depth of information and features.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 