import React from 'react';
import nature from '../assets/nature.png'
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-scroll'
function Home() {
  return (
    <div name="home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
            <div className='text-white flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold'>
                    I'm a Full stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I am an expert in React, Express, PostgresQl, and Tailwind.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='text-white w-fit group px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-500 cursor-pointer '>
                        Portfolio 
                        <span className='group-hover:rotate-90 group-hover:-translate-y-1.5 duration-300'>
                        <FaArrowRightLong size={18} className='ml-3 text-white-100'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={nature} alt="nature-img" className='rounded-2xl mx-auto w-2/4 md:w-1/2' />
            </div>
        </div>
    </div>
  )
}
 

export default Home;