import React from 'react';
import Image from 'next/image'; 
import user01 from '../public/user-1.jpg'
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex justify-center items-center p-12 bg-gradient-to-r from-purple-200 to-white text-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-purple-500">EasyFlow</span>
        </h1>
        <p className="mt-4 text-xl">
          Your Trusted Partner in Secure and Convenient Online transfer <br/> in Africa.
        </p>
        <div className="flex justify-center items-center mt-6">
          <div className="flex -space-x-4">
            <Image src={user01} alt="User 1" width={40} height={30} className="rounded-full border-2 border-white" />
            <Image src={user01}  alt="User 2" width={40} height={30} className="rounded-full border-2 border-white" />
            <Image src={user01}  alt="User 3" width={40} height={30} className="rounded-full border-2 border-white" />
            <Image src={user01}  alt="User 4" width={40} height={30} className="rounded-full border-2 border-white" />
          </div>
          <span className="ml-4 text-gray-600">Trusted already by 1.2k+</span>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-4 py-2 text-lg text-purple-700 border-2 border-purple-700 rounded-md hover:bg-purple-600 hover:text-white hover:opacity-75">
            Learn more
          </button>
          <button className="flex items-center px-4 py-2 text-lg text-white bg-purple-500 rounded-md hover:bg-purple-600">
            Video Intro <MdArrowOutward className='ml-2' size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero