import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WatchData } from '@/types/watchData.type';

export interface CartItem extends WatchData {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (watch: WatchData) => void;
  removeFromCart: (watchId: string) => void;
  updateQuantity: (watchId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (watchId: string) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (watch: WatchData) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === watch.id);

        if (existingItem) {
          // If item exists, increase quantity
          const updatedItems = items.map(item =>
            item.id === watch.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({
            items: updatedItems,
            totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          });
        } else {
          // If item doesn't exist, add new item
          const newItem = { ...watch, quantity: 1 };
          const updatedItems = [...items, newItem];
          set({
            items: updatedItems,
            totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          });
        }
      },

      removeFromCart: (watchId: string) => {
        const { items } = get();
        const updatedItems = items.filter(item => item.id !== watchId);
        set({
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        });
      },

      updateQuantity: (watchId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(watchId);
          return;
        }

        const { items } = get();
        const updatedItems = items.map(item =>
          item.id === watchId
            ? { ...item, quantity }
            : item
        );
        set({
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },

      isInCart: (watchId: string) => {
        const { items } = get();
        return items.some(item => item.id === watchId);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
