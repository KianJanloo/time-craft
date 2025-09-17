import Link from "next/link";
import { 
  LogoIcon, 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  YoutubeIcon 
} from "@/services/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <LogoIcon size={20} color="white" />
              </div>
              <span className="ml-2 text-xl font-bold">TimeCraft</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Crafting timeless pieces that blend precision engineering with
              elegant design. From classic wristwatches to sophisticated wall
              clocks, we bring you the finest timepieces.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/watches"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  All Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/watches/wrist"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Wrist Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/watches/wall"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Wall Clocks
                </Link>
              </li>
              <li>
                <Link
                  href="/watches/pocket"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Pocket Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/watches/desk"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Desk Clocks
                </Link>
              </li>
              <li>
                <Link
                  href="/watches/antique"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Antique Clocks
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} TimeCraft. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
