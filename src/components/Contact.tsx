import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding bg-coastal-brown">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Book Your <span className="text-white">Stay</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-smooth p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6" style={{color: '#5f7f61'}}>Booking Inquiry</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-medium text-green-800 mb-2">Thank You!</h4>
                  <p className="text-green-700">
                    Your booking inquiry has been received. We'll contact you shortly to confirm availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-green focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-green focus:border-transparent"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-green focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkIn" className="block text-gray-700 mb-1">Check-in Date</label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-green focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="checkOut" className="block text-gray-700 mb-1">Check-out Date</label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-green focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-gray-700 mb-1">Number of Guests</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-green focus:border-transparent"
                      required
                    >
                      <option value="">Select number of guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Additional Requests</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coastal-green focus:border-transparent"
                      placeholder="Any special requirements or questions?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-coastal-green hover:bg-coastal-green/90 text-white py-3 rounded-md font-medium transition-colors flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing
                      </>
                    ) : "Submit Booking Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="bg-white rounded-lg shadow-smooth p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6" style={{color: '#5f7f61'}}>Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-coastal-cream rounded-full h-10 w-10 flex items-center justify-center mt-1">
                    <Phone style={{color: '#5f7f61'}} size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium" style={{color: '#5f7f61'}}>Phone</h4>
                    <p className="text-gray-600">+27 72 018 3007</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coastal-cream rounded-full h-10 w-10 flex items-center justify-center mt-1">
                    <Mail style={{color: '#5f7f61'}} size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium" style={{color: '#5f7f61'}}>Email</h4>
                    <p className="text-gray-600">ikayapsj2@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coastal-cream rounded-full h-10 w-10 flex items-center justify-center mt-1">
                    <MapPin style={{color: '#5f7f61'}} size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium" style={{color: '#5f7f61'}}>Address</h4>
                    <p className="text-gray-600">Second Beach Road<br />Port St Johns<br />Eastern Cape, 5120<br />South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coastal-cream rounded-full h-10 w-10 flex items-center justify-center mt-1">
                    <Calendar style={{color: '#5f7f61'}} size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium" style={{color: '#5f7f61'}}>Check-in/Check-out</h4>
                    <p className="text-gray-600">Check-in: 2:00 PM - 8:00 PM<br />Check-out: By 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-smooth p-8 flex-1">
              <h3 className="text-2xl font-serif font-semibold mb-6" style={{color: '#5f7f61'}}>Location</h3>
              
              <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53170.66912988834!2d29.513181207638125!3d-31.62384342252258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5e6b27a942c3cd%3A0xbd60ce5303d9bdd8!2sPort%20St%20Johns%2C%205120%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1712684818674!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ikaya Accommodation PSJ Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
