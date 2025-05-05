import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className='bg-white text-gray-800 flex flex-col md:flex-row justify-around mt-4 md:mt-5 p-4 md:h-auto'>
        <div className='mt-4 md:mt-12'>
          <h4 className='font-semibold text-lg mt-2'><a href="">About</a></h4>
          <h4 className='font-semibold text-lg mt-2'><a href="">CV Review Service</a></h4>
          <h4 className='font-semibold text-lg mt-2'><a href="">Contact Us</a></h4>
        </div>

        <div className='mt-4 md:mt-12'>
          <h4 className='font-semibold text-lg mt-2'><a href="">Privacy Policy</a></h4>
          <h4 className='font-semibold text-lg mt-2'><a href="">Skills Assessments</a></h4>
        </div>

        <div className='mt-4 md:mt-12'>
          <h4 className='font-semibold text-lg mt-2'><a href="">Terms</a></h4>
          <h4 className='font-semibold text-lg mt-2'><a href="">FAQs</a></h4>
        </div>

        <div className='mt-4 md:mt-12'>
          <h5 className='font-semibold text-lg md:pl-2 lg:pl-16'>Follow Us</h5>
          <div className='flex md:pl-2 lg:pl-16 pt-1'>
            <div className='flex gap-4 text-xl md:text-2xl'>
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
      <p className='flex items-center justify-center mt-1 p-2 text-sm md:text-base'>© 2025 Inno Job Simulation Platform. All rights reserved.</p>
    </>
  )
}

export default Footer