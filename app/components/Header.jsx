import Image from "next/image.js";
import React from "react";
import { assets } from "../../assets/assets.js";

const Header = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col w-11/12 mx-auto max-w-3xl text-center gap-2">
      <div className="mt-12">
        <Image src={assets.profile_img} className="w-32 rounded-full" />
      </div>
      <h3 className="flex gap-2 items-end text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I’m Mohamed Amr <Image src={assets.hand_icon} className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        frontend web developer 
        based in Egypt.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">I am a frontend developer from Egypt,  with 4 years of experience .</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"><Image src={assets.right_arrow_white} className="w-4 " />Connect with me</a>
        <a href="/Mohamed-Amr-Resume2.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"><Image src={assets.download_icon} className="w-4" />My resume</a>
      </div>
    </div>
  );
};

export default Header;
