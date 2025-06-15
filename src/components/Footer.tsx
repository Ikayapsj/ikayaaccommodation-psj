
import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Testimonials from './Testimonials';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coastal-cream text-black pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-subheading font-semibold mb-4" style={{color: '#5f7f61'}}>Ikaya Accommodation PSJ</h3>
            <p className="text-black mb-4 font-body">
              Experience comfort, convenience, and natural beauty.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/IkayaAccommodationPSJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-75 transition-colors"
                style={{color: '#5f7f61'}}
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/ikaya_accommodation_psj?igsh=MTByOWU4a3gyZm5qYQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-75 transition-colors"
                style={{color: '#5f7f61'}}
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/27720183007" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-75 transition-colors"
                style={{color: '#5f7f61'}}
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <Testimonials />
          </div>

          <div className="flex justify-center items-center md:justify-start">
            <img 
              src="/lovable-uploads/95ae51ed-39c2-466e-892f-720370ca1961.png" 
              alt="Ikaya Accommodation PSJ Logo" 
              className="w-full max-w-[250px] h-auto"
            />
          </div>
        </div>
        
        <div className="border-t pt-6 mt-2" style={{borderColor: '#5f7f61'}}>
          <p className="text-center text-black text-sm font-body">
            &copy; {currentYear} Ikaya Accommodation PSJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
