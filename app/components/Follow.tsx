import Image from 'next/image'
import React from 'react'

export default function Follow() {
  return (
    <div className="bg-[#EFF3F4] rounded-xl p-4  m-3">
        <h2 className='font-bold text-xl mb-3'>Who To Follow</h2>
      <div className='flex justify-between items-center py-3'>
        <div className='flex space-x-3'>
            <Image src="/assets/company-logo.jpg" alt="profile_photo" width={44} height={44} className='w-14 h-14 rounded-full'/>
            <div className='flex flex-col text-sm'>
                <span className='font-bold'>Kim crystal</span>
                <span>@kimcrystal</span>
            </div>
          </div>
            <button className="bg-[#0F1419] text-white text-sm border-radius-2 rounded-full w-[72px] h-[40px]">Follow</button>
      </div>
      <div className='flex justify-between items-center py-3'>
        <div className='flex space-x-3'>
            <Image src="/assets/company-logo.jpg" alt="profile_photo" width={44} height={44} className='w-14 h-14 rounded-full'/>
            <div className='flex flex-col text-sm'>
                <span className='font-bold'>Kim crystal</span>
                <span>@kimcrystal</span>
            </div>
          </div>
            <button className="bg-[#0F1419] text-white text-sm border-radius-2 rounded-full w-[72px] h-[40px]">Follow</button>
      </div>
      <div className='flex justify-between items-center py-3'>
        <div className='flex space-x-3'>
            <Image src="/assets/company-logo.jpg" alt="profile_photo" width={44} height={44} className='w-14 h-14 rounded-full'/>
            <div className='flex flex-col text-sm'>
                <span className='font-bold'>Kim crystal</span>
                <span>@kimcrystal</span>
            </div>
          </div>
            <button className="bg-[#0F1419] text-white text-sm border-radius-2 rounded-full w-[72px] h-[40px]">Follow</button>
      </div>
    </div>
  )
}

