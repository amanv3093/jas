import React from "react";
import Image from "next/image";
import img1 from "../../../public/img1.jpeg";
const Section3 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:justify-between px-6 py-16 lg:py-32">
        {/* Left Section - Main Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center lg:justify-start">
          <Image
            src={img1}
            alt="user"
            className=" rounded-lg object-cover w-auto h-[36rem]"
          />
        </div>

        {/* Right Section - Text and Button */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-red-500 text-xl lg:text-2xl uppercase mb-4">
            Welcome to Jas Oberoi Group
          </h1>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
            I am the top real estate expert in all of Surrey City, British
            Columbia.
          </h2>
          <p className="text-gray-400 text-base lg:text-lg mb-8">
            Years of experience and a deep understanding of the local market
            have allowed me to help countless clients find their ideal homes,
            profitable investment properties, and prime commercial spaces.
            Whether you're looking to buy, sell, or rent, I provide customized
            solutions tailored to your specific needs, ensuring a smooth and
            successful real estate experience every step of the way.
          </p>
          <button className="bg-red-500 md:text-base text-sm font-semibold text-white py-4 px-6   transition transform duration-300 ease-in-out hover:-translate-y-2">
            Let’s Grab a Coffee – Free Strategy Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
