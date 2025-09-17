import Image from 'next/image';
import { getHeroData } from '@/services/data';
import { PrecisionIcon, CraftsmanshipIcon, TimelessnessIcon } from '@/services/icons';

export default function AboutPage() {
  const heroData = getHeroData();

  return (
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroData.image}
              alt={heroData.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About TimeCraft
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Crafting timeless pieces that blend precision engineering with elegant design.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  For over 50 years, TimeCraft has been at the forefront of watchmaking excellence. 
                  Our journey began with a simple vision: to create timepieces that not only tell time 
                  but tell a story of craftsmanship, precision, and timeless elegance.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Each watch in our collection is meticulously crafted by master watchmakers who 
                  have dedicated their lives to perfecting the art of horology. We believe that 
                  a watch is more than just a timekeeping device—it's a statement of personal style 
                  and a testament to the enduring value of quality craftsmanship.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to push the boundaries of innovation while staying true to 
                  our traditional values of quality, precision, and timeless design.
                </p>
              </div>
              
              <div className="relative">
                <Image
                  src={heroData.image}
                  alt="TimeCraft Workshop"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at TimeCraft.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PrecisionIcon size={32} color="white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precision</h3>
                <p className="text-gray-600">
                  Every component is crafted with meticulous attention to detail, 
                  ensuring the highest standards of accuracy and reliability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CraftsmanshipIcon size={32} color="white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Craftsmanship</h3>
                <p className="text-gray-600">
                  Our master watchmakers combine traditional techniques with 
                  modern innovation to create truly exceptional timepieces.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TimelessnessIcon size={32} color="white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Timelessness</h3>
                <p className="text-gray-600">
                  We design watches that transcend trends, creating pieces that 
                  will be cherished for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
