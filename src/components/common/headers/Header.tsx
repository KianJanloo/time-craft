'use client'
import Link from "next/link";
import { SearchIcon, CartIcon, MenuIcon, LogoIcon, CloseIcon } from "@/services/icons";
import { useCartStore } from "@/stores/cartStore";

export default function Header() {
  const { totalItems } = useCartStore();
  
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <LogoIcon size={20} color="white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                TimeCraft
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/watches"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Watches
            </Link>
            <Link
              href="/collections"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search watches..."
                className="w-64 px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Link href="/cart" className="text-gray-700 hover:text-amber-600 p-2 relative">
              <CartIcon size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-amber-600 p-2"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              const searchField = document.getElementById('mobile-search');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
                if (searchField) {
                  searchField.focus();
                }
              }
            }}
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                id="mobile-search"
                type="text"
                placeholder="Search watches..."
                className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) mobileMenu.classList.add('hidden');
                }}
              >
                Home
              </Link>
              <Link
                href="/watches"
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) mobileMenu.classList.add('hidden');
                }}
              >
                Watches
              </Link>
              <Link
                href="/collections"
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) mobileMenu.classList.add('hidden');
                }}
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) mobileMenu.classList.add('hidden');
                }}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) mobileMenu.classList.add('hidden');
                }}
              >
                Contact
              </Link>
              <Link
                href="/cart"
                className="flex items-center text-gray-700 hover:text-amber-600 px-3 py-2 text-base font-medium transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) mobileMenu.classList.add('hidden');
                }}
              >
                <CartIcon size={20} className="mr-2" />
                Cart ({totalItems})
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
