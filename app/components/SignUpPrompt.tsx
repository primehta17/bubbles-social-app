'use client'
import React from 'react'
import SignUpModal from './modals/SignUpModal'
import LoginModal from './modals/LoginModal';
import {useSelector} from 'react-redux';
import { RootState } from '../redux/store'

export default function SignUpPrompt() {
  const name= useSelector((state: RootState)=>
    state.user.name
  )
  console.log(name);
  return (
    !name &&
    <div className='fixed flex justify-center lg:justify-between items-center bg-[#F4AF01] w-full h-[80px]  bottom-0 md:space-x-5 lg:px-20 xl:px-40 2xl:px-80'>
      <div className='hidden md:flex flex flex-col text-white'>
        <span className='text-xl font-bold'>Don't miss out on the buzz</span>
        <span>People on Bubbles are always the first to know.</span>
      </div>
      <div className='flex space-x-2 md:w-fit w-full p-3'>
        <LoginModal />
        <SignUpModal />
      </div>
    </div>
  )
}
