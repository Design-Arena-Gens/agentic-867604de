'use client';

import { BarChart3 } from 'lucide-react';

export default function SalesChart() {
  const data = [
    { month: 'Jan', sales: 45 },
    { month: 'Feb', sales: 52 },
    { month: 'Mar', sales: 48 },
    { month: 'Apr', sales: 65 },
    { month: 'May', sales: 58 },
    { month: 'Jun', sales: 70 },
    { month: 'Jul', sales: 82 },
    { month: 'Aug', sales: 75 },
    { month: 'Sep', sales: 88 },
    { month: 'Oct', sales: 92 }
  ];

  const maxSales = Math.max(...data.map(d => d.sales));

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <BarChart3 size={20} className="text-primary" />
          Sales Overview
        </h3>
        <select className="text-sm border border-gray-300 rounded px-3 py-1">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.month} className="flex items-center gap-3">
            <div className="w-12 text-sm font-medium text-gray-600">{item.month}</div>
            <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary-dark h-full rounded-full transition-all duration-500 flex items-center justify-end px-3"
                style={{ width: `${(item.sales / maxSales) * 100}%` }}
              >
                <span className="text-white text-xs font-semibold">${item.sales}K</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
