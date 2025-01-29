import React from 'react'
import { assets, serviceData } from '../../assets/assets.js'
import Image from 'next/image.js'

const Services = () => {
  return (
    <div id='services' className='w-full py-10 scroll-mt-20  px-[12%]'>
         <h4 className='mb-2 text-lg font-Ovo text-center '>What i offers</h4>
         <h1 className='text-5xl pb-6 font-Ovo text-center'>My services</h1>
         <p className='text-center text-gray-700 max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a frontend developer from Egypt,  with 4 years of experience .</p>
         <ul className='grid grid-cols-auto gap-6 my-10 '>
            {serviceData.map(({icon,title,description,link},index)=>(
                <li key={index} className='border border-gray-400 rounded-lg px-8 py-12  cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                    <Image src={icon} alt={title} className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                    <a href={link} className='text-sm flex items-center gap-2 mt-5'>Read More <Image src={assets.right_arrow} alt='' className='w-4' /></a>
                </li>
            ))}
         </ul>
    </div>
  )
}

export default Services