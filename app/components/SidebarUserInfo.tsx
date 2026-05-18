'use client'
import React from 'react';
import Image from 'next/image';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from "@/firebase";
import { signOutUser } from '../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { AppDispatch,RootState } from '../redux/store';

function SidebarUserInfo() {
  const dispatch:AppDispatch = useDispatch();
  const user = useSelector((state:RootState)=>state.user);

  async function handleSignOut(){
      await signOut(auth);
      dispatch(signOutUser());
  }

  return (
    <div className='absolute bottom-12 flex items-center space-x-2 hover:bg-gray-200 xl:p-3 xl:pe-6 hover:bg-opacity-10 rounded-full'
    onClick={()=>handleSignOut()}>
    <Image src={"/assets/company-logo.jpg" } alt="user Profile Picture" width='36' height='36' className='w-9 h-9 rounded-full transition cursor-pointer'/>
    <div className='hidden xl:flex flex-col text-sm'>
      <span className='font-bold'>{user.name}</span>
      <span className="text-gray-500">@{user.username}</span>
    </div>
  </div>
  )
}

export default SidebarUserInfo
