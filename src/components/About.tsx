
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About <span className="text-ikaya-600">Ikaya Accommodation PSJ</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Ikaya Accommodation PSJ Exterior" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-ikaya-50 p-6 rounded-lg shadow-md hidden md:block">
              <p className="font-serif text-xl text-ikaya-800">
                "Experience the beauty of<br />Port St Johns with us"
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-ikaya-800">Your Home Away From Home</h3>
            
            <p className="text-gray-700">
              Welcome to Ikaya Accommodation PSJ, a tranquil oasis nestled in the heart of Port St Johns. 
              Our guest house offers a perfect blend of comfort, convenience, and connection to nature, 
              making it an ideal destination for both leisure and business travelers.
            </p>
            
            <p className="text-gray-700">
              Surrounded by lush tropical vegetation and just minutes away from pristine beaches,
              our accommodation provides a peaceful retreat where you can unwind and recharge.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <Check className="text-ikaya-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Centrally located in Port St Johns, close to local attractions</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="text-ikaya-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Spacious rooms with modern amenities and natural views</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="text-ikaya-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Personalized service to make your stay memorable</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="text-ikaya-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Perfect for both short getaways and extended stays</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-ikaya-600 hover:bg-ikaya-700 text-white px-6 py-3 rounded-md mt-4 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
