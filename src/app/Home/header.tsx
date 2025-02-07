"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close
import logo1 from "../../../public/logo1.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between xl:px-32 lg:px-8 px-5  py-3">
        <div className="flex items-center gap-4">
          <Image className="" src={logo1} alt="logo" width={80} height={80} />
          {/* <div>
            <p className="xl:text-lg lg:text-base text-gray-200">
              <strong>Cutlers Tattoos</strong>
            </p>
          </div> */}
        </div>

        <div className="lg:hidden">
          {isMenuOpen ? (
            <X
              className="text-black h-8 w-8 cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <Menu
              className="text-black h-8 w-8 cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:block">
          <ul className="flex xl:text-lg lg:text-base font-extrabold xl:gap-12 lg:gap-8 text-[rgb(51 46 46)]">
            <li className="cursor-pointer hover:text-red-400 transition-colors duration-300">
              <a>Home</a>
            </li>
            <li className="cursor-pointer hover:text-red-400 transition-colors duration-300">
              <a>About</a>
            </li>
            <li className="cursor-pointer hover:text-red-400 transition-colors duration-300">
              <a>Pricing</a>
            </li>
            <li className="cursor-pointer hover:text-red-400 transition-colors duration-300">
              <a>Portfolio</a>
            </li>
            <li className="cursor-pointer hover:text-red-400 transition-colors duration-300">
              <a>Reviews</a>
            </li>
            <li className="cursor-pointer hover:text-red-400 transition-colors duration-300">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-full w-full bg-[#111111] text-gray-200 py-5 px-8 shadow-lg z-50">
          <div className="lg:hidden">
            <X
              className="text-white h-8 w-8 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col items-center pt-5 gap-5 space-y-4 text-lg font-extrabold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
