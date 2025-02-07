import React from "react";
import Image from "next/image";
import img1 from "../../../public/img1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHouse,
  faUmbrellaBeach,
  faHome,
  faHouseUser,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

const Section5 = () => {
  return (
    <div className="bg-[#111111] py-16 xl:px-32 lg:px-8 px-5">
      <h1 className="text-white text-center text-4xl font-bold pb-24">
        See why I am the best Realtor in the valley
      </h1>
      <div className="flex  justify-between flex-col lg:flex-row items-center gap-10">
        <div className="space-y-12 text-white">
          <div className="flex flex-col lg:items-baseline items-center space-x-4 ">
            <div className="pb-4">
              <FontAwesomeIcon
                icon={faHome}
                className="text-red-500 w-12 h-12"
              />
            </div>
            <div className="text-center lg:text-start">
              <h3 className="text-xl font-bold pb-1">
                Bought an Airbnb in Surrey
              </h3>
              <p className="text-gray-400">Now making $13,000/month</p>
            </div>
          </div>

          <div className="flex flex-col lg:items-baseline items-center  space-x-4">
            <div className="pb-4">
              <FontAwesomeIcon
                icon={faHouseUser}
                className="text-red-500 w-12 h-12"
              />
            </div>
            <div className="text-center lg:text-start">
              <h3 className="text-xl font-bold pb-1">
                Purchased a rental home
              </h3>
              <p className="text-gray-400">
                Generating $5,500/month in passive income
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:items-baseline items-center space-x-4">
            <div className="pb-4">
              <FontAwesomeIcon
                icon={faStore}
                className="text-red-500 w-12 h-12"
              />
            </div>
            <div className="text-center lg:text-start">
              <h3 className="text-xl font-bold pb-1">
                {" "}
                Invested in a mall store
              </h3>
              <p className="text-gray-400">10%+ annual ROI secured</p>
            </div>
          </div>
        </div>

        {/* Image (Right side) */}
        <div className="mb-8 lg:mb-0">
          <Image
            src={img1}
            alt="user"
            className="rounded-lg object-cover w-auto h-[25rem]"
          />
          <h1 className="text-gray-200 text-sm text-center pt-3">
            See how much my clients are making
          </h1>
        </div>

        <div className="space-y-12 text-white">
          <div className="flex flex-col lg:items-end items-center space-x-4">
            <div className="pb-4">
              <FontAwesomeIcon
                icon={faHouse}
                className="text-red-500 w-12 h-12"
              />
            </div>
            <div className="lg:text-end text-center">
              <h3 className="text-xl font-bold pb-1">
                Acquired a pre-construction condo
              </h3>
              <p className="text-gray-400">
                Flipped it for a $120K profit before closing
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:items-end items-center space-x-4">
            <div className="pb-4">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-red-500 w-12 h-12"
              />
            </div>
            <div className="lg:text-end text-center">
              <h3 className="text-xl font-bold pb-1">
                Purchased a mixed-use building
              </h3>
              <p className="text-gray-400">
                Now earns $8,000/month from commercial + residential tenants
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:items-end items-center space-x-4">
            <div className="pb-4">
              <FontAwesomeIcon
                icon={faUmbrellaBeach}
                className="text-red-500 w-12 h-12"
              />
            </div>
            <div className="lg:text-end text-center">
              <h3 className="text-xl font-bold pb-1">
                Secured a vacation rental property
              </h3>
              <p className="text-gray-400">
                Fully booked for the year, generating $10,000/month in revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
