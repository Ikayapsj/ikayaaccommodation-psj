
import React from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Cape Town",
    rating: 5,
    review: "Amazing location right on Second Beach! The rustic charm combined with modern amenities made our stay perfect. The hosts were incredibly welcoming and helpful.",
    platform: "Google"
  },
  {
    name: "David & Lisa K.",
    location: "Johannesburg", 
    rating: 5,
    review: "We stayed in the family cottage and it was absolutely fantastic. The sea view from the BBQ area was breathtaking. Our kids loved being so close to the beach.",
    platform: "Google"
  },
  {
    name: "Michael T.",
    location: "Durban",
    rating: 10,
    review: "Perfect spot for a fishing trip! The accommodation is clean, comfortable, and the location couldn't be better. Will definitely be back next year.",
    platform: "Booking.com"
  },
  {
    name: "Emma R.",
    location: "Port Elizabeth",
    rating: 5,
    review: "Such a peaceful retreat! The sound of the ocean right outside was incredible. The self-catering facilities were well-equipped and the staff very friendly.",
    platform: "Google"
  },
  {
    name: "James & Carol W.",
    location: "East London",
    rating: 10,
    review: "Exceeded our expectations! The Wild Coast setting is magical and Ikaya provided the perfect base to explore. Highly recommend for couples or families.",
    platform: "Booking.com"
  }
];

const Testimonials = () => {
  return (
    <div>
      <h3 className="text-xl font-subheading font-semibold mb-4" style={{color: '#5f7f61'}}>Guest Testimonials</h3>
      
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-1">
                    {testimonial.platform === "Google" ? (
                      // 5-star rating for Google
                      [...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))
                    ) : (
                      // 10/10 rating for Booking.com
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                        10/10
                      </div>
                    )}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{testimonial.platform}</span>
                </div>
                
                <p className="text-black font-body text-sm mb-4 italic">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t pt-3">
                  <p className="font-semibold text-sm" style={{color: '#5f7f61'}}>
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
