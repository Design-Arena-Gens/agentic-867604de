'use client';

import { Plus, Building2 } from 'lucide-react';

export default function TenantsPage() {
  const tenants = [
    { id: '1', name: 'Marketplace East', plan: 'Enterprise', users: 523, status: 'Active', created: '2024-01-15' },
    { id: '2', name: 'Marketplace West', plan: 'Professional', users: 234, status: 'Active', created: '2024-03-20' },
    { id: '3', name: 'Marketplace Central', plan: 'Starter', users: 87, status: 'Trial', created: '2024-10-01' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tenant Management</h1>
          <p className="text-gray-500 mt-1">Manage multi-tenant organizations</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Tenant
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tenant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Users</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Building2 size={20} className="text-primary" />
                    <span className="font-medium text-gray-900">{tenant.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{tenant.plan}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{tenant.users}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tenant.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tenant.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{new Date(tenant.created).toLocaleDateString()}</td>
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
