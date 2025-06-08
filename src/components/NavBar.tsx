
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
          {/* Empty div to maintain layout structure */}
          <div></div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden hover:opacity-75"
            style={{color: '#5f7f61'}}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#home" className="text-black hover:opacity-75 font-medium">Home</a>
            <a href="#guest-registry" className="text-black hover:opacity-75 font-medium">Guest Registry</a>
            <a href="#guest-information" className="text-black hover:opacity-75 font-medium">Guest Information</a>
            <a href="#units" className="text-black hover:opacity-75 font-medium">Our Units</a>
            <a href="#local-attractions" className="text-black hover:opacity-75 font-medium">Local Attractions</a>
            <a href="#contact" className="text-black hover:opacity-75 font-medium">Contact Us</a>
            <a 
              href="#contact" 
              className="bg-coastal-green text-white px-5 py-2 rounded-md hover:bg-coastal-green/90 transition-colors"
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
            <a href="#home" className="text-black hover:opacity-75 py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#guest-registry" className="text-black hover:opacity-75 py-2" onClick={() => setIsMenuOpen(false)}>Guest Registry</a>
            <a href="#guest-information" className="text-black hover:opacity-75 py-2" onClick={() => setIsMenuOpen(false)}>Guest Information</a>
            <a href="#units" className="text-black hover:opacity-75 py-2" onClick={() => setIsMenuOpen(false)}>Our Units</a>
            <a href="#local-attractions" className="text-black hover:opacity-75 py-2" onClick={() => setIsMenuOpen(false)}>Local Attractions</a>
            <a href="#contact" className="text-black hover:opacity-75 py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            <a 
              href="#contact" 
              className="bg-coastal-green text-white px-5 py-2 rounded-md hover:bg-coastal-green/90 transition-colors text-center"
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
