// src/components/Hero/Hero.js
import React from 'react';
import heroImage from '../../assets/hero.jpeg'; // Replace with your actual image path
import '../../styles/hero.css';
const Hero = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="img-fluid" />
      {/* You can add additional content or text overlay here if needed */}
    </div>
  );
};

export default Hero;
