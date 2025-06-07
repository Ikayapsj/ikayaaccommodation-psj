
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      image: "/lovable-uploads/be2f7b59-fd66-415d-97b0-d8ebfee245c6.png",
      title: "Welcome to Ikaya Accommodation PSJ",
      subtitle: "Your Tranquil Escape in Port St Johns"
    },
    {
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Experience Nature's Comfort",
      subtitle: "Relaxation & Adventure Await"
    },
    {
      image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Luxury Meets Nature",
      subtitle: "Create Unforgettable Memories"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div id="home" className="relative h-screen w-full">
      {/* Slides */}
      <div className="h-full w-full relative overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Content */}
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto z-10 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="#rooms" 
                    className="bg-ikaya-600 hover:bg-ikaya-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    View Rooms
                  </a>
                  <a 
                    href="#contact" 
                    className="bg-white hover:bg-gray-100 text-ikaya-800 px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Left Arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-black/30 text-white rounded-full cursor-pointer hover:bg-black/50 transition-colors z-10">
        <ChevronLeft onClick={prevSlide} size={24} />
      </div>
      
      {/* Right Arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-black/30 text-white rounded-full cursor-pointer hover:bg-black/50 transition-colors z-10">
        <ChevronRight onClick={nextSlide} size={24} />
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/60 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
