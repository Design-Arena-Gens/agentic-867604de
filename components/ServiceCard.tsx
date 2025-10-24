import { ShoppingBag, Star, Clock } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  available: boolean;
  vendorName: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.id}`}>
      <article className="card group cursor-pointer h-full flex flex-col">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!service.available && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {service.name}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
            {service.description}
          </p>

          <div className="text-xs text-gray-500 mb-2">by {service.vendorName}</div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <Star size={14} fill="currentColor" />
              <span className="font-semibold text-gray-900">{service.rating.toFixed(1)}</span>
            </div>

            <div className="text-xl font-bold text-primary">
              ${service.price.toFixed(2)}
            </div>
          </div>

          <button className="btn btn-primary w-full mt-4">
            <ShoppingBag size={18} className="inline mr-2" />
            Add to Cart
          </button>
        </div>
      </article>
    </Link>
  );
}
