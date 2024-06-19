import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import phones from '../data/phones';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';

const PhoneDetails = () => {
  const { id } = useParams();
  const phone = phones.find((phone) => phone.id === id);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!phone) {
    return <div>Phone not found</div>;
  }

  const { title, description, characteristics, images } = phone;

  return (
    <div className="phone-detail p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <div className="phone-detail-header text-center mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="phone-detail-carousel mb-8">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Navigation, Thumbs]}
          className="phone-detail-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={title} className="w-full h-auto rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="phone-detail-thumbs mt-4"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={title} className="w-full h-auto rounded-lg cursor-pointer" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="phone-detail-characteristics mb-8">
        <h2 className="text-2xl font-semibold mb-4">Características</h2>
        <ul className="list-disc pl-5">
          {Object.keys(characteristics).map((key) => (
            <li key={key} className="text-lg mb-2">
              <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}: </strong>
              {Array.isArray(characteristics[key]) ? (
                characteristics[key].join(', ')
              ) : (
                characteristics[key]
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhoneDetails;
