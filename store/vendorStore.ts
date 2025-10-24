import { create } from 'zustand';

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

interface VendorStore {
  vendors: Vendor[];
  services: Service[];
  fetchVendors: () => void;
  fetchServices: () => void;
}

export const useVendorStore = create<VendorStore>((set) => ({
  vendors: [
    {
      id: '1',
      name: 'Fresh Foods Market',
      category: 'Food & Beverage',
      rating: 4.8,
      reviewCount: 234,
      distance: 1.2,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop',
      isOpen: true,
      featured: true
    },
    {
      id: '2',
      name: 'Tech Solutions Pro',
      category: 'Electronics',
      rating: 4.6,
      reviewCount: 156,
      distance: 2.5,
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
      isOpen: true,
      featured: true
    },
    {
      id: '3',
      name: 'Beauty & Wellness Co',
      category: 'Beauty & Health',
      rating: 4.9,
      reviewCount: 342,
      distance: 0.8,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
      isOpen: false,
      featured: true
    },
    {
      id: '4',
      name: 'Home Decor Studio',
      category: 'Home & Garden',
      rating: 4.7,
      reviewCount: 189,
      distance: 3.1,
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=300&fit=crop',
      isOpen: true,
      featured: true
    },
    {
      id: '5',
      name: 'Sports Gear Plus',
      category: 'Sports & Outdoors',
      rating: 4.5,
      reviewCount: 98,
      distance: 4.2,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
      isOpen: true,
      featured: false
    },
    {
      id: '6',
      name: 'Fashion Forward',
      category: 'Fashion',
      rating: 4.8,
      reviewCount: 267,
      distance: 1.8,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop',
      isOpen: true,
      featured: true
    }
  ],
  services: [
    {
      id: '1',
      name: 'Organic Vegetable Box',
      description: 'Fresh organic vegetables delivered weekly to your door',
      price: 29.99,
      category: 'food',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      rating: 4.8,
      available: true,
      vendorName: 'Fresh Foods Market'
    },
    {
      id: '2',
      name: 'Professional Laptop',
      description: 'High-performance laptop for business and creative work',
      price: 1299.99,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      rating: 4.7,
      available: true,
      vendorName: 'Tech Solutions Pro'
    },
    {
      id: '3',
      name: 'Spa Treatment Package',
      description: 'Relaxing spa day with massage and facial treatments',
      price: 149.99,
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
      rating: 4.9,
      available: true,
      vendorName: 'Beauty & Wellness Co'
    },
    {
      id: '4',
      name: 'Modern Coffee Table',
      description: 'Stylish wooden coffee table with storage compartments',
      price: 249.99,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop',
      rating: 4.6,
      available: true,
      vendorName: 'Home Decor Studio'
    },
    {
      id: '5',
      name: 'Professional Yoga Mat',
      description: 'Premium non-slip yoga mat with carrying strap',
      price: 39.99,
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
      rating: 4.5,
      available: true,
      vendorName: 'Sports Gear Plus'
    },
    {
      id: '6',
      name: 'Designer Handbag',
      description: 'Elegant leather handbag with multiple compartments',
      price: 189.99,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
      rating: 4.8,
      available: false,
      vendorName: 'Fashion Forward'
    },
    {
      id: '7',
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones',
      price: 299.99,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      rating: 4.7,
      available: true,
      vendorName: 'Tech Solutions Pro'
    },
    {
      id: '8',
      name: 'Artisan Bread Basket',
      description: 'Selection of freshly baked artisan breads',
      price: 24.99,
      category: 'food',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      rating: 4.9,
      available: true,
      vendorName: 'Fresh Foods Market'
    }
  ],
  fetchVendors: () => {
    // In a real app, this would fetch from an API
    // For now, vendors are already initialized
  },
  fetchServices: () => {
    // In a real app, this would fetch from an API
    // For now, services are already initialized
  },
}));
