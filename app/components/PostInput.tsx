import React from 'react';
import Image from 'next/image';
import { CalendarDaysIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline';

export default function PostInput() {
  return (
    <>
    <div className="flex space-x-5 p-3 border-b border-gray-100">
        <Image src={'/assets/company-logo.jpg'} width={44} height={44} className="w-11 h-11" alt="comapny-logo"/>
        <div className='w-full'>
          <textarea className="resize-none outline-none w-full min-h-[60px] text-md" placeholder="What's happening?" />
          <div className="flex justify-between pt-5 border-t border-gray-100">
              <div className='flex space-x-1.5'>
                <PhotoIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                <ChartBarIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                <FaceSmileIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                <CalendarDaysIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                <MapPinIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
              </div> 
              <button className="rounded-full bg-[#F4AF01] w-[80px] h-[36px] text-white text-sm corsor-pointer" >Bubbles</button>
            </div>
        </div>
    </div>
   
  </>
  )
}
