
import React, { useState } from 'react';
import { Bed, Users, Check } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const roomsData = [{
  id: 1,
  name: "Double Room with Garden View",
  description: "Comfortable room with an en-suite bathroom and a shared kitchen space.",
  images: [
    "/lovable-uploads/f5ba014e-2406-4f1b-9825-079b1f18e83e.png",
    "/lovable-uploads/e07292db-e503-4577-8f4b-66ab1f6e7dc2.png",
    "/lovable-uploads/b1a9d37a-5989-4695-b167-6212731dc7d0.png",
    "/lovable-uploads/83965c34-ea5d-41bc-a8bf-bd486f38a165.png"
  ],
  beds: "1 Double Bed",
  occupancy: "2 Guests",
  features: ["En-suite bathroom", "Ceiling fan", "Free WiFi", "Tea/coffee making facilities", "Shared kitchen space"],
  price: "from R750"
}, {
  id: 2,
  name: "Triple Room with Private Garden",
  description: "Spacious room with a private garden.",
  images: ["/lovable-uploads/b9e594b7-8a69-440a-a545-61f1d5de34b9.png"],
  beds: "1 Double Bed + 1 Single Bed",
  occupancy: "3 Guests",
  features: ["Private garden", "Fans", "Free WiFi", "Full kitchen", "BBQ facilities", "Pet-friendly"],
  price: "from R900"
}, {
  id: 3,
  name: "Double Room with Sea View",
  description: "Includes a deck with BBQ facilities and a lovely ocean view.",
  images: ["/lovable-uploads/f86d295e-3dd8-40b7-9778-9f48e4ff7494.png"],
  beds: "1 Double Bed",
  occupancy: "2 Guests",
  features: ["En-suite bathroom", "Fan", "Free WiFi", "Full kitchen", "Deck with BBQ facilities", "Ocean view", "Pet-friendly"],
  price: "from R900"
}, {
  id: 4,
  name: "Family Cottage",
  description: "Perfect for families and groups of friends.",
  images: ["/lovable-uploads/787a7038-29bf-42c0-973c-d3463b97ec8a.png"],
  beds: "3 Double Beds + 4 Single Beds",
  occupancy: "6 Adults + 4 Children",
  features: ["3 bathrooms", "Sea view", "Free WiFi", "Full kitchen facilities", "Lounge area", "BBQ area with sea view"],
  price: "from R1900"
}];

const Rooms = () => {
  const [activeRoom, setActiveRoom] = useState<number | null>(null);
  return <section id="rooms" className="section-padding bg-coastal-cream">
      <div className="container mx-auto">
        <h2 className="section-title text-coastal-green">Our <span className="text-coastal-green">Units</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {roomsData.map(room => <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-smooth hover:shadow-lg transition-all group">
              <div className="relative h-60 overflow-hidden">
                {room.images.length > 1 ? (
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {room.images.map((img, index) => (
                        <CarouselItem key={index}>
                          <img src={img} alt={`${room.name} image ${index + 1}`} className="w-full h-full object-cover object-center" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none h-8 w-8" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none h-8 w-8" />
                  </Carousel>
                ) : (
                  <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute top-4 right-4 bg-coastal-green text-white px-3 py-1 rounded-md text-sm font-medium">
                  {room.price} per night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-subheading font-semibold text-coastal-green mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 font-body">{room.description}</p>
                
                <div className="flex space-x-4 mb-4">
                  <div className="flex items-center">
                    <Bed size={18} className="text-coastal-green mr-2" />
                    <span className="text-sm text-gray-600 font-body">{room.beds}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users size={18} className="text-coastal-green mr-2" />
                    <span className="text-sm text-gray-600 font-body">{room.occupancy}</span>
                  </div>
                </div>
                
                <button onClick={() => setActiveRoom(activeRoom === room.id ? null : room.id)} className="text-coastal-green font-medium hover:text-coastal-brown flex items-center">
                  View features
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`ml-2 transition-transform ${activeRoom === room.id ? 'rotate-180' : 'rotate-0'}`}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                
                {activeRoom === room.id && <div className="mt-4 space-y-2 animate-fade-in">
                    {room.features.map((feature, index) => <div key={index} className="flex items-start gap-2">
                        <Check size={16} className="text-coastal-green mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600 font-body">{feature}</span>
                      </div>)}
                  </div>}
                
                <a href="#contact" className="mt-6 block text-center bg-coastal-green hover:bg-coastal-green/90 text-white py-2 rounded-md transition-colors">
                  Book Now
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Rooms;
