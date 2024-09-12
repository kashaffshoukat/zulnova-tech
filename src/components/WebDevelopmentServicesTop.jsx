import React from 'react';
import { fiver, google, mads, upwork } from '../assets';
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";

const WebDevelopmentServicesTop = () => {
  return (
    <div className='px-4 md:px-8 lg:px-20 py-12 bg-[#314252] text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-8'>
          <h2 className='flex gap-2 text-sm md:text-lg'>
            Home <FaAngleRight className='mt-1' /> Services <FaAngleRight className='mt-1' /> Web Development
          </h2>
          <h1 className='text-2xl md:text-4xl font-bold'>Web Development Services</h1>
          <h1 className='text-lg md:text-xl'>Professional Web Development Services for Your Project</h1>
          <p className='text-sm md:text-base'>
            We are providing Custom Website and Web App Development Services for Years, With a 100% Satisfaction Rate.
          </p>
          <button className="flex gap-2 w-full md:w-80 font-semibold text-md capitalize border border-black-500 bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300 items-center justify-center space-x-2 py-2 px-5">
            Request Development Services <FaArrowRightLong className='mt-1' />
          </button>
          <div className='flex flex-wrap gap-8'>
            <div className='flex flex-col items-center gap-4 border-r-2 pr-4'>
              <img src={fiver} alt="Fiverr" className='h-8 md:h-10 w-auto' />
              <div className='flex flex-row'>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <div className='flex flex-col items-center gap-4 border-r-2 pr-4'>
              <img src={upwork} alt="Upwork" className='h-8 md:h-10 w-auto' />
              <div className='flex flex-row'>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <img src={google} alt="Google" className='h-8 md:h-10 w-auto' />
              <div className='flex flex-row'>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap md:block'>
          <img src={mads} alt="Web Development" />
        </div>
      </div>
    </div>
  );
}

export default WebDevelopmentServicesTop;
