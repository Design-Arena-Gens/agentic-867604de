'use client';

import { Star, TrendingUp } from 'lucide-react';

export default function TopVendors() {
  const vendors = [
    { id: '1', name: 'Tech Solutions Pro', sales: 89450, rating: 4.9, growth: 15 },
    { id: '2', name: 'Fresh Foods Market', sales: 45230, rating: 4.8, growth: 12 },
    { id: '3', name: 'Home Decor Studio', sales: 32100, rating: 4.9, growth: 8 },
    { id: '4', name: 'Beauty & Wellness Co', sales: 28900, rating: 4.7, growth: 22 },
    { id: '5', name: 'Sports Gear Plus', sales: 12450, rating: 4.5, growth: -3 }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <TrendingUp size={20} className="text-primary" />
          Top Performing Vendors
        </h3>
        <a href="/admin/vendors" className="text-sm text-primary hover:text-primary-dark">
          View All
        </a>
      </div>

      <div className="space-y-4">
        {vendors.map((vendor, index) => (
          <div key={vendor.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm">
              {index + 1}
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate">{vendor.name}</div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-500" fill="currentColor" />
                  {vendor.rating}
                </span>
                <span>${vendor.sales.toLocaleString()}</span>
              </div>
            </div>

            <div className={`text-sm font-semibold ${
              vendor.growth >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {vendor.growth >= 0 ? '+' : ''}{vendor.growth}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
