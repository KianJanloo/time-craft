// Image service for centralized image management
export interface ImageData {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  category: string;
  tags: string[];
}


// Watch images data
export const watchImages: ImageData[] = [
  // Wrist Watches
  {
    id: 'wrist-1',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Classic Gold Wristwatch',
    width: 400,
    height: 400,
    category: 'wrist',
    tags: ['gold', 'classic', 'luxury']
  },
  {
    id: 'wrist-2',
    url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Luxury Diamond Watch',
    width: 400,
    height: 400,
    category: 'wrist',
    tags: ['diamond', 'luxury', 'premium']
  },
  {
    id: 'wrist-3',
    url: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Smart Watch',
    width: 400,
    height: 400,
    category: 'wrist',
    tags: ['smart', 'modern', 'technology']
  },
  {
    id: 'wrist-4',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Elegant Silver Watch',
    width: 400,
    height: 400,
    category: 'wrist',
    tags: ['silver', 'elegant', 'classic']
  },

  // Wall Clocks
  {
    id: 'wall-1',
    url: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Vintage Wall Clock',
    width: 400,
    height: 400,
    category: 'wall',
    tags: ['vintage', 'wood', 'classic']
  },
  {
    id: 'wall-2',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d071f2?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Wooden Wall Clock',
    width: 400,
    height: 400,
    category: 'wall',
    tags: ['wood', 'rustic', 'natural']
  },
  {
    id: 'wall-3',
    url: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Modern Wall Clock',
    width: 400,
    height: 400,
    category: 'wall',
    tags: ['modern', 'minimalist', 'contemporary']
  },

  // Pocket Watches
  {
    id: 'pocket-1',
    url: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Antique Pocket Watch',
    width: 400,
    height: 400,
    category: 'pocket',
    tags: ['antique', 'vintage', 'collectible']
  },
  {
    id: 'pocket-2',
    url: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Gold Pocket Watch',
    width: 400,
    height: 400,
    category: 'pocket',
    tags: ['gold', 'antique', 'luxury']
  },

  // Desk Clocks
  {
    id: 'desk-1',
    url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20310?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Modern Desk Clock',
    width: 400,
    height: 400,
    category: 'desk',
    tags: ['modern', 'office', 'professional']
  },
  {
    id: 'desk-2',
    url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20310?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Wooden Desk Clock',
    width: 400,
    height: 400,
    category: 'desk',
    tags: ['wood', 'desk', 'office']
  },

  // Antique Clocks
  {
    id: 'antique-1',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d071f2?w=400&h=400&fit=crop&crop=center&q=80',
    alt: 'Antique Grandfather Clock',
    width: 400,
    height: 400,
    category: 'antique',
    tags: ['antique', 'grandfather', 'vintage']
  }
];

// Hero images
export const heroImages: ImageData[] = [
  {
    id: 'hero-1',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop&crop=center&q=80',
    alt: 'Premium Watch Collection',
    width: 800,
    height: 600,
    category: 'hero',
    tags: ['hero', 'collection', 'luxury']
  },
  {
    id: 'hero-2',
    url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop&crop=center&q=80',
    alt: 'Luxury Watch Showcase',
    width: 800,
    height: 600,
    category: 'hero',
    tags: ['hero', 'luxury', 'showcase']
  }
];

// Category images
export const categoryImages: ImageData[] = [
  {
    id: 'cat-wrist',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center&q=80',
    alt: 'Wrist Watches',
    width: 300,
    height: 300,
    category: 'wrist',
    tags: ['wrist', 'watches']
  },
  {
    id: 'cat-wall',
    url: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=300&fit=crop&crop=center&q=80',
    alt: 'Wall Clocks',
    width: 300,
    height: 300,
    category: 'wall',
    tags: ['wall', 'clocks']
  },
  {
    id: 'cat-pocket',
    url: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=300&h=300&fit=crop&crop=center&q=80',
    alt: 'Pocket Watches',
    width: 300,
    height: 300,
    category: 'pocket',
    tags: ['pocket', 'watches']
  },
  {
    id: 'cat-desk',
    url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20310?w=300&h=300&fit=crop&crop=center&q=80',
    alt: 'Desk Clocks',
    width: 300,
    height: 300,
    category: 'desk',
    tags: ['desk', 'clocks']
  },
  {
    id: 'cat-antique',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d071f2?w=300&h=300&fit=crop&crop=center&q=80',
    alt: 'Antique Clocks',
    width: 300,
    height: 300,
    category: 'antique',
    tags: ['antique', 'clocks']
  },
  {
    id: 'cat-smart',
    url: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop&crop=center&q=80',
    alt: 'Smart Watches',
    width: 300,
    height: 300,
    category: 'smart',
    tags: ['smart', 'watches']
  }
];

// Collection images
export const collectionImages: ImageData[] = [
  {
    id: 'collection-luxury',
    url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop&crop=center&q=80',
    alt: 'Luxury Collection',
    width: 600,
    height: 400,
    category: 'collection',
    tags: ['luxury', 'collection']
  },
  {
    id: 'collection-vintage',
    url: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&h=400&fit=crop&crop=center&q=80',
    alt: 'Vintage Collection',
    width: 600,
    height: 400,
    category: 'collection',
    tags: ['vintage', 'collection']
  },
  {
    id: 'collection-modern',
    url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20310?w=600&h=400&fit=crop&crop=center&q=80',
    alt: 'Modern Collection',
    width: 600,
    height: 400,
    category: 'collection',
    tags: ['modern', 'collection']
  }
];

// Customer testimonial images
export const customerImages: ImageData[] = [
  {
    id: 'customer-1',
    url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&q=80',
    alt: 'Sarah Johnson',
    width: 100,
    height: 100,
    category: 'customer',
    tags: ['customer', 'testimonial']
  },
  {
    id: 'customer-2',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&q=80',
    alt: 'Michael Chen',
    width: 100,
    height: 100,
    category: 'customer',
    tags: ['customer', 'testimonial']
  },
  {
    id: 'customer-3',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80',
    alt: 'Emma Williams',
    width: 100,
    height: 100,
    category: 'customer',
    tags: ['customer', 'testimonial']
  }
];

// CTA background images
export const ctaImages: ImageData[] = [
  {
    id: 'cta-1',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1920&h=1080&fit=crop&crop=center&q=80',
    alt: 'Luxury Watch Collection',
    width: 1920,
    height: 1080,
    category: 'cta',
    tags: ['cta', 'background', 'luxury']
  }
];

// Helper functions
export const getImagesByCategory = (category: string): ImageData[] => {
  return watchImages.filter(img => img.category === category);
};

export const getImageById = (id: string): ImageData | undefined => {
  const allImages = [...watchImages, ...heroImages, ...categoryImages, ...collectionImages, ...customerImages, ...ctaImages];
  return allImages.find(img => img.id === id);
};

export const getFeaturedWatches = (): ImageData[] => {
  return watchImages.slice(0, 6);
};

export const getHeroImage = (): ImageData => {
  return heroImages[0];
};

export const getCategoryImage = (category: string): ImageData | undefined => {
  return categoryImages.find(img => img.category === category);
};

export const getCollectionImage = (collectionId: string): ImageData | undefined => {
  return collectionImages.find(img => img.id === collectionId);
};

export const getCustomerImage = (customerId: string): ImageData | undefined => {
  return customerImages.find(img => img.id === customerId);
};

export const getCTAImage = (): ImageData => {
  return ctaImages[0];
};
