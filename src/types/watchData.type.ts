// Watch data interface
export interface WatchData {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  brand?: string;
  material?: string;
  movement?: string;
  waterResistance?: string;
  warranty?: string;
}
