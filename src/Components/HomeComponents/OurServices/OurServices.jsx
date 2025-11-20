import React from "react";
import icon1 from "../../../assets/service.png";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


const OurServices = () => {
  const info = [
    {
      id: 1,
      title: "Express  & Standard Delivery",
      details:
        "We deliver parcels within 24/72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4/6 hours from pick-up to drop-off.",
      icon: icon1,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      details:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48 72 hours.",
      icon: icon1,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      details:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: icon1,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      details:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: icon1,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      details:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: icon1,
    },
    {
      id: 6,
      title: "Parcel Return",
      details:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: icon1,
    },
  ];
  return (
    <div className="px-10 py-10 bg-accent rounded-3xl">
      <h1 className="text-white text-center text-4xl font-bold my-5">
        Our Services
      </h1>
      <p className="text-center text-secondary text-xl my-5 max-w-[70%] mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        {info.map((info) => (
          <div
            key={info.id}
            className="bg-white p-5 rounded-2xl shadow-2xl hover:bg-primary transition-transform duration-300 hover:scale-105 items-center  "
          >
            <span className="flex justify-center p-5 rounded-full bg-gray-50/30 ">
              <img src={info.icon} alt="icon" />
            </span>
            <h1 className=" text-center font-bold text-xl my-3">
              {info.title}
            </h1>
            <p className="text-center">{info.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
