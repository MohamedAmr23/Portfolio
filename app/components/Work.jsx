import React from 'react'
import { assets, workData } from '../../assets/assets.js'
import Image from 'next/image.js'

const Work = ({isDarkMode}) => {
  return (
    <div id='work' className='w-full py-10 pt-24 scroll-mt-20  px-[12%]'>
         <h4 className='mb-2 text-lg font-Ovo text-center '>My portfolio</h4>
         <h1 className='text-5xl pb-6 font-Ovo text-center'>My latest work</h1>
         <p className='text-center text-gray-700 max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white'>Welcome to my web development portfolio! Explore a collection of projects showcasing
         my expertise in front-end development.</p>
         <ul className='grid grid-cols-auto gap-5 my-10 dark:text-black'>
            {workData.map((work,index)=>(
                <li key={index} style={{backgroundImage:`url(${work.bgImage})`}} className='bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group aspect-square'>
                  <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{work.title}</h2>
                        <p className='text-sm text-gray-700'>{work.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                      <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                  </div>
                </li>
            ))}
         </ul>
            <a className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>Show more <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='' className='w-4' /></a>
    </div>
  )
}

export default Work