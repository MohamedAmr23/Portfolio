"use client";
import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
import Image from "next/image.js";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d21b8692-ce27-42d8-8ad5-f535d5fd4b12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className={`w-full py-10 pt-24 scroll-mt-20  px-[12%]`}>
      <h4 className="mb-2 text-lg font-Ovo text-center ">Connect with me</h4>
      <h1 className="text-5xl pb-6 font-Ovo text-center">Get in touch</h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
            required
            name="email"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter Your Message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90"
          required
          name="message"
        />
        <button
          type="submit"
          className="w-max flex items-center justify-between gap-2 bg-black/80 text-white  rounded-full py-3 px-8 mx-auto  hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
