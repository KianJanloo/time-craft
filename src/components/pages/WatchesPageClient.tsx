'use client';

import { useState } from 'react';
import { getFeaturedWatchesData } from '@/services/data';
import WatchCard from '@/components/common/cards/WatchCard';
import QuickViewModal from '@/components/common/modals/QuickViewModal';
import SearchAndFilter from '@/components/common/SearchAndFilter';
import ResultsSummary from '@/components/common/ResultsSummary';
import { WatchData } from '@/types/watchData.type';

export default function WatchesPageClient() {
  const allWatches = getFeaturedWatchesData();
  const [filteredWatches, setFilteredWatches] = useState<WatchData[]>(allWatches);
  const [selectedWatch, setSelectedWatch] = useState<WatchData | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);

  const handleQuickView = (watch: WatchData) => {
    setSelectedWatch(watch);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedWatch(null);
  };

  const handleFilteredWatches = (watches: WatchData[]) => {
    setFilteredWatches(watches);
    setHasActiveFilters(watches.length !== allWatches.length);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Watch Collection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete collection of handcrafted timepieces, 
              each one a masterpiece of precision and elegance.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <SearchAndFilter 
          watches={allWatches}
          onFilteredWatches={handleFilteredWatches}
        />

        {/* Results Summary */}
        <ResultsSummary
          totalWatches={allWatches.length}
          filteredWatches={filteredWatches.length}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Watches Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredWatches.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredWatches.map((watch) => (
                  <WatchCard 
                    key={watch.id} 
                    {...watch} 
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No watches found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search terms or filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        watch={selectedWatch}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </>
  );
}
