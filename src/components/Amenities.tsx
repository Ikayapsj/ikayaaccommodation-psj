import React from 'react';
import { Wifi, MapPin, Car, Bath, Utensils, TreePine } from 'lucide-react';

const amenitiesData = [
  {
    name: "Free WiFi",
    description: "Internet access across the property",
    icon: Wifi
  },
  {
    name: "Beach Access",
    description: "Beach access and nature reserve adjacent to the property",
    icon: TreePine
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
    description: "Local restaurants just a short drive away",
    icon: Utensils
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-12 bg-coastal-brown">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Guest <span className="text-white">Amenities</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <div className="bg-coastal-cream rounded-full h-14 w-14 flex items-center justify-center mb-4">
                <amenity.icon style={{ color: '#5f7f61' }} size={24} />
              </div>
              <h3 className="text-xl font-subheading font-semibold mb-2" style={{ color: '#5f7f61' }}>{amenity.name}</h3>
              <p className="text-black font-body">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-coastal-green rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-subheading font-semibold text-white mb-4">
                Enjoy Rustic Comfort and Nature at your Doorstep
              </h3>
              <p className="text-white mb-6 font-body">
                Nestled in the bay adjacent to Silaka Nature Reserve, our accommodation allows you to unwind in the natural beauty that the majestic Transkei has to offer.
              </p>
              <a href="#contact" className="bg-white text-coastal-green hover:bg-white/90 px-6 py-3 rounded-md inline-block transition-colors w-max font-medium font-bold">
                Book Your Stay
              </a>
            </div>
            <div className="h-64 md:h-auto">
              <img src="/lovable-uploads/1eefca4c-ac28-4925-93f8-9584ad6cbcd5.png" alt="Ikaya Accommodation PSJ - Nature and Comfort" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
