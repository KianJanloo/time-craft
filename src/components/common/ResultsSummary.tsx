'use client';

import { WatchData } from '@/types/watchData.type';

interface ResultsSummaryProps {
  totalWatches: number;
  filteredWatches: number;
  searchTerm?: string;
  selectedCategory?: string;
  hasActiveFilters: boolean;
}

export default function ResultsSummary({ 
  totalWatches, 
  filteredWatches, 
  searchTerm, 
  selectedCategory, 
  hasActiveFilters 
}: ResultsSummaryProps) {
  const getResultsText = () => {
    if (hasActiveFilters) {
      if (searchTerm) {
        return `Found ${filteredWatches} watch${filteredWatches !== 1 ? 'es' : ''} for "${searchTerm}"`;
      }
      if (selectedCategory && selectedCategory !== 'all') {
        return `Found ${filteredWatches} watch${filteredWatches !== 1 ? 'es' : ''} in ${selectedCategory} category`;
      }
      return `Showing ${filteredWatches} of ${totalWatches} watch${totalWatches !== 1 ? 'es' : ''}`;
    }
    return `Showing all ${totalWatches} watch${totalWatches !== 1 ? 'es' : ''}`;
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {getResultsText()}
            </h2>
            {hasActiveFilters && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Filtered
              </span>
            )}
          </div>
          
          {filteredWatches === 0 && hasActiveFilters && (
            <div className="text-sm text-gray-500">
              Try adjusting your filters or search terms
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
