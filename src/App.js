import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './App.css';

const phones = [
  {
    id: 'carouselIphone15',
    title: 'Apple iPhone 15, 128GB, 5G, Blue',
    description: '6.1-inch OLED, Apple Bionic 16, 48MP + 12MP, 5G',
    images: [
      '/assets/carousel/iphone15/1.avif',
      '/assets/carousel/iphone15/2.avif',
      '/assets/carousel/iphone15/3.avif',
      '/assets/carousel/iphone15/4.avif',
    ],
  },
  {
    id: 'carouselIphone15ProBlack',
    title: 'Apple iPhone 15 Pro, 256GB, 5G, Black Titanium',
    description: '6.1-inch OLED, Apple Bionic 16, 48MP + 12MP, 5G',
    images: [
      '/assets/carousel/iphone15ProBlack/1.avif',
      '/assets/carousel/iphone15ProBlack/2.avif',
      '/assets/carousel/iphone15ProBlack/3.avif',
      '/assets/carousel/iphone15ProBlack/4.avif',
      '/assets/carousel/iphone15ProBlack/5.avif',
    ],
  },
  {
    id: 'carouselIphone15ProNatural',
    title: 'Apple iPhone 15 Pro, 256GB, 5G, Natural Titanium',
    description: '6.1-inch OLED, Apple Bionic 16, 48MP + 12MP, 5G',
    images: [
      '/assets/carousel/iphone15ProNatural/1.avif',
      '/assets/carousel/iphone15ProNatural/2.avif',
      '/assets/carousel/iphone15ProNatural/3.avif',
      '/assets/carousel/iphone15ProNatural/4.avif',
      '/assets/carousel/iphone15ProNatural/5.avif',
      '/assets/carousel/iphone15ProNatural/6.avif',
    ],
  },
  {
    id: 'carouselIphone15ProMax',
    title: 'Apple iPhone 15 Pro Max Specs',
    description:
      '6.7-inch OLED, 120Hz refresh rate, Apple A17 Pro, 48MP triple camera, 5G, 89.75% screen-to-body ratio',
    images: [
      '/assets/carousel/iphone15ProMax/1.avif',
      '/assets/carousel/iphone15ProMax/2.avif',
      '/assets/carousel/iphone15ProMax/3.avif',
      '/assets/carousel/iphone15ProMax/4.avif',
      '/assets/carousel/iphone15ProMax/5.avif',
    ],
  },
  {
    id: 'carouselSamsungGalaxyA55',
    title: 'Samsung Galaxy A55, 256GB, 8GB RAM, 5G, Awesome Lemon',
    description: '6.6-inch AMOLED, 120Hz, 5000mAh battery, 5G, Compact size',
    images: [
      '/assets/carousel/samsungGalaxyA55/1.avif',
      '/assets/carousel/samsungGalaxyA55/2.avif',
      '/assets/carousel/samsungGalaxyA55/3.avif',
      '/assets/carousel/samsungGalaxyA55/4.avif',
      '/assets/carousel/samsungGalaxyA55/5.avif',
      '/assets/carousel/samsungGalaxyA55/6.avif',
      '/assets/carousel/samsungGalaxyA55/7.avif',
      '/assets/carousel/samsungGalaxyA55/8.avif',
      '/assets/carousel/samsungGalaxyA55/9.avif',
    ],
  },
  {
    id: 'carouselXiaomiRedmiNote12Pro',
    title: 'Xiaomi Redmi Note 12 Pro, 8GB RAM, 256GB, Onyx Black',
    description:
      '6.67-inch OLED, 120Hz, MediaTek Dimensity 1080, 5000mAh, 120W fast charging, triple camera, 5G',
    images: [
      '/assets/carousel/xiaomiRedmiNote12Pro/1.avif',
      '/assets/carousel/xiaomiRedmiNote12Pro/2.avif',
      '/assets/carousel/xiaomiRedmiNote12Pro/3.avif',
      '/assets/carousel/xiaomiRedmiNote12Pro/4.avif',
      '/assets/carousel/xiaomiRedmiNote12Pro/5.avif',
      '/assets/carousel/xiaomiRedmiNote12Pro/6.avif',
      '/assets/carousel/xiaomiRedmiNote12Pro/7.avif',
    ],
  },
];

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
  <header className="bg-brand-black text-brand-white py-4 flex justify-between items-center">
    <div className="logo ml-4">
      <h1 className="text-2xl font-bold">Smartphones</h1>
    </div>
    <nav className="mr-4">
      <a href="#home" className="mx-2 text-brand-white hover:text-brand-blue">
        Home
      </a>
      <a
        href="#features"
        className="mx-2 text-brand-white hover:text-brand-blue"
      >
        Features
      </a>
      <a
        href="#pricing"
        className="mx-2 text-brand-white hover:text-brand-blue"
      >
        Pricing
      </a>
      <a
        href="#reviews"
        className="mx-2 text-brand-white hover:text-brand-blue"
      >
        Reviews
      </a>
      <a href="#faqs" className="mx-2 text-brand-white hover:text-brand-blue">
        FAQs
      </a>
      <a
        href="#contact"
        className="mx-2 text-brand-white hover:text-brand-blue"
      >
        Contact
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <div
    className="hero bg-cover bg-center h-80vh flex flex-col justify-center items-center text-center text-brand-white grow"
    style={{ backgroundImage: "url('/assets/hero.jpg')" }}
  >
    <h1 className="text-5xl font-bold">
      Introducing the Future of Mobile Technology
    </h1>
    <p className="text-2xl mt-4">Power, Speed, and Elegance in Your Hands</p>
    <a
      href="#features"
      className="mt-6 px-8 py-4 bg-brand-blue text-brand-white font-semibold rounded-lg shadow-md hover:bg-brand-green"
    >
      Pre-Order Now
    </a>
  </div>
);

const Features = () => (
  <div
    className="features py-16 bg-brand-white flex flex-wrap justify-center"
    id="features"
  >
    {phones.map((phone) => (
      <Feature
        key={phone.id}
        id={phone.id}
        title={phone.title}
        description={phone.description}
        images={phone.images}
      />
    ))}
  </div>
);

const Feature = ({ id, title, description, images }) => (
  <div className="feature flex flex-col items-center max-w-xs m-4 p-6 bg-white shadow-lg rounded-lg text-center">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      className="w-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <img src={src} alt={title} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="flex-grow">{description}</p>
    <a
      href="#"
      className="mt-4 px-6 py-2 bg-brand-green text-brand-white font-semibold rounded-lg shadow-md hover:bg-brand-blue w-full"
    >
      Buy Now
    </a>
  </div>
);

const Footer = () => (
  <footer className="bg-brand-black text-brand-white text-center py-8">
    <div className="links mb-4">
      <a href="#privacy" className="mx-2 hover:text-brand-blue">
        Privacy Policy
      </a>
      <a href="#terms" className="mx-2 hover:text-brand-blue">
        Terms of Service
      </a>
      <a href="#social" className="mx-2 hover:text-brand-blue">
        Social Media
      </a>
    </div>
    <div className="newsletter mt-4">
      <form action="#">
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-2 rounded mr-2 border-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="p-2 bg-brand-blue text-brand-white rounded cursor-pointer hover:bg-brand-green"
        />
      </form>
    </div>
  </footer>
);

export default App;
