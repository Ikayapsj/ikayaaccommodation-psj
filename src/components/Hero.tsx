
import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* Single slide */}
      <div className="h-full w-full relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/lovable-uploads/be2f7b59-fd66-415d-97b0-d8ebfee245c6.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Increased overlay opacity for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto z-10 relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white font-bold mb-4 drop-shadow-lg">
                Welcome to Ikaya Accommodation PSJ
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg font-subheading">
                Your escape along South Africa's breathtaking Wild Coast
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#rooms" 
                  className="bg-coastal-green hover:bg-coastal-green/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  View Rooms
                </a>
                <a 
                  href="#contact" 
                  className="bg-coastal-green hover:bg-coastal-green/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
