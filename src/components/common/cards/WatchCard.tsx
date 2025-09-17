import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, EyeIcon } from '@/services/icons';
import { WatchData } from '@/types/watchData.type';

interface WatchCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  brand?: string;
  material?: string;
  movement?: string;
  waterResistance?: string;
  warranty?: string;
  onQuickView?: (watch: WatchData) => void;
}

export default function WatchCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew = false, 
  isSale = false,
  description,
  brand,
  material,
  movement,
  waterResistance,
  warranty,
  onQuickView
}: WatchCardProps) {
  const handleQuickView = () => {
    if (onQuickView) {
      const watchData: WatchData = {
        id,
        name,
        price,
        originalPrice,
        image,
        category,
        isNew,
        isSale,
        description,
        brand,
        material,
        movement,
        waterResistance,
        warranty
      };
      onQuickView(watchData);
    }
  };
  const watchSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/watches/${watchSlug}`}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-120 group-hover:rotate-z-10 transition-transform duration-300 cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              SALE
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-colors">
            <HeartIcon size={16} />
          </button>
        </div>

        {/* Quick View Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleQuickView}
            className="w-full cursor-pointer bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
          >
            <EyeIcon size={16} className="mr-2" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <Link href={`/watches/${watchSlug}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-amber-600 transition-colors cursor-pointer">{name}</h3>
        </Link>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="cursor-pointer w-full mt-3 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-md font-medium transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
