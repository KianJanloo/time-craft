import Image from 'next/image';
import { CloseIcon, HeartIcon, CartIcon, StarIcon } from '@/services/icons';
import { WatchData } from '@/types/watchData.type';

interface QuickViewModalProps {
  watch: WatchData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ watch, isOpen, onClose }: QuickViewModalProps) {
  if (!isOpen || !watch) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-colors"
          >
            <CloseIcon size={20} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-square lg:aspect-auto h-full">
              <Image
                src={watch.image}
                alt={watch.name}
                fill
                className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {watch.isNew && (
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    NEW
                  </span>
                )}
                {watch.isSale && (
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    SALE
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">{watch.category}</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{watch.name}</h1>
                {watch.brand && (
                  <p className="text-lg text-gray-600 mb-4">by {watch.brand}</p>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={20} color="#fbbf24" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(4.8) 124 reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">${watch.price}</span>
                {watch.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${watch.originalPrice}</span>
                )}
                {watch.isSale && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    Save ${watch.originalPrice ? watch.originalPrice - watch.price : 0}
                  </span>
                )}
              </div>

              {/* Description */}
              {watch.description && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{watch.description}</p>
                </div>
              )}

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {watch.material && (
                    <div>
                      <span className="font-medium text-gray-700">Material:</span>
                      <span className="ml-2 text-gray-600">{watch.material}</span>
                    </div>
                  )}
                  {watch.movement && (
                    <div>
                      <span className="font-medium text-gray-700">Movement:</span>
                      <span className="ml-2 text-gray-600">{watch.movement}</span>
                    </div>
                  )}
                  {watch.waterResistance && (
                    <div>
                      <span className="font-medium text-gray-700">Water Resistance:</span>
                      <span className="ml-2 text-gray-600">{watch.waterResistance}</span>
                    </div>
                  )}
                  {watch.warranty && (
                    <div>
                      <span className="font-medium text-gray-700">Warranty:</span>
                      <span className="ml-2 text-gray-600">{watch.warranty}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 cursor-pointer bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <CartIcon size={20} className="mr-2" />
                  Add to Cart
                </button>
                <button className="bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors">
                  <HeartIcon size={20} />
                </button>
              </div>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-semibold text-gray-900">Free Shipping</div>
                    <div className="text-gray-600">On orders over $500</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">2-Year Warranty</div>
                    <div className="text-gray-600">Full coverage</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">30-Day Returns</div>
                    <div className="text-gray-600">No questions asked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
