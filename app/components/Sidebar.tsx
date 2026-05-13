import React from 'react';
import { HomeIcon, HashtagIcon, BellIcon, UserIcon, BookmarkIcon, InboxIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

export default function Sidebar() {
  return (
    <nav className="hidden sm:flex flex-col sticky top-0 p-3">
     <div className="realtive h-full">
      <div className='py-3'>
      <Image src={'/company-logo.jpg'} alt="social-logo" width={120} height={48}/>
      </div>
      <ul>
        <SidebarLink Icon ={HomeIcon} text="Home" />
        <SidebarLink Icon ={HashtagIcon} text="Explore" />
        <SidebarLink Icon={BellIcon} text="Notifications" />
        <SidebarLink Icon={InboxIcon} text="Messages" />
        <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
        <SidebarLink Icon={UserIcon} text="Profile" />
        <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
        <button className="hidden xl:block bg-[#F4AF01] w-[200px] h-[52px] rounded-full text-white font-medium corsor-pointer shadow-md mt-2">Facebook</button>
      </ul>
      </div> 
      <div>User Info</div>
    </nav>
  )
}

interface SidebarLinkProps{
  text:string;
  Icon:React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>;
}

function SidebarLink({text,Icon}:SidebarLinkProps){
  return (
  <li className="flex items-center text-l mb-2 space-x-3 p-2.5">
     <Icon className="h-6" />
     <span className='hidden xl:block'>{text}</span>
  </li>
  )
}

