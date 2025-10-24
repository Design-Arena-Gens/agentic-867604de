import {
  Utensils,
  Laptop,
  Home,
  Dumbbell,
  Shirt,
  Heart,
  Car,
  BookOpen,
  Briefcase
} from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All', icon: null },
  { id: 'food', name: 'Food & Beverage', icon: Utensils },
  { id: 'electronics', name: 'Electronics', icon: Laptop },
  { id: 'home', name: 'Home & Garden', icon: Home },
  { id: 'sports', name: 'Sports', icon: Dumbbell },
  { id: 'fashion', name: 'Fashion', icon: Shirt },
  { id: 'beauty', name: 'Beauty & Health', icon: Heart },
  { id: 'automotive', name: 'Automotive', icon: Car },
  { id: 'education', name: 'Education', icon: BookOpen },
  { id: 'business', name: 'Business', icon: Briefcase },
];

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-3 min-w-max">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                isSelected
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {Icon && <Icon size={20} />}
              <span className="whitespace-nowrap">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
