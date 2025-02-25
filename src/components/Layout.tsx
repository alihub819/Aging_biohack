import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-[#022031] shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="https://res.cloudinary.com/dlasb4krd/image/upload/v1740508075/q8mvdcjiocqmtb1pmepp.png" alt="" className='w-62 h-72 object-fill pb-2' />
              {/* <a href="/" className="text-2xl font-bold text-teal-600">
                Aging<span className="text-gray-800">Biohacks </span>
              </a> */}
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Navigation />
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+1-305-555-0123" className="flex items-center text-white hover:text-teal-700">
                <Phone className="h-5 w-5 mr-2" />
                (305) 234565432
              </a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Schedule Consultation
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Navigation />
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RegenMD</h3>
              <p className="text-gray-400">
                Leading the way in regenerative medicine and innovative therapies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/treatments" className="text-gray-400 hover:text-white">Treatments</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                123 Medical Center Drive<br />
                Miami, FL 33101<br />
                (305) 555-0123<br />
                info@regenmd.com
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>These therapies are not FDA-approved for the treatment of specific diseases.</li>
                <li>Individual results may vary.</li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RegenMD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}