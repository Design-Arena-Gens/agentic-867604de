'use client';

import { Plus, Edit, Trash2 } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    { id: '1', name: 'Food & Beverage', count: 45, icon: '🍔' },
    { id: '2', name: 'Electronics', count: 32, icon: '💻' },
    { id: '3', name: 'Beauty & Health', count: 28, icon: '💄' },
    { id: '4', name: 'Home & Garden', count: 51, icon: '🏠' },
    { id: '5', name: 'Sports & Outdoors', count: 19, icon: '⚽' },
    { id: '6', name: 'Fashion', count: 67, icon: '👗' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-500 mt-1">Organize products and services</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{category.icon}</div>
              <div className="flex gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-gray-500 text-sm">{category.count} products/services</p>
          </div>
        ))}
      </div>
    </div>
  );
}
