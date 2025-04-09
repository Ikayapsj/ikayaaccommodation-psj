
import React from 'react';
import { Wifi, Coffee, MapPin, Car, Bath, Utensils } from 'lucide-react';

const amenitiesData = [
  {
    name: "Free WiFi",
    description: "High-speed internet access throughout the property",
    icon: Wifi
  },
  {
    name: "Breakfast",
    description: "Continental breakfast available daily",
    icon: Coffee
  },
  {
    name: "Convenient Location",
    description: "Central location close to beaches and attractions",
    icon: MapPin
  },
  {
    name: "Parking",
    description: "Free secure parking for all guests",
    icon: Car
  },
  {
    name: "Private Bathrooms",
    description: "En-suite bathrooms in all rooms",
    icon: Bath
  },
  {
    name: "Dining Options",
    description: "Restaurants and cafés within walking distance",
    icon: Utensils
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Guest <span className="text-ikaya-600">Amenities</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-ikaya-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-ikaya-100 rounded-full h-14 w-14 flex items-center justify-center mb-4">
                <amenity.icon className="text-ikaya-700" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-ikaya-800 mb-2">{amenity.name}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-ikaya-700 rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
                Experience Comfort & Convenience
              </h3>
              <p className="text-ikaya-100 mb-6">
                At iKaya Green Getaway, we go above and beyond to ensure your stay is comfortable,
                convenient, and memorable. Our range of amenities is designed to enhance your experience
                and make you feel at home.
              </p>
              <a 
                href="#contact" 
                className="bg-white text-ikaya-800 hover:bg-ikaya-50 px-6 py-3 rounded-md inline-block transition-colors w-max font-medium"
              >
                Book Your Stay
              </a>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="iKaya Green Amenities" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
