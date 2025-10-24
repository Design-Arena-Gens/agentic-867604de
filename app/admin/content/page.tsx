'use client';

import { Plus, FileText } from 'lucide-react';

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-500 mt-1">Manage website content and promotions</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={20} />
          New Content
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <FileText className="text-primary mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Blog Posts</h3>
          <p className="text-gray-600 text-sm mb-4">Manage blog articles and news</p>
          <button className="text-primary hover:text-primary-dark font-medium text-sm">
            Manage Posts →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <FileText className="text-primary mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Banners</h3>
          <p className="text-gray-600 text-sm mb-4">Create promotional banners</p>
          <button className="text-primary hover:text-primary-dark font-medium text-sm">
            Manage Banners →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <FileText className="text-primary mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Help Center</h3>
          <p className="text-gray-600 text-sm mb-4">Documentation and FAQs</p>
          <button className="text-primary hover:text-primary-dark font-medium text-sm">
            Manage Docs →
          </button>
        </div>
      </div>
    </div>
  );
}
