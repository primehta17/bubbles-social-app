import React from 'react'

import Follow from './Follow'
import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Widgets() {
  return (
    <div className='p-4 hidden lg:flex flex-col space-y-4 w-[400px] ps-10'>
      <div className='flex m-3 bg-[#EFF3F4] text-[#89959D] rounded-full pl-5 space-x-3 items-center h-[44px]'>
        <MagnifyingGlassIcon className='w-[20px] h-[20px]'/>
        <input type="text" placeholder="Seach In Comapany" className='bg-transparent outline-none '/>
      </div>
      <div className="m-3 bg-[#EFF3F4] rounded-xl p-4">
        <h2 className='font-bold text-xl mb-3'>What's Happening?</h2>
        <div className='flex flex-col py-3 space-y-0.5'>
        <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
        </div>
          <span className='font-bold text-sm'>#ReactJS</span>
          <span className='text-[#536471] text-xs'>240k Bubbles</span>
        </div>
        <div className='flex flex-col py-3 space-y-0.5'>
        <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
        </div>
          <span className='font-bold text-sm'>#ReactJS</span>
          <span className='text-[#536471] text-xs'>240k Bubbles</span>
        </div>
        <div className='flex flex-col py-3 space-y-0.5'>
        <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
        </div>
          <span className='font-bold text-sm'>#ReactJS</span>
          <span className='text-[#536471] text-xs'>240k Bubbles</span>
        </div>
        <div className='flex flex-col py-3 space-y-0.5'>
        <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
        </div>
          <span className='font-bold text-sm'>#ReactJS</span>
          <span className='text-[#536471] text-xs'>240k Bubbles</span>
        </div>
      </div>
      <Follow />
    </div>
    
  )
}
