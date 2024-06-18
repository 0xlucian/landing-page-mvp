import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="hero bg-cover bg-center h-80vh flex flex-col justify-center items-center text-center text-brand-white grow" style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
    <h1 className="text-5xl font-bold">Introducing the Future of Mobile Technology</h1>
    <p className="text-2xl mt-4">Power, Speed, and Elegance in Your Hands</p>
    <Link to="#features" className="mt-6 px-8 py-4 bg-brand-blue text-brand-white font-semibold rounded-lg shadow-md hover:bg-brand-green">Pre-Order Now</Link>
  </div>
);

export default Hero;