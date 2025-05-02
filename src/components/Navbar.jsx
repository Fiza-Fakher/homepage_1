import React, { useState } from "react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <nav className=" fixed bg-white h-[90px] w-full flex border">
        {/* logo */}
        <div className="mt-5 ml-10">
          <a href="">
            <img src={logo} alt="" className="h-[44px] w-[45px]" />{" "}
          </a>
        </div>
        <div className="flex ml-[300px] gap-[10px]">
          <select name="" id="" value="" className="text-[#4A5579] cursor-pointer font-bold p-0 w-[125px]">
            <option value=""  disabled hidden>
              Job Seekers
            </option>
            <option value="vacancies" className="text-[#4A5579]">Job Vacancies</option>
            <option value="cv" className="text-[#4A5579]">CV Review Services</option>
            <option value="advice" className="text-[#4A5579]">Job Search Advice</option>
            <option value="learning"className="text-[#4A5579]">My Learning</option>
          </select>

          <select name="" id="" value="" className=" text-[#4A5579] cursor-pointer font-bold w-[80px]">
            <option value="" disabled hidden > 
              Carrer
            </option>
            <option value="">Carrer Development</option>
            <option value="">Life at Work</option>
            <option value="">Job Market News</option>
          </select>

          <select
            name=""id=""value="" className="cursor-pointer text-[#4A5579] font-bold w-[125px]">
            <option value="" disabled hidden >Employers</option>
            <option value="">Skills Assessments</option>
            <option value="">Employers Corner</option>
          </select>

          <select name="" value="" id="" className="cursor-pointer text-[#4A5579] font-bold w-[125px]">
            <option value="" disabled hidden >
              Help Center
            </option>
            <option value="">Frequently Asked Questions</option>
            <option value="">Contact</option>
          </select>
        </div>

        <div className="flex gap-[34px] mt-7 ml-[90px]">
          <p className="text-[#4A5579] font-semibold"><a href="">Log In</a></p>
          <p className="text-[#4A5579] font-semibold"><a href="">Sign Up</a></p>
        </div>

        <button className="w-[100px] h-[38px] cursor-pointer rounded-3xl text-white mt-6 ml-16 bg-[#141E30]">Post a Job</button>
      </nav>
    </>
  );
}

export default Navbar;
