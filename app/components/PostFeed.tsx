import React from 'react';
import Image from "next/image";
// import Logo from 

function PostFeed(){
  return (
    <div  className="flex-grow border border-black max-w-2xl">
      <div className="py-4 px-3 text-lg sm:text-xl stickt top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm">Home</div>
      <div className="flex">
        <Image src={'/company-logo.jpg'} width={100} height={48} alt="comapny-logo"/>
        <input className="border-1 w-[90%] m-2 p-2" type="text" placeholder="What's happening?" />
      </div>
      <section className="flex">
        <div>ss</div>
        <div>ss</div>
        <div>ssu</div>
        <div>ss n</div>
        <div>ss</div>
         <button className="rounded-full bg-[#F4AF01] w-[20] h-[30] p-2xl:block bg-[#F4AF01] w-[120px] h-[52px] rounded-full text-white font-medium corsor-pointer shadow-md mt-2 align-items:end" >Facebook</button>
      </section>
      <section>
          <div className="flex">
            <Image src={''} alt="profile-photo" />
            <p>Guest @guest0012</p>
            <span>a day ago</span>
            <p>ssadd</p>
          </div>
      </section>
      <section>
        <div className="flex my-[20]">
          <p className="m-3">ddk</p>
          <p className="m-3">dsfwe</p>
          <p className="m-3">wewe</p>
          <p className="m-3">wewe</p>
        </div>
      </section>
    
     </div>
  )
}

export default PostFeed;
