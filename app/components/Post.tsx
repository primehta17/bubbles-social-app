import React, { Profiler } from 'react';
import Image from 'next/image';
import { ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export default function Post() {
  return (
    <div>
      <PostHeader />
      <div className="ml-16 p-3 flex space-x-14">
        <div className='relative'>
        <ChatBubbleOvalLeftEllipsisIcon className='w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition'/>
        <span className='absolute text-xs top-1 -right-3'>2</span>
        </div>
        <div className='relative'>
        <HeartIcon className='w-[22px] h-[22px] hover:text-[#F4AF01] transition'/>
        <span className='absolute text-xs top-1 -right-3'>2</span>
      </div>
        <div className='relative'>
        <ChartBarIcon className='w-[22px] h-[22px] hover:text-[#F4AF01] transition cursor-not-allowed'/>
        </div>
        <div className='relative'>
          <ArrowUpTrayIcon className='w-[22px] h-[22px] hover:text-[#F4AF01] transition cursor-not-allowed'/>
        </div>
        </div>
    </div>
  )
}

export function PostHeader(){
  return(
    <div className='flex p-3 space-x-5'>
    <Image src="/profile.jpg" width={46} height={46} alt="profile-photo" className='w-11 h-11' />
     <div className='text-[15px] flex flex-col space-y-1.5'>
       <div className='flex space-x-1.5 text-[15px text-[#707E89]'>
         <span className='font-bold text-[#0F1419] whitespace-nowrap inline-block max-w-[60px] min-w-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px] overflow-hidden text-ellipsis'>Guesthjbhbjhbhbhbhbhbhbbhjhj</span>
         <span className='inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-w-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]'>@guest0012</span>
         <span> · </span>
         <span>a day ago</span>
       </div>
         <span className='font-bold text-[#0F1419] '>ssadd</span>
       </div>
     </div>
  )
}
