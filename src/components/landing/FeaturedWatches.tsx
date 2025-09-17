'use client';

import { useState } from 'react';
import WatchCard from '@/components/common/cards/WatchCard';
import QuickViewModal from '@/components/common/modals/QuickViewModal';
import { getFeaturedWatchesData } from '@/services/data';
import { WatchData } from '@/types/watchData.type';

export default function FeaturedWatches() {
  const featuredWatches = getFeaturedWatchesData();
  const [selectedWatch, setSelectedWatch] = useState<WatchData | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (watch: WatchData) => {
    setSelectedWatch(watch);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedWatch(null);
  };
  
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Timepieces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked collection of exceptional watches and clocks, 
              each crafted with precision and designed to stand the test of time.
            </p>
          </div>

          {/* Watch Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch) => (
              <WatchCard 
                key={watch.id} 
                {...watch} 
                onQuickView={handleQuickView}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
              View All Watches
            </button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        watch={selectedWatch}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </>
  );
}
