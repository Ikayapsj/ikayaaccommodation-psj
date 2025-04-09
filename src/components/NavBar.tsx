
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl font-serif font-bold text-ikaya-800">
            iKaya<span className="text-ikaya-600">Green</span>
          </a>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-ikaya-800 hover:text-ikaya-600"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#home" className="text-ikaya-800 hover:text-ikaya-600 font-medium">Home</a>
            <a href="#about" className="text-ikaya-800 hover:text-ikaya-600 font-medium">About</a>
            <a href="#rooms" className="text-ikaya-800 hover:text-ikaya-600 font-medium">Rooms</a>
            <a href="#amenities" className="text-ikaya-800 hover:text-ikaya-600 font-medium">Amenities</a>
            <a href="#contact" className="text-ikaya-800 hover:text-ikaya-600 font-medium">Contact</a>
            <a 
              href="#contact" 
              className="bg-ikaya-600 text-white px-5 py-2 rounded-md hover:bg-ikaya-700 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <a href="#home" className="text-ikaya-800 hover:text-ikaya-600 py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-ikaya-800 hover:text-ikaya-600 py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#rooms" className="text-ikaya-800 hover:text-ikaya-600 py-2" onClick={() => setIsMenuOpen(false)}>Rooms</a>
            <a href="#amenities" className="text-ikaya-800 hover:text-ikaya-600 py-2" onClick={() => setIsMenuOpen(false)}>Amenities</a>
            <a href="#contact" className="text-ikaya-800 hover:text-ikaya-600 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a 
              href="#contact" 
              className="bg-ikaya-600 text-white px-5 py-2 rounded-md hover:bg-ikaya-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
