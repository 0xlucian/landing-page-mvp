import React from 'react';
import phones from '../data/phones';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const Features = () => (
  <div className="features py-16 bg-brand-white flex flex-wrap justify-center" id="features">
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
    <Link to={`/phone/${id}`} className="mt-4 px-6 py-2 bg-brand-green text-brand-white font-semibold rounded-lg shadow-md hover:bg-brand-blue w-full">Learn More</Link>
  </div>
);

export default Features;
