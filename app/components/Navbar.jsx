import Image from "next/image.js";
import React from "react";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 translate-y-[-80%] -z-10">
        <Image src={assets.header_bg_color} alt="" className="w-full"/>
    </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50">
        <a href="#top">
          {" "}
          <Image
            src={assets.logo}
            alt=""
            className="cursor-pointer w-28 mr-14"
          />{" "}
        </a>
        <ul className="hidden sm:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white bg-opacity-50 shadow-sm">
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
