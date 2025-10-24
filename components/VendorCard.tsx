import { MapPin, Star, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  distance: number;
  image: string;
  isOpen: boolean;
  featured?: boolean;
}

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Link href={`/vendors/${vendor.id}`}>
      <article className="card group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={vendor.image}
            alt={vendor.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {vendor.featured && (
            <div className="absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <TrendingUp size={14} />
              Featured
            </div>
          )}
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            {vendor.isOpen ? (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Open Now
              </span>
            ) : (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Closed
              </span>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {vendor.name}
          </h3>

          <p className="text-sm text-gray-600 mb-3">{vendor.category}</p>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="font-semibold text-gray-900">{vendor.rating.toFixed(1)}</span>
              <span className="text-gray-500">({vendor.reviewCount})</span>
            </div>

            <div className="flex items-center gap-1 text-gray-600">
              <MapPin size={16} />
              <span>{vendor.distance.toFixed(1)} mi</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
