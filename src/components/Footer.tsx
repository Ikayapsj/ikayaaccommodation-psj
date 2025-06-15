
import React from 'react';
import { Facebook, Instagram, MessageCircle, Link } from 'lucide-react';
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
            <div className="mt-8">
              <h4 className="text-lg font-subheading font-semibold mb-4" style={{color: '#5f7f61'}}>Quick Links</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/#units" className="hover:text-coastal-green transition-colors">Our Units</a></li>
                <li><a href="#" className="hover:text-coastal-green transition-colors">Guest Registry</a></li>
                <li><a href="/#contact" className="hover:text-coastal-green transition-colors">Book Now</a></li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/17tfZdrdTdA17J897rxQoXX1u3DAeBs6J/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center hover:text-coastal-green transition-colors"
                  >
                    Guest Information
                    <Link size={14} className="ml-1.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <Testimonials />
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
