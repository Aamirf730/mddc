'use client';

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p className="text-gray-600">
              When you use Maps Driving Directions, we collect certain information to provide and improve our services. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-1">
              <li>Location data when you request directions</li>
              <li>Search queries and routing preferences</li>
              <li>Device information and IP address</li>
              <li>Usage data to improve our services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-1">
              <li>Provide accurate navigation and directions</li>
              <li>Improve our mapping services</li>
              <li>Offer real-time traffic updates</li>
              <li>Enhance user experience</li>
              <li>Maintain service security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Protection</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure. Your data is encrypted during transmission and stored securely.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
            <p className="text-gray-600">
              Our service may use third-party services for maps, traffic data, and analytics. These providers have their own privacy policies and data handling practices. We recommend reviewing their policies for more information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Choices</h2>
            <p className="text-gray-600">
              You can control certain data collection features through your device settings. You may opt out of location services, though this may limit some functionality of our navigation features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Updates to Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy periodically. We will notify users of any material changes through our website or other appropriate means.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-500">
              Last updated: March 2024. For questions about our privacy policy, please contact us.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 