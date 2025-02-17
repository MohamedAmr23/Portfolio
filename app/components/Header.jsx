import Image from "next/image.js";
import React from "react";
import { assets } from "../../assets/assets.js";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col w-11/12 mx-auto max-w-3xl text-center gap-2">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, stiffness: 100, type: "spring" }}
        className="mt-12"
      >
        <Image src={assets.profile_img} alt="" className="w-32 rounded-full" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-2 items-end text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I’m Mohamed Amr{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        frontend web developer based in Egypt.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a frontend developer from Egypt, with 4 years of experience .
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          <Image src={assets.right_arrow_white} alt="" className="w-4 " />
          Connect with me
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Mohamed-Amr-Resume2.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          <Image src={assets.download_icon} alt="" className="w-4" />
          My resume
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
