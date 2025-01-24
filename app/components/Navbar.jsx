'use client'
import Image from "next/image.js";
import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  const [open,setOpen] = useState(false)
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
        <div className="flex items-center gap-4">
          <button><Image src={assets.moon_icon} alt="" className="w-6"/></button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button onClick={()=>setOpen(!open)} className="block sm:hidden ml-3"><Image src={assets.menu_black} alt="" className="w-6"/></button>
        </div>


          {/* mobile menu */}
          {open && <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed ${open ? 'right-0':'-right-64'} top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-1000`}>
            <div className="absolute top-6 right-6" onClick={()=>setOpen(false)}>
              <Image  src={assets.close_black} alt="" className="w-5 cursor-pointer"/>
            </div>
          <li onClick={()=>setOpen(false)}>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li onClick={()=>setOpen(false)}>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li onClick={()=>setOpen(false)}>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li onClick={()=>setOpen(false)}>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li onClick={()=>setOpen(false)}>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>}
      



      </nav>
    </>
  );
};

export default Navbar;
