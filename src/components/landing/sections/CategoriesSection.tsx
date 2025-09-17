import Link from 'next/link';
import Image from 'next/image';
import { getCategoriesData } from '@/services/data';
import { 
  WristWatchIcon, 
  WallClockIcon, 
  PocketWatchIcon, 
  DeskClockIcon, 
  AntiqueClockIcon, 
  SmartWatchIcon,
  RightArrowIcon 
} from '@/services/icons';

export default function CategoriesSection() {
  const categories = getCategoriesData();
  
  // Icon mapping
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'wrist':
        return <WristWatchIcon size={24} />;
      case 'wall':
        return <WallClockIcon size={24} />;
      case 'pocket':
        return <PocketWatchIcon size={24} />;
      case 'desk':
        return <DeskClockIcon size={24} />;
      case 'antique':
        return <AntiqueClockIcon size={24} />;
      case 'smart':
        return <SmartWatchIcon size={24} />;
      default:
        return <WristWatchIcon size={24} />;
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From classic wristwatches to modern smart watches, find the perfect timepiece 
            that matches your style and needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={'/watches'}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              
              {/* Content */}
              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {getCategoryIcon(category.id)}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {category.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 group-hover:text-gray-500 transition-colors">
                  {category.description}
                </p>
                
                {/* Count */}
                <div className="text-sm font-semibold text-gray-500 group-hover:text-gray-400 transition-colors">
                  {category.count} Items
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-xl transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors"
          >
            Contact Us
            <RightArrowIcon size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
