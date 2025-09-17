import Header from '@/components/common/headers/Header';
import Footer from '@/components/common/footers/Footer';
import { CartIcon, PlusIcon, MinusIcon, TrashIcon } from '@/services/icons';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                  <span className="text-sm text-gray-500">0 items</span>
                </div>

                {/* Empty Cart State */}
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

                {/* Cart Items List (Hidden when empty) */}
                <div className="hidden space-y-4">
                  <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <CartIcon size={32} className="text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Classic Gold Wristwatch</h3>
                      <p className="text-sm text-gray-500">Brand: TimeCraft</p>
                      <p className="text-sm text-gray-500">Material: 18K Gold</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                        <MinusIcon size={16} />
                      </button>
                      <span className="w-8 text-center">1</span>
                      <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                        <PlusIcon size={16} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">$1,299.00</p>
                      <button className="text-red-500 hover:text-red-700 mt-1">
                        <TrashIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
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
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">$0.00</span>
                  </div>
                </div>
              </div>

              <button
                disabled
                className="w-full mt-6 bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
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
      </main>
      <Footer />
    </div>
  );
}
