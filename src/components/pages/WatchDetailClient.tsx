'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedWatchesData } from '@/services/data';
import { StarIcon, CartIcon, HeartIcon, ArrowLeftIcon } from '@/services/icons';
import { useCartStore } from '@/stores/cartStore';
import toast from 'react-hot-toast';

interface WatchDetailClientProps {
  slug: string;
}

export default function WatchDetailClient({ slug }: WatchDetailClientProps) {
  const { addToCart, isInCart } = useCartStore();
  const watches = getFeaturedWatchesData();
  const watch = watches.find(w => 
    w.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  if (!watch) {
    notFound();
  }

  const relatedWatches = watches
    .filter(w => w.id !== watch.id && w.category === watch.category)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(watch);
    toast.success(`${watch.name} added to cart!`, {
      icon: '🛒',
      style: {
        background: '#f0fdf4',
        color: '#166534',
        border: '1px solid #bbf7d0',
      },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/watches" className="hover:text-amber-600">Watches</Link>
            <span>/</span>
            <span className="text-gray-900">{watch.name}</span>
          </div>
        </nav>

        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/watches"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Watches
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={watch.image}
                alt={watch.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {watch.isNew && (
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    NEW
                  </span>
                )}
                {watch.isSale && (
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    SALE
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500 mb-2">{watch.category}</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{watch.name}</h1>
              {watch.brand && (
                <p className="text-xl text-gray-600 mb-4">by {watch.brand}</p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} size={24} color="#fbbf24" />
                ))}
              </div>
              <span className="ml-3 text-gray-600">(4.8) 124 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900">${watch.price}</span>
              {watch.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">${watch.originalPrice}</span>
              )}
              {watch.isSale && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm font-medium">
                  Save ${watch.originalPrice ? watch.originalPrice - watch.price : 0}
                </span>
              )}
            </div>

            {/* Description */}
            {watch.description && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{watch.description}</p>
              </div>
            )}

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {watch.material && (
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Material:</span>
                    <span className="text-gray-600">{watch.material}</span>
                  </div>
                )}
                {watch.movement && (
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Movement:</span>
                    <span className="text-gray-600">{watch.movement}</span>
                  </div>
                )}
                {watch.waterResistance && (
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Water Resistance:</span>
                    <span className="text-gray-600">{watch.waterResistance}</span>
                  </div>
                )}
                {watch.warranty && (
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Warranty:</span>
                    <span className="text-gray-600">{watch.warranty}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart}
                className={`flex-1 py-4 cursor-pointer px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center ${
                  isInCart(watch.id)
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-amber-500 hover:bg-amber-600 text-white'
                }`}
              >
                <CartIcon size={24} className="mr-2" />
                {isInCart(watch.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 p-4 rounded-lg transition-colors">
                <HeartIcon size={24} />
              </button>
            </div>

            {/* Features */}
            <div className="pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders over $500</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">2-Year Warranty</div>
                  <div className="text-sm text-gray-600">Full coverage</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">30-Day Returns</div>
                  <div className="text-sm text-gray-600">No questions asked</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Watches */}
        {relatedWatches.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Watches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedWatches.map((relatedWatch) => (
                <Link
                  key={relatedWatch.id}
                  href={`/watches/${relatedWatch.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={relatedWatch.image}
                      alt={relatedWatch.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-1">{relatedWatch.category}</div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedWatch.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">${relatedWatch.price}</span>
                      {relatedWatch.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${relatedWatch.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
