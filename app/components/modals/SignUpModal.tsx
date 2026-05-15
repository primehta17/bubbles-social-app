'use client'
import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '@/app/redux/store'
import { closeSignUpModal, openSignUpModal } from '@/app/redux/slices/modalSlice';
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { EyeSlashIcon } from '@heroicons/react/16/solid';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

function SignUpModal() {
  // const [isOpen, setIsOpen] = useState(true);
  // const handleClose=()=>{
  //   setIsOpen(false);
  // }
  // const handleOpen=()=>{
  //   setIsOpen(true)
  // }

  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isOpen = useSelector((state:RootState)=>
    state.modals.signUpModalOpen
  );

  const dispatch:AppDispatch = useDispatch();

  async function handleSignUp(){
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
  }

  return (
    <div>
      <button className='w-full h-[47px] md:w-[90px] md:h-[40px] text-md md:text-sm font-bold bg-white rounded-full' onClick={()=>{dispatch(openSignUpModal())}}> Sign Up</button>
      <Modal open={isOpen} onClose={()=>dispatch(closeSignUpModal())} className='flex justify-center items-center'>
        <div className="w-full h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl"> 
          <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer' onClick={()=>dispatch(closeSignUpModal())}/>
          <div className='pt-10 pb-20 px-4 sm:px-20'>
            <h2 className='font-bold text-3xl mb-10'>Create your Account</h2>
            <div className='w-full space-y-5 mb-10'>
                <input type="text" placeholder='Name' className="border border-gray-200 w-full h-[47px] rounded-[4px] focus:border-[#F4AF01] outline-none ps-3 transition"></input>
                <input type="email" placeholder='Email' className="border border-gray-200 w-full h-[47px] rounded-[4px] focus:border-[#F4AF01] outline-none ps-3 transition" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
              <div className='border border-gray-200 w-full h-[47px] rounded-[4px] focus-within:border-[#F4AF01] outline-none transition flex items-center overflow-hidden pr-3'>
                 <input type={showPassword ? "text" : "password"} placeholder='Password' className="outline-none w-full h-full ps-3" onChange={(e)=>setPassword(e.target.value)} value={password}/>
              <div onClick={()=> setShowPassword(!showPassword)} className='w-7 h-7 text-gray-400 cursor-pointer'>
                {showPassword? <EyeSlashIcon/> : <EyeIcon/>}
              </div>
            </div>
            </div>
            <div className='mt-7'>
              <button className='w-full mb-5 shadow-md h-[50px] rounded-full text-white bg-[#F4AF01]' 
              onClick={()=>handleSignUp()}>Sign Up</button>
              {/* <span className='flex justify-center'> Or </span> */}
              <span className='mb-5 text-sm text-center block'> Or </span>
              <button className='w-full shadow-md h-[50px] rounded-full text-white bg-[#F4AF01]'>Log In as Guest</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
   
  )
}

export default SignUpModal
