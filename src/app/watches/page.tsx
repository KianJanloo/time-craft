'use client';

import { useState } from 'react';
import Header from '@/components/common/headers/Header';
import Footer from '@/components/common/footers/Footer';
import { getFeaturedWatchesData } from '@/services/data';
import WatchCard from '@/components/common/cards/WatchCard';
import QuickViewModal from '@/components/common/modals/QuickViewModal';
import { WatchData } from '@/types/watchData.type';

export default function WatchesPage() {
  const watches = getFeaturedWatchesData();
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
      <div className="min-h-screen bg-white">
        <Header />
        <main>
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

          {/* Watches Grid */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {watches.map((watch) => (
                  <WatchCard 
                    key={watch.id} 
                    {...watch} 
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
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
