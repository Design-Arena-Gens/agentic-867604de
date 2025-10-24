'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Star, TrendingUp, Clock, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VendorCard from '@/components/VendorCard';
import ServiceCard from '@/components/ServiceCard';
import CategoryFilter from '@/components/CategoryFilter';
import { useLocationStore } from '@/store/locationStore';
import { useVendorStore } from '@/store/vendorStore';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { location, setLocation } = useLocationStore();
  const { vendors, services, fetchVendors, fetchServices } = useVendorStore();

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            name: 'Your Location'
          });
        },
        () => {
          // Default location if geolocation fails
          setLocation({
            lat: 40.7128,
            lng: -74.0060,
            name: 'New York, NY'
          });
        }
      );
    }

    fetchVendors();
    fetchServices();
  }, [setLocation, fetchVendors, fetchServices]);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredVendors = vendors.filter(v => v.featured).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Discover Local Services & Products
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Connect with trusted vendors in your area for everything you need
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="text-gray-400 mr-2" size={20} />
                  <input
                    type="text"
                    placeholder="Search for services, products..."
                    className="w-full py-3 text-gray-800 focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search services and products"
                  />
                </div>
                <div className="flex items-center px-4 border-t md:border-t-0 md:border-l border-gray-200">
                  <MapPin className="text-gray-400 mr-2" size={20} />
                  <input
                    type="text"
                    placeholder={location?.name || "Enter location..."}
                    className="w-full md:w-48 py-3 text-gray-800 focus:outline-none"
                    aria-label="Location"
                  />
                </div>
                <button className="btn btn-primary text-lg px-8 py-3">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        {/* Featured Vendors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <TrendingUp className="text-primary" size={32} />
                Featured Vendors
              </h2>
              <a href="/vendors" className="text-primary hover:text-primary-dark font-medium">
                View All →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVendors.map(vendor => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          </div>
        </section>

        {/* Services/Products Listings */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <ShoppingBag className="text-primary" size={32} />
              Available Services & Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found matching your criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Active Vendors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Search & Browse</h3>
                <p className="text-gray-600">
                  Find services and products from local vendors in your area
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Compare & Choose</h3>
                <p className="text-gray-600">
                  Review ratings, prices, and availability to make the best choice
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Book & Enjoy</h3>
                <p className="text-gray-600">
                  Complete your booking securely and track your order in real-time
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
