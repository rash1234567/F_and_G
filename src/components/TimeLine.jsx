import React, { useState } from "react";

const Timeline = ({ activeStep }) => {


  return (
    <div className='flex flex-row items-center justify-center w-[100%]'>
      <div className='flex flex-col items-center'>
        <div
          className={`w-[20px] h-[20px] md:h-[30px] md:w-[30px] rounded-full flex items-center justify-center ${activeStep >= 1 ? "bg-blue-500" : "bg-gray-400"
            }`}>
          <span className='text-white font-bold text-sm'>
            {activeStep >= 1 ? "1" : "1"}
          </span>
        </div>
        <p className={` ${activeStep >= 1 ? "text-[#0177FD]" : "text-gray-400"
          } text-[11px] font-medium text-center`}>Recipient</p>
      </div>
      <div className='h-[3px] bg-gray-400 flex-grow'></div>
      <div className='flex flex-col items-center'>
        <div
          className={`w-[20px] h-[20px] md:h-[30px] md:w-[30px] rounded-full flex items-center justify-center ${activeStep >= 2 ? "bg-blue-500" : "bg-gray-400"
            }`}>
          <span className='text-white font-bold text-sm'>
            {activeStep >= 2 ? "2" : "2"}
          </span>
        </div>
        <p className={` ${activeStep >= 2 ? "text-[#0177FD]" : "text-gray-400"
          } text-[11px] font-medium text-center`}>Summary</p>
      </div>
      <div className='h-[3px] bg-gray-400 flex-grow'></div>
      <div className='flex flex-col items-center'>
        <div
          className={`w-[20px] h-[20px] md:h-[30px] md:w-[30px] rounded-full flex items-center justify-center ${activeStep >= 3 ? "bg-blue-500" : "bg-gray-400"
            }`}>
          <span className='text-white font-bold text-sm'>
            {activeStep >= 3 ? "3" : "3"}
          </span>
        </div>
        <p className={` ${activeStep >= 3 ? "text-[#0177FD]" : "text-gray-400"} text-[11px] font-medium text-center`}>Transaction Pin</p>
      </div>
    </div>
  );
};

export default Timeline;
