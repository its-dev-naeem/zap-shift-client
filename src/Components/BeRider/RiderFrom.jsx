import React from "react";
import Rider from '../../assets/agent-pending.png'
const RiderFrom = () => {
  return (
    <div className=" min-h-screen"> 
      <div className=" bg-white px-20 py-20 my-20 rounded-3xl">
        <h1 className=" text-5xl font-bold mb-6">Be a Rider</h1>
        <p className=" mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From <br /> personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <hr />
        <div className=" flex justify-center items-center mt-10">
            <form class=" flex-1 space-y-5">
                <h1 className=" font-bold text-2xl my-5">Tell us about yourself</h1>
                <div className=" flex gap-5">
                    <div className="w-full">
                        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Your Name</label>
                        <input type="text" id="visitors" class=" border border-gray-300  text-sm rounded-base focus:ring-brand rounded-xl focus:border-brand block w-full px-2.5 py-2 shadow-xs " placeholder="Your Name" required />
                    </div>
                    <div className=" w-full">
                        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Your Age</label>
                        <input type="text" id="visitors" class=" border border-gray-300  text-sm rounded-base focus:ring-brand rounded-xl focus:border-brand block w-full px-2.5 py-2 shadow-xs" placeholder="Your age" required />
                    </div>
                </div>
                <div className=" flex gap-5">
                    <div className="w-full">
                        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Your Email</label>
                        <input type="text" id="visitors" class=" border border-gray-300  text-sm rounded-base focus:ring-brand rounded-xl focus:border-brand block w-full px-2.5 py-2 shadow-xs " placeholder="Your Email" required />
                    </div>
                    <div className=" w-full">
                        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Your District</label>
                        <select defaultValue="Pick a browser" className="border border-gray-300 text-gray-500 text-sm rounded-base focus:ring-brand rounded-xl focus:border-brand block w-full px-2.5 py-2 shadow-xs">
                            <option disabled={true}>Select your District</option>
                            <option>Dhaka</option>
                            <option>Rangpur</option>
                            <option>Chittagong </option>
                            <option>Mymensingh</option>
                            <option>Cumilla</option>
                            <option>Rajshahi</option>
                            <option>Khulna</option>
                            <option>Borishal</option>
                            <option>Shylet</option>
                        </select>
                    </div>
                </div>
                <div className=" flex gap-5">
                    <div className="w-full">
                        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">NID No</label>
                        <input type="text" id="visitors" class=" border border-gray-300  text-sm rounded-base focus:ring-brand rounded-xl focus:border-brand block w-full px-2.5 py-2 shadow-xs " placeholder="NID" required />
                    </div>
                    <div className=" w-full">
                        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Contact</label>
                        <input type="text" id="visitors" class=" border border-gray-300  text-sm rounded-base focus:ring-brand rounded-xl focus:border-brand block w-full px-2.5 py-2 shadow-xs" placeholder="Contact" required />
                    </div>
                </div>
                <div>
                    <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Which wire-house you want to work?</label>
                        <select defaultValue="Pick a browser" className="border border-gray-300 text-gray-500 text-sm rounded-base focus:ring-brand rounded-xl focus:border-brand block w-full px-2.5 py-2 shadow-xs">
                            <option disabled={true}>Select wire-house</option>
                            <option>Dhaka</option>
                            <option>Rangpur</option>
                            <option>Chittagong </option>
                            <option>Mymensingh</option>
                        </select>
                </div>
            </form>
            <div className="flex-1 flex justify-end">
                <img className=" h-full w-100" src={Rider} />
            </div>
      </div>
      </div>
    </div>
  );
};

export default RiderFrom;
