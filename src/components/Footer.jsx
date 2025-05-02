import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className='bg-white text-gray-800 flex justify-around mt-[20px]  gap-[50px] h-[342px]'>
        
   <div className='mt-[50px]'>
    <h4 className='font-semibold text-lg mt-[10px]'><a href="">About</a></h4>
    <h4 className='font-semibold text-lg mt-[10px]'><a href="">CV Review Service</a></h4>
    <h4 className='font-semibold text-lg mt-[10px]'><a href="">Contact Us</a></h4>
   </div>

   <div className='mt-[50px]'>
    <h4 className='font-semibold text-lg mt-[10px]'><a href="">Privacy Policy</a></h4>
    <h4 className='font-semibold text-lg mt-[10px]'><a href="">Skills Assessments</a></h4>
   </div>

   <div className='mt-[50px]'>
    <h4 className='font-semibold text-lg mt-[10px]'><a href="">Terms</a></h4>
    <h4 className='font-semibold text-lg mt-[10px]'><a href="">FAQs</a></h4>
   </div>

   <div className='mt-[50px]'>
    <h5 className='font-semibold text-lg pl-[150px]'>Follow Us</h5>
    <div className='flex pl-[150px] pt-[5px]'>
    <div className='flex gap-4 text-2xl'>
  <FaFacebook className="text-blue-600" />
  <FaInstagram className="text-pink-500" />
  <FaLinkedin className="text-blue-700" /> 
  <FaSquareXTwitter className="text-black" />
  <FaYoutubeSquare className="text-red-600" />
</div>

    </div>
   </div>
      </footer>
      <hr className='text-gray-400'/>
      <p className='flex items-center justify-center mt-[2px]'>© 2025 Inno Job Simulation Platform. All rights reserved.</p>
    </>
  )
}

export default Footer
