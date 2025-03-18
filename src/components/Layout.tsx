import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-[#022031] shadow-sm z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/dklqbx5k0/image/upload/v1740717967/pcudguzwxcmqfbjchhnr.png"
          alt="Logo"
          className="w-62 h-72 object-fill pb-2"
        />
      </div>

      <nav className="hidden md:flex space-x-8">
        <Navigation />
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <a href="tel:+13058641373" className="flex items-center text-white hover:text-teal-700">
          <Phone className="h-5 w-5 mr-2" />
          (305) 864-1373
        </a>

        <Link to="/contact">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
            Start Conversation
          </button>
        </Link>

        <a
          href="https://meet.brevo.com/medicalwellness/aging-biohacking-appointments-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
            Book Now
          </button>
        </a>
      </div>

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
      </button>
    </div>
  </div>

  {isMenuOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Navigation />
      </div>
    </div>
  )}
</header>


      <main className="pt-16">{children}</main>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Aging Biohack</h3>
              <p className="text-gray-400">
                Leading the way in regenerative medicine and innovative therapies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/treatment" className="text-gray-400 hover:text-white">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
              1899 NE 164th St,
                <br />
                North Miami Beach, FL 33162
                <br />
                (305) 8641373
                <br />
                sportsrecoverypro@gmail.com
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>These therapies are not FDA-approved for the treatment of specific diseases.</li>
                <li>Individual results may vary.</li>
                {/* <li>
                  <Link to="/Treamentcopy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Aging Biohack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
