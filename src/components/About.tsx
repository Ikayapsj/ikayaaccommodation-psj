import React from 'react';
import { Check } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-8 bg-coastal-cream">
      <div className="container mx-auto">
        <h2 className="section-title" style={{
        color: '#5f7f61'
      }}>About <span style={{
          color: '#5f7f61'
        }}>Ikaya Accommodation PSJ</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <img src="/lovable-uploads/f4d92ddc-603f-4761-afd1-fb9db1fd3aa7.png" alt="Ikaya Accommodation PSJ - Second Beach, Port St Johns" className="rounded-lg shadow-lg w-full h-[300px] object-cover" />
            <img src="/lovable-uploads/83922e64-dbff-49d1-9402-9269c679433c.png" alt="Ikaya Accommodation PSJ - Beautiful Coastal View" className="rounded-lg shadow-lg w-full h-[300px] object-cover" />
          </div>
          
          <div className="space-y-6">
            <h3 style={{
            color: '#7ea07d'
          }} className="text-2xl font-subheading font-semibold text-coastal-green">Your Home Away From Home</h3>
            
            <p className="text-black font-body">
              Nestled in the serene cove of Second Beach, Port St Johns, Ikaya Accommodation PSJ invites you to unwind along South Africa's breathtaking Wild Coast. Whether you're a fisherman chasing the perfect catch, a beach lover soaking in the sun, or a road tripper exploring the magic of the Eastern Cape, Ikaya is your ideal coastal home away from home.
            </p>
            
            <p className="text-black font-body">
              We offer rustic, comfortable self-catering units designed for every kind of traveler — from couples seeking a peaceful retreat to families and large groups looking for adventure. Choose from cozy en-suite double rooms to a spacious cottage that sleep up to 8 guests.
            </p>

            <p className="text-black font-body">
              Our charm lies in simplicity — no frills, just authentic coastal living, warm hospitality, and the call of the ocean on your doorstep.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <Check className="mt-1 flex-shrink-0" style={{
                color: '#7ea07d'
              }} size={20} />
                <p className="text-black font-body">Located at beautiful Second Beach, Port St Johns</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="mt-1 flex-shrink-0" style={{
                color: '#7ea07d'
              }} size={20} />
                <p className="text-black font-body">Self-catering units for couples, families, and groups</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="mt-1 flex-shrink-0" style={{
                color: '#7ea07d'
              }} size={20} />
                <p className="text-black font-body">Authentic coastal living with warm hospitality</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Check className="mt-1 flex-shrink-0" style={{
                color: '#7ea07d'
              }} size={20} />
                <p className="text-black font-body">Perfect for fishing, beach activities, and road trips</p>
              </div>
            </div>
            
            <a href="#contact" className="inline-block bg-coastal-green hover:bg-coastal-green/90 text-white px-6 py-3 rounded-md mt-4 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default About;