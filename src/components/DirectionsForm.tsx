'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface DirectionsFormProps {
  onSubmit: (from: string, to: string) => void;
  isLoading: boolean;
}

export default function DirectionsForm({ onSubmit, isLoading }: DirectionsFormProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(from, to);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter starting location"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter destination"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Getting Directions...' : 'Get Directions'}
        </button>
      </div>
    </form>
  );
} 