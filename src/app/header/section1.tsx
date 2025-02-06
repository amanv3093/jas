import React from "react";
import bgImg from "../../../public/Banner_1.jpeg";
import { MoveRight } from "lucide-react";

function Section1() {
  return (
    <div
      className="h-[100vh] w-full bg-cover bg-center xl:px-32 lg:px-8 px-5"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bgImg.src})`,
      }}
    >
      <div className="h-full flex items-center ">
        <div className="xl:w-[46rem] lg:w-[35rem] w-[25rem]  ">
          <h1 className="text-red-500 text-2xl font-bold pb-5">
            Jas Oberoi Group
          </h1>
          <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl  font-extrabold lg:leading-[55px]">
            Earn Passive Income with Smart Real Estate Investments
          </h1>
          <p className="text-white text-lg font-medium pt-5 pb-8">
            See how investors like you are making $5K–$15K+ in monthly cash flow
            with the right properties.
          </p>
          <div className="flex lg:flex-row flex-col gap-4">
            <button className="bg-red-500 md:text-base text-sm font-semibold text-white py-4 px-6   transition transform duration-300 ease-in-out hover:-translate-y-2">
              Let’s Grab a Coffee – Free Strategy Call
            </button>

            <button className="hover:shadow-xl  bg-[#00000000]  md:text-base text-sm font-semibold text-white py-4 px-6  flex items-center transition transform duration-300 ease-in-out hover:-translate-y-2 ">
              See Our Work
              <MoveRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
