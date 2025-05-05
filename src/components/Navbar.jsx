import React, { useState } from "react";
import logo from "../images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);
  
  const handleNav = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <nav className="fixed bg-white h-[90px] w-full flex justify-between items-center shadow-lg px-5 md:px-10">
        {/* logo */}
        <div className="flex items-center">
          <a href="">
            <img src={logo} alt="Logo" className="h-[44px] w-[45px]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center z-20">
          <button onClick={handleNav} className="text-3xl text-[#4A5579]">
            {open ? <IoCloseSharp /> : <CiMenuFries />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
          <select name="" id="" defaultValue="" className="text-[#4A5579] cursor-pointer font-bold p-0 w-[125px]">
            <option value="" disabled hidden>
              Job Seekers
            </option>
            <option value="vacancies" className="text-[#4A5579]">Job Vacancies</option>
            <option value="cv" className="text-[#4A5579]">CV Review Services</option>
            <option value="advice" className="text-[#4A5579]">Job Search Advice</option>
            <option value="learning" className="text-[#4A5579]">My Learning</option>
          </select>

          <select name="" id="" defaultValue="" className="text-[#4A5579] cursor-pointer font-bold w-[80px]">
            <option value="" disabled hidden>
              Carrer
            </option>
            <option value="">Carrer Development</option>
            <option value="">Life at Work</option>
            <option value="">Job Market News</option>
          </select>

          <select name="" id="" defaultValue="" className="cursor-pointer text-[#4A5579] font-bold w-[125px]">
            <option value="" disabled hidden>
              Employers
            </option>
            <option value="">Skills Assessments</option>
            <option value="">Employers Corner</option>
          </select>

          <select name="" id="" defaultValue="" className="cursor-pointer text-[#4A5579] font-bold w-[125px]">
            <option value="" disabled hidden>
              Help Center
            </option>
            <option value="">Frequently Asked Questions</option>
            <option value="">Contact</option>
          </select>
        </div>

        {/* Login/Signup and Post Job Button - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <p className="text-[#4A5579] font-semibold">
            <a href="">Log In</a>
          </p>
          <p className="text-[#4A5579] font-semibold">
            <a href="">Sign Up</a>
          </p>
          <button className="w-[100px] h-[38px] cursor-pointer rounded-3xl text-white bg-[#141E30]">
            Post a Job
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`${
            open ? "left-0" : "left-[-100%]"
          } fixed top-0 w-full h-screen bg-white z-10 transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="pt-24 px-8 flex flex-col space-y-8">
            {/* Mobile dropdowns */}
            <div className="flex flex-col space-y-6">
              <select name="" id="" defaultValue="" className="text-[#4A5579] cursor-pointer font-bold p-2 w-full border rounded">
                <option value="" disabled hidden>
                  Job Seekers
                </option>
                <option value="vacancies">Job Vacancies</option>
                <option value="cv">CV Review Services</option>
                <option value="advice">Job Search Advice</option>
                <option value="learning">My Learning</option>
              </select>

              <select name="" id="" defaultValue="" className="text-[#4A5579] cursor-pointer font-bold p-2 w-full border rounded">
                <option value="" disabled hidden>
                  Carrer
                </option>
                <option value="">Carrer Development</option>
                <option value="">Life at Work</option>
                <option value="">Job Market News</option>
              </select>

              <select name="" id="" defaultValue="" className="text-[#4A5579] cursor-pointer font-bold p-2 w-full border rounded">
                <option value="" disabled hidden>
                  Employers
                </option>
                <option value="">Skills Assessments</option>
                <option value="">Employers Corner</option>
              </select>

              <select name="" id="" defaultValue="" className="text-[#4A5579] cursor-pointer font-bold p-2 w-full border rounded">
                <option value="" disabled hidden>
                  Help Center
                </option>
                <option value="">Frequently Asked Questions</option>
                <option value="">Contact</option>
              </select>
            </div>

            {/* Mobile Login/Signup */}
            <div className="flex flex-col space-y-4">
              <a href="" className="text-[#4A5579] font-semibold text-lg">
                Log In
              </a>
              <a href="" className="text-[#4A5579] font-semibold text-lg">
                Sign Up
              </a>
              <button className="w-full py-2 cursor-pointer rounded-3xl text-white bg-[#141E30]">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Add padding to prevent content from hiding under navbar */}
      <div className="h-[90px]"></div>
    </>
  );
}

export default Navbar;