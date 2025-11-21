import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import img from '../../../assets/customer-top.png'
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  console.log("State reviews:", reviews);
  return (
    <div className=" my-20">
      <div className="m-5 flex flex-col items-center">
        <img className="my-5" src={img} />
        <h1 className=" font-bold text-3xl md:text-6xl my-5 text-center ">What our customers are sayings</h1>
        <p className=" text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, <br /> reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        >
          {" "}
          {reviews.map((review) => (
            <SwiperSlide className=" p-5 bg-gray-50 overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
              {" "}
              <div>
                <span className="flex items-center"><FaStar className="text-yellow-500 mr-1"></FaStar>{review.ratings}</span>
                <p className=" py-20 text-center font-bold md:text-3xl xl:text-5xl mx-10">{review.review}</p>
              </div> <hr /> <br />
              <div className="flex items-center">
                <img className=" rounded-full border w-8 md:w-20 md:h-20 mr-2" src={review.user_photoURL} />
                <div>
                  <h1 className=" text-[8px] sm:text-[14px] md:text-xl font-bold">{review.userName}</h1>
                  <p className="truncate text-[8px] sm:text-[14px] md:text-[16px] xl:text-xl overflow-hidden whitespace-nowrap ">{review.user_email}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
