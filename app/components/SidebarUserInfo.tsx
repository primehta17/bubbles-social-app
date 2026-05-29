'use client'
import React from 'react';
import Image from 'next/image';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from "@/firebase";
import { signOutUser } from '../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { AppDispatch,RootState } from '../redux/store';
import { closeLoginModal, closeSignUpModal } from '../redux/slices/modalSlice';

function SidebarUserInfo() {
  const dispatch:AppDispatch = useDispatch();
  const user = useSelector((state:RootState)=>state.user);

  async function handleSignOut(){
      await signOut(auth);
      dispatch(signOutUser());
      dispatch(closeLoginModal())
      dispatch(closeSignUpModal())
  }

  return (
    <div className='absolute bottom-12 flex items-center justify-start space-x-2 hover:bg-gray-200 xl:p-4 hover:bg-opacity-10 rounded-full transition cursor-pointer w-fit xl:w-[240px]'
    onClick={()=>handleSignOut()}>
    <Image src={"/assets/company-logo.jpg" } alt="user Profile Picture" width='36' height='36' className='w-9 h-9 rounded-full transition cursor-pointer'/>
    
    <div className='hidden xl:flex flex-col text-sm max-w-40'>
      <span className='whitespace-nowrap text-ellipsis overflow-hidden font-bold'>{user.name}</span>
      <span className='whitespace-nowrap text-ellipsis overflow-hidden  text-gray-500'>@{user.username}</span>
    </div>
  </div>
  )
}

export default SidebarUserInfo
