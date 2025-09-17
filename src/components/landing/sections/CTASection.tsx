import Image from 'next/image';
import Link from 'next/link';
import { getCTAData } from '@/services/data';

export default function CTASection() {
  const ctaData = getCTAData();
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={ctaData.image}
          alt={ctaData.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {ctaData.title.split(' ').map((word, index) => (
              <span key={index} className={index === 2 ? 'block text-amber-400' : ''}>
                {word}
              </span>
            ))}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            {ctaData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/watches" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 hover:scale-105"
            >
              Shop Now
            </Link>
            
            <Link 
              href="/collections" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              View Collections
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            {ctaData.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">{feature.title}</div>
                <div className="text-gray-300">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
