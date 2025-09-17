import Header from '@/components/common/headers/Header';
import Footer from '@/components/common/footers/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getCollectionsData } from '@/services/data';

export default function CollectionsPage() {
  const collections = getCollectionsData();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              All Collections
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete range of curated collections, each carefully selected to represent 
              the finest in watchmaking craftsmanship and design excellence.
            </p>
          </div>
        </section>

        {/* Collections Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Collections
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our curated collections, each carefully selected to represent 
                the finest in watchmaking craftsmanship and design excellence.
              </p>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={collection.href}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Collection Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {collection.count} Items
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-amber-600">
                        {collection.price}
                      </span>
                      <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors">
                        <span className="text-sm font-semibold mr-2">Explore</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-2xl transition-colors duration-300" />
                </Link>
              ))}
            </div>

            {/* Additional Collections */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">More Collections Coming Soon</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Heritage Collection',
                    description: 'Classic designs that have stood the test of time',
                    count: '35+ Items',
                    price: 'From $1,299',
                    status: 'Coming Soon'
                  },
                  {
                    name: 'Limited Edition',
                    description: 'Exclusive timepieces in limited quantities',
                    count: '15+ Items',
                    price: 'From $3,999',
                    status: 'Coming Soon'
                  },
                  {
                    name: 'Vintage Revival',
                    description: 'Reimagined classics with modern touches',
                    count: '20+ Items',
                    price: 'From $899',
                    status: 'Coming Soon'
                  }
                ].map((collection, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden opacity-75"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {collection.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {collection.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-500">
                          {collection.price}
                        </span>
                        <span className="text-sm text-gray-500">
                          {collection.count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
