'use client';

import { TrendingUp, Users, DollarSign, ShoppingBag } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
        <p className="text-gray-500 mt-1">Detailed insights and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <TrendingUp size={24} />
            </div>
            <span className="text-green-600 text-sm font-semibold">+12%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">$284K</div>
          <div className="text-sm text-gray-500">Total Revenue</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <Users size={24} />
            </div>
            <span className="text-green-600 text-sm font-semibold">+8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">12.4K</div>
          <div className="text-sm text-gray-500">Active Users</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <ShoppingBag size={24} />
            </div>
            <span className="text-red-600 text-sm font-semibold">-3%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">8.9K</div>
          <div className="text-sm text-gray-500">Total Orders</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <DollarSign size={24} />
            </div>
            <span className="text-green-600 text-sm font-semibold">+15%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">$32</div>
          <div className="text-sm text-gray-500">Avg Order Value</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
          <div className="space-y-4">
            {['Food & Beverage', 'Electronics', 'Fashion', 'Beauty', 'Home'].map((cat, i) => (
              <div key={cat}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{cat}</span>
                  <span className="font-semibold">${(50 - i * 8)}K</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${90 - i * 15}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b">
                <div>
                  <div className="font-medium text-gray-900">Order #{12340 + i}</div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">${(Math.random() * 200 + 50).toFixed(2)}</div>
                  <div className="text-xs text-green-600">Completed</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
