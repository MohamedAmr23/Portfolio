import Image from 'next/image.js'
import React from 'react'
import { assets, infoList, toolsData } from '../../assets/assets.js'

const About = () => {
  return (
    <div id='about' className='w-full py-10 scroll-mt-20  px-[12%] '>
        <h4 className='mb-2 text-lg font-Ovo text-center'>Introduction</h4>
        <h1 className='text-5xl pb-12 font-Ovo text-center'>About me</h1>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 rounded-3xl sm:w-80 max-w-none'>
            <Image src={assets.user_image} alt='' className='w-full rounded-3xl'/>
            </div>
           
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark,title,description},index)=>(
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-gray-700 font-Ovo'>Tools i use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool,index)=>(
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><Image src={tool} alt='Tool' className='w-5 sm:w-7'/></li>
                        ))}
                    </ul>
            </div>
            
        </div>
    </div>
  )
}

export default About