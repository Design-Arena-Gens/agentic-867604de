'use client';

import { Activity } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'vendor' | 'order' | 'user' | 'review';
  message: string;
  time: string;
}

export default function RecentActivity() {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'vendor',
      message: 'New vendor "Fresh Foods Market" registered',
      time: '5 minutes ago'
    },
    {
      id: '2',
      type: 'order',
      message: 'Order #12345 completed by Tech Solutions Pro',
      time: '15 minutes ago'
    },
    {
      id: '3',
      type: 'user',
      message: 'New user registration: john.doe@email.com',
      time: '32 minutes ago'
    },
    {
      id: '4',
      type: 'review',
      message: '5-star review added for Beauty & Wellness Co',
      time: '1 hour ago'
    },
    {
      id: '5',
      type: 'order',
      message: 'Order #12344 placed at Home Decor Studio',
      time: '2 hours ago'
    },
    {
      id: '6',
      type: 'vendor',
      message: 'Sports Gear Plus updated their inventory',
      time: '3 hours ago'
    }
  ];

  const getActivityColor = (type: string) => {
    const colors = {
      vendor: 'bg-blue-100 text-blue-600',
      order: 'bg-green-100 text-green-600',
      user: 'bg-purple-100 text-purple-600',
      review: 'bg-yellow-100 text-yellow-600'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Activity size={20} className="text-primary" />
          Recent Activity
        </h3>
      </div>

      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${getActivityColor(activity.type)}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
