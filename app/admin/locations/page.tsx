'use client';

import { Plus, MapPin } from 'lucide-react';

export default function LocationsPage() {
  const locations = [
    { id: '1', name: 'New York, NY', vendors: 145, area: 'Manhattan' },
    { id: '2', name: 'Los Angeles, CA', vendors: 98, area: 'Downtown LA' },
    { id: '3', name: 'Chicago, IL', vendors: 76, area: 'Loop' },
    { id: '4', name: 'Houston, TX', vendors: 54, area: 'Downtown' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Locations</h1>
          <p className="text-gray-500 mt-1">Manage service areas and locations</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Location
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Area</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active Vendors</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {locations.map((location) => (
              <tr key={location.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span className="font-medium text-gray-900">{location.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{location.area}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{location.vendors}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary hover:text-primary-dark font-medium text-sm">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
