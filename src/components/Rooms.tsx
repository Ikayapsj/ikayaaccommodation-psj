
import React, { useState } from 'react';
import { Bed, Users, Check } from 'lucide-react';

const roomsData = [
  {
    id: 1,
    name: "Standard Room",
    description: "Comfortable room with essential amenities for a relaxing stay.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    beds: "1 Double Bed",
    occupancy: "2 Guests",
    features: [
      "En-suite bathroom",
      "Air conditioning",
      "Free WiFi",
      "Tea/coffee making facilities"
    ],
    price: "R850",
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Spacious room with additional amenities and beautiful views.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    beds: "1 Queen Bed",
    occupancy: "2 Guests",
    features: [
      "En-suite bathroom with shower",
      "Air conditioning",
      "Free WiFi",
      "Tea/coffee making facilities",
      "Work desk"
    ],
    price: "R950",
  },
  {
    id: 3,
    name: "Family Suite",
    description: "Perfect for families with separate sleeping areas and ample space.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    beds: "1 Queen Bed + 2 Single Beds",
    occupancy: "4 Guests",
    features: [
      "En-suite bathroom",
      "Air conditioning",
      "Free WiFi",
      "Tea/coffee making facilities",
      "Mini fridge",
      "Lounge area"
    ],
    price: "R1250",
  }
];

const Rooms = () => {
  const [activeRoom, setActiveRoom] = useState<number | null>(null);

  return (
    <section id="rooms" className="section-padding bg-ikaya-100">
      <div className="container mx-auto">
        <h2 className="section-title">Our <span className="text-ikaya-green-500">Accommodations</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div 
              key={room.id} 
              className="bg-white rounded-lg overflow-hidden shadow-smooth hover:shadow-lg transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-ikaya-green-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                  {room.price} per night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-subheading font-semibold text-ikaya-blue-500 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 font-body">{room.description}</p>
                
                <div className="flex space-x-4 mb-4">
                  <div className="flex items-center">
                    <Bed size={18} className="text-ikaya-green-500 mr-2" />
                    <span className="text-sm text-gray-600 font-body">{room.beds}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users size={18} className="text-ikaya-green-500 mr-2" />
                    <span className="text-sm text-gray-600 font-body">{room.occupancy}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setActiveRoom(activeRoom === room.id ? null : room.id)}
                  className="text-ikaya-blue-500 font-medium hover:text-ikaya-green-500 flex items-center"
                >
                  View features
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`ml-2 transition-transform ${activeRoom === room.id ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                
                {activeRoom === room.id && (
                  <div className="mt-4 space-y-2 animate-fade-in">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check size={16} className="text-ikaya-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <a
                  href="#contact"
                  className="mt-6 block text-center bg-ikaya-green-500 hover:bg-ikaya-green-600 text-white py-2 rounded-md transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
