'use client'
import { closeCommentModal, closeLoginModal } from '@/app/redux/slices/modalSlice';
import { RootState } from '@/app/redux/store';
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostHeader } from '../Post';
import PostInput from '../PostInput';
import { XMarkIcon } from '@heroicons/react/24/outline';

function CommentsModal() {
  const open = useSelector((state:RootState) => state.modals.commentModalOpen);
  const dispatch = useDispatch()

  return (
    <>
      <Modal open={open} onClose={()=>dispatch(closeCommentModal())} className='flex justify-center items-center'>
        <div className='w-full w-full sm:w-[400px] sm:h-fit bg-white sm:rounded-xl outline-none relative'>
        <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer' onClick={()=>dispatch(closeCommentModal())}/>
          <div className="pt-5 pb-10 px-0 sm:px-5 flex flex-col">
            <PostHeader name="Guest" username="hulk" text="apple" replyTo="iammusa"/>
            <div className='mt-4'>
              <PostInput 
              insideModal={true}
              />
            </div>
            <div className='absolute w-0.5 h-32 bg-gray-300 left-[33px] sm:left-[53px] top-20 z-0'></div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CommentsModal
