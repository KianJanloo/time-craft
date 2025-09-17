import { WatchData } from '@/types/watchData.type';
import { getFeaturedWatches, getHeroImage, getCategoryImage, getCollectionImage, getCustomerImage, getCTAImage } from './images';
import { CategoryData } from '@/types/caregoryData.type';
import { CollectionData } from '@/types/collectionData.type';
import { TestimonialData } from '@/types/testimonialData.type';

// Featured watches data
export const getFeaturedWatchesData = (): WatchData[] => {
  const images = getFeaturedWatches();
  return [
    {
      id: '1',
      name: 'Classic Gold Wristwatch',
      price: 1299,
      originalPrice: 1599,
      image: images[0]?.url || '',
      category: 'Wrist Watches',
      isSale: true,
      description: 'Elegant gold timepiece with Swiss movement',
      brand: 'TimeCraft',
      material: '18K Gold',
      movement: 'Swiss Automatic',
      waterResistance: '50m',
      warranty: '2 Years'
    },
    {
      id: '2',
      name: 'Vintage Wall Clock',
      price: 899,
      image: images[1]?.url || '',
      category: 'Wall Clocks',
      isNew: true,
      description: 'Classic wooden wall clock with pendulum',
      brand: 'TimeCraft',
      material: 'Solid Oak Wood',
      movement: 'Quartz',
      warranty: '1 Year'
    },
    {
      id: '3',
      name: 'Antique Pocket Watch',
      price: 2199,
      image: images[2]?.url || '',
      category: 'Pocket Watches',
      description: 'Rare 19th century pocket watch',
      brand: 'TimeCraft Heritage',
      material: 'Gold Plated',
      movement: 'Mechanical',
      warranty: 'Lifetime'
    },
    {
      id: '4',
      name: 'Modern Desk Clock',
      price: 599,
      image: images[3]?.url || '',
      category: 'Desk Clocks',
      isNew: true,
      description: 'Sleek modern desk clock with LED display',
      brand: 'TimeCraft',
      material: 'Aluminum',
      movement: 'Digital',
      warranty: '1 Year'
    },
    {
      id: '5',
      name: 'Luxury Diamond Watch',
      price: 4599,
      originalPrice: 4999,
      image: images[4]?.url || '',
      category: 'Wrist Watches',
      isSale: true,
      description: 'Exclusive diamond-encrusted timepiece',
      brand: 'TimeCraft Diamond',
      material: 'Platinum & Diamonds',
      movement: 'Swiss Automatic',
      waterResistance: '100m',
      warranty: '5 Years'
    },
    {
      id: '6',
      name: 'Wooden Wall Clock',
      price: 749,
      image: images[5]?.url || '',
      category: 'Wall Clocks',
      description: 'Handcrafted wooden wall clock',
      brand: 'TimeCraft',
      material: 'Reclaimed Wood',
      movement: 'Quartz',
      warranty: '1 Year'
    }
  ];
};

// Categories data
export const getCategoriesData = (): CategoryData[] => {
  return [
    {
      id: 'wrist',
      name: 'Wrist Watches',
      description: 'Elegant timepieces for every occasion',
      image: getCategoryImage('wrist')?.url || '',
      href: '/watches/wrist',
      count: '150+',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'wall',
      name: 'Wall Clocks',
      description: 'Statement pieces for your home',
      image: getCategoryImage('wall')?.url || '',
      href: '/watches/wall',
      count: '80+',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'pocket',
      name: 'Pocket Watches',
      description: 'Classic vintage timepieces',
      image: getCategoryImage('pocket')?.url || '',
      href: '/watches/pocket',
      count: '45+',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'desk',
      name: 'Desk Clocks',
      description: 'Professional office companions',
      image: getCategoryImage('desk')?.url || '',
      href: '/watches/desk',
      count: '60+',
      color: 'from-amber-500 to-amber-600',
    },
    {
      id: 'antique',
      name: 'Antique Clocks',
      description: 'Rare collectible timepieces',
      image: getCategoryImage('antique')?.url || '',
      href: '/watches/antique',
      count: '25+',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 'smart',
      name: 'Smart Watches',
      description: 'Modern technology meets style',
      image: getCategoryImage('smart')?.url || '',
      href: '/watches/smart',
      count: '30+',
      color: 'from-indigo-500 to-indigo-600',
    }
  ];
};

// Collections data
export const getCollectionsData = (): CollectionData[] => {
  return [
    {
      id: 'luxury',
      name: 'Luxury Collection',
      description: 'Exquisite timepieces for the discerning collector',
      image: getCollectionImage('collection-luxury')?.url || '',
      href: '/collections/luxury',
      count: '25+',
      price: 'From $2,999'
    },
    {
      id: 'vintage',
      name: 'Vintage Collection',
      description: 'Classic designs that never go out of style',
      image: getCollectionImage('collection-vintage')?.url || '',
      href: '/collections/vintage',
      count: '40+',
      price: 'From $899'
    },
    {
      id: 'modern',
      name: 'Modern Collection',
      description: 'Contemporary designs for today\'s lifestyle',
      image: getCollectionImage('collection-modern')?.url || '',
      href: '/collections/modern',
      count: '60+',
      price: 'From $599'
    }
  ];
};

// Testimonials data
export const getTestimonialsData = (): TestimonialData[] => {
  return [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Watch Collector',
      image: getCustomerImage('customer-1')?.url || '',
      content: 'The craftsmanship and attention to detail in these timepieces is absolutely remarkable. Each watch tells a story of precision and elegance.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Business Executive',
      image: getCustomerImage('customer-2')?.url || '',
      content: 'I\'ve been collecting watches for over 20 years, and TimeCraft offers some of the finest pieces I\'ve ever encountered. Highly recommended!',
      rating: 5
    },
    {
      id: '3',
      name: 'Emma Williams',
      role: 'Interior Designer',
      image: getCustomerImage('customer-3')?.url || '',
      content: 'The wall clocks from TimeCraft have transformed my home office. They\'re not just functional, they\'re works of art.',
      rating: 5
    }
  ];
};

// Hero section data
export const getHeroData = () => {
  const heroImage = getHeroImage();
  return {
    title: 'Timeless Elegance Redefined',
    subtitle: 'Discover our exquisite collection of handcrafted watches, wall clocks, and timepieces. Each piece tells a story of precision, craftsmanship, and timeless beauty.',
    image: heroImage.url,
    imageAlt: heroImage.alt,
    stats: [
      { value: '500+', label: 'Timepieces' },
      { value: '50+', label: 'Years Experience' },
      { value: '10K+', label: 'Happy Customers' }
    ]
  };
};

// CTA section data
export const getCTAData = () => {
  const ctaImage = getCTAImage();
  return {
    title: 'Discover Your Perfect Timepiece',
    subtitle: 'Join thousands of satisfied customers who have found their ideal watch in our carefully curated collection.',
    image: ctaImage.url,
    imageAlt: ctaImage.alt,
    features: [
      { title: 'Free Shipping', description: 'On orders over $500' },
      { title: '2-Year Warranty', description: 'Full manufacturer coverage' },
      { title: '30-Day Returns', description: 'No questions asked' }
    ]
  };
};
