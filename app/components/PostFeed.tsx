import React from 'react';
import PostInput from './PostInput'; 
import Post from './Post';

function PostFeed(){
  return (
    <div  className="flex-grow [max-w-2xl">
      <div className="py-4 px-3 text-lg sm:text-xl stickt top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm">Home</div>
     <PostInput/>
     <Post/>
     </div>
  )
}

export default PostFeed;
