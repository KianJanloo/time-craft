'use client';

import { useState, useEffect } from 'react';
import { WatchData } from '@/types/watchData.type';
import { SearchIcon, FilterIcon, SortAscendingIcon, SortDescendingIcon, XIcon } from '@/services/icons';

interface SearchAndFilterProps {
  watches: WatchData[];
  onFilteredWatches: (watches: WatchData[]) => void;
}

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'newest' | 'oldest';
type FilterCategory = 'all' | 'wrist' | 'wall' | 'desk' | 'pocket' | 'smart' | 'antique';

export default function SearchAndFilter({ watches, onFilteredWatches }: SearchAndFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    isNew: false,
    isSale: false,
    hasWarranty: false,
  });

  // Get unique categories from watches
  const categories = ['all', ...Array.from(new Set(watches.map(watch => watch.category.toLowerCase())))];
  
  // Get price range from watches
  const minPrice = Math.min(...watches.map(watch => watch.price));
  const maxPrice = Math.max(...watches.map(watch => watch.price));

  // Filter and sort watches
  useEffect(() => {
    let filtered = [...watches];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(watch =>
        watch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        watch.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        watch.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        watch.material?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(watch => 
        watch.category.toLowerCase() === selectedCategory
      );
    }

    // Price range filter
    filtered = filtered.filter(watch => 
      watch.price >= priceRange[0] && watch.price <= priceRange[1]
    );

    // Additional filters
    if (filters.isNew) {
      filtered = filtered.filter(watch => watch.isNew);
    }
    if (filters.isSale) {
      filtered = filtered.filter(watch => watch.isSale);
    }
    if (filters.hasWarranty) {
      filtered = filtered.filter(watch => watch.warranty);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'oldest':
          return (a.isNew ? 1 : 0) - (b.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

    onFilteredWatches(filtered);
  }, [searchTerm, selectedCategory, priceRange, sortBy, filters, watches, onFilteredWatches]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange([minPrice, maxPrice]);
    setSortBy('name-asc');
    setFilters({
      isNew: false,
      isSale: false,
      hasWarranty: false,
    });
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'all' || 
    priceRange[0] !== minPrice || priceRange[1] !== maxPrice ||
    Object.values(filters).some(Boolean);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search watches, brands, materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-400 text-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <XIcon size={16} />
              </button>
            )}
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center cursor-pointer px-4 py-3 rounded-lg font-medium transition-colors ${
                showFilters || hasActiveFilters
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FilterIcon size={20} className="mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 bg-white text-amber-500 text-xs px-2 py-1 rounded-full">
                  {[searchTerm, selectedCategory !== 'all', priceRange[0] !== minPrice || priceRange[1] !== maxPrice, ...Object.values(filters)].filter(Boolean).length}
                </span>
              )}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-3 border border-gray-400 text-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
            >
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="price-asc">Price Low-High</option>
              <option value="price-desc">Price High-Low</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value as FilterCategory)}
                        className="mr-2 text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Features Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Features</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.isNew}
                      onChange={(e) => setFilters(prev => ({ ...prev, isNew: e.target.checked }))}
                      className="mr-2 text-amber-500 focus:ring-amber-500 rounded"
                    />
                    <span className="text-sm text-gray-700">New Arrivals</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.isSale}
                      onChange={(e) => setFilters(prev => ({ ...prev, isSale: e.target.checked }))}
                      className="mr-2 text-amber-500 focus:ring-amber-500 rounded"
                    />
                    <span className="text-sm text-gray-700">On Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.hasWarranty}
                      onChange={(e) => setFilters(prev => ({ ...prev, hasWarranty: e.target.checked }))}
                      className="mr-2 text-amber-500 focus:ring-amber-500 rounded"
                    />
                    <span className="text-sm text-gray-700">With Warranty</span>
                  </label>
                </div>
              </div>

              {/* Quick Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Quick Filters</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, isNew: !prev.isNew }))}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      filters.isNew ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    New Arrivals
                  </button>
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, isSale: !prev.isSale }))}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      filters.isSale ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    On Sale
                  </button>
                  <button
                    onClick={() => setPriceRange([0, 1000])}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      priceRange[1] <= 1000 ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Under $1,000
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
