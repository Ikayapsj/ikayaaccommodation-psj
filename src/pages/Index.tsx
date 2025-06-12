
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import LocalAttractions from '../components/LocalAttractions';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <div id="units">
        <Rooms />
      </div>
      <Amenities />
      <LocalAttractions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
