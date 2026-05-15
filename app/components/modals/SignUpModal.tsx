'use client'
import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '@/app/redux/store'
import { closeSignUpModal, openSignUpModal } from '@/app/redux/slices/modalSlice';

function SignUpModal() {
  // const [isOpen, setIsOpen] = useState(true);
  // const handleClose=()=>{
  //   setIsOpen(false);
  // }
  // const handleOpen=()=>{
  //   setIsOpen(true)
  // }

  const isOpen = useSelector((state:RootState)=>
    state.modals.signUpModalOpen
  );

  const dispatch:AppDispatch = useDispatch()
  return (
    <div>
      <button className='w-full h-[47px] md:w-[90px] md:h-[40px] md:text-sm text-lg font-bold bg-white rounded-full' onClick={()=>{dispatch(openSignUpModal())}}> Sign Up</button>
      <Modal open={isOpen} onClose={()=>dispatch(closeSignUpModal())} className='flex justify-center items-center'>
        <div className="w-[200px] h-[400px] bg-white"></div>
      </Modal>
    </div>
   
  )
}

export default SignUpModal
