// src/App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="bg-gray-900 text-white py-4 flex justify-between items-center">
    <div className="logo ml-4">
      <h1>Smartphones</h1>
    </div>
    <nav className="mr-4">
      <a href="#home" className="mx-2">Home</a>
      <a href="#features" className="mx-2">Features</a>
      <a href="#pricing" className="mx-2">Pricing</a>
      <a href="#reviews" className="mx-2">Reviews</a>
      <a href="#faqs" className="mx-2">FAQs</a>
      <a href="#contact" className="mx-2">Contact</a>
    </nav>
  </header>
);

const Hero = () => (
  <div className="hero bg-cover bg-center h-80vh flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage: "url('hero.jpg')" }}>
    <h1 className="text-3xl">Introducing the Future of Mobile Technology</h1>
    <p className="text-xl mt-2">Power, Speed, and Elegance in Your Hands</p>
    <a href="#features" className="cta bg-blue-500 text-white py-2 px-4 rounded mt-4">Pre-Order Now</a>
  </div>
);

const Features = () => (
  <div className="features p-8 bg-white flex flex-wrap justify-center" id="features">
    <Feature 
      id="carouselIphone15Pro1" 
      title="Apple iPhone 15, 128GB, 5G, Blue" 
      description="6.1-inch OLED, Apple Bionic 16, 48MP + 12MP, 5G"
      images={["1.avif", "2.avif", "3.avif", "4.avif"]}
    />
    <Feature 
      id="carouselIphone15Pro2" 
      title="Apple iPhone 15 Pro 256GB 5G Black Titanium" 
      description="6.1-inch OLED, Apple Bionic 16, 48MP + 12MP, 5G"
      images={["1.avif", "2.avif", "3.avif"]}
    />
    {/* Repeat for each phone with corresponding IDs and image paths */}
  </div>
);

const Feature = ({ id, title, description, images }) => (
  <div className="feature flex flex-col items-center max-w-xs m-4 p-6 bg-white shadow-md rounded text-center">
    <div id={id} className="carousel slide relative w-full" data-ride="carousel" data-interval="false">
      <div className="carousel-inner relative w-full overflow-hidden">
        {images.map((src, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} relative float-left w-full`}>
            <img src={src} className="d-block w-full" alt={title} />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" href={`#${id}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" href={`#${id}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    <h3 className="text-xl mt-4 mb-2">{title}</h3>
    <p className="flex-grow">{description}</p>
    <a href="#" className="cta bg-green-500 text-white py-2 px-4 rounded mt-4 w-full">Buy Now</a>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white text-center py-8">
    <div className="links mb-4">
      <a href="#privacy" className="mx-2">Privacy Policy</a>
      <a href="#terms" className="mx-2">Terms of Service</a>
      <a href="#social" className="mx-2">Social Media</a>
    </div>
    <div className="newsletter mt-4">
      <form action="#">
        <input type="email" placeholder="Your Email" required className="p-2 rounded mr-2 border-none" />
        <input type="submit" value="Subscribe" className="p-2 bg-blue-500 text-white rounded cursor-pointer" />
      </form>
    </div>
  </footer>
);

export default App;
