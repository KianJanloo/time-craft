'use client';

import { CartIcon, PlusIcon, MinusIcon, TrashIcon } from '@/services/icons';
import { useCartStore } from '@/stores/cartStore';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function CartPageClient() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCartStore();

  const handleQuantityChange = (watchId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(watchId);
      toast.error('Item removed from cart');
    } else {
      updateQuantity(watchId, newQuantity);
      toast.success('Quantity updated');
    }
  };

  const handleRemoveItem = (watchId: string, watchName: string) => {
    removeFromCart(watchId);
    toast.error(`${watchName} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.error('Cart cleared');
  };

  const shipping = totalPrice > 500 ? 0 : 25;
  const tax = totalPrice * 0.08; // 8% tax
  const finalTotal = totalPrice + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">Review your selected timepieces</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{totalItems} items</span>
                    {items.length > 0 && (
                      <button
                        onClick={handleClearCart}
                        className="text-sm text-red-600 hover:text-red-700 font-medium"
                      >
                        Clear Cart
                      </button>
                    )}
                  </div>
                </div>

                {items.length === 0 ? (
                  /* Empty Cart State */
                  <div className="text-center py-12">
                    <CartIcon size={64} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-6">Add some beautiful timepieces to get started</p>
                    <Link
                      href="/watches"
                      className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Browse Watches
                    </Link>
                  </div>
                ) : (
                  /* Cart Items List */
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex flex-wrap items-center gap-8 p-4 border border-gray-200 rounded-lg">
                        <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          {item.brand && (
                            <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                          )}
                          {item.material && (
                            <p className="text-sm text-gray-500">Material: {item.material}</p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 cursor-pointer rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <MinusIcon className='text-gray-600' size={16} />
                          </button>
                          <span className="w-8 text-center font-medium text-gray-600">{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 cursor-pointer rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <PlusIcon className='text-gray-600' size={16} />
                          </button>
                        </div>
                        <div className="text-right flex gap-2 items-center">
                          <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                          <button 
                            onClick={() => handleRemoveItem(item.id, item.name)}
                            className="text-red-500 cursor-pointer hover:text-red-700 mt-1 transition-colors"
                          >
                            <TrashIcon size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-400">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-gray-400">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium text-gray-400">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                disabled={items.length === 0}
                className={`w-full mt-6 py-3 px-4 rounded-lg font-medium transition-colors ${
                  items.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-amber-500 hover:bg-amber-600 text-white'
                }`}
              >
                Proceed to Checkout
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Continue Shopping</p>
                <Link
                  href="/watches"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Browse All Watches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
