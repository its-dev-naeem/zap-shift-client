import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  FaBook,
  FaBookDead,
  FaFileContract,
  FaMoneyBill,
} from "react-icons/fa";
import { FaCartShopping, FaMoneyBillTransfer } from "react-icons/fa6";

const HowItWorks = () => {
  const info = [
    {
      icon: <CiDeliveryTruck></CiDeliveryTruck>,
      id: 1,
      heading: "Booking Pick & Drop",
      info: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaMoneyBill></FaMoneyBill>,
      id: 2,
      heading: "Cash On Delivery",
      info: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaCartShopping></FaCartShopping>,
      id: 3,
      heading: "Delivery Hub",
      info: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaFileContract></FaFileContract>,
      id: 4,
      heading: "Booking SME & Corporate",
      info: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="my-10">
      <h1 className=" text-2xl font-bold my-6">How it Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4  ">
        {info.map((cart) => (
          <div className="bg-[#ffffff1e] rounded-3xl shadow-2xl backdrop-blur-3xl px-5 py-8" key={cart.id} cart={cart}>
            <span className=" text-7xl text-secondary text-center">{cart.icon}</span>
            <h1 className=" my-5 text-xl font-bold">{cart.heading}</h1>
            <p>{cart.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
