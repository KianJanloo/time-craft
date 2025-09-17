import HeroSection from '@/components/landing/sections/HeroSection';
import FeaturedWatches from '@/components/landing/FeaturedWatches';
import CategoriesSection from '@/components/landing/sections/CategoriesSection';
import FeaturedCollections from '@/components/landing/sections/FeaturedCollections';
import TestimonialsSection from '@/components/landing/sections/TestimonialsSection';
import CTASection from '@/components/landing/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedWatches />
      <CategoriesSection />
      <FeaturedCollections />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
