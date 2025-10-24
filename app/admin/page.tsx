'use client';

import { useEffect, useState } from 'react';
import {
  Users,
  Store,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';
import StatsCard from '@/components/admin/StatsCard';
import RecentActivity from '@/components/admin/RecentActivity';
import SalesChart from '@/components/admin/SalesChart';
import TopVendors from '@/components/admin/TopVendors';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalVendors: 487,
    totalUsers: 12453,
    totalOrders: 8921,
    totalRevenue: 284567,
    vendorChange: 12,
    userChange: 8,
    orderChange: -3,
    revenueChange: 15
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Vendors"
          value={stats.totalVendors.toLocaleString()}
          change={stats.vendorChange}
          icon={Store}
          color="blue"
        />
        <StatsCard
          title="Active Users"
          value={stats.totalUsers.toLocaleString()}
          change={stats.userChange}
          icon={Users}
          color="green"
        />
        <StatsCard
          title="Total Orders"
          value={stats.totalOrders.toLocaleString()}
          change={stats.orderChange}
          icon={ShoppingBag}
          color="orange"
        />
        <StatsCard
          title="Revenue"
          value={`$${(stats.totalRevenue / 1000).toFixed(1)}K`}
          change={stats.revenueChange}
          icon={DollarSign}
          color="purple"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <TopVendors />
      </div>

      <RecentActivity />
    </div>
  );
}
