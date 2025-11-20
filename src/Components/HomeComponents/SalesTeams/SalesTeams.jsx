import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//image import
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const SalesTeams = () => {
  const brands = [amazon, casio, moonstar, randstad, star, starPeople];
  return (
    <div className="my-20 text-center">
      <h1 className="text-3xl font-bold m-10">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SalesTeams;
