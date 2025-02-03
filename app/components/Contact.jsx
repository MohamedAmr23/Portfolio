import React from 'react'
import contactFooter from '../../assets/public/footer-bg-color.png'
import { assets } from '../../assets/assets.js'
import Image from 'next/image.js'
const Contact = () => {
  return (
    <div id='contact' className={`w-full py-10 pt-24 scroll-mt-20  px-[12%]`}>
         <h4 className='mb-2 text-lg font-Ovo text-center '>Connect with me</h4>
         <h1 className='text-5xl pb-6 font-Ovo text-center'>Get in touch</h1>
         <p className='text-center text-gray-700 max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I'd love to hear from you! If you have any questions, comments or 
         feedback, please use the form below.</p>
         <form className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Enter Your Name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' required/>
                <input type='email' placeholder='Enter Your Email'  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' required/>
            </div> 
            <textarea rows={6} placeholder='Enter Your Message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' required/>
            <button type='submit' className='w-max flex items-center justify-between gap-2 bg-black/80 text-white  rounded-full py-3 px-8 mx-auto  hover:bg-black duration-500'>Submit now
                <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </button>
            <p className='mt-4'>sending...</p>
         </form>
    </div>
  )
}

export default Contact